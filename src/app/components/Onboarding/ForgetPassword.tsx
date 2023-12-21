export default function ForgetPassword() {
  return (
    <main className="bg-primary text-white p-10 w-[35rem]">
      <div>
        <h3 className="text-4xl">Find your BlinqPag account</h3>
        <p className="mt-2 opacity-60">
          Enter the email, phone number, or username associated with your
          account to change your password.
        </p>
      </div>

      <input
        type="text"
        placeholder="Email or Phone Number"
        className="bg-input rounded-xl px-4 py-2 outline-none w-full border mt-12 border-white border-opacity-25"
      />

      <div>
        <button className="bg-button-primary w-full rounded-3xl mt-28 py-3">
          Next
        </button>
      </div>
    </main>
  );
}
