// アプリケーション全体で認証状態を管理するためのコンテキストです。
// ユーザーの認証情報を保持し、他のコンポーネントがこの情報にアクセスできるようにします。

import {
  createContext,
  useContext,
  createSignal,
  createEffect,
  JSX,
} from 'solid-js';
import { supabase } from '../config/supabase';
import { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: () => User | null;
  setUser: (user: User | null) => void;
  isLoading: () => boolean;
  checkUserProfile: (userId: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType>();

export function AuthProvider(props: { children: JSX.Element }) {
  const [user, setUser] = createSignal<User | null>(null);
  const [isLoading, setIsLoading] = createSignal(true);

  createEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  });

  const checkUserProfile = async (userId: string): Promise<boolean> => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error checking user profile:', error);
      return false;
    }

    return !!data;
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLoading, checkUserProfile }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
