/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ subText, mainText, placeHolder, user }) {
  return (
    <div className="grid grid-cols-4 w-[100vw] lg:h-[70px] content-center gap-3 sm:w-[calc(100vw-280px)] xl:w-[calc(100vw-300px)] sm:header_custom fixed top-0 sm:left-[280px] xl:left-[300px] bg-nova-grey z-50 py-2 px-4">
      <div className="col-span-1 w-max flex lg:pl-4 xl:pl-9 text-white justify-center flex-col content-center">
        <p className="text-sm xl:text-base">{subText ? subText : ""}</p>
        <h3 className="text-xl xl:text-2xl font-semibold">{mainText}</h3>
      </div>

      <div className="col-span-2 flex justify-center content-center hidden sm:block">
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

      <div className="col-span-2 sm:col-span-1 flex flex-row content-center justify-center  col-start-3 sm:col-start-4">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm p-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              <span className="sr-only">Open user menu</span>
              <img
                className="mr-2 w-8 h-8 rounded-full"
                src={user.avatar}
                alt="user photo"
              />
              {user.name}

              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900 flex items-center"
                          : "text-gray-700 flex items-center",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <div className="pr-2">
                        <i className="fa-solid fa-chart-line"></i>
                      </div>
                      <div className="">Analysis</div>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900 flex items-center"
                          : "text-gray-700 flex items-center",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <div className="pr-2">
                        <i className="fa-solid fa-server"></i>
                      </div>
                      <div className="">File Storage</div>
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900 flex items-center"
                          : "text-gray-700 flex items-center",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <div className="pr-2">
                        <i className="fa-solid fa-user"></i>
                      </div>
                      <div className="">Profile</div>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900 flex items-center"
                          : "text-gray-700 flex items-center",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <div className="pr-2">
                        <i className="fa-solid fa-gear"></i>
                      </div>
                      <div className="">Settings</div>
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900 flex items-center"
                          : "text-gray-700 flex items-center",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <div className="pr-2">
                        <i className="fa-solid fa-circle-info"></i>
                      </div>
                      <div className="">Help</div>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900 flex items-center"
                          : "text-gray-700 flex items-center",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <div className="pr-2">
                        <i className="fa-solid fa-right-from-bracket"></i>
                      </div>
                      <div className="">Log out</div>
                    </a>
                  )}
                </Menu.Item>
              </div>
              {/* <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Delete
                    </a>
                  )}
                </Menu.Item>
              </div> */}
            </Menu.Items>
          </Transition>
        </Menu>

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
