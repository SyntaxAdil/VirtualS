import { testimonials } from "../constants/index";

export const Feedback = () => {
  return (
    <section id="testimonial-section">
      <h1 className="text-4xl  sm:text-6xl lg:text-6xl tracking-wide mt-30 text-center mb-15">
        What people are saying
      </h1>

      <div className="flex  flex-wrap gap-5 justify-center">
        {testimonials.map((item,index) => {
          return (
            <div className="border border-neutral-800 w-full lg:w-98 sm:w-1/2  rounded-lg p-4  mb-6 flex flex-col justify-around " key={index}>
              <p className="text-lg text-neutral-400 mb-8">" {item.text} "</p>
              <div className="flex items-center gap-3 ">
                <img
                  src={item.image}
                  className="w-10 h-10 rounded-full border "
                  alt=""
                />
                <div>
                  <h6 className="text-sm  font-medium text-neutral-500">
                    {item.user}
                  </h6>
                  <p className="text-neutral-400 text-sm">{item.company}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
