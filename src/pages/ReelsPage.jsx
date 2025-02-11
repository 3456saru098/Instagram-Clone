import { Camera, ChevronDown, Heart, MessageCircle, MoreHorizontal, Music, Send, Share } from "lucide-react";
import React from "react";

export default function ReelsPage() {
  return (
    <div className="px-4 ">
      


      {
     reels.map((eachItem,index)=>(

<div  key={index} className="relative">
        <video
          className="w-full"
          autoPlay={true}
          controls={true}
          muted={true}
          src="https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4"
        ></video>

      <div className=" absolute top-0 flex items-center justify-between w-full text-white p-4">
        <div className="flex items-center">
          <p className="text-2xl font-semibold">Reels</p>
          <ChevronDown  size={28}/>
        </div>
        <Camera size={28} />
      </div>

<div className=" text-white p-4 absolute bottom-12 flex justify-between items-end w-full"> 
  <div>
   <div className="flex items-center gap-2">
    <img className="h-12 w-12 rounded-full object-cover" src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt=""/>
    <div>
      <p className="text-sm">Saru Sharma</p>
      <p className="text-xs flex items-center gap-1"> <Music size={12}/>Harayeaaaa maaa</p>
    </div>
   </div>


  </div>
  <div className="space-y-6">
    <Heart size={28}/>
    <Send size={28}/>
    <MessageCircle  size={28}/>
    <MoreHorizontal size={28}/>
    <Music size={28}/>

  </div>

</div>


      </div>



     ))


      }
    </div>
  );
}


const reels=[

  { 
    id:1,
    username: "Saru Sharma",
    music: "Harayea ma",
    video: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },

  { 
    id:1,
    username: "Saru Sharma",
    music: "Harayea ma",
    video: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },

  { 
    id:1,
    username: "Saru Sharma",
    music: "Harayea ma",
    video: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },

  { 
    id:1,
    username: "Saru Sharma",
    music: "Harayea ma",
    video: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },

  { 
    id:1,
    username: "Saru Sharma",
    music: "Harayea ma",
    video: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },

  { 
    id:1,
    username: "Saru Sharma",
    music: "Harayea ma",
    video: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },

  { 
    id:1,
    username: "Saru Sharma",
    music: "Harayea ma",
    video: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },

  { 
    id:1,
    username: "Saru Sharma",
    music: "Harayea ma",
    video: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },

  { 
    id:1,
    username: "Saru Sharma",
    music: "Harayea ma",
    video: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },

  { 
    id:1,
    username: "Saru Sharma",
    music: "Harayea ma",
    video: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },

  { 
    id:1,
    username: "Saru Sharma",
    music: "Harayea ma",
    video: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },



];