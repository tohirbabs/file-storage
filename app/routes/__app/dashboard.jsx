import { ClientOnly } from "remix-utils";

// css linking
import flex_box from "../../styles/dashboard/flex_box.css";
import overView from "../../styles/dashboard/overView.css";
import SeondToLast from "../../styles/dashboard/SeondToLast.css";

// images

// includes (now moved to `app/utils/client` folder)
import Charts from "../../utils/components/chart.client";
import Pchart from "../../utils/components/barChart.client";
import Header from "../../utils/components/Header";

export const links = () => {
  return [
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
  const user = {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/200"
  }

  return (
    //container_custom box holds every details about the dashboard
    <div className="h-full flex bg-nova-grey w-full flex-col ml-[280px] xl:ml-[300px]">
      {/* Header */}
      <Header subText={"Welcome to your dashboard"} mainText={user.name} placeHolder={"Search Dashboard"} user={user}/>
      <div className="flex flex-1 flex-col relative mt-[70px] pt-3 bg-nova-grey">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5 content-center justify-between py-2 lg:py-3 px-4">
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-5 content-center justify-between px-4 mt-8 w-full">
          <ClientOnly>
            {() => (
              <div className="text-white rounded-lg px-9 grid col-span-5 pt-5 pb-2 h-full bg-nova-black">
                <div className="text-center w-full text-2xl font-bold">
                  Overview
                </div>
              </div>
            )}
          </ClientOnly>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-5 content-center justify-between px-4 mt-8 w-full">
          <div className="text-white rounded-lg px-9 grid col-span-3 pt-5 pb-2 h-full bg-nova-black">
            <div className="text-center w-full text-2xl font-bold">
              Last Flight Data
            </div>
          </div>

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
      </div>
    </div>
  );
}
