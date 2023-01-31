import fs, { readdirSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import showdown from 'showdown'

import html from 'remark-html'


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

export interface Section {
    [key: string]: any,
    content: string,
}
export async function getSectionIndex(section: string): Promise<Section> { 
    const sectionIndex = path.join(sectionDirectory, section, 'index.md')
    const fileContents = fs.readFileSync(sectionIndex, 'utf8')
    const matterResult = matter(fileContents)

    var mdconverter = new showdown.Converter()

    const processedContent = mdconverter.makeHtml(matterResult.content)

    const content = processedContent.toString()

    return {
        ...matterResult.data,
        content
    }
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
