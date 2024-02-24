import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import TabSignUp from "@/components/LandingPage/SignUp";
import Dashboard from "@/components/LandingPage/Dashboard";
import Payment from "@/components/LandingPage/Payment";
import PeopleCard from "@/components/LandingPage/Card";
import FAQ from "@/components/LandingPage/FAQ";
import Footer from "@/components/LandingPage/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative px-4 md:px-8 overflow-hidden">
      <div className="">
        {/* Hero */}

        <div className="hero relative px-4 md:px-8 lg:px-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/landing/gradient.png"
              alt="gradient"
              layout="fill"
              // objectFit="cover"
              className="z-0"
            />
          </div>
          <div className="z-10">
            {/* navbar */}
            <nav className="flex items-center justify-between py-6 relative z-50">
              <div className="text-xl md:text-3xl font-bold">BlinqPay</div>
              {/* <div>
                <ul className="flex space-x-12">
                  <li>Home</li>
                  <li>Solutions</li>
                  <li>Customers</li>
                  <li>Pricing</li>
                  <li>Docs</li>
                </ul>
              </div> */}
              <div className="space-x-3 md:space-x-5">
                <Link
                  href="/auth"
                  className="px-8 md:px-16 cursor-pointer bg-[#4A33FB] py-2 md:py-3 rounded-[30px] hover:bg-opacity-75 transition-all ease-in-out duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="py-2 md:py-3 rounded-[30px] hover:opacity-75 transition-all ease-in-out duration-200"
                >
                  Sign up
                </Link>
              </div>
            </nav>

            {/* texts */}
            <div className="flex flex-col md:flex-row items-center justify-between py-16 md:pt-24 lg:py-32">
              <Image
                src="/landing/blue.svg"
                alt="blue"
                width={852}
                height={800}
                className="absolute left-0 top-0"
              />
              <div className="max-w-2xl z-20">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold ">
                  Bridging the gap between crypto and fiat economies
                </h1>
                <p className="mt-6">
                  Blinqpay provides an infrastructure for crypto vendors across
                  different exchanges and never needing to worry about manually
                  handling crypto payments to your customers.
                </p>
              </div>

              <div className="lg:mr-24">
                <Image
                  src="/landing/hero.svg"
                  alt="hero.svg"
                  width={458}
                  height={403}
                  className="hidden md:block"
                />
                <Image
                  src="/landing/hero.svg"
                  alt="hero.svg"
                  width={308}
                  height={253}
                  className="block md:hidden mt-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="flex">
          {/* Original */}
          <div className="flex items-center animate-marquee font-black font-display gap-4 relative">
            <div>
              <img
                src="/partners/binance.svg"
                alt="partner"
                className="w-md:w-44 md:h-28"
              />
            </div>
            <div className="relative">
              <img
                src="partners/paxful.svg"
                alt="partner"
                className="md:w-44 md:h-28"
              />
            </div>

            <div className="relative">
              <img
                src="/partners/kucoin.svg"
                alt="partner"
                className="md:w-44 md:h-28"
              />
            </div>
            <div className="relative">
              <img
                src="/partners/remitano.svg"
                alt="partner"
                className="md:w-44 md:h-28"
              />
            </div>

            <div>
              <img
                src="/partners/bybit.svg"
                alt="partner"
                className="md:w-44 md:h-28"
              />
            </div>

            <div>
              <img
                src="/partners/kuda-bank.svg"
                alt="partner"
                className="md:w-44 md:h-28"
              />
            </div>

            <div>
              <img
                src="/partners/providus.svg"
                alt="partner"
                className="md:w-44 md:h-28"
              />
            </div>
          </div>
          {/* Duplicate */}

          <div className="flex items-center animate-marquee2 font-black font-display gap-4 absolute tracking-widest uppercase whitespace-nowrap">
            <div>
              <img
                src="/partners/binance.svg"
                alt="partner"
                className="md:w-44 md:h-28"
              />
            </div>
            <div className="relative">
              <img
                src="partners/paxful.svg"
                alt="partner"
                className="md:w-44 md:h-28"
              />
            </div>

            <div className="relative">
              <img
                src="/partners/kucoin.svg"
                alt="partner"
                className="md:w-44 md:h-28"
              />
            </div>
            <div className="relative">
              <img
                src="/partners/remitano.svg"
                alt="partner"
                className="md:w-44 md:h-28"
              />
            </div>

            <div>
              <img
                src="/partners/bybit.svg"
                alt="partner"
                className="md:w-44 md:h-28"
              />
            </div>

            <div>
              <img
                src="/partners/kuda-bank.svg"
                alt="partner"
                className="md:w-44 md:h-28"
              />
            </div>

            <div>
              <img
                src="/partners/providus.svg"
                alt="partner"
                className="md:w-44 md:h-28"
              />
            </div>
          </div>
        </div>

        {/* How to use Blinqpay */}
        <div className="mt-28">
          <h1 className="text-2xl md:text-3xl font-bold text-opacity-20">
            How to use BlinqPay in these three steps?
          </h1>

          <Tabs defaultValue="signup" className="w-full mt-9">
            <TabsList className="mb-[3.75rem]">
              <TabsTrigger value="signup">Sign up</TabsTrigger>
              <TabsTrigger value="dashboard">Connect</TabsTrigger>
              <TabsTrigger value="payment">Payouts</TabsTrigger>
            </TabsList>

            <TabsContent value="signup">
              <TabSignUp />
            </TabsContent>
            <TabsContent value="dashboard">
              <Dashboard />
            </TabsContent>
            <TabsContent value="payment">
              <Payment />
            </TabsContent>
          </Tabs>
        </div>

        {/* Testimonial */}
        <div className="mt-28">
          <h1 className="text-2xl md:text-3xl font-bold">
            What people say about us
          </h1>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <PeopleCard
              name="Omoshalawe"
              content="I love the page responsivess and user interface design. It's just a cool app to use. As for the registration, it's just fast and I was happyy I could start making payments easily within 10mins."
              description="Founder of Blinqpay"
            />
            <PeopleCard
              name="Yakubu"
              content="I love how fast the customer service representative was. She was too polite and had good knowledge of everything. With her help, I was able to connect my exchanges within minutes."
              description="Founder of Blinqpay"
            />
            <PeopleCard
              name="Okechukwu"
              content="The feature whereby you can connect to more than one bank is simply amazing. Everything about the app is nothing short of amazing. Bad network cant stop me from trading."
              description="Founder of Blinqpay"
            />
            <PeopleCard
              name="Mohammed"
              content="My favorite feature is the fact that you can use dark or light mode. I appreciate this feature because light sensivity can be an issue when you stay on the computer for too long."
              description="Founder of Blinqpay"
            />
            <PeopleCard
              name="Chukwuemeka"
              content="This appp is a 5 star app. They practically raise the bnar too high. Now I can exploit the merchant space on different exchanges. Nice one guys."
              description="Founder of Blinqpay"
            />
            <PeopleCard
              name="Kola"
              content="The partnership feature was a breath of fresh air. It's wonderful to see a company who is all about growth for both customers and themselves. I am happy to be among your first set of partners."
              description="Founder of Blinqpay"
            />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-28">
          <h1 className="text-2xl md:text-3xl font-bold">FAQ</h1>
          <div className="mt-10">
            <FAQ />
          </div>
        </div>

        {/* Unkwown text */}
        <div className="mt-40 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero.
          </h1>

          <p className="text-lg mt-6">
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu
          </p>

          <div className="space-x-4 mt-16">
            <Button variant="primary" className="py-6 px-6">
              Request a demo
            </Button>
            <Button variant="landing-outline">Try it for free</Button>
          </div>
        </div>

        {/* Footer */}

        <div className="relative">
          <div className="absolute inset-0">
            <Image
              src="/landing/footerGradient.svg"
              alt="footer"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
          </div>

          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
