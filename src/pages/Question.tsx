import Navbar from "../components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import { getQuestions } from "lib/question";

export async function getStaticProps() {
const allQuestionsData = getQuestions();
  return {
    props: {
      allQuestionsData,
    },
  };
}
const Question = ({allQuestionsData}:any) => {
  return (
    <>
        <Navbar />
        {allQuestionsData.map(({id,date,title}:any)=>(
      <div className=" z-0 flex relative top-20" key={id}>

        <div className="m-10">
          <div className="rounded-lg w-60 max-h-fit bg-gray-300 shadow-sm  p-3 mt-5">
            <p className="text-gray-700 text-base mb-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit voluptate, voluptatibus vitae vero suscipit aspernatur, natus voluptates corrupti perspiciatis iusto voluptatem. Modi nemo deserunt officiis, a fugit quia natus qui? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      
        <div className=" flex justify-center items-center" >
          <div className="">
            <h1 className="text-3xl mb-3">{title}</h1>
            <div className="rounded-lg max-w-lg max-h-fit bg-gray-300 shadow-sm  p-3">
              <p className="text-gray-700 text-base mb-4 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                deserunt inventore deleniti sequi assumenda voluptates nulla
                dolore sed reiciendis culpa.
                <h1>{date}</h1>
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
       ))}
      <Footer/>
    </>
  );
};

export default Question;
