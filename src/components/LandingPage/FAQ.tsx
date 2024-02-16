import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface QuestionProps {
  question: string;
  answer: string;
  value: string;
}

const questions: QuestionProps[] = [
  {
    question: "How long does it take to open an account?",
    answer: "Creating an account can be completed within 1 minutes.",
    value: "item-1",
  },

  {
    question: "Do I need kyc to use blinq?",
    answer: "No, all our partners have conducted due diligence on you.",
    value: "item-2",
  },

  {
    question: "What are the fees?",
    answer:
      "We have various methods of payments to suit different styles of trade , volume and intensity we offer subscription form of payment which can be divided into daily, weekly and monthy. You have unlimited trade during the duration of your subscription (recommended) we also offer pay as you trade whereby your trades are charged per the transaction you make.",
    value: "item-3",
  },

  {
    question: "What is blinq's affiliate commission?",
    answer:
      "earn 15% lifetime payment on every referral you make. For each deposit your referral makes to service his trades. You gain 15% in revenue. Become part of the company by telling your friends about us.",
    value: "item-4",
  },

  {
    question: "can blinqpay be considered a trustworthy company?",
    answer:
      "Yes, blinqpay can be considered a trustworthy company. It is registered and has every certification to provide financial services. It's also affiliated with a lot of crypto and financial firms both locally and internationally.",
    value: "item-5",
  },

  {
    question: "Who can use blinqpay?",
    answer:
      "Blinqpay is a software which helps process payment after a crypto transaction from vendors to there customer. Once connected to your favorite trading exchange. It helps you make automated payments to your customers within milliseconds.",
    value: "item-6",
  },

  {
    question: "Who is eligible to join blinqpay?",
    answer:
      "Originally developed for merchants who trade daily but now it has been advanced for people who just wants to make crypto payments",
    value: "item-7",
  },

  {
    question: "Who is the C.E.O of blinqpay?",
    answer:
      "the sole C.E.O of the company with a remarkable record in business ENGR Ukaegbu Ferdinand is a major shareholder across different industries ranging from hospitality to tech. A crypto merchant who understands the challenges faced by merchants.",
    value: "item-8",
  },

  {
    question: "Blinqpay AIM?",
    answer:
      "Our aim is to facilitate payments in the sector providing seamless payments and making work easy for everyone who is involved in crypto trading.",
    value: "item-9",
  },

  {
    question: "Must I be a verified merchant to use blinqpay?",
    answer: "No, unverified merchants can use it to process payment",
    value: "item-10",
  },

  {
    question: "How safe is it?",
    answer:
      "Blinqpay is very safe space where the protection of your personal data is our top priority. With high rate of technology. We opt for maximum security including firewalls, intrusion detection system, intrusion prevention system, virtual private network, and encryption software.",
    value: "item-11",
  },

  {
    question: "Who are blinqpay partners?",
    answer: "Binance, Paxful, Noones, Remitano, Bybit, Kuda, Kucoin, Providus.",
    value: "item-12",
  },

  {
    question: "What are blinqpay services?",
    answer: "Payouts, Affiliate program, otc",
    value: "item-13",
  },

  {
    question: "How many banks can i connect?",
    answer: "Kuda, Blochq, Moniepoint, Providus",
    value: "item-14",
  },
];

export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {questions.map((q, index) => (
        <AccordionItem
          value={q.value}
          key={index}
          className="bg-[#4A33FB17] rounded-xl px-4 mb-6"
        >
          <AccordionTrigger>{q.question}</AccordionTrigger>
          <AccordionContent>{q.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
