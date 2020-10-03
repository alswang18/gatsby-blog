import React from 'react';
import { Link, graphql, useStaticQuery  } from 'gatsby';
import blogStyles from './blog.module.scss'
import Layout from '../components/layout';
import Head from '../components/head'
const IndexPage = () => {
  const data = useStaticQuery(graphql` 
    query{
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date } limit:1){
            edges{
                node{
                    frontmatter{
                        title
                        date
                        description
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }
`)
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Welcome to my corner!</h1>
      <h2>I'm Alec Wang, a Computing Scientist excited about data products and open to tech opportunities in North America and Asia-Pacific.</h2>
      <h3>Most Recent Thoughts:</h3>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge)=>{
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <br/>
                <p>{edge.node.frontmatter.date}</p>
                <p><strong>{edge.node.frontmatter.description}</strong></p>
              </Link>
            </li>
                  )})}
      </ol>
      <p><Link to="/blog">See all my articles and projects</Link></p>
      <p>Need a project done or want to collaborate? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage