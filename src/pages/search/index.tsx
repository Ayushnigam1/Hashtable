import Cards from '@/components/Cards'
import React from 'react'
import { getSectionIndex, getSections, Section } from "lib/sections";
import { getQuestionById, getQuestions } from "lib/question";
import { useRouter } from 'next/router';
import Link from 'next/link'
import Navbar from '@/components/Navbar';

export async function getStaticProps() {
    const questions = getQuestions();
    const sections = await getSections();
    // const questionData = await getQuestionById(question);
    // console.log();
    const section: Section[] = await Promise.all(
        sections.map(async (section: string) => {
            const sectionData: Section = await getSectionIndex(section)
            return { section, ...sectionData }
        })
    )
    questions.forEach((element: any) => {
        console.log(element.tags) 
    });

    const question = questions.map(question => question.id)

    return {
        props: {
            section,
            question
        },
    };
}

const Searchpage = ({ section, question }: { section: Section[], question: string[]}) => {
    const router = useRouter();
    const searchdata = router.query.keyword as string;

    return (
        <>
            <Navbar />
            <div className="flex relative m-20 text-3xl"> your data is search is : {searchdata}</div>
            <section className="xl:max-w-[120ch] mx-4 mt-4 xl:mx-auto">
                <h3>{"Section"}</h3>
                {section.filter((item) => item.section.includes(searchdata)).length > 0 ? <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-4">
                    {section.filter((item) => item.section.includes(searchdata)).map((section: Section, idx: number) => {
                        return <Cards data={section} key={idx} />;
                    })}
                </div> : "data not found"}
                <h3>{"Question"}</h3>
                {question.filter((item: string) => item.includes(searchdata)).length > 0 ? <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-4">
                    {question.filter((item) => item.includes(searchdata)).map((question: string, index: number) => {
                        return <li key={index}>{question}</li>;
                    })}
                </div> : "data not found"}
            </section>

        </>

    )
}

export default Searchpage
