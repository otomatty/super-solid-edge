import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { supabase } from "../../../config/supabase";
import { useAuth } from "../../../context/AuthContext";

function LoginPage() {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [message, setMessage] = createSignal("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email(),
      password: password(),
    });

    if (error) {
      setMessage(error.message);
    } else {
      setUser(data.user);
      navigate("/dashboard");
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email()}
        onInput={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password()}
        onInput={(e) => setPassword(e.currentTarget.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      <p>{message()}</p>
    </div>
  );
}

export default LoginPage;
