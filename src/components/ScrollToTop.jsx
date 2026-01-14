import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsShowing(true);
      } else {
        setIsShowing(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
  }
  return (
    <>
      {isShowing && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-linear-to-b from-orange-400 fixed bottom-8 right-8 to-red-800 rounded-full flex justify-center items-center cursor-pointer transition-all duration-200 shadow-sm hover:shadow-orange-800"
        >
          <ArrowUp />
        </button>
      )}
    </>
  );
};
