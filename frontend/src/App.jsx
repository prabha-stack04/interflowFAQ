import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AskQuestion from './pages/AskQuestion';
import QuestionDetail from './pages/QuestionDetail';
import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navbar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ask" element={<AskQuestion />} />
            <Route path="/question/:id" element={<QuestionDetail />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
