import { features } from "../constants/index";
export const Feature = () => {
  return (
    <section className="mt-8 pb-20 border-b border-neutral-800 " id="feautures-section">
      <p
        className="text-xl uppercase text-orange-400 font-semibold py-1 px-4 rounded-2xl bg-neutral-900 
        text-center mx-auto  max-w-fit"
      >
        Feature
      </p>
      <h1 className="text-4xl  sm:text-5xl lg:text-7xl tracking-wide mt-8 lg:mt-20 text-center">
        Easily build{" "}
        <span className="bg-linear-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
          {" "}
          your code
        </span>
      </h1>

      <div className="flex flex-wrap w-full mt-20">
        {features.map((item, index) => {
          return (
            <div className="lg:max-w-1/3 sm:w-1/2 w-full p-4 mb-6">
              <div className="flex  gap-3" key={index}>
                <div className="w-10 p-2 h-10 rounded-[50%] bg-neutral-900 text-orange-400 ">
                  {item.icon}
                </div>
                <div className="content">
                  <h2 className="text-xl mb-8">{item.text}</h2>
                  <p className="text-neutral-400 max-w-80">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
