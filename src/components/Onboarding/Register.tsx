import Image from "next/image";

export default function Register() {
  return (
    <div className="lg:grid grid-cols-2 bg-primary text-white lg:px-36 min-h-screen items-center pt-4 g:pt-0">
      {/* Illustration */}
      <div className="hidden lg:block">
        <Image
          src="/onboarding/signup.svg"
          alt="register"
          width={517}
          height={514}
        />
      </div>

      {/* Get started */}
      <div className="lg:w-[35rem] mx-auto lg:rounded-xl lg:bg-onboard-bg lg:border border-white p-5 border-opacity-25">
        <div>
          <h3 className="text-4xl">Get Started</h3>
          <p className="opacity-60 mt-2">
            Create an account to start your journey
          </p>
        </div>

        <form action="" className="mt-8">
          <div className="lg:flex gap-x-6">
            <div className="w-full">
              <label htmlFor="firstname" className="text-sm">
                First Name
              </label>
              <br />
              <input
                type="text"
                placeholder="First name"
                id="firstname"
                className="rounded-xl w-full px-4 py-2 bg-input mt-1 outline-none border border-white border-opacity-25"
              />
            </div>
            <div className="w-full mt-6 lg:mt-0">
              <label htmlFor="lastname" className="text-sm">
                Last Name
              </label>
              <br />
              <input
                type="text"
                placeholder="Last name"
                id="lastname"
                className="rounded-xl w-full px-4 py-2 bg-input mt-1 outline-none border border-white border-opacity-25"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <br />
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="rounded-xl px-4 py-2 bg-input mt-1 w-full outline-none border border-white border-opacity-25"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="phone" className="text-sm">
              Phone number
            </label>
            <br />
            <input
              type="tel"
              placeholder="+234"
              id="phone"
              className="rounded-xl px-4 py-2 bg-input mt-1 w-full outline-none border border-white border-opacity-25"
            />
          </div>

          <div className="lg:flex gap-x-6 mt-6">
            <div className="w-full">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <br />
              <input
                type="text"
                placeholder="First name"
                id="password"
                className="rounded-xl w-full px-4 py-2 bg-input mt-1 outline-none border border-white border-opacity-25"
              />
            </div>
            <div className="w-full mt-6 lg:mt-0">
              <label htmlFor="confirm" className="text-sm">
                Confirm Password
              </label>
              <br />
              <input
                type="text"
                placeholder="Last name"
                id="confirm"
                className="rounded-xl w-full px-4 py-2 bg-input mt-1 outline-none border border-white border-opacity-25"
              />
            </div>
          </div>

          <div className="max-w-[23rem] mx-auto text-center mt-10">
            <span className="opacity-60">
              By clicking continue, you accept Blinqpay&apos;s
            </span>
            <span> Terms of Service</span>
            <span className="opacity-60"> and </span>
            <span>Privacy Policy</span>.
          </div>

          <div className="space-y-4 mt-10">
            <div className="w-full">
              <button className="bg-button-primary rounded-3xl w-full py-3">
                Log In
              </button>
            </div>
            <div className="w-full">
              <button className="rounded-3xl w-full py-3 border border-white border-opacity-25">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
