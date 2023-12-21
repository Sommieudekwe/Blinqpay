import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Dashboard/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen flex bg-primary-dashboard text-white px-9">
      <Sidebar />

      <div className="w-full">
        <Header />
        <main className="bg-primary">{children}</main>
      </div>
    </section>
  );
}
