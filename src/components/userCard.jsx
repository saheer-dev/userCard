import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserCard() {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        //   console.log(res.data);
        setuserData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

//   console.log(userData);

  return (
    <div className="w-screen">
      <div className="w-[90vw] mx-auto grid md:grid-cols-2 grid-cols-1 gap-4 ">
        {userData.map((user) => (
          <div className="  flex items-start text-white  font-[500] rounded-[16px] overflow-hidden">
            <div className="bg-[#f8c26f] w-full h-full  max-w-[40%] p-5 text-[16px] flex items- justify-center flex-col">
              <div className="w-fit">
                <svg
                  aria-hidden="true"
                  role="img"
                  className="h-16w-16 w-16 text-white rounded-full mx-auto"
                  // width=
                  // height=
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
                  />
                </svg>
              </div>

              <h1 className="font-[600] capitalize">{user.name}</h1>
              <h1 className="font-[500] capitalize text-[14px] text-orange-900">
                Username: {user.username}
              </h1>

              <h1 className="text-zinc-700 text-[17px] mt-4 ">Address:</h1>
              <p className="text-[13px] capitalize">
                street : {user.address.street}
              </p>
              <p className="text-[13px] capitalize">
                suite : {user.address.suite}
              </p>
              <p className="text-[13px] capitalize">
                city : {user.address.city}
              </p>
              <p className="text-[13px] capitalize">
                zipcode : {user.address.zipcode}
              </p>
            </div>
            <div className="bg-[#424242] h-full w-full max-w-[70%] p-5">
              <h1 className="w-full pb-[2px] border-b-[1px] border-[#676666]">
                Information
              </h1>
              <div className="grid md:grid-cols-2 gap-y-4 justify-between py-2">
                <div className="text-[12px] w-full">
                  <h1>Email</h1>
                  <h1>{user.email}</h1>
                </div>
                <div className="text-[12px] w-full">
                  <h1>Phone</h1>
                  <h1>{user.phone}</h1>
                </div>
                <div className="text-[12px] w-full">
                  <h1>web</h1>
                  <h1 className="hover:text-blue-600 underline cursor-pointer">
                    {user.website}
                  </h1>
                </div>
              </div>
              <h1 className="w-full pb-[2px] border-b-[1px] border-[#676666] mt-4">
                Company
              </h1>
              <div className="flex justify-between py-2">
                <div className="text-[12px] w-full capitalize">
                  <h1>{user.company.name}</h1>
                  <h1>{user.company.cachephrase}</h1>
                  <h1>{user.company.bs}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}