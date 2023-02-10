import React, { useEffect, useState } from "react"
import { getQuestions, Question } from "lib/question"
import { useRouter } from "next/router"
import Navbar from "@/components/Navbar"
import Search from "@/components/Search"
import { Hero } from "@/components/Hero"
import Router from "next/router"
import Tag from "@/components/Tag"
import {Select} from "@mantine/core"
import { search } from "lib/search"

const tg = []

const tp = [

]

const diff = [
    { level: "Hard" },
    { level: "Medium" },
    { level: "Easy" },
]

export async function getStaticProps() {
    const question: Question[] = await getQuestions();

    // const sections = await getSections();

    // TODO: To be replaced by topics
    // const section = await Promise.all(
    //   sections.map(async (section: string) => {
    //     const sectionData = await getSectionIndex(section);
    //     return { section, ...sectionData };
    //   })
    // );

    return {
        props: {
            question,
        },
    };
}

const Searchpage = ({ question }: { question: any[] }) => {

    const router = useRouter();
    const searchdata = router.query.keyword as string;
    const [difficulty, setDifficulty] = useState<string | null>(null);
    const [topics, setTopics] = useState<string | null>(null);
    const [tags, setTags] = useState<string[]>([]);
    const [ques, setQuestions] = useState<Question[]>([]);

    const handleAdd = (tag: string) => {
        setTags([...tags, tag]);
    };

    const handleRemove = (tag: string) => {
        setTags(tags.filter((t) => t !== tag));
        Router.back();
    };

    useEffect(() => {
        setQuestions(search(searchdata, [], [], question))
    }, [question, searchdata])

    return (
        <>
            <Navbar mode="sticky" />
            <Hero length="md:h-[300px]">
                <h3 className="font-bold text-2xl flex justify-center">Problems</h3>
                <Search onEnter={(searchTerm) => Router.push(`/search?keyword=${searchTerm.toLowerCase()}`)} />
            </Hero>
            <section className="xl:max-w-[120ch] mx-4 mt-4 xl:mx-auto">
            <div className="flex justify-center flex-col sm:flex-row py-4">
                <div className="xl:w-80 m-3">
                    <select className="w-full px-5 py-1.5 font-semibold prose dark:prose-invert border border-gray-600 rounded transition ease-in-out focus:prose focus:outline-none" aria-label="Default select example" onSelect={(e) => console.log(e.currentTarget.item)}>
                        <option selected disabled>Tags</option>
                        <option value="recursion">Recursion</option>
                        <option value="2">Two pointer</option>
                        <option value="3">Merge</option>
                        <option value="4">DP</option>
                        <option value="5">Sorting</option>
                        <option value="6">Linear Search</option>
                        <option value="7">Binary search</option>
                    </select>
                    {tags.map((tag) => (
                        <Tag key={tag} tag={tag} onRemove={handleRemove} />
                    ))}
                </div>
                <div className="m-3 xl:w-80 ">
                    <select className="w-full px-5 py-1.5 font-semibold prose dark:prose-invert border border-gray-600 rounded transition ease-in-out focus:prose focus:outline-none ">
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
                            {ques.length > 0 ? (
                                <>
                                    {ques.map((question: any, index: number) => {
                                            return (
                                                <tr
                                                    key={index}
                                                    className="transition ease-in-out hover:scale-105 hover:bg-slate-200 dark:hover:bg-gray-700">
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
            </section>
        
        </>
    );
};

export default Searchpage;
