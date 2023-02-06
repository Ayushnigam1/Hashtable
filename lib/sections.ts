import fs, { readdirSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import showdown from 'showdown'
import { serialize } from 'next-mdx-remote/serialize'

import latex from 'rehype-katex'
import math from 'remark-math'
import toc from '@jsdevtools/rehype-toc'

const sectionDirectory = path.join(process.cwd(), 'content')

export async function getSections() {
    const sections = fs.readdirSync(sectionDirectory)
    const allSections: string[] = sections.map((sectionName) => {
        const section = sectionName
        return section
    })
    return allSections
}

export async function getSubSections(section: string) {
    try {
        const subSectionPath = path.join(sectionDirectory, section, 'subsection')
        const subSectionsNames = readdirSync(subSectionPath).map(subsectionName => subsectionName.replace(/\.md$/, ''))
        return subSectionsNames
    } catch (err) {
    }
}

// exports parsed MDX
export async function getSectionIndex(section: string) { 
    const sectionIndex = path.join(sectionDirectory, section, 'index.mdx')
    const fileContents = fs.readFileSync(sectionIndex, 'utf8')
    const source = matter(fileContents)
    
    const mdxSource = await serialize(source.content, {parseFrontmatter: true, mdxOptions: {
        remarkPlugins: [math],
        rehypePlugins: [latex, toc]
    }})

    return mdxSource
}

export async function getSubsectionPost(section: string, subsection: string) {
    const subSectionPath = path.join(sectionDirectory, section, 'subsection', `${subsection}.md`)
    const subSectionContent = fs.readFileSync(subSectionPath, 'utf8')
    const matterResult = matter(subSectionContent)

    var mdconverter = new showdown.Converter()

    const processedContent = mdconverter.makeHtml(matterResult.content)

    const content = processedContent.toString()

    return {
        ...matterResult.data,
        content
    }
}
