import { A } from "@solidjs/router";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Super Solid Edge</h1>
      <p>
        This is a full-stack web application template using Solid.js, Supabase,
        and Cloudflare Workers (Hono).
      </p>
      <p>You can register and log in to access more features.</p>
      <div>
        <A href="/register">Register</A>
        <A href="/login">Login</A>
      </div>
    </div>
  );
}

export default HomePage;
