export default function Header({ subText, mainText, placeHolder, user }) {
  return (
    <div className="grid grid-cols-4 lg:h-[70px] content-center gap-3 w-[calc(100vw-280px)] xl:w-[calc(100vw-300px)] header_custom fixed top-0 left-[280px] xl:left-[300px] bg-nova-grey z-50 py-2">
      <div className="col-span-1 flex lg:pl-4 xl:pl-9 text-white justify-center flex-col content-center">
        <p className="text-sm xl:text-base">{subText ? subText : ""}</p>
        <h3 className="text-xl xl:text-2xl font-semibold">{mainText}</h3>
      </div>

      <div className="col-span-2 flex justify-center content-center">
        <form className="flex items-center w-2/3">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
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
              placeholder={placeHolder ? placeHolder : ""}
              required
            />
          </div>
        </form>
      </div>

      <div className="col-span-1 flex flex-row content-center justify-center">
        <button
          id="dropdownAvatarNameButton"
          data-dropdown-toggle="dropdownAvatarName"
          className="flex items-center text-sm font-medium text-white rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
          type="button"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="mr-2 w-8 h-8 rounded-full"
            src={user.avatar}
            alt="user photo"
          />
          {user.name}
          <svg
            className="w-4 h-4 mx-1.5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Dropdown for header user menu */}
        <div
          id="dropdownAvatarName"
          className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div className="font-medium ">Pro User</div>
            <div className="truncate">name@flowbite.com</div>
          </div>
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
