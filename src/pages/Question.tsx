import Navbar from "../components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea, Grid } from "@mui/material";
// import Box from "@mui/material/Box";

const Question = () => {
  return (
    <>
        <Navbar />
      <div className=" z-0 flex relative top-20">
        <div className="m-10">
          <div className="rounded-lg w-60 max-h-fit bg-gray-300 shadow-sm  p-3 mt-5">
            <p className="text-gray-700 text-base mb-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit voluptate, voluptatibus vitae vero suscipit aspernatur, natus voluptates corrupti perspiciatis iusto voluptatem. Modi nemo deserunt officiis, a fugit quia natus qui? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <div className="">
            <h1 className="text-3xl mb-3">Question page</h1>
            <div className="rounded-lg max-w-lg max-h-fit bg-gray-300 shadow-sm  p-3">
              <p className="text-gray-700 text-base mb-4 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                deserunt inventore deleniti sequi assumenda voluptates nulla
                dolore sed reiciendis culpa.
              </p>
            </div>
            <div className="rounded-lg max-w-lg min-h-max  bg-gray-300 shadow-sm  p-3 mt-5">
              <p className="text-gray-700 text-base mb-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                deserunt inventore deleniti sequi assumenda voluptates nulla
                dolore sed reiciendis culpa. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Nostrum, cumque provident
                quibusdam animi repellat illum facilis ut, culpa, dolorem
                laborum in ea corrupti expedita ex esse! Tenetur sapiente
                voluptate consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, saepe a odio eius animi modi obcaecati sit, dolore, vero nulla id cumque distinctio optio esse neque tempore officia architecto nihil.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Question;
