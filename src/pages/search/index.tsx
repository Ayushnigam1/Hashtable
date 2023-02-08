import Cards from "@/components/Cards";
import React,{useState } from "react";
import { getSectionIndex, getSections, Section } from "lib/sections";
import { getQuestions, Question } from "lib/question";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HeroProps } from "../../components/Hero";
import Router from "next/router";
// import useState from 'react';

export async function getStaticProps() {
  const question: Question[] = await getQuestions();
  const sections = await getSections();

  const section: Section[] = await Promise.all(
    sections.map(async (section: string) => {
      const sectionData: Section = await getSectionIndex(section);
      return { section, ...sectionData };
    })
  );

  return {
    props: {
      section,
      question,
    },
  };
}

const Searchpage = ({
  section,
  question,
}: {
  section: Section[];
  question: Question[];
}) => {

  const router = useRouter();
  const searchdata = router.query.keyword as string;
  // console.log(question.filter(item=>item.difficulty=='easy'));
  const [val,setval] = useState('');
  return (
    
    <>
      <Navbar mode="sticky" />

      <Hero length="md:h-[300px]">
        <h3 className="font-bold text-2xl flex justify-center">Problems</h3>
        <Search input={searchdata} />
      </Hero>
      <div className="flex justify-center flex-col sm:flex-row">
      <div className=" xl:w-80 m-3">
    <select className=" w-full
      px-5
      py-1.5
      font-semibold
      prose
      dark:prose-invert 
      border border-gray-600
      rounded
      transition
      ease-in-out
      focus:prose focus:outline-none" onChange={(e)=>{setval(e.target.value)}}>
        <option selected disabled>Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
    </select>
  </div>
  <div className="xl:w-80 m-3">
    <select className=" w-full
      px-5
      py-1.5
      font-semibold
      prose
      dark:prose-invert 
      border border-gray-600
      rounded
      transition
      ease-in-out
      focus:prose focus:outline-none" aria-label="Default select example">
        <option selected disabled>Tags</option>
        <option value="recursion">Recursion</option>
        <option value="2">Two pointer</option>
        <option value="3">Merge</option>
        <option value="4">DP</option>
        <option value="5">Sorting</option>
        <option value="6">Linear Search</option>
        <option value="7">Binary search</option>
    </select>
  </div>
  <div className="m-3 xl:w-80 ">
    <select className="
      w-full
      px-5
      py-1.5
      font-semibold
      prose
      dark:prose-invert 
      border border-gray-600
      rounded
      transition
      ease-in-out
      focus:prose focus:outline-none ">
        <option selected disabled>Topics</option>
        <option value="array">Arrays</option>
        <option value="linked list">Linked List</option>
        <option value="stack">Stack</option>
        <option value="queue">Queue</option>
        <option value="graph">Graph</option>
        <option value="tree">Trees</option>
    </select>
  </div>
      </div>
      <section className="xl:max-w-[120ch] mx-4 mt-4 xl:mx-auto flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <h3 className="font-bold text-2xl">Questions</h3>
          <table className="table-auto w-full ">
            <thead>
              <tr>
                {["#", "Name", "Difficulty"].map((heading, index) => (
                  <th
                    key={index}
                    className="border-b border-gray-300 font-bold dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-200 text-left"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {question.filter((question: Question) =>
                question.id.includes(searchdata)
              ).length > 0 ? (
                <>
                  {question
                    .filter((question: Question) =>
                      question.id.includes(searchdata)
                    )
                    .map((question: any, index: number) => {
                      return (
                        <tr
                          key={index}
                          className="  transition ease-in-out hover:scale-105 hover:bg-slate-200 dark:hover:bg-gray-700"
                        >
                          <td className="border-b border-gray-300 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                            {index + 1}
                          </td>
                          <td className="border-b border-gray-300 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 capitalize">
                            <a href={`./questions/${question.id}`}>
                              {question.id.replace(/_/g, " ")}
                            </a>
                          </td>
                          <td className="border-b  border-gray-300 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                            {question.difficulty}
                          </td>
                        </tr>
                      );
                    })}
                </>
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-4">Topics</h3>
          {section.filter((item) => item.section.includes(searchdata)).length >
          0 ? (
            <div className="flex flex-col justify-center max-w-xs gap-4">
              {section
                .filter((item) =>
                  item.section.includes(searchdata.toLowerCase())
                )
                .map((section: Section, idx: number) => {
                  return (
                    <Cards
                      className="rounded-lg shadow-lg bg-transparent max-h-fit opacity-80 hover:bg-gray-300 hover:shadow-2xl hover:opacity-100 relative"
                      key={idx}
                      title={section.title}
                    />
                  );
                })}
            </div>
          ) : (
            <h1 className="font-normal flex text-lg m-2 justify-center">
              Oops! data does not exist......
            </h1>
          )}
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
};

export default Searchpage;
