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
            <div className="blog__info">
            <h1>{frontmatter.title}</h1>
            <h3>{reformatDate(frontmatter.date)}</h3>
            </div>
            <div className="blog__body">
            <ReactMarkdown source={markdownBody} />
            </div>
            <h2 className="blog__footer">
            Description: {frontmatter.description}
            </h2>
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