
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does the bidding process work?",
      answer: "Our bidding process is straightforward. You can place bids during live auctions or submit maximum bids in advance. During live auctions, you'll see real-time updates and can increase your bid incrementally. All bids are binding commitments to purchase."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept wire transfers, certified checks, and financing through approved partners. A deposit is required to participate in bidding, and full payment is due within 7 days of winning an auction."
    },
    {
      question: "How do I register to bid?",
      answer: "Registration is free and takes just a few minutes. You'll need to provide identification, agree to our terms, and place a refundable deposit. We verify all bidders to ensure a secure marketplace."
    },
    {
      question: "What happens after I win an auction?",
      answer: "After winning, you'll receive detailed instructions for payment and vehicle transfer. We facilitate the entire process including title transfer, shipping coordination, and any necessary documentation."
    },
    {
      question: "Are all vehicles inspected?",
      answer: "Yes, all vehicles undergo comprehensive inspections by certified professionals. We provide detailed condition reports, high-resolution photos, and full documentation of any issues or modifications."
    },
    {
      question: "Can I inspect a vehicle before bidding?",
      answer: "Absolutely! We encourage in-person inspections during preview days. For distant vehicles, we offer virtual inspections via video call with our specialists who can show you specific areas of interest."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about buying and selling through LuxeAuction
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-luxury-gold transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
