import React from 'react';
import { useLoaderData, useParams,  } from 'react-router';

const MobileDeatils = () => {

    const data = useLoaderData()

   const {id} = useParams()


      const finds = data.find(res=>res.id == id)
  
    const {
  brand,
  name,
  model,
  image,
  price,
  description,
  storage,
  camera_info
} = finds;
    
    
    return (
   <div className="p-4">
    {/* Title Section */}
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-gray-900">Mobile Details</h1>
      <p className="text-gray-600 mt-2">Explore the specs and features of the latest {brand} flagship.</p>
    </div>

    {/* Mobile Card */}
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-52 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">
          {brand} {name}
        </h2>
        <p className="text-sm text-gray-600 mb-2">{model}</p>
        <p className="text-gray-700 mb-4">{description}</p>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">Available Storage Options</h3>
          <ul className="list-disc list-inside text-gray-600">
            {storage.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">Price</h3>
          <ul className="text-gray-600">
            {Object.entries(price).map(([key, val]) => (
              <li key={key}>
                {key}: <span className="font-medium">{val}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">Camera Info</h3>
          <p className="text-gray-600">{camera_info}</p>
        </div>
      </div>
    </div>
  </div>

    );
};

export default MobileDeatils;