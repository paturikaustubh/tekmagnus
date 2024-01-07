import dayjs from "dayjs";

export default function AttendanceDash({
  curDtTime,
}: {
  curDtTime: dayjs.Dayjs;
}) {
  const daysArr = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <section className="w-full bg-neutral-800 grid lg:grid-cols-12 grid-cols-1 gap-4 text-neutral-300 p-4 rounded-md items-center">
      <div className="lg:col-span-5 col-span-1 flex flex-col h-full gap-2 lg:border-r pr-4">
        <p className="text-lg font-[500] text-amber-100">Attendance Status</p>
        <button className="flex items-center gap-1">
          <p className="text-sm">Last week</p>
          <div className="flex justify-center items-center h-1">
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </button>
        <div className="w-full grid mt-auto grid-cols-2 border border-neutral-600 p-2 rounded-md bg-neutral-900">
          <div className="flex gap-4 items-center">
            <span className="material-symbols-outlined text-4xl p-0 m-0">
              schedule
            </span>
            <div>
              <div>Average hrs/day</div>
              <span className="text-xs">(6hrs 48m)</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="__bar-5 md:size-11 size-8"></span>
            <div>
              <div>On Time Arrival</div>
              <span className="text-xs">95%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-5 col-span-1 lg:border-r h-full pr-4">
        <div className="flex w-full justify-between items-center">
          <span className="text-lg font-[500] text-amber-100">
            Timings (09:30AM - 06:30PM)
          </span>
          <span>{curDtTime.format("DD MMM, YYYY")}</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          {daysArr.map((day, indx) => (
            <button
              className={`rounded-full border-neutral-600 hover:bg-orange-400 ${
                indx === curDtTime.day() && indx !== 0
                  ? "bg-orange-400 text-amber-50 border-amber-50"
                  : indx === curDtTime.day()
                  ? "bg-red-300 border-red-500"
                  : ""
              } ${
                indx === 0 ? "text-red-800" : ""
              } hover:text-neutral-800 duration-300 size-8 flex items-center justify-center text-sm border realtive hover:border-neutral-800 __timing-day-button`}
              pop-data={
                indx > curDtTime.day()
                  ? `${curDtTime
                      .add(daysArr.slice(curDtTime.day(), indx).length, "day")
                      .format("D MMM, YYYY")}`
                  : indx < curDtTime.day()
                  ? `${curDtTime
                      .subtract(
                        daysArr.slice(indx, curDtTime.day()).length,
                        "day"
                      )
                      .format("D MMM, YYYY")}`
                  : curDtTime.format("D MMM, YYYY")
              }
              key={indx}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="w-full border border-neutral-600 p-2 rounded-md mt-4 bg-neutral-900">
          <div className="flex justify-around gap-4 items-center w-full h-12">
            <span className="md:text-base text-sm">Duration: 9hrs 0m</span>
            <span className="lg:text-2xl text-lg text-orange-400">
              {curDtTime.format("hh:mm:ss A")}
            </span>
            <span className="md:text-base text-sm">Break: 0m</span>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 col-span-1">
        <div className="flex flex-col gap-8 justify-between">
          <div className="text-lg font-[500] text-amber-100 mb-auto">
            Actions
          </div>
          <div className="flex flex-col gap-1 mt-auto">
            <button className="hover:bg-orange-400 hover:text-amber-50 duration-300 flex items-center justify-center p-2 rounded-md border border-neutral-600">
              Leave Request
            </button>
            <button className="hover:bg-orange-400 hover:text-amber-50 duration-300 flex items-center justify-center p-2 rounded-md border border-neutral-600">
              Work From Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
