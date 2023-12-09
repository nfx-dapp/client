import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { title: "Home", to: "/" },
  { title: "Explore", to: "/explore" },
  { title: "Projects", to: "/projects" },
  { title: "Mantle", to: "https://www.mantle.xyz", target: "__blank" },
];

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <>
      <nav
        className={twMerge(
          "fixed top-0 left-0 w-full py-4 items-center flex p-page backdrop-blur-sm bg-background bg-opacity-40 z-[100] justify-center"
          // config.hidden && "hidden"
        )}
      >
        <div
          className={twMerge(
            "flex flex-1"
            // config.colorCycle && "homepage-color-cycle"
          )}
        >
          <Link to="/" className="duration-300 group px-1">
            <img
              src="/logo.svg"
              alt="NFX logo"
              className="aspect-square h-16 duration-inherit group-hover:-scale-100"
            />
          </Link>
        </div>

        <div className="items-center flex gap-x-6 text-front text-opacity-70">
          {navItems.map((item, i) => (
            <div className="flex gap-x-6 items-center" key={i}>
              <NavLink
                target={item.target}
                to={item.to}
                className={({ isActive }) =>
                  twMerge(
                    "px-4 py-1",
                    isActive
                      ? twMerge(
                          "border border-primary bg-background rounded-lg bg-opacity-20 cursor-default pointer-events-none"
                          // config.colorCycle && "homepage-color-cycle"
                        )
                      : undefined
                  )
                }
              >
                {item.title}
              </NavLink>
              {i !== navItems.length - 1 && (
                <figure className="font-black selection:hidden selection:bg-opacity-0 selection:text-primary">
                  .
                </figure>
              )}
              {/* <MaterialIcon className="text-xs scale-5  0" codepoint="e3fa" /> */}
            </div>
          ))}
        </div>

        <div
          className={twMerge(
            "flex flex-1 justify-end"

            // config.colorCycle && "homepage-color-cycle"
          )}
        >
          <Link
            to="/add-nft"
            className="bg-primary text-back px-6 py-2 rounded-full bg-grid shadow-[inset_5px_4px_1rem_#ffffff77,0px_0px_6px_#ffffff66] duration-300 hover:bg-right-bottom hover:scale-110 font-medium"
          >
            Start Developing
          </Link>
        </div>
      </nav>
    </>
  );
}
