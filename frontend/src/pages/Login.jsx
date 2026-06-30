import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-heading">
        <h1>Login</h1>
        <p>Sign in to access your internship dashboard.</p>
      </div>
      <form className="card form-card" onSubmit={(e) => { e.preventDefault(); navigate('/'); }}>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Enter your password" />
        </label>
        <button type="submit" className="button primary">Sign In</button>
      </form>
    </div>
  );
}
