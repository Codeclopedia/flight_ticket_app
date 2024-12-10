"use client"

import {Accordion, AccordionItem} from "@nextui-org/accordion";

export function TermConditionModal() {
  return <div>
    <div className="font-bold text-black text-2xl pt-10">
      Terms and Conditions
    </div>
    <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton"></ul>
    <div className="font-normal text-black text-sm text-gray-600 py-2">
      When searching for airfares, discount and savings claims are based on multiple factors, including searching over 500 airlines to find our lower available fare. Coupon codes are valid for savings for qualified bookings off our service fees.
    </div>
    <Accordion >
      <AccordionItem key="1" aria-label="Accordion 1" title="Fare Disclosures"  >
        {"defaultContent"}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Coupon Codes">
        {"defaultContent"}
      </AccordionItem>
    </Accordion>
  </div>
}
