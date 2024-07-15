import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function SearchAccordion({ children }: any) {
  return (
    <div className="bg-white px-2 md:px-3 block md:hidden text-black mt-4">
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-center justify-center gap-4 bg-[#4C4C4C] text-white rounded-sm w-full h-[40px]">
            Zoekvenster openen
          </AccordionTrigger>
          <AccordionContent className="shadow-md h-[250px]">{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
