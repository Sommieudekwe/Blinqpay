import Header from "@/components/Dashboard/Header";
import Sidebar from "@/components/Dashboard/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen flex bg-primary-dashboard text-white pl-9">
      <Sidebar />

      <div className="w-full max-h-screen overflow-y-scroll bg-primary">
        <Header />
        <main className=" w-full h-full px-[4.5rem] pt-7">{children}</main>
      </div>
    </section>
  );
}
