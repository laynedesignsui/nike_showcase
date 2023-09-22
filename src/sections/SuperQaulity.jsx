import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQaulity = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span>{" "}
          <span className="text-coral-red"> Qauilty</span> Shoes
        </h2>
        <p className="mt-8 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you unmated qaulity,
          innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excewllence ensures your satisfaction
        </p>
        <div className="mt-8">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={570} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQaulity;
