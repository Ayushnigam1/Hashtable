import React, { useEffect, useState } from "react"
import { getQuestions, Question } from "lib/question"
import { useRouter } from "next/router"
import Navbar from "@/components/Navbar"
import Search from "@/components/Search"
import { Hero } from "@/components/Hero"
import Router from "next/router"
import Tag from "@/components/Tag"
import { search } from "lib/search"
import { Button, Select } from "@mantine/core"

const tp = [
    "Array",
    "Linked List",
    "Stack",
    "Queue",
    "Graph",
    "Trees"
]

const tg = [
    "Recursion",
    "Two pointer",
    "Merge",
    "DP",
    "Sorting",
    "Linear Search",
    "Binary search",
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

    const handleRemove = (tag: string) => {
        setTags(tags.filter((t) => t !== tag));
    };

    useEffect(() => {
        setQuestions(search(searchdata, tags, difficulty, topics, question))
    }, [question, searchdata, tags, difficulty, topics])

    return (
        <>
            <Navbar mode="sticky" />
            <Hero length="md:h-[300px]">
                <h3 className="font-bold text-2xl flex justify-center">Problems</h3>
                <Search onEnter={(searchTerm) => Router.push(`/search?keyword=${searchTerm.toLowerCase()}`)} />
            </Hero>
            <section className="xl:max-w-[120ch] mx-4 mt-4 xl:mx-auto">
                <div className="flex justify-between flex-col sm:flex-row py-4 gap-4 sm:justify-right">
                    <Select
                        className="flex-grow"
                        placeholder="Difficulty"
                        onChange={(e) => { setDifficulty(e) }}
                        data={diff.map(d => d.level)}
                    />
                    <div className="flex-grow">
                        <Select
                            placeholder="Tags"
                            onChange={(e) => {
                                if (e != undefined) setTags([...tags, e])
                            }}
                            data={tg}
                        />
                    </div>
                    <Select
                        className="flex-grow"
                        placeholder="Topics"
                        onChange={(e) => setTopics(e)}
                        data={tp}
                    />
                    <Button className="rounded-full" onClick={(e) => {
                        setTopics(null)
                        setTags([])
                        setDifficulty(null)
                    }}>Reset Filters</Button>
                </div>
                <div className="flex gap-3">
                    {tags.map((tag) => (
                        <Tag key={tag} tag={tag} onRemove={handleRemove} />
                    ))}
                </div>
                <div className="flex-grow">
                    <table className="table-auto w-full">
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
