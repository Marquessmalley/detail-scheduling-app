import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { faq } from "constants/faq";

const Faq: React.FC = () => {
  return (
    <div id="faq" className="mb-10 w-full px-4 pt-32">
      <div className="mx-auto mb-5 grid max-w-7xl grid-cols-1">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
      </div>
      <div className="divide-black/3 mx-auto max-w-7xl divide-y rounded-xl bg-zinc-100 dark:divide-gray-900 dark:bg-slate-800">
        {faq.map((qa) => {
          return (
            <Disclosure
              key={qa.id}
              as="div"
              className="p-6"
              defaultOpen={false}
            >
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-md hover:text-black-50 font-medium text-black dark:text-white dark:hover:text-slate-100">
                  {qa.question}
                </span>
                <ChevronDownIcon className="size-5 text-black group-data-[open]:rotate-180 dark:text-white" />
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
