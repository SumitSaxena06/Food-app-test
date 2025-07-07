'use client';
import React from "react";
import FoodCard from "./components/Foodcard";


export default function Home() {
  const foods = [
    {
      id:1,
      name : "Pizza Combo",
      description : "classic indian food served with hot brownie",
      imageUrl : 'https://res.cloudinary.com/diufi9jim/image/upload/v1751828543/cld-sample-4.jpg',
      price : 499
    },
    {
      id:2,
      name:"Burger with Coke",
      description:"Take your cravings to the next level try our burger now",
      imageUrl: "https://res.cloudinary.com/diufi9jim/image/upload/v1751828543/cld-sample-4.jpg",
      price: 699
    },
    {
      id:3,
      name:"Cheez burst Pizza",
      description:"Take your cravings to the next level try our burger combo",
      imageUrl: "https://res.cloudinary.com/diufi9jim/image/upload/v1751828543/cld-sample-4.jpg",
      price: 699
    },
    {
      id:4,
      name:"Italian Pizza",
      description:"serving the best italian pizza you get",
      imageUrl: "https://res.cloudinary.com/diufi9jim/image/upload/v1751828543/cld-sample-4.jpg",
      price: 199
    },
    {
      id:5,
      name : "Paneer Tikka",
      description : "classic indian food served with hot brownie",
      imageUrl : 'https://res.cloudinary.com/diufi9jim/image/upload/v1751828543/cld-sample-4.jpg',
      price : 499
    },
    {
      id:6,
      name:"Rajma Chawal",
      description:"Take your cravings to the next level try our Rajma chawal now",
      imageUrl: "https://res.cloudinary.com/diufi9jim/image/upload/v1751828543/cld-sample-4.jpg",
      price: 699
    },
    {
      id:7,
      name:"Speacial Sandwitch",
      description:"Take your cravings to the next level try our Special sandwitch combo",
      imageUrl: "https://res.cloudinary.com/diufi9jim/image/upload/v1751828543/cld-sample-4.jpg",
      price: 699
    },
    {
      id:8,
      name:"Full Plater",
      description:"serving the best indian full plater you get",
      imageUrl: "https://res.cloudinary.com/diufi9jim/image/upload/v1751828543/cld-sample-4.jpg",
      price: 199
    }
  ]
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center text-black">Order Whatever You Like</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {foods.map((food) => (
          <FoodCard key={food.id} {...food} />
        ))}
      </div>
    </div>
  );

}
