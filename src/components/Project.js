import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Project = (props) => {
	return (
		<div className="project">
			<h1>{props.title}</h1>
			<GatsbyImage image={props.imageData} alt={props.title} />
			<p>{props.description}</p>
			<p>
				<a href={props.url}>View this project online &rarr;</a>
			</p>
			<p>
				<Link to="/projects">&larr; Back to all projects</Link>
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
