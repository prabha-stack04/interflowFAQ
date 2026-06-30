export default function QuestionDetail() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <h1>Question Detail</h1>
        <p>View the question, answers, and leave your own response.</p>
      </div>
      <div className="card question-detail-card">
        <h2>How do I connect Next.js to the backend?</h2>
        <p className="body-text">I need help wiring up the Express API to the React frontend. I want to understand how to call the routes and manage authentication state.</p>
        <div className="meta-row">
          <span>Asked by Jane Doe</span>
          <span>3 answers</span>
        </div>
      </div>
      <div className="card answer-box">
        <h3>Write an answer</h3>
        <textarea placeholder="Share your response or suggestion" rows="5" />
        <button className="button primary">Post Answer</button>
      </div>
    </div>
  );
}
