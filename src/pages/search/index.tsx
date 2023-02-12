import React, { useEffect, useState } from "react"
import { getQuestions, Question } from "lib/question"
import { useRouter } from "next/router"
import Navbar from "@/components/Navbar"
import Search from "@/components/Search"
import { Hero } from "@/components/Hero"
import Tag from "@/components/Tag"
import { search } from "lib/search"
import { Button, Select } from "@mantine/core"

const diff = [
    { level: "Hard" },
    { level: "Medium" },
    { level: "Easy" },
]

export async function getStaticProps() {
    const question: Question[] = await getQuestions();

    let topics = new Set<string>();
    let tags = new Set<string>();

    question.forEach(q => {
       q.topic.forEach((t: string) => topics.add(t))
       q.tags.forEach((t: string) => tags.add(t))
    });

    return {
        props: {
            question,
            topics: Array.from(topics),
            tags: Array.from(tags)
        },
    };
}

const Searchpage = (props: { question: any[], topics: string[], tags: string[] }) => {

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
        if (searchdata != undefined) setQuestions(search(searchdata, tags, difficulty, topics, props.question))
    }, [props.question, searchdata, tags, difficulty, topics])

    return (
        <>
            <Navbar mode="sticky" />
            <Hero length="md:h-[300px]">
                <h3 className="font-bold text-2xl flex justify-center">Problems</h3>
                <Search defaultValue={searchdata} />
            </Hero>
            <section className="xl:max-w-[120ch] mx-4 mt-4 xl:mx-auto">
                <div className="flex justify-between flex-col sm:flex-row py-4 gap-4 sm:justify-right">
                    <Select
                        className="flex-grow"
                        value={difficulty}
                        placeholder="Difficulty"
                        onChange={(e) => { setDifficulty(e) }}
                        data={diff.map(d => d.level)}
                    />
                    <div className="flex-grow">
                        <Select
                            placeholder="Tags"
                            value={tags.length > 0 ? tags[tags.length - 1] : null}
                            onChange={(e) => {
                                if (e != undefined) setTags([...tags, e])
                            }}
                            data={props.tags}
                        />
                    </div>
                    <Select
                        className="flex-grow"
                        value={topics}
                        placeholder="Topics"
                        onChange={(e) => setTopics(e)}
                        data={props.topics}
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
