import Header from "../../utils/components/Header";

export default function Booking() {
  const user = {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/200",
  };

  return (
    <div className="h-full flex bg-nova-grey w-full flex-col sm:ml-[280px] xl:ml-[300px]">
      {/* Page Main Header */}
      <Header
        mainText={"Booking"}
        subText={null}
        placeHolder={"Search Dashboard"}
        user={user}
      />

      {/* The main page area */}
      <div className="bg-nova-grey flex flex-1 flex-col max-w-7xl sm:px-10 px-2 lg:px-12 xl:px-14 mx-auto w-full relative mt-[70px] pt-3">
        {/* The inner form */}
        <section className="text-white bg-nova-black w-full rounded-lg py-14 sm:px-10 px-4 xl:rounded-xl">
          <h2 className="text-xl lg:text-2xl font-bold mb-9">
            Book an appointment with us today
          </h2>

          {/* The form */}
          <form action="" className="">
            {/* The Name Form section */}
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-50"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-nova-black placeholder:text-[#c0c0c0] text-[#c0c0c0] text-sm rounded-lg block w-full p-2.5 border border-gray-50"
                  placeholder="First Name"
                  required
                  autoCapitalize="none"
                  autoComplete="none"
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-50"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-nova-black placeholder:text-[#c0c0c0] text-[#c0c0c0] text-sm rounded-lg block w-full p-2.5 border border-gray-50"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            {/* The email input */}
            <div className="mb-8">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-50"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-nova-black placeholder:text-[#c0c0c0] text-[#c0c0c0] text-sm rounded-lg block w-full p-2.5 border border-gray-50"
                placeholder="john.doe@company.com"
                required
              />
            </div>

            {/* The radio button section */}
            <div className="mb-9">
              <span className="block mb-2 text-sm font-medium text-gray-50">
                Are you a pilot?
              </span>
              <div className="flex items-center mb-4">
                <input
                  id="country-option-1"
                  type="radio"
                  name="countries"
                  value="USA"
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="country-option-1"
                  className="block ml-2 text-sm font-medium text-gray-50 outline-none focus:outline-none"
                >
                  Yes
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="country-option-2"
                  type="radio"
                  name="countries"
                  value="Germany"
                  defaultChecked
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                />
                <label
                  htmlFor="country-option-2"
                  className="block ml-2 text-sm font-medium text-gray-50 outline-none focus:outline-none"
                >
                  No
                </label>
              </div>
            </div>

            {/* Appointment time section */}
            <div className="grid gap-6 mb-9 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-50"
                >
                  Appointment Date
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-nova-black placeholder:text-[#c0c0c0] text-[#c0c0c0] text-sm rounded-lg block w-full p-2.5 border border-gray-50"
                  placeholder="DD/MM/YYYY"
                  required
                  autoCapitalize="none"
                  autoComplete="none"
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-50"
                >
                  Appointment Time
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-nova-black placeholder:text-[#c0c0c0] text-[#c0c0c0] text-sm rounded-lg block w-full p-2.5 border border-gray-50"
                  placeholder="HH:MM"
                  required
                />
              </div>
            </div>

            {/* Appointment details section */}
            <div className="mb-6">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-50"
              >
                Appointment Details
              </label>
              <textarea
                rows={8}
                id="large-input"
                className="bg-nova-black resize-none placeholder:text-[#c0c0c0] text-[#c0c0c0] text-sm rounded-lg block w-full p-2.5 border border-gray-50 sm:text-md"
                placeholder="Full Appointment Details..."
              ></textarea>
            </div>
            <button className="placeholder:text-[#c0c0c0] text-white text-sm rounded-lg block w-full p-2.5 border-0 bg-nova-green">
              Book Appointment
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
