import { createSignal, Show } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { supabase } from '../../../config/supabase';
import { useAuth } from '../../../context/AuthContext';
import { Button } from '@kobalte/core/button';
import { TextField } from '@kobalte/core/text-field';
import { Alert } from '@kobalte/core/alert';
import {
  authContainer,
  authCard,
  authTitle,
  authForm,
  authButton,
  authToggle,
  authToggleLink,
} from './AuthPage.css';

function AuthPage() {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [isLogin, setIsLogin] = createSignal(true);
  const [message, setMessage] = createSignal('');
  const [isLoading, setIsLoading] = createSignal(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleAuth = async (e: Event) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      if (isLogin()) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email(),
          password: password(),
        });

        if (error) throw error;
        setUser(data.user);
        navigate('/dashboard');
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: email(),
          password: password(),
        });

        if (error) throw error;
        setUser(data.user);
        navigate('/setup');
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('An unknown error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setMessage('');

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });

      if (error) throw error;
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('An unknown error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div class={authContainer}>
      <div class={authCard}>
        <h1 class={authTitle}>{isLogin() ? 'Login' : 'Register'}</h1>
        <form onSubmit={handleAuth} class={authForm}>
          <TextField>
            <TextField.Input
              type="email"
              placeholder="Email"
              value={email()}
              onInput={(e) => setEmail(e.currentTarget.value)}
              required
            />
          </TextField>
          <TextField>
            <TextField.Input
              type="password"
              placeholder="Password"
              value={password()}
              onInput={(e) => setPassword(e.currentTarget.value)}
              required
            />
          </TextField>
          <Button type="submit" disabled={isLoading()} class={authButton}>
            {isLoading() ? 'Loading...' : isLogin() ? 'Login' : 'Register'}
          </Button>
        </form>
        <Button
          onClick={handleGoogleSignIn}
          disabled={isLoading()}
          class={authButton}
        >
          Sign in with Google
        </Button>
        <Show when={message()}>
          <Alert>{message()}</Alert>
        </Show>
        <p class={authToggle}>
          <a
            href="#"
            onClick={() => setIsLogin(!isLogin())}
            class={authToggleLink}
          >
            {isLogin()
              ? 'Need an account? Register'
              : 'Already have an account? Login'}
          </a>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
