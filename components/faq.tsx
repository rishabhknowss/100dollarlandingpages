import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What communication channels do you use for the MVP development process?",
      answer: "We primarily use Discord for real-time communication and project updates. We also offer WhatsApp as an alternative for quick check-ins and urgent matters. Our goal is to maintain clear and efficient communication throughout the development process."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods to accommodate our clients' preferences. These include bank transfers, and PayPal. Yes! we accept cryptocurrency payments too"
    },
    {
      question: "How long does it typically take to develop an MVP?",
      answer: "The development time for an MVP can vary depending on the complexity and features required. On average, our MVP development process takes 4-8 weeks. We'll provide a more accurate timeline after our initial consultation and requirements gathering."
    },
    {
      question: "Do you offer ongoing support after the MVP is launched?",
      answer: "Yes, we offer ongoing support and maintenance packages. After your MVP is launched, we can provide bug fixes, minor updates, and technical support. For major feature additions or significant changes, we'll discuss new project terms."
    },
    {
      question: "Can you help with deploying the MVP to production?",
      answer: "Our MVP package includes deployment to a production environment. We typically use cloud platforms like AWS, Google Cloud, or Vercel for deployment, ensuring your MVP is scalable and performant from day one."
    },
    {
      question: "What if I need changes during the development process?",
      answer: "We understand that requirements can evolve. We follow an agile development process, which allows for some flexibility. Minor changes can often be accommodated within the current sprint. For significant changes, we'll discuss the impact on the timeline and budget."
    },
    {
      question: "Do you sign an NDA (Non-Disclosure Agreement)?",
      answer: "Yes, we're happy to sign an NDA before discussing your project details. We understand the importance of confidentiality when it comes to innovative ideas and business strategies."
    }
  ]
  
  export default function FAQ() {
    return (
      <section className="w-full py-12 sm:py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion 
            type="single" 
            collapsible 
            className="w-full max-w-3xl mx-auto space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200"
              >
                <AccordionTrigger className="text-left px-4 py-4 hover:no-underline hover:bg-gray-50 rounded-t-lg">
                  <span className="text-base sm:text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 text-sm sm:text-base text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }