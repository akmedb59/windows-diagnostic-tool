import React from 'react'
import Image from 'next/image'

const CustomerCard = () => {
  return (
    <div className="border p-8 rounded-xl shadow-md">
      <div className="text-base text-gray-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quas
        molestiae accusamus.
      </div>
      <hr className="my-5 " />
      <div className="flex items-center gap-4 pt-5">
        <div>
          <Image src="/person-image.avif" width={50} height={50} alt="quote" className='rounded-full  aspect-square object-cover'/>
        </div>
        <div className="">
         <div className='font-semibold'>Jesica A</div>
         <div className='text-sm text-gray-600'>Web Developer</div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard