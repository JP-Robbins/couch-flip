import React from 'react';
import Image from './sectional.jpeg';

const Body = () => {
    return(


        <div className='flex space-x-3' >
            <img className='max-w-md rounded-lg mt-4' src={Image} alt='sectional'></img>

            <div className='flex flex-wrap justify-center mt-4 bg-emerald-100 rounded-md'>
            <h1 className='font-bold flex flex-row'>Quality Sofas without the Quality price!</h1>
            <p className=''>Welcome to <strong>The Sofa Source</strong>, we a small family run business based in Winchester, KY. we specialize in buying, refurbishing, and reselling Luxury Sofas and sectionals. Originally based in Central Kentucky, we are new to the area, but are looking to build a relationship with the great community of Winchester and surrounding cities. Please take a look at our products page and see if we have anything you might be interested. We also offer removal! if you have an old couch that you need to be removed please dont hesistate to reach out to us! Jacob is a small bitch </p>
        </div>
        </div>
    )
}

export default Body;