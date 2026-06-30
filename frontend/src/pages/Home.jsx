import QuestionCard from '../components/QuestionCard';

const sampleQuestions = [
  {
    id: '1',
    title: 'How do I connect Next.js to the backend?',
    excerpt: 'I need help wiring up the Express API to the React frontend.',
    author: 'Jane Doe',
    tags: ['nextjs', 'api', 'backend']
  },
  {
    id: '2',
    title: 'What is the best way to manage auth state?',
    excerpt: 'I want to keep the user logged in and handle protected routes.',
    author: 'Aarav Mehta',
    tags: ['auth', 'react', 'jwt']
  }
];

export default function Home() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <h1>InternFlow AI</h1>
        <p>Ask questions, view answers, and collaborate with your internship team.</p>
      </div>
      <div className="question-grid">
        {sampleQuestions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}
