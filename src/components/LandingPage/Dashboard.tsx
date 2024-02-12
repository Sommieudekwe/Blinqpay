import Image from "next/image";
import { Button } from "../ui/button";

export default function Dashboard() {
  return (
    <div className="border border-white border-opacity-20 rounded-[55px] w-full p-28 flex justify-between items-center">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold">
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero.
        </h1>
        <p className="text-lg mt-6">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>

        <Button variant="primary" className="mt-10 w-60">
          Learn More
        </Button>
      </div>

      <div>
        <Image
          src="/landing/dashboard.svg"
          alt="signup"
          width={360}
          height={360}
        />
      </div>
    </div>
  );
}
