import Header from "../components/layout/Header";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p className="mt-4 text-lg">This is the About page of your Next.js project.</p>
      </main>
    </div>
  );
}
