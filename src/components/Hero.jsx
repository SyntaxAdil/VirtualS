import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center  text-center " id="hero">
      <h1 className="text-5xl  sm:text-6xl lg:text-7xl tracking-wide mt-10 ">
        VirtualS build tools
        <span className="bg-linear-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
          {" "}
          for developers
        </span>
      </h1>
      <p className="text-neutral-600 max-w-4xl text-lg mt-10">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      <div className="flex items-center justify-between gap-5 mt-10">
        <a
          href="#"
          className="bg-linear-to-r from-orange-400 to-red-600 px-4 py-3 rounded-md font-medium text-sm"
        >
          Start for free
        </a>
        <a
          href="#"
          className="border border-white text-white bg-transparent  px-4 py-3 rounded-md text-sm font-medium transition-all duration-400 hover:bg-orange-500 hover:border-orange-500  "
        >
          Documentation
        </a>
      </div>

      <div className="flex lg:gap-4 px-2 flex-wrap lg:flex-nowrap gap-7 lg:mt-40 my-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="lg:w-1/2 w-full rounded-xl border border-orange-600"
        >
          <source src={video1} />  
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="lg:w-1/2 w-full rounded-xl border border-orange-600"
        >
          <source src={video2} />     
        </video>
      </div>
    </section>
  );
};
