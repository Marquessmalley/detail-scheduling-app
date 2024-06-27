import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { faq } from "constants/faq";

const Faq = () => {
  return (
    <div className="h-screen w-full pt-32 px-4">
      <div className="grid grid-cols-1 mb-5  mx-auto w-full max-w-4xl ">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold  text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
      </div>
      <div className="mx-auto w-full max-w-4xl divide-y divide-black/3 rounded-xl bg-zinc-100">
        {faq.map((qa) => {
          return (
            <Disclosure
              key={qa.id}
              as="div"
              className="p-6 "
              defaultOpen={false}
            >
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-black group-data-[hover]:text-black/80">
                  {qa.question}
                </span>
                <ChevronDownIcon className="size-5 text-black group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5 text-black/80">
                {qa.answer}
              </DisclosurePanel>
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
