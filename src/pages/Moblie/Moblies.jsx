import React, { useEffect, useState } from 'react';
import Moblie from '../Mobli/Moblie';

const Moblies = ({mobiles}) => {

    const [displayphone,setDisplayphone] = useState([])
    const [showAll,setShowAll] = useState(false)
    console.log(mobiles);
    

    useEffect(()=>{


        if(showAll){

            setDisplayphone(mobiles)
        }else{
            setDisplayphone(mobiles.slice(0,6))
        }
    },[mobiles,showAll])
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-11/12 mx-auto'>
            {
               displayphone.map(moblie=> <Moblie key={moblie.id} moblie={moblie}></Moblie>)
            }
           </div>

          <div className='w-11/12 mx-auto mt-5'>
          <button onClick={()=>{

setShowAll(prv =>!prv)
if(showAll)window.scrollTo({
    top:500,
    behavior:'smooth'
})
          }} href="#_" class="relative inline-block text-lg group ">
    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span class="relative">{showAll?'Show Less':'Show All'}</span>
    </span>
    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button>
          </div>
        </div>
    );
};

export default Moblies;