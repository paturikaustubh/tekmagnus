import Logo from "../../assets/favicon.ico";

import "./styles.css";
import { useState } from "react";

export default function Sidebar({
  openSidebar,
  setOpenSidebar,
}: {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [mySpaceExpaded, setMySpaceExpanded] = useState(true);
  return (
    <div
      className={`h-full flex flex-col lg:relative fixed ${
        openSidebar ? "z-10" : "z-0"
      } top-0 left-0 container duration-300`}
      style={{
        width: openSidebar ? "auto" : 0,
        transitionDuration: "300ms",
        backgroundColor: "rgb(32 32 32)",
      }}
    >
      <div className="content">
        <section className="flex items-center justify-center py-12 px-8 bg-transparent">
          <button style={{ width: 150, height: 40 }}>
            <img src={Logo} alt="Logo" className="mx-auto " />
          </button>
        </section>

        <section className="relative flex items-center justify-end">
          <hr className="w-full" />
          <div
            className={`absolute ${
              !openSidebar ? "hidden" : "flex"
            } justify-center items-center ${
              openSidebar ? "translate-x-1/2" : "translate-x-8"
            } rounded-full bg-amber-50 p-1 cursor-pointer lg:flex`}
            onClick={() => setOpenSidebar((prevVal) => !prevVal)}
          >
            <span
              className="material-symbols-outlined"
              style={{
                ...(openSidebar ? { rotate: "180deg" } : { rotate: "360deg" }),
                transitionDuration: "300ms",
                zIndex: 10,
              }}
            >
              arrow_right_alt
            </span>
          </div>
        </section>

        <section className="mt-4 overflow-hidden">
          <div className="flex flex-col gap-4">
            <button className="mr-4 py-2 bg-amber-50 text-black flex gap-3 px-4 rounded-r-full cursor-pointer">
              <span className="material-symbols-outlined">home</span>
              Home
            </button>
            <button
              className="mr-4 py-2 bg-orange-400 text-amber-50 flex gap-3 px-4 rounded-r-full cursor-pointer"
              onClick={() => setMySpaceExpanded((prevVal) => !prevVal)}
            >
              <span className="material-symbols-outlined">bar_chart</span>
              My Space
              <span
                className="material-symbols-outlined ml-auto"
                style={{
                  ...(mySpaceExpaded
                    ? { rotate: "180deg" }
                    : { rotate: "0deg" }),
                  transitionDuration: "300ms",
                }}
              >
                expand_more
              </span>
            </button>
            <div
              className="ml-12 flex flex-col gap-2 items-start overflow-y-hidden"
              style={{
                ...(mySpaceExpaded ? { height: "auto" } : { height: 0 }),
                transitionDuration: "300ms",
              }}
            >
              {[
                "Leave",
                "Attendance",
                "Performance",
                "Expenses & Travel",
                "Help Desk",
              ].map((element, indx) => (
                <button
                  className={`${
                    indx === 1 ? "text-orange-400" : "text-amber-50"
                  } cursor-pointer`}
                  key={indx}
                >
                  {element}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
