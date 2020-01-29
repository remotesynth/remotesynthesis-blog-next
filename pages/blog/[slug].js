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
            <article class="post-warp">
                <header class="post-header">
                    <h1 class="post-title">{frontmatter.title}</h1>
                    <div class="post-meta">
                        <span class="post-time">
                            Written on <time datetime={reformatDate(frontmatter.date)} >{reformatDate(frontmatter.date)}</time>
                            </span>
                            &nbsp;
                            <i class="iconfont icon-folder"></i>
                            <span class="post-category">
                                <a href="#"> category </a>
                            </span>
                    </div>
                </header>
                <div class="post-content">     
                    <ReactMarkdown source={markdownBody} />
                </div>

                <div class="post-copyright">
                        <p class="copyright-item">
                            <span>Author:</span>
                            <span>Brian Rinaldi</span>
                        </p>
                        
                        <p class="copyright-item">
                            <span>Share:</span>
                            <span>Add Share Links Here</span>
                        </p>
                </div>

                <div class="post-comment">
                    Comments go here
                </div>
            </article>
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