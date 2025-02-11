import React from "react";
import {
  CirclePlus,
  Grid,
  Lock,
  Menu,
  Plus,
  PowerSquareIcon,
  SaveIcon,
  SquarePlus,
  TagIcon,
  User,
} from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Volleyball } from "lucide-react";
export default function ProfilePage() {
  return (
    <div className="w-9/12  mx-auto ml-40 overflow-y-scroll ">
      {/* Top section */}
      <div className="px-4 mt-3 flex space-x-20">
        <div className="flex items-center">
          <Lock size={15} />
          <p className="font-bold">saru_sharma1007</p>
          <ChevronDown size={15} />
        </div>

        <div className="flex space-x-4 ">
          <Volleyball size={25} />
          <SquarePlus size={25} />
          <Menu size={25} />
        </div>
      </div>

      {/* Second section*/}
      <div className="flex space-x-5 mt-4 pr-4">
        <img
          className="rounded-full object-cover h-16 w-16"
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />

        <div className="space-y-2">
          <p className="font-semibold">Saru Sharma</p>
          <div className="flex space-x-10">
            <div className="grid">
              <p className="font-semibold">6 </p>
              <span className="font-normal">posts</span>
            </div>
            <div className="grid">
              <p className="font-semibold">678 </p>
              <span className="font-normal">followers</span>
            </div>
            <div className="grid">
              <p className="font-semibold">300</p>
              <span className="font-normal">following</span>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="mt-4">
        <p>U ain't that until you try hard to achieve that</p>
        <p>Hare krishna!!!!</p>
        <div className="mt-4 flex items-center space-x-1">
          <Volleyball size={13} />
          <p>sarusharma870</p>
        </div>
      </div>

      {/* Fourth section */}

      <div className="flex space-x-3 mt-4 ">
        <button className="border border-black rounded-md py-1 px-6.5 hover:bg-gray-300 cursor-pointer">
          {" "}
          Edit profile
        </button>
        <button className="border border-black rounded-md py-1 px-6.5  hover:bg-gray-300 cursor-pointer">
          {" "}
          Share profile
        </button>

        <p className="border border-black rounded-md py-1 px-6.5 flex">
          {" "}
          +<User />{" "}
        </p>
      </div>

      {/* Fifth Section */}
      <div className="mt-4">
        <div className="border-2 border-gray-500 rounded-full p-0.5 w-max">
          <Plus size={70} className="bg-gray-100 rounded-full " />
        </div>
        <p className="font-semibold text-sm opacity-70 px-6">New</p>
      </div>
      <hr/>

      {/* Sixth Section */}
      <div className="mt-4 ml-60 flex gap-8">
        <div className="flex gap-1 items-center">
          <Grid className="opacity-70" size={20} />
          <span className="text-sm font-medium ">POSTS</span>
        </div>
        <div className="flex gap-1 items-center">
          <SaveIcon className="opacity-70" size={20} />
          <span className="text-sm font-medium ">SAVED</span>
        </div>
        <div className="flex gap-1 items-center">
          <TagIcon className="opacity-70" size={20} />
          <span className="text-sm font-medium ">TAGGED</span>
        </div>
      </div>
     

      {/* Post section */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        <img className="border border-gray-200 h-70 w-80 object-cover rounded-sm"
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <img className="border border-gray-200 h-70 w-80 object-cover rounded-sm"
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <img className="border border-gray-200 h-70 w-80 object-cover rounded-sm"
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <img className="border border-gray-200 h-70 w-80 object-cover rounded-sm"
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <img className="border border-gray-200 h-70 w-80 object-cover rounded-b-sm"
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <img className="border border-gray-200 h-70 w-80 object-cover rounded-sm"
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <img className="border border-gray-200 h-70 w-80 object-cover rounded-sm"
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <img className="border border-gray-200 h-70 w-80 object-cover rounded-sm"
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <img className="border border-gray-200 h-70 w-80 object-cover rounded-sm"
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
}
