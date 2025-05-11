import React, {  useState } from 'react';
import banner from '../../assets/banner-WmQbwYpD.png'
const Banner = ({handlesearchButton}) => {
const [searchText,setSearchText] = useState('')



    return (
        <div className='mx-auto w-11/12 mt-14'>
        <img className=' w-[600px] mx-auto' src={banner} alt="" />

        <div className='text-center mt-2 space-y-3'>
            <h1 className='text-4xl md:text-8xl'> Browse, Search, View, Buy</h1>

            <p className='text-gray-400'>Best place to browse, search, view details and purchase of top flagship phones <br />
of the current time - FlagshipFaceOff

</p>

<form onSubmit={(e)=>{handlesearchButton(e,searchText) ,setSearchText('')}} className='mt-10 space-x-8 flex items-center justify-center'>

<input 
value={searchText}
onChange={e=> setSearchText(e.target.value)}
type="text" placeholder="search here" className="input w-[50%]" />
   <button type='submit' href="#_" class="relative inline-block text-lg group ">
    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span class="relative">Search</span>
    </span>
    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button>
</form>
        </div>

        
        </div>
    );
};

export default Banner;