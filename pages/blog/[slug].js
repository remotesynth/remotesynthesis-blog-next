import * as React from 'react'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Layout from '../../components/layout'

export default function BlogTemplate(props) {
    function reformatDate(fullDate) {
        const date = new Date(fullDate)
        return date.toDateString().slice(4);
    }
    const markdownBody = props.content
    const frontmatter = props.data
    return (
        <Layout config={props.config}>
            <div>
            <h1>{frontmatter.title}</h1>
            <h2>
            {frontmatter.description}
            </h2>
            <h3>{reformatDate(frontmatter.date)}</h3>
            </div>
            <div>
            <ReactMarkdown source={markdownBody} />
            </div>
        </Layout>
    )
}

BlogTemplate.getInitialProps = async function(ctx) {
    const { slug } = ctx.query
    const content = await import(`../../posts/${slug}.md`)
    const config = await import(`../../data/config.json`)
    const data = matter(content.default);
    return {
        ...data,config
    }
}