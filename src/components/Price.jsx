import { pricingOptions } from "../constants/index";
import { CircleCheck } from "lucide-react";
export const Price = () => {
  return (
    <section id="price-section">
      <h1 className="text-5xl  sm:text-6xl lg:text-6xl tracking-wide mt-30 text-center mb-15">
        Pricing
      </h1>
      <div className="flex gap-5 lg:flex-nowrap flex-wrap justify-center">
        {pricingOptions.map((item) => {
          return (
            <div
              className="w-full sm:w-1/2 lg:w-1/3  rounded-2xl border border-neutral-600 p-8 transition-all duration-200 hover:border-orange-800"
              key={crypto.randomUUID()}
            >
              <div className="flex items-center  gap-2 mb-8" >
                <h6 className="text-4xl ">{item.title}</h6>
                {item.title==="Pro" && <span className="text-orange-400 text-xl">(Most Popular)</span>}
              </div>
              <h2 className="text-5xl">
                {item.price}{" "}
                <span className="text-lg text-neutral-400 ">/Month</span>
              </h2>
              
              <ul>
                {item.features.map((feature) => {
                  return (
                    <li className="flex gap-3 mt-8" key={crypto.randomUUID()}>
                      <CircleCheck />

                      <p>{feature}</p>
                    </li>
                  );
                })}
              </ul>


              <a href="#" className="border border-orange-800 block text-center py-3 font-medium rounded-md mt-15 text-xl transition-all duration-200 hover:bg-orange-800 ">
                Subscribe
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
