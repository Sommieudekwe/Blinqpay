export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div>This are other components</div>
      {children}
    </section>
  );
}
