import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as classes from './Project.module.css';

const Project = (props) => {
	return (
		<div className={classes.project}>
			<h1 className={classes.title}>{props.title}</h1>
			<GatsbyImage
				image={props.imageData}
				alt={props.title}
				className={classes.pic}
			/>
			<p className={classes.description}>{props.description}</p>
			<p>
				<a href={props.url} target="_blank" rel="noreferrer">
					<span className={classes.decoration}>View this project online</span>{' '}
					&#10064;
				</a>
			</p>
			<p>
				&larr;{' '}
				<Link to="/projects" className={classes.decoration}>
					Back to all projects
				</Link>
			</p>
		</div>
	);
};

export default Project;

// import React from 'react';
// import { graphql } from 'gatsby';
// import Layout from './Layout';

// export const query = graphql`
// 	query ($slug: String!) {
// 		projectsJson(slug: { eq: $slug }) {
// 			title
// 			description
// 			url
// 			image {
// 				childImageSharp {
// 					gatsbyImageData(width: 200, placeholder: BLURRED)
// 				}
// 			}
// 		}
// 	}
// `;

// const Project = ({ data }) => {
// 	const project = data.projectsJson;

// 	return (
// 		<Layout>
// 			<pre>{JSON.stringify(project, null, 2)}</pre>
// 		</Layout>
// 	);
// };

// export default Project;
