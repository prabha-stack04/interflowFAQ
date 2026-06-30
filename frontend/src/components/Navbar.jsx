import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">InternFlow AI</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/ask">Ask Question</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
