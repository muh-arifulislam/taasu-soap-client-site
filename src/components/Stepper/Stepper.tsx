import { ReactNode } from "react";

type StepperInput = {
  id: number;
  label: string;
  icon: ReactNode;
  isComplete: boolean;
};

type StepperProps = {
  steps: StepperInput[];
};

const Stepper = ({ steps }: StepperProps) => {
  return (
    <div>
      <ul className="relative flex flex-row gap-x-2 px-5 sm:px-0">
        {steps.map((step, index) => (
          <li
            key={step.id + step.label}
            className={`shrink group ${
              index === steps.length - 1 ? "" : "basis-0 flex-1"
            }`}
          >
            <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle text-center">
              <span
                className={`p-2 flex justify-center items-center shrink-0  font-medium rounded-md dark:bg-neutral-700 dark:text-whiten text-[20px] ${
                  step.isComplete
                    ? "bg-gray-800 text-gray-100"
                    : "bg-gray-100 text-gray-800"
                } bg-black`}
              >
                {step.icon}
              </span>
              <div className="ms-2 w-full h-px flex-1 border-b border-dashed group-last:hidden dark:bg-neutral-700"></div>
            </div>

            <div className="mt-3 hidden sm:block">
              <span className="block text-sm font-medium text-gray-800 dark:text-white">
                {step.label}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stepper;
