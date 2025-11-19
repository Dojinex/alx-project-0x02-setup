import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <p className="mt-4 text-lg">Welcome to the Home page!</p>
      </main>
    </div>
  );
}
