import fs, { readdirSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { generateMdx } from './mdx'


const sectionDirectory = path.join(process.cwd(), 'content')

export interface Section {
    id: string;
    [key: string]: string;
}
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
        const subSectionsNames = readdirSync(subSectionPath).map(subsectionName => subsectionName.replace(/\.mdx$/, ''))
        return subSectionsNames
    } catch (err) {
    }
}

export async function getSectionIndex(section: string) { 
    const sectionIndex = path.join(sectionDirectory, section, 'index.mdx')
    const fileContents = fs.readFileSync(sectionIndex, 'utf8')
    
    return await generateMdx(fileContents)
}

export async function getSubsectionPost(section: string, subsection: string) {
    const subSectionPath = path.join(sectionDirectory, section, 'subsection', `${subsection}.mdx`)
    const subSectionContent = fs.readFileSync(subSectionPath, 'utf8')

    return await generateMdx(subSectionContent)
}
