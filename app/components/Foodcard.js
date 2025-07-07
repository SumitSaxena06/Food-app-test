'use client';
import React from 'react';

export default function FoodCard({ id, name, description, imageUrl, price }) {

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden w-full sm:w-60">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-2 text-violet-600 font-bold">₹{price}</div>
        <button
          onClick={() => addToCart({ id, name, price })}
          className="mt-4 w-full bg-violet-600 text-white font-semibold py-2 px-4 rounded hover:bg-violet-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
