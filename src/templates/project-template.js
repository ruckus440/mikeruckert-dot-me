import React from 'react';
import { graphql } from 'gatsby';
import Project from '../components/Project';
import { getImage } from 'gatsby-plugin-image';

export const query = graphql`
	query ($slug: String!) {
		sanityProject(slug: { current: { eq: $slug } }) {
			title
			description
			url
			image {
				asset {
					gatsbyImageData(width: 400, placeholder: BLURRED)
				}
			}
		}
	}
`;

const ProjectTemplate = ({ data }) => {
	const project = data.sanityProject;

	return (
		<Project
			title={project.title}
			description={project.description}
			url={project.url}
			imageData={getImage(project.image.asset)}
		/>
		// {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
	);
};

export default ProjectTemplate;
