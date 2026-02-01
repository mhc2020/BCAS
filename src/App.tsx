import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AppRouter from "./routes/AppRouter";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-white text-slate-900">
      <Navbar />
      <main className="flex-1 w-full">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}
