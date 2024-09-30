import { createSignal, createEffect, Show } from 'solid-js';
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
  loadingOverlay,
} from './AuthPage.css';
import { OAuthResponse } from '@supabase/supabase-js';

function AuthPage() {
  const navigate = useNavigate();
  const { user, setUser, isLoading: authLoading, checkUserProfile } = useAuth();

  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [isLogin, setIsLogin] = createSignal(true);
  const [message, setMessage] = createSignal('');
  const [isSubmitting, setIsSubmitting] = createSignal(false);

  createEffect(() => {
    if (!authLoading()) {
      const currentUser = user();
      if (currentUser) {
        checkUserProfile(currentUser.id).then((hasProfile) => {
          if (hasProfile) {
            navigate('/dashboard');
          } else {
            navigate('/setup');
          }
        });
      }
    }
  });

  const handleAuth = async (e: Event) => {
    e.preventDefault();
    setIsSubmitting(true);
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
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    setMessage('');

    try {
      const { data, error }: OAuthResponse =
        await supabase.auth.signInWithOAuth({
          provider: 'google',
        });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No URL returned from OAuth sign in');
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('An unknown error occurred');
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div class={authContainer}>
      <Show when={authLoading()}>
        <div class={loadingOverlay}>
          <div>Loading...</div>
        </div>
      </Show>
      <Show when={!authLoading()}>
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
            <Button type="submit" disabled={isSubmitting()} class={authButton}>
              {isSubmitting() ? 'Loading...' : isLogin() ? 'Login' : 'Register'}
            </Button>
          </form>
          <Button
            onClick={handleGoogleSignIn}
            disabled={isSubmitting()}
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
      </Show>
    </div>
  );
}

export default AuthPage;
