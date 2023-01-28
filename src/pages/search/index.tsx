import Cards from '@/components/Cards'
import React from 'react'
import { getSectionIndex, getSections, Section } from "lib/sections";
import { useRouter } from 'next/router';
export async function getStaticProps() {
    const sections = await getSections();

    const data: Section[] = await Promise.all(
        sections.map(async (section: string) => {
            const sectionData: Section = await getSectionIndex(section)
            return { section, ...sectionData }
        })
    )

    return {
        props: {
            data
        },
    };
}

const Searchpage = ({ data }: { data: Section[] }) => {
    const router=useRouter();
   
    const searchdata=router.query.keyword;
   
  return (
 <>
 <div className="flex text-center m-10 text-3xl"> your data is search is : { searchdata}</div>
   <section className="xl:max-w-[120ch] mx-4 mt-4 xl:mx-auto">
   {data.filter((item)=> item.section.includes(searchdata)).length >0?  <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-4">
                        {data.filter((item)=> item.section.includes(searchdata)).map((section: Section, idx: number) => {
                           return <Cards data={section} key={idx} />;
                        })}
                    </div>:"data not found"}
                </section>
 </>

  )
}

export default Searchpage