import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import TabSignUp from "@/components/LandingPage/SignUp";
import Dashboard from "@/components/LandingPage/Dashboard";
import Payment from "@/components/LandingPage/Payment";
import PeopleCard from "@/components/LandingPage/Card";
import FAQ from "@/components/LandingPage/FAQ";
import Footer from "@/components/LandingPage/Footer";

export default function Home() {
  return (
    <div className="relative px-8">
      {/* Hero */}
      <div className="">
        <div className="hero relative px-16">
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
            <nav className="flex items-center justify-between py-6">
              <div className="text-3xl font-bold hidden lg:block">BlinqPay</div>
              <div>
                <ul className="flex space-x-12">
                  <li>Home</li>
                  <li>Solutions</li>
                  <li>Customers</li>
                  <li>Pricing</li>
                  <li>Docs</li>
                </ul>
              </div>
              <div className="space-x-5">
                <Button variant="primary" className="px-16">
                  Login
                </Button>
                <Button variant="landing-outline">Sign up</Button>
              </div>
            </nav>

            {/* texts */}
            <div className="flex items-center justify-between py-32">
              <Image
                src="/landing/blue.svg"
                alt="blue"
                width={852}
                height={800}
                className="absolute left-0 top-0"
              />
              <div className="max-w-2xl z-20">
                <h1 className="text-4xl md:text-7xl font-bold ">
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
                />
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="flex justify-between items-center px-16">
          <Image
            src="/landing/partners/binance.svg"
            alt="partner"
            width={176}
            height={38}
          />
          <Image
            src="/landing/partners/paxful.svg"
            alt="partner"
            width={176}
            height={38}
          />
          <Image
            src="/landing/partners/kucoin.svg"
            alt="partner"
            width={176}
            height={38}
          />
          <Image
            src="/landing/partners/remitano.svg"
            alt="partner"
            width={176}
            height={38}
          />
          <Image
            src="/landing/partners/bybit.svg"
            alt="partner"
            width={176}
            height={38}
          />
          <Image
            src="/landing/partners/kuda.svg"
            alt="partner"
            width={176}
            height={38}
          />
          <Image
            src="/landing/partners/providus.svg"
            alt="partner"
            width={176}
            height={38}
          />
        </div>

        {/* How to use Blinqpay */}
        <div className="mt-28">
          <h1 className="text-3xl font-bold text-opacity-20">
            How to use BlinqPay in these three steps?
          </h1>

          <Tabs defaultValue="signup" className="w-full mt-9">
            <TabsList className="mb-[3.75rem]">
              <TabsTrigger value="signup">Sign up</TabsTrigger>
              <TabsTrigger value="dashboard">User Dashboard</TabsTrigger>
              <TabsTrigger value="payment">Payment Approval</TabsTrigger>
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
          <h1 className="text-3xl font-bold">What people say about us</h1>
          <div className="mt-10 grid grid-cols-3 gap-5">
            <PeopleCard
              name="Somto Udekwe"
              content="Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor pur"
              description="Founder of Blinqpay"
            />
            <PeopleCard
              name="Somto Udekwe"
              content="Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor pur"
              description="Founder of Blinqpay"
            />
            <PeopleCard
              name="Somto Udekwe"
              content="Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor pur"
              description="Founder of Blinqpay"
            />
            <PeopleCard
              name="Somto Udekwe"
              content="Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor pur"
              description="Founder of Blinqpay"
            />
            <PeopleCard
              name="Somto Udekwe"
              content="Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor pur"
              description="Founder of Blinqpay"
            />
            <PeopleCard
              name="Somto Udekwe"
              content="Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor pur"
              description="Founder of Blinqpay"
            />
            <PeopleCard
              name="Somto Udekwe"
              content="Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor pur"
              description="Founder of Blinqpay"
            />
            <PeopleCard
              name="Somto Udekwe"
              content="Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor pur"
              description="Founder of Blinqpay"
            />
            <PeopleCard
              name="Somto Udekwe"
              content="Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor pur"
              description="Founder of Blinqpay"
            />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-28">
          <h1 className="text-3xl font-bold">FAG</h1>
          <div className="mt-10">
            <FAQ />
          </div>
        </div>

        {/* Unkwown text */}
        <div className="mt-40 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold">
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
