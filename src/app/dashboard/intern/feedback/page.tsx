export default function FeedbackPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Feedback
      </h1>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe-m-A-AqSQ0UdjnqOxfg8He2bg-lclSUv3_UNqi-P5RQFdTA/viewform?embedded=true"
        width="100%"
        height="900"
        className="rounded-xl border"
      />
    </div>
  );
}