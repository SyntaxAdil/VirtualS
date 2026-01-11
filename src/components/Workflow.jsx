import code from "../assets/code.jpg";
import { CircleCheck } from "lucide-react";

import { checklistItems } from "../constants/index";
export const Workflow = () => {
  return (
    <section className="pt-10" id="workflow-section">
      <h1 className="text-4xl  sm:text-5xl lg:text-6xl tracking-wide mt-10 text-center">
        Accelerate your
        <span className="bg-linear-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
          {" "}
          coding workflow.
        </span>
      </h1>

      <div className="flex lg:flex-nowrap flex-wrap gap-4 mt-15">
        <div className="lg:w-1/2 w-full">
          <img src={code} alt="code" className="w-full" />
        </div>

        <div className="lg:w-1/2 w-full pt-10 px-4">
          {checklistItems.map((item, index) => {
            return (
              <div className="flex mb-8 gap-8 items-start" key={index}>
                <div className="text-green-400 mt-1">
                    <CircleCheck />
                </div>
                <div className="content">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="my-4 text-neutral-400">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
