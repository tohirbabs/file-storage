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
      <div className="bg-nova-green text-white w-full h-full rounded-lg px-5 py-5">
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
    <div className="container_box">
      <ClientOnly>{() => <SideNav />}</ClientOnly>

      <div className="right_content h-full relative flex flex-col">
        {/* start of right_layout */}
        <div className="header">
          <div className="left">
            <p>welcome to your dashboard</p>
            <h3>Ayomide Matins</h3>
          </div>
          <div className="searchBar">
            <div className="bar">
              <div className="icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="userInput">
                <input placeholder="Search Dashboard"></input>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col relative pt-[70px]">
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5 content-center justify-between py-2 lg:py-3 px-4">
            <BoxComponent />
            <BoxComponent />
            <BoxComponent />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 content-center justify-between px-4 mt-8">
            <ClientOnly>{() => <h1 className="text-white">Hello</h1>}</ClientOnly>
            <div className="text-white rounded-lg px-9 pt-5 h-full bg-nova-black">
              <div className="text-center w-full text-2xl font-bold">Next Flight Details</div>
              <ul role={"list"} className="divide-y divide-gray-100">
                <li className="py-4 flex flex-col">
                  <span className="text-base">Drone Model</span>
                  <span className="font-bold">Nova One</span>
                </li>
                <li className="py-4 flex flex-col">
                  <span className="text-base">Drone Model</span>
                  <span className="font-bold">Nova One</span>
                </li>
                <li className= "py-4 flex flex-col">
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

          <section></section>
        </div>
      </div>
    </div>
  );
}
