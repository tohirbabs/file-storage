import Header from "../../utils/components/Header";
import { useState } from "react";

export default function FileStorage() {
  const user = {
    name: "Max Mufu",
    avatar: "https://i.pravatar.cc/200",
  };

  const [artemis, setArtemis] = useState(false);

  return (
    <div className="h-full flex bg-nova-grey w-full flex-col sm:ml-[280px] xl:ml-[300px]">
      {/* Page Main Header */}
      <Header
        mainText={"File Storage"}
        subText={null}
        placeHolder={"Search Dashboard"}
        user={user}
      />

      {/* The main page area */}
      {artemis ? (
        <div className="bg-nova-grey flex flex-1 flex-col max-w-7xl sm:px-10 px-2 lg:px-12 xl:px-14 mx-auto w-full relative mt-[70px] pt-3">
          {/* The Top nav */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 my-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <div
                onClick={() => setArtemis(false)}
                className="w-full flex text-[#767676]  cursor-pointer items-center"
              >
                <div className="px-2">
                  <i className="fa-solid text-xl fa-folder"></i>
                </div>
                <div className="w-max">Folders and Files</div>
              </div>
              <div
                onClick={() => setArtemis(true)}
                className="w-full flex text-[#3CB043]  cursor-pointer items-center"
              >
                <div className="px-2">
                  <i className="fa-solid text-xl fa-floppy-disk"></i>
                </div>
                <div className="w-full">Artemis Drop</div>
              </div>
            </div>
            <div className=" flex text-white cursor-pointer items-center">
              <div className="px-2">
                <i className="fa-solid text-xl fa-folder-plus"></i>
              </div>
              <div className="w-full">Upload Folders and Files</div>
            </div>
          </div>
          {/* The inner form */}
          <section className="text-white bg-nova-black w-full rounded-lg py-14 sm:px-10 px-2 xl:rounded-xl">
            <div className="folders">
              <h2 className="text-xl lg:text-2xl font-bold mb-6 ml-6">
                Folders
              </h2>
              <div className="flex flex-wrap">
                <div className="lg:w-1/3 w-full p-2">
                  <div className="relative border-white rounded-lg border-solid border-2 p-2 py-4 cursor-pointer flex items-center text-white hover:border-[#3CB043]">
                    <div className="px-2">
                      <i className="fa-solid fa-folder text-xl"></i>
                    </div>
                    <div className="w-max">Irrigation Update video</div>
                    <img
                      src="/images/get.png"
                      alt=""
                      className="cursor-pointer absolute right-2 bottom-2"
                    />
                  </div>
                </div>
                <div className="lg:w-1/3 w-full p-2">
                  <div className="relative border-white rounded-lg border-solid border-2 p-2 py-4 cursor-pointer flex items-center text-white hover:border-[#3CB043]">
                    <div className="px-2">
                      <i className="fa-solid fa-folder text-xl"></i>
                    </div>
                    <div className="w-max">Second seeding oper..</div>
                    <img
                      src="/images/get.png"
                      alt=""
                      className="cursor-pointer absolute right-2 bottom-2"
                    />
                  </div>
                </div>
                <div className="lg:w-1/3 w-full p-2">
                  <div className="relative border-white rounded-lg border-solid border-2 p-2 py-4 cursor-pointer flex items-center text-white hover:border-[#3CB043]">
                    <div className="px-2">
                      <i className="fa-solid fa-folder text-xl"></i>
                    </div>
                    <div className="w-max">Security Test</div>

                    <i className="fa-solid fa-upload text-lg cursor-pointer absolute right-2 bottom-1"></i>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full p-2">
                  <div className="relative border-white rounded-lg border-solid border-2 p-2 py-4 cursor-pointer flex items-center text-white hover:border-[#3CB043]">
                    <div className="px-2">
                      <i className="fa-solid fa-folder text-xl"></i>
                    </div>
                    <div className="w-max">Forest Surveillance 5</div>
                    <i className="fa-solid fa-upload text-lg cursor-pointer absolute right-2 bottom-1"></i>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full p-2">
                  <div className="relative border-white rounded-lg border-solid border-2 p-2 py-4 cursor-pointer flex items-center text-white hover:border-[#3CB043]">
                    <div className="px-2">
                      <i className="fa-solid fa-folder text-xl"></i>
                    </div>
                    <div className="w-max">Forest Surveillance 6 </div>
                    <i className="fa-solid fa-upload text-lg cursor-pointer absolute right-2 bottom-1"></i>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full p-2">
                  <div className="relative border-white rounded-lg border-solid border-2 p-2 py-4 cursor-pointer flex items-center text-white hover:border-[#3CB043]">
                    <div className="px-2">
                      <i className="fa-solid fa-folder text-xl"></i>
                    </div>
                    <div className="w-max">Forest Surveillance 7</div>
                    <img
                      src="/images/get.png"
                      alt=""
                      className="cursor-pointer absolute right-2 bottom-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="files my-8">
              <h2 className="text-xl lg:text-2xl font-bold mb-9 ml-6">Files</h2>
              <div className="flex flex-wrap">
                <div className="lg:w-1/3 w-full p-2">
                  <img
                    src="/images/file4.png"
                    alt=""
                    className="cursor-pointer hover:border-[#3CB043] hover:border-2 hover:border-solid rounded-xl"
                  />
                </div>
                <div className="lg:w-1/3 w-full p-2">
                  <img
                    src="/images/file5.png"
                    alt=""
                    className="cursor-pointer hover:border-[#3CB043] hover:border-2 hover:border-solid rounded-xl"
                  />
                </div>
                <div className="lg:w-1/3 w-full p-2">
                  <img
                    src="/images/file6.png"
                    alt=""
                    className="cursor-pointer hover:border-[#3CB043] hover:border-2 hover:border-solid rounded-xl"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="bg-nova-grey flex flex-1 flex-col max-w-7xl sm:px-10 px-2 lg:px-12 xl:px-14 mx-auto w-full relative mt-[70px] pt-3">
          {/* The Top nav */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 my-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <div
                onClick={() => setArtemis(false)}
                className="w-full flex  text-[#3CB043] cursor-pointer items-center"
              >
                <div className="px-2">
                  <i className="fa-solid text-xl fa-folder"></i>
                </div>
                <div className="w-max">Folders and Files</div>
              </div>
              <div
                onClick={() => setArtemis(true)}
                className="w-full flex text-[#767676] cursor-pointer items-center"
              >
                <div className="px-2">
                  <i className="fa-solid text-xl fa-floppy-disk"></i>
                </div>
                <div className="w-full">Artemis Drop</div>
              </div>
            </div>
            <div className=" flex text-white cursor-pointer items-center">
              <div className="px-2">
                <i className="fa-solid text-xl fa-folder-plus"></i>
              </div>
              <div className="w-full">Upload Folders and Files</div>
            </div>
          </div>
          {/* The inner form */}
          <section className="text-white bg-nova-black w-full rounded-lg py-14 sm:px-10 px-2 xl:rounded-xl">
            <div className="folders">
              <h2 className="text-xl lg:text-2xl font-bold mb-6 ml-6">
                Folders
              </h2>
              <div className="flex flex-wrap">
                <div className="lg:w-1/3 w-full p-2">
                  <div className=" border-white rounded-lg border-solid border-2 p-2 py-4 cursor-pointer flex items-center text-white hover:border-[#3CB043]">
                    <div className="px-2">
                      <i className="fa-solid fa-folder text-xl"></i>
                    </div>
                    <div className="w-max">Seeding flight</div>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full p-2">
                  <div className=" border-white rounded-lg border-solid border-2 p-2 py-4 cursor-pointer flex items-center text-white hover:border-[#3CB043]">
                    <div className="px-2">
                      <i className="fa-solid fa-folder text-xl"></i>
                    </div>
                    <div className="w-max">Pre-planting operations</div>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full p-2">
                  <div className=" border-white rounded-lg border-solid border-2 p-2 py-4 cursor-pointer flex items-center text-white hover:border-[#3CB043]">
                    <div className="px-2">
                      <i className="fa-solid fa-folder text-xl"></i>
                    </div>
                    <div className="w-max">Checkup Test</div>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full p-2">
                  <div className=" border-white rounded-lg border-solid border-2 p-2 py-4 cursor-pointer flex items-center text-white hover:border-[#3CB043]">
                    <div className="px-2">
                      <i className="fa-solid fa-folder text-xl"></i>
                    </div>
                    <div className="w-max">Forest Surveillance 1</div>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full p-2">
                  <div className=" border-white rounded-lg border-solid border-2 p-2 py-4 cursor-pointer flex items-center text-white hover:border-[#3CB043]">
                    <div className="px-2">
                      <i className="fa-solid fa-folder text-xl"></i>
                    </div>
                    <div className="w-max">Forest Surveillance 2 </div>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full p-2">
                  <div className=" border-white rounded-lg border-solid border-2 p-2 py-4 cursor-pointer flex items-center text-white hover:border-[#3CB043]">
                    <div className="px-2">
                      <i className="fa-solid fa-folder text-xl"></i>
                    </div>
                    <div className="w-max">Forest Surveillance 3</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="files my-8">
              <h2 className="text-xl lg:text-2xl font-bold mb-9 ml-6">Files</h2>
              <div className="flex flex-wrap">
                <div className="lg:w-1/3 w-full p-2">
                  <img
                    src="/images/file1.png"
                    alt=""
                    className="cursor-pointer hover:border-[#3CB043] hover:border-2 hover:border-solid rounded-xl"
                  />
                </div>
                <div className="lg:w-1/3 w-full p-2">
                  <img
                    src="/images/file2.png"
                    alt=""
                    className="cursor-pointer hover:border-[#3CB043] hover:border-2 hover:border-solid rounded-xl"
                  />
                </div>
                <div className="lg:w-1/3 w-full p-2">
                  <img
                    src="/images/file3.png"
                    alt=""
                    className="cursor-pointer hover:border-[#3CB043] hover:border-2 hover:border-solid rounded-xl"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
