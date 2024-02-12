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
    question: "What is your name?",
    answer: "My name is Marvelous",
    value: "item-1",
  },

  {
    question: "What is your name?",
    answer: "My name is Marvelous",
    value: "item-2",
  },

  {
    question: "What is your name?",
    answer: "My name is Marvelous",
    value: "item-3",
  },

  {
    question: "What is your name?",
    answer: "My name is Marvelous",
    value: "item-4",
  },

  {
    question: "What is your name?",
    answer: "My name is Marvelous",
    value: "item-5",
  },

  {
    question: "What is your name?",
    answer: "My name is Marvelous",
    value: "item-6",
  },

  {
    question: "What is your name?",
    answer: "My name is Marvelous",
    value: "item-7",
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
