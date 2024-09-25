// アプリケーション全体で認証状態を管理するためのコンテキストです。
// ユーザーの認証情報を保持し、他のコンポーネントがこの情報にアクセスできるようにします。

import { createContext, useContext, createSignal } from "solid-js";
import { supabase } from "../config/supabase";
import { Session, User } from "@supabase/supabase-js";

interface AuthContextType {
  user: () => User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider(props: any) {
  const [user, setUser] = createSignal<User | null>(null);

  supabase.auth.onAuthStateChange((_event, session: Session | null) => {
    setUser(session?.user || null);
  });

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
