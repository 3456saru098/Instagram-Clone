import React from 'react'

export default function RightSide() {
    return (
        <div className='bg-gray-50 px-4 pt-10'>
            <div className='flex items-center justify-between font-semibold opacity-80 mb-8'>
                <p>Suggested for you</p>
                <p className='text-blue-500 cursor-pointer'>See All</p>
            </div>

            <div className='space-y-6'>
                {
                    people.map((eachItem, index) => (

                        <div key={index} className='flex items-center justify-between'>
                            <div className='flex gap-2'>
                                <img height={50} width={50} className="rounded-full object-cover" src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' alt='' />
                                <div>
                                    <p className='text-lg font-semibold'>{eachItem.username}</p>
                                    <p className='opacity-60'>Followed by{eachItem.followedBy}</p>

                                </div>
                            </div>
                            <p className="text-blue-500 font-semibold">Follow</p>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}


const people = [

    {
        profilepicture: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        username: "Sarita Sharma",
        followedBy: " Kripa Khatiwada",
    },
    {
        profilepicture: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        username: "Sarita Sharma",
        followedBy: "Kripa Khatiwada",
    },

    {
        profilepicture: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        username: "absbh",
        followedBy: ",sjdkwi",
    },

    {
        profilepicture: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        username: "jsdkwe",
        followedBy: "majnkdj",
    },

    {
        profilepicture: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        username: "jahkjd",
        followedBy: "nmABSQUWH",
    },


]