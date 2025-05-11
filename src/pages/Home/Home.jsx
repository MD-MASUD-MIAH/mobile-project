import React, { useState } from 'react';
import Banner from '../../components/banner/Banner';
import Moblies from '../Moblie/Moblies';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData()

    const [mobiles,setMobiles] = useState(data)


    

   const handlesearchButton = (e,text)=>{

    e.preventDefault()
  if(text === '') {


    return setMobiles(data)
  }
    const searchedPhone = data.filter(mobile=>

        mobile.name.toLowerCase().split(' ').includes(text.toLowerCase() ) ||
        mobile.brand.toLowerCase().split(' ').includes(text.toLowerCase() )  
    )
    
  setMobiles(searchedPhone)
    
   }

   
   
    
    return (
        <div>
         <div className='mx-auto w-11/12'>
         <Banner handlesearchButton={handlesearchButton}></Banner>
         <Moblies mobiles={mobiles}></Moblies>
         </div>
        </div>
    );
};

export default Home;