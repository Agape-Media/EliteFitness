import { Carousel } from "antd";

import Link from "next/link";
import React, { useState } from "react";

export default function CarouselPics() {
  return (
    <>
      <div>
        <Carousel autoplay={true}>
          {Items.map((item, i) => (
            <Item index={i} key={i} img={item.image} content={item.content} />
          ))}
        </Carousel>
      </div>
    </>
  );
}

const Item = ({ img, content, index }) => (
  <>
    <div className="h-96">
      <div
        className={`flex items-center h-full relative ${
          index % 2 !== 0 && "flex-row-reverse"
        }`}
      >
        <div
          style={{
            width: "80%",
            height: "100%",
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            paddingLeft: "300px",
            boxSizing: "border-box",
            boxShadow: `inset ${
              index % 2 === 0 ? "-150px" : "150px"
            }  0 50px 10px #FFF`,
          }}
        ></div>
        <div
          className={`absolute w-6/12 md:w-4/12 ${
            index % 2 === 0 ? "right-0" : "left-0 pl-2"
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  </>
);

const CarouselTextHeader = ({ children }) => (
  <p className="text-base md:text-xl font-bold">{children}</p>
);

const CarouselTextSubheader = ({ children }) => (
  <p className="text-sm text-gray-800 font-semibold">{children}</p>
);
const Items = [
  {
    image: "/freeWeights.jpg",
    content: (
      <>
        <CarouselTextHeader>
          Our commercial section of Elite Fitness features a full circuit of
          selectorized machines organized by muscle group to help you complete
          an efficient and effective workout.
        </CarouselTextHeader>

        <CarouselTextSubheader>
          This section also offers a wide variety of cardio equipment, free
          weights, cable machines and more!
        </CarouselTextSubheader>
      </>
    ),
  },
  {
    image: "/racks.jpg",
    content: (
      <>
        <CarouselTextHeader>
          The warehouse section of Elite Fitness is a unique workout environment
          guaranteed to pump you up for your best workout!{" "}
        </CarouselTextHeader>
        <CarouselTextSubheader>
          This section consists of free-weights, plate loaded equipment,
          dumbbells up to 150lbs, squat racks with platforms, old-school
          equipment, and more!
        </CarouselTextSubheader>
      </>
    ),
  },
  {
    image: "/turf.jpg",
    content: (
      <>
        <CarouselTextHeader>
          The cross-training section of Elite Fitness offers the ultimate
          workout experience for those who are looking to mix up their workout
          routine.
        </CarouselTextHeader>
        <CarouselTextSubheader>
          This section provides a turfed area, tire flip machine, sled,
          cross-training/ninja warrior rig, bumper plates, additional lifting
          stations, kettlebells, sand balls, and more!
        </CarouselTextSubheader>
      </>
    ),
  },
];
