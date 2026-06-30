export default function HelpPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Help & Support
      </h1>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdF5Ar4P_FF8g7eCkvbu6sqLoz9DbX5chtaixgRBH6ypVreVw/viewform?embedded=true"
        width="100%"
        height="900"
        className="rounded-xl border"
      />
    </div>
  );
}