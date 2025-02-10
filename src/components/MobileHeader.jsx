import {  ChevronDown, Heart, MessageCircle } from 'lucide-react'
import React from 'react'
import Saru from "../../public/logo.png"
export default function MobileHeader() {
  return (
   <div className='block md:hidden'>
     <div className='flex items-center justify-between p-4  '>
      <div className='flex items-center '>
       <img src={Saru} className='w-32' alt=''/>
       <ChevronDown size={30}/>

      </div>
     
     <div className='flex items-center gap-8'>
        <Heart size={30}/>
        <MessageCircle size={30}/>
     </div>


    </div>
   </div>
  )
}
