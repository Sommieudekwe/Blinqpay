import Header from "@/components/Dashboard/Header";
import Sidebar from "@/components/Dashboard/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen flex bg-primary-dashboard text-white lg:pl-9">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="w-full max-h-screen overflow-y-scroll">
        <Header />
        <main className=" w-full h-full px-[4.5rem] pt-7 hidden lg:block bg-primary">
          {children}
        </main>
      </div>
    </section>
  );
}
