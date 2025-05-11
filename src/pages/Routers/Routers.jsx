import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Error from '../Error/Error';
import Home from '../Home/Home'
import About from '../About/About';
import MobileDeatils from '../moblieDeatils/MobileDeatils';
export const routers = createBrowserRouter([

    {
        path:'/', Component:Root,
        errorElement:<Error></Error>,
        children:[

            {index:true,
                path:'/', 
                hydrateFallbackElement:<p>Data loading please wait.....</p>,
                loader:()=>fetch('../phonedata.json'),
                Component:Home

            },

            { path:'about', Component:About},
            {path:'details/:id',
                loader:()=>fetch('../phonedata.json'),
                Component:MobileDeatils}
        ]
    }
])