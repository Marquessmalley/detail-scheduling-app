import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { faq } from "constants/faq";

const Faq: React.FC = () => {
  return (
    <div className="h-screen w-full pt-32 px-4">
      <div className="grid grid-cols-1 mb-5 max-w-7xl mx-auto">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold  text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
      </div>
      <div className="mx-auto max-w-7xl  divide-y divide-black/3 dark:divide-gray-900 rounded-xl bg-zinc-100 dark:bg-slate-800">
        {faq.map((qa) => {
          return (
            <Disclosure
              key={qa.id}
              as="div"
              className="p-6 "
              defaultOpen={false}
            >
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-md font-medium text-black dark:text-white hover:text-black-50 dark:hover:text-slate-100">
                  {qa.question}
                </span>
                <ChevronDownIcon className="size-5 text-black dark:text-white group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm font-medium text-black/80 dark:text-slate-200">
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
