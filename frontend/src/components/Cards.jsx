import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 h-[420px] md:w-96 shadow-xl hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
              className="w-[390px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">Rs.{item.price}</div>
              <div className="badge badge-outline cursor-pointer px-2 py-3 hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
