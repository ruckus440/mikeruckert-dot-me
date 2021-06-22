import React from 'react';
import ProjectPreview from '../components/ProjectPreview';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import * as classes from './projects.module.css';

// const sanityConfig = { projectId: '4w2jqh5b', dataset: 'production' };

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
		<div className={classes.container}>
			<div className={classes.headline}>
				<h2>Projects</h2>
			</div>
			{projects.map(({ node: project }) => {
				return (
					<ProjectPreview
						key={project.slug.current}
						title={project.title}
						description={project.description}
						imageData={getImage(project.image.asset)}
						slug={project.slug.current}
					/>
				);
			})}
		</div>
	);
};

export default Projects;
