import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";

function LogsAndReq() {
  const CustCell = styled(TableCell)({
    color: "rgb(255 251 235)",
  });
  return (
    <section className="w-full">
      <p className="text-2xl  text-orange-400">Logs & Requests</p>
      <div className="mt-4 flex w-fit">
        <button className="border rounded-l-md border-neutral-600 bg-orange-400 text-amber-50 px-2 py-1 max-w-44 duration-300">
          Attendance Log
        </button>
        <button className="border rounded-r-md border-neutral-600 text-neutral-300 hover:bg-orange-400 hover:text-amber-50 px-2 py-1 max-w-44 duration-300">
          Attendance Request
        </button>
      </div>
      <div className="mt-4 lg:p-4 p-2 border border-neutral-600 rounded-md w-full whitespace-nowrap">
        <div className="flex lg:flex-row flex-col gap-4 w-full justify-around lg:items-center items-start">
          <span className="text-xl text-amber-50 font-[500]">January 2024</span>
          <div className="flex w-full flex-nowrap overflow-auto">
            {["30 Days", "Dec", "Nov", "Oct", "Sept", "Aug", "Jul"].map(
              (month, indx) => (
                <button
                  className={`py-2 px-4 h-10 text-neutral-300 hover:bg-orange-400 hover:text-amber-50 duration-300 ${
                    indx === 0
                      ? "rounded-l-md bg-orange-400 text-amber-50"
                      : indx === 6
                      ? "rounded-r-md"
                      : ""
                  } border border-neutral-600 text-sm`}
                  key={indx}
                >
                  {month}
                </button>
              )
            )}
          </div>
          <span className="flex items-center text-sm">
            <button className="border border-neutral-600 rounded-l-md p-4 size-10 flex items-center justify-center text-amber-50 bg-orange-400">
              <span className="material-symbols-outlined">list</span>
            </button>
            <button className="border border-neutral-600 rounded-r-md text-neutral-300 p-4 size-10 flex items-center justify-center hover:bg-orange-400 hover:text-amber-50 duration-300">
              <span className="material-symbols-outlined">calendar_month</span>
            </button>
          </span>
        </div>
        <TableContainer>
          <Table
            sx={{
              minWidth: 750,
              borderTop: 1,
              borderColor: "rgb(255 251 235)",
              marginTop: 2,
            }}
          >
            <TableHead>
              <TableRow>
                <CustCell>Date</CustCell>
                <CustCell>Attendance Visual</CustCell>
                <CustCell>Effective Hours</CustCell>
                <CustCell>Gross Hours</CustCell>
                <CustCell>Extra Hours</CustCell>
                <CustCell>Arrival</CustCell>
                <CustCell>Log</CustCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ bgcolor: "rgb(20 83 45)" }}>
                <CustCell>8 Jan, 2024</CustCell>
                <CustCell>
                  <div className="flex h-4">
                    <div className=" w-1/12 bg-green-500 h-full rounded-l-sm"></div>
                    <div className=" w-2/12 bg-white h-full"></div>
                    <div className=" w-4/12 bg-green-500 h-full"></div>
                    <div className=" w-1/12 bg-white h-full"></div>
                    <div className=" w-4/12 bg-green-500 h-full rounded-r-sm"></div>
                  </div>
                </CustCell>
                <CustCell>
                  <div className="flex items-center gap-3">
                    <span className="__bar-5 md:size-6 size-4"></span>9hrs 15m
                  </div>
                </CustCell>
                <CustCell>9hrs 59min</CustCell>
                <CustCell>59min</CustCell>
                <CustCell>On Time</CustCell>
                <CustCell>
                  <span className="material-symbols-outlined text-orange-400">
                    report
                  </span>
                </CustCell>
              </TableRow>
              <TableRow>
                <CustCell>
                  7 Jan, 2024{" "}
                  <span className="ml-6 bg-blue-500 p-1 rounded-sm">W-Off</span>
                </CustCell>
                <CustCell></CustCell>
                <CustCell>Weekend</CustCell>
                <CustCell></CustCell>
                <CustCell></CustCell>
                <CustCell></CustCell>
                <CustCell></CustCell>
              </TableRow>
              <TableRow sx={{ bgcolor: "rgb(20 83 45)" }}>
                <CustCell>6 Jan, 2024</CustCell>
                <CustCell>
                  <div className="flex h-4">
                    <div className=" w-1/12 bg-green-500 h-full rounded-l-sm"></div>
                    <div className=" w-1/12 bg-green-500 h-full"></div>
                    <div className=" w-5/12 bg-white h-full"></div>
                    {/* <div className=" w-1/12 bg-white h-full"></div> */}
                    <div className=" w-5/12 bg-green-500 h-full rounded-r-sm"></div>
                  </div>
                </CustCell>
                <CustCell>
                  <div className="flex items-center gap-3">
                    <span className="__bar-25 md:size-6 size-4"></span>7hrs 45m
                  </div>
                </CustCell>
                <CustCell>9hrs</CustCell>
                <CustCell>45min</CustCell>
                <CustCell>On Time</CustCell>
                <CustCell>
                  <span className="material-symbols-outlined text-green-400">
                    task_alt
                  </span>
                </CustCell>
              </TableRow>
              <TableRow sx={{ bgcolor: "rgb(146 64 14)" }}>
                <CustCell>
                  5 Jan, 2024{" "}
                  <span className="ml-6 bg-amber-500 p-1 rounded-sm">
                    Leave
                  </span>
                </CustCell>
                <CustCell>
                  {/* <div className="flex h-4">
                    <div className=" w-1/12 bg-green-500 h-full rounded-l-sm"></div>
                    <div className=" w-1/12 bg-green-500 h-full"></div>
                    <div className=" w-5/12 bg-white h-full"></div>
                    <div className=" w-5/12 bg-green-500 h-full rounded-r-sm"></div> </div> */}
                </CustCell>
                <CustCell>Sick Leave</CustCell>
                <CustCell>N/A</CustCell>
                <CustCell>N/A</CustCell>
                <CustCell>N/A</CustCell>
                <CustCell>
                  N/A
                  {/* <span className="material-symbols-outlined text-orange-400">
                    report
                  </span> */}
                </CustCell>
              </TableRow>
              <TableRow sx={{ bgcolor: "rgb(146 64 14)" }}>
                <CustCell>
                  4 Jan, 2024
                  <span className="ml-6 bg-amber-500 p-1 rounded-sm">
                    Leave
                  </span>
                </CustCell>
                <CustCell>
                  {/* <div className="flex h-4">
                    <div className=" w-1/12 bg-green-500 h-full rounded-l-sm"></div>
                    <div className=" w-1/12 bg-green-500 h-full"></div>
                    <div className=" w-5/12 bg-white h-full"></div>
                    <div className=" w-5/12 bg-green-500 h-full rounded-r-sm"></div> </div> */}
                </CustCell>
                <CustCell>Sick Leave</CustCell>
                <CustCell>N/A</CustCell>
                <CustCell>N/A</CustCell>
                <CustCell>N/A</CustCell>
                <CustCell>
                  N/A
                  {/* <span className="material-symbols-outlined text-orange-400">
                    report
                  </span> */}
                </CustCell>
              </TableRow>
              <TableRow sx={{ bgcolor: "rgb(127 29 29)" }}>
                <CustCell>3 Jan, 2024</CustCell>
                <CustCell>
                  <div className="flex h-4">
                    <div className=" w-1/12 bg-green-500 h-full rounded-l-sm"></div>
                    <div className=" w-1/12 bg-green-500 h-full"></div>
                    <div className=" w-2/12 bg-white h-full"></div>
                    <div className=" w-3/12 bg-green-500 h-full"></div>
                    <div className=" w-5/12 bg-green-500 h-full rounded-r-sm"></div>{" "}
                  </div>
                </CustCell>
                <CustCell>
                  <div className="flex items-center gap-3">
                    <span className="md:size-6 size-4 __bar-25"></span>8hrs
                    20min
                  </div>
                </CustCell>
                <CustCell>7hrs</CustCell>
                <CustCell>40min</CustCell>
                <CustCell>30min late</CustCell>
                <CustCell>
                  <span className="material-symbols-outlined text-red-400">
                    hourglass_bottom
                  </span>
                </CustCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
}

export default LogsAndReq;
