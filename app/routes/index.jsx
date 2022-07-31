import { ClientOnly } from "remix-utils";

// css linking
import layout_positioning from "../styles/dashboard/layout_positioning.css";
import flex_box from "../styles/dashboard/flex_box.css";
import overView from "../styles/dashboard/overView.css";
import SeondToLast from "../styles/dashboard/SeondToLast.css";

// images

// includes (now moved to `app/utils/client` folder)
import SideNav from "../utils/client/SideNav";
import Charts from "../utils/client/chart.client";
import Pchart from "../utils/client/barChart.client";

export const links = () => {
  return [
    { rel: "stylesheet", href: layout_positioning },
    { rel: "stylesheet", href: flex_box },
    { rel: "stylesheet", href: overView },
    { rel: "stylesheet", href: SeondToLast },
  ];
};

function BoxComponent({}) {
  return (
    <div className="w-full flex flex-row align-middle content-center justify-center">
      <div className="bg-nova-green text-white w-full h-full rounded-lg px-5 xl:px-6 py-5 xl:py-6 2xl:py-7">
        <div className="mb-4">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <div className="">
          <p className="text-base 2xl:text-lg mb-1">
            Drone Model used in last flight
          </p>
          <h3 className="text-2xl 2xl:text-3xl font-bold mb-2">Nova One</h3>
          <hr className="mb-2" />
          <p className="text-xs 2xl:text-sm">Last flight on july 11, 2022</p>
        </div>
      </div>
    </div>
  );
}

export default function Dash() {
  return (
    //container_custom box holds every details about the dashboard
    <div className="flex bg-nova-grey">
      <ClientOnly>{() => <SideNav />}</ClientOnly>
      <div className="h-full flex bg-nova-grey w-full flex-col ml-[280px] xl:ml-[300px]">
        {/* Header */}
        <div className="grid grid-cols-4 lg:h-[70px] content-center gap-3 w-[calc(100vw-280px)] xl:w-[calc(100vw-300px)] header_custom fixed top-0 left-[280px] xl:left-[300px] bg-nova-grey z-50 py-2">
          <div className="col-span-1 flex justify-center flex-col content-center">
            <p>welcome to your dashboard</p>
            <h3>Ayomide Matins</h3>
          </div>

          <div className="col-span-2 flex justify-center content-center">
            <form class="flex items-center w-2/3">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-[#c0c0c0] dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-nova-black border-0 placeholder:text-[#c0c0c0] text-[#c0c0c0] text-base rounded-lg block w-full pl-10 p-2.5"
                  placeholder="Search Dashboard"
                  required
                />
              </div>
            </form>
          </div>

          <div className="col-span-1 flex flex-row content-center justify-center">
            <span className="text-center">Abdur-Rahman Fashola</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col relative mt-[70px] pt-3 bg-nova-grey">
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5 content-center justify-between py-2 lg:py-3 px-4">
            <BoxComponent />
            <BoxComponent />
            <BoxComponent />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-5 content-center justify-between px-4 mt-8 w-full">
            <ClientOnly>
              {() => (
                <div className="text-white rounded-lg px-9 grid col-span-3 pt-5 pb-2 h-full bg-nova-black">
                  <div className="text-center w-full text-2xl font-bold">
                    Overview
                  </div>
                </div>
              )}
            </ClientOnly>
            <div className="text-white rounded-lg px-9 pt-5 h-full grid col-span-2 bg-nova-black">
              <div className="text-center w-full text-2xl font-bold">
                Next Flight Details
              </div>
              <ul role={"list"} className="divide-y divide-gray-100">
                <li className="py-4 flex flex-col">
                  <span className="text-base">Drone Model</span>
                  <span className="font-bold">Nova One</span>
                </li>
                <li className="py-4 flex flex-col">
                  <span className="text-base">Drone Model</span>
                  <span className="font-bold">Nova One</span>
                </li>
                <li className="py-4 flex flex-col">
                  <span className="text-base">Drone Model</span>
                  <span className="font-bold">Nova One</span>
                </li>
                <li className="py-4 flex flex-col">
                  <span className="text-base">Drone Model</span>
                  <span className="font-bold">Nova One</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-5 content-center justify-between px-4 mt-8 w-full">
            <div className="text-white rounded-lg px-9 grid col-span-3 pt-5 pb-2 h-full bg-nova-black">
              <div className="text-center w-full text-2xl font-bold">
                Last Flight Data
              </div>
            </div>

            <div className="text-white rounded-lg px-9 pt-5 h-full grid col-span-2 bg-nova-black">
              <div className="text-center w-full text-2xl font-bold">
                Available Services
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
