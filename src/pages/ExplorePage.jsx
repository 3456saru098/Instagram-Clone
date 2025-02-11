import { Search } from "lucide-react";
import React from "react";

export default function ExplorePage() {
  return (
    <div className="mt-3 p-7">
      <div>
        <div className="border border-gray-300 gap-6 flex items-center rounded-2xl mr-30">
          <Search className="ml-5" size={18} />
          <span>
            <input type="text" placeholder="search" />
          </span>
        </div>

        {/* photo and video section */}
        <div className="grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-5 gap-0.5">
          {medialibrary.map((eachItem, index) => (
            <div key={index} >
              {eachItem.type === "image" ? (
                <img  className="h-full w-full object-cover relative" src={eachItem.src} alt={`media-${index}`} />
              ) : (
                <video className="h-full w-full object-cover relative"
                  autoPlay={true}
                  controls={true}
                  muted={true}
                  src={eachItem.src}
                ></video>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const medialibrary = [
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1703631158408-6f6d3f984de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxGRzJpSm5YeTZDb3x8ZW58MHx8fHx8",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1703631158408-6f6d3f984de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxGRzJpSm5YeTZDb3x8ZW58MHx8fHx8",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1703631158408-6f6d3f984de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxGRzJpSm5YeTZDb3x8ZW58MHx8fHx8",
  },
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1703631158408-6f6d3f984de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxGRzJpSm5YeTZDb3x8ZW58MHx8fHx8",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1703631158408-6f6d3f984de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxGRzJpSm5YeTZDb3x8ZW58MHx8fHx8",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1703631158408-6f6d3f984de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxGRzJpSm5YeTZDb3x8ZW58MHx8fHx8",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1703631158408-6f6d3f984de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxGRzJpSm5YeTZDb3x8ZW58MHx8fHx8",
  },
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1703631158408-6f6d3f984de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxGRzJpSm5YeTZDb3x8ZW58MHx8fHx8",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1703631158408-6f6d3f984de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxGRzJpSm5YeTZDb3x8ZW58MHx8fHx8",
  },
];