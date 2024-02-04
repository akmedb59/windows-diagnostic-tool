import React from "react";
import Head from "next/head";
import FaqAccordian from "./faqAccordian";

const tempQuestions = [
  {
    id: 1,
    show: true,
    question: "How can I download the free coding templates?",
    answer:
      "To download the free coding templates, simply visit our website and browse through the available templates. Click on the template you're interested in, and you'll find a download link provided. No account registration is required for accessing free templates.",
  },
  {
    id: 2,
    show: false,
    question: "How do I register to sell my templates?",
    answer:
      "If you wish to sell your coding templates on our website, you need to create an account. Click on the 'Register' button on the website's homepage, fill in the required details, and complete the registration process. Once registered, you can upload and list your templates for sale.",
  },
  {
    id: 3,
    show: false,
    question: "What is the fee structure for selling templates?",
    answer:
      "For each template sale, we charge a 20% commission fee (This price may vary in future). The remaining 80% of the sale amount is provided to the site owner. This fee helps us maintain and enhance the platform, ensuring a seamless experience for both buyers and sellers.",
  },
  {
    id: 4,
    show: false,
    question: "How are the templates reviewed before publishing?",
    answer:
      "To ensure the quality and integrity of the templates available on our platform, we review each template before publishing it for sale. Our team of experts examines the code to ensure it meets our standards and is free from any vulnerabilities or malicious code.",
  },
];
const Faq = () => {
  return (
    <>
      <div className="pb-10">
        <div className="text-center text-xl font-semibold text-white">
          💡 Suggestion Board
        </div>
        <p className="text-center text-sm text-gray-200 px-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque
          totam aperiam, deserunt sapiente obcaecati quia ea fugiat magni
          voluptates voluptatibus. Dolores, nisi. Quaerat aliquid eos nobis
          quidem omnis voluptate?
        </p>
      </div>

      <FaqAccordian questionList={tempQuestions} />
    </>
  );
};

export default Faq;
