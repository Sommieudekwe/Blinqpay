import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="lg:grid grid-cols-2 gap-x-12 xl:gap-x-20 bg-primary text-white lg:px-24 xl:px-36 min-h-screen items-center pt-12 lg:pt-0">
      {/* Illustration */}
      <div className="hidden lg:block">
        <Image
          src="/onboarding/login.svg"
          alt="register"
          width={517}
          height={514}
        />
      </div>

      {/* Get started */}
      <div className="w-full lg:max-w-[35rem] mx-auto lg:rounded-xl lg:bg-onboard-bg lg:border border-white p-5 border-opacity-25">
        <div>
          <h3 className="text-4xl font-bold">Login</h3>
          <p className="opacity-60 mt-2">
            Create an account to start your journey
          </p>
        </div>

        <form action="" className="mt-8">
          <div className="mt-6">
            <label htmlFor="email" className="text-sm">
              Email
            </label>{" "}
            <br />
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="rounded-xl px-4 py-2 bg-input mt-1 w-full outline-none border border-white border-opacity-25"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="password" className="text-sm">
              Password
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="First name"
              id="password"
              className="rounded-xl px-4 py-2 bg-input mt-1 w-full outline-none border border-white border-opacity-25"
            />
          </div>

          <div className="mt-10 text-center">
            <div className="w-ful">
              <Link
                href="/login"
                className="bg-button-primary block rounded-3xl w-full py-3"
              >
                Log In
              </Link>
            </div>
            <div className="w-full mt-4">
              <Link
                href=""
                className="rounded-3xl block w-full py-3 border border-white border-opacity-25"
              >
                Forget Password
              </Link>
            </div>

            <div className="mt-12 flex justify-center gap-x-1">
              <span className="text-center block opacity-25">
                Don&apos;t have an account?
              </span>
              <Link
                href="/signup"
                className="text-[#6E5BFF] block text-center opacity-100"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
