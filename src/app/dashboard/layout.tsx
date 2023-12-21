import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Dashboard/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-primary-dashboard text-white px-9">
      <Header />

      <div className="flex">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </section>
  );
}
