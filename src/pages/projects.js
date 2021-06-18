import React from 'react';
import Layout from '../components/Layout';
import ProjectPreview from '../components/ProjectPreview';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image'; ///dist/src/components/gatsby-image.browser';

const sanityConfig = { projectId: '4w2jqh5b', dataset: 'production' };

const Projects = () => {
	const data = useStaticQuery(graphql`
		{
			allSanityProject {
				edges {
					node {
						title
						description
						url
						slug {
							current
						}
						image {
							asset {
								gatsbyImageData(width: 200, placeholder: BLURRED)
							}
						}
					}
				}
			}
		}
	`);

	if (data.errors) {
		throw data.errors;
	}

	const projects = data.allSanityProject.edges;

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
						imageData={getImage(project.image.asset)}
						slug={project.slug.current}
					/>
				);
			})}
		</Layout>
	);
};

export default Projects;

// {
// 	allProjectsJson {
// 		edges {
// 			node {
// 				title
// 				slug
// 				url
// 				description
// 				image {
// 					childImageSharp {
// 						gatsbyImageData(width: 200, placeholder: BLURRED)
// 					}
// 				}
// 			}
// 		}
// 	}
// }
