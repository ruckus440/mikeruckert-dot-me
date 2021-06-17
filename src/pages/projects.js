import React from 'react';
import Layout from '../components/Layout';
import ProjectPreview from '../components/ProjectPreview';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image'; ///dist/src/components/gatsby-image.browser';

const Projects = () => {
	const data = useStaticQuery(graphql`
		{
			allProjectsJson {
				edges {
					node {
						title
						slug
						url
						description
						image {
							childImageSharp {
								gatsbyImageData(width: 200, placeholder: BLURRED)
							}
						}
					}
				}
			}
		}
	`);

	const projects = data.allProjectsJson.edges;

	return (
		<Layout>
			<div>
				<h2>This is the projects page.</h2>
			</div>
			{projects.map(({ node: project }) => {
				return (
					<ProjectPreview
						key={project.slug}
						title={project.title}
						description={project.description}
						imageData={getImage(project.image)}
						slug={project.slug}
					/>
				);
			})}
		</Layout>
	);
};

export default Projects;
