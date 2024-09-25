import { useAuth } from "../../../context/AuthContext";

function SetupPage() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Setup</h1>
      <p>Let's get started, {user()?.email}!</p>
    </div>
  );
}

export default SetupPage;
