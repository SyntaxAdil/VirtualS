import {communityLinks, platformLinks, resourcesLinks} from "../constants/index";
// import platformLinks from "../constants/index"
// import communityLinks from "../constants/index"
export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 ">
      <div className="container mx-auto px-5 py-10  ">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 ">
        <div className="lg:w-1/3 w-1/2  mb-4">
          <h4 className="font-medium mb-4 text-xl">Resources</h4>
          <ul>
            {resourcesLinks.map((e, i) => {
              return (
                <li key={i} className="text-neutral-300 mb-2 transition-colors hover:text-orange-400">
                  <a href={e.href}>{e.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:w-1/3 w-1/2 mb-4">
          <h4 className="font-medium mb-4 text-xl">Platform</h4>
          <ul>
            {platformLinks.map((e, i) => {
              return (
                <li key={i} className="text-neutral-300 mb-2 transition-colors hover:text-orange-400">
                  <a href={e.href}>{e.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:w-1/3 w-1/2 ">
          <h4 className="font-medium mb-4 text-xl">Community</h4>
          <ul>
            {communityLinks.map((e, i) => {
              return (
                <li key={i} className="text-neutral-300 mb-2 transition-colors hover:text-orange-400">
                  <a href={e.href}>{e.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <section className="text-center mt-6 text-neutral-700 select-none">
        <small>&copy; 2026 Abdur Rahman Adil. All rights reserved.</small>
      </section>
      </div>
    </footer>
  );
};
