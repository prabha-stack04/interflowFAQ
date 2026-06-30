export default function AskQuestion() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <h1>Ask a Question</h1>
        <p>Submit your question so mentors and peers can respond.</p>
      </div>
      <form className="card form-card">
        <label>
          Question Title
          <input type="text" placeholder="Enter a clear question title" />
        </label>
        <label>
          Details
          <textarea placeholder="Describe the issue or topic in detail" rows="6" />
        </label>
        <label>
          Tags
          <input type="text" placeholder="e.g. react, node, authentication" />
        </label>
        <button type="submit" className="button primary">Submit Question</button>
      </form>
    </div>
  );
}
