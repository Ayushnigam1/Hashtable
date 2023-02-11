import { serialize } from "next-mdx-remote/serialize";

import latex from 'rehype-katex'
import math from 'remark-math'
import toc from '@jsdevtools/rehype-toc'
import slug from 'rehype-slug'

// function for converting markdown to object
export async function generateMdx(source: string) {
    const mdxSource = await serialize(source, {
        parseFrontmatter: true,
        mdxOptions: {
            remarkPlugins: [math],
            rehypePlugins: [latex, slug, [toc, {position: 'beforebegin'}]]
        }
    })
    return mdxSource
}
