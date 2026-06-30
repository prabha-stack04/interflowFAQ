import { Link } from 'react-router-dom';

export default function QuestionCard({ question }) {
  return (
    <div className="card question-card">
      <Link to={`/question/${question.id}`} className="question-title">{question.title}</Link>
      <p className="question-excerpt">{question.excerpt}</p>
      <div className="question-meta">
        <span>{question.author}</span>
        <div className="tag-list">
          {question.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
