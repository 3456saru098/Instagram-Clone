import React from 'react'
import { AtSign, Bell, Compass, Film, House, Menu, MessageCircleCode, Search, SquarePlus, User } from 'lucide-react';
import  logo from "../../public/logo.png"
import { NavLink } from 'react-router';

export default function LeftSide() {
    return (
        <div className='bg-gray-50 px-4 border-r border-gray-300 pt-10 '>
            {/* <p>Instagram</p> */}
            <img  className="w-32 mb-8" src={logo} alt=''/>

            <div className='flex flex-col justify-between h-[88vh] '>
                <div className='space-y-2'>
                    {
                        linksTop.map((eachItem, index) => (


                             <NavLink
                             to={eachItem.path}
                            key={index} className='flex items-center gap-2 font-semibold py-2 hover:bg-gray-200 cursor-pointer px-2 rounded-md opacity-80'>
                                {eachItem.icon}
                                <p>{eachItem.title}</p>
                            </NavLink>
                        ))
                    }


                </div>
                <div>
                {
                        linksButton.map((eachItem, index) => (


                            <div key={index} className='flex items-center gap-2 font-semibold py-2 hover:bg-gray-200 cursor-pointer px-2 rounded-md opacity-80'>
                                {eachItem.icon}
                                <p>{eachItem.title}</p>
                            </div>



                        ))

                    }
                </div>
            </div>
        </div>
    )
}





const linksTop = [

    {
        icon: <House />,
        title: "Home",
        path: "/",
    },

    {
        icon: <Search />,
        title: "Search",
        path: "/",

    },

    {
        icon: <Compass />,
        title: "Explore",
        path: "/explore",

    },

    {
        icon: <Film />,
        title: "Reels",
        path: "/reels",

    },

    {
        icon: <MessageCircleCode />,
        title: "Messages",
        path: "/messages",

    },

    {
        icon: <Bell />,
        title: "Notifications",
        path: "/notifications",

    },

    {
        icon: <SquarePlus />,
        title: "Create",
        path: "/create",

    },


    {
        icon: <User />,
        title: "Profile",
        path: "/profile",

    },

]



const linksButton = [


    {
        icon: <AtSign />,
        title: "Threads",
    },

    {
        icon: <Menu />,
        title: "More",
    },


]