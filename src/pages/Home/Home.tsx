import dayjs from "dayjs";
import Navbar from "../../components/Navbar/Navbar";
import "./styles.css";
import { useEffect, useState } from "react";
import AttendanceDash from "../../components/AttendanceDash/AttendanceDash";
import LogsAndReq from "../../components/LogsAndReq/LogsAndReq";

export default function Home({
  openSidebar,
  setOpenSidebar,
}: {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [curDtTime, setCurDtTime] = useState(dayjs());

  useEffect(() => {
    setInterval(() => {
      setCurDtTime(dayjs());
    }, 500);
  }, []);

  return (
    <div
      className={`w-full min-h-screen __home ${
        openSidebar ? "border-l" : "border-0"
      } border-neutral-700`}
    >
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className="lg:px-8 px-4 mt-4 flex flex-col gap-8">
        <section className="text-lg flex gap-1 items-center">
          <button className="font-[500] text-neutral-300">My Space /</button>
          <span className="text-orange-400 font-light">Attendance</span>
        </section>
        <AttendanceDash curDtTime={curDtTime} />
        <LogsAndReq />
      </div>
    </div>
  );
}
