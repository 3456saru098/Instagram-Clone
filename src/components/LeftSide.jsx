import React from 'react'
import { AtSign, Bell, Compass, Film, House, Menu, MessageCircleCode, Search, SquarePlus, User } from 'lucide-react';
export default function LeftSide() {
    return (
        <div className='bg-gray-50 px-4 border-r border-gray-300'>
            <p>Instagram</p>

            <div className='flex flex-col justify-between h-[96vh]'>
                <div>
                    {
                        linksTop.map((eachItem, index) => (


                            <div key={index} className='flex items-center gap-2 font-semibold py-2 hover:bg-gray-200 cursor-pointer px-2 rounded-md opacity-80'>
                                {eachItem.icon}
                                <p>{eachItem.title}</p>
                            </div>
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
    },

    {
        icon: <Search />,
        title: "Search",
    },

    {
        icon: <Compass />,
        title: "Explore",
    },

    {
        icon: <Film />,
        title: "Reels",
    },

    {
        icon: <MessageCircleCode />,
        title: "Message",
    },

    {
        icon: <Bell />,
        title: "Notification",
    },

    {
        icon: <SquarePlus />,
        title: "Create",
    },


    {
        icon: <User />,
        title: "Profile",
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