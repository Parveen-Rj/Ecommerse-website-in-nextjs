import React from "react";
export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://i.pinimg.com/474x/1b/f3/03/1bf303bc6d5ad64804409a63f297883d.jpg"
          alt="delicious foods banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Shop now for Exclusive Foods Discont!
        </p>
        <button
          type="button"
          className="bg-blue-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-cyan-600 transition duration-300"
        >
          Exciting Deals launch at 12
        </button>
      </div>
    </div>
  );
}
