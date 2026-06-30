export default function AnswerBox() {
  return (
    <div className="card answer-box">
      <h3>Post an answer</h3>
      <textarea placeholder="Write your answer here" rows="5" />
      <button className="button primary">Submit Answer</button>
    </div>
  );
}
