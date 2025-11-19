import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome to ALX Project 2</h1>
        <p className="mt-4 text-lg">Your Next.js project is running successfully!</p>
      </main>
    </div>
  );
}
