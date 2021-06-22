import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as classes from './ProjectPreview.module.css';

const ProjectPreview = (props) => {
	return (
		<div className={classes.preview}>
			<Link to={`/${props.slug}/`} className={classes.image}>
				<GatsbyImage image={props.imageData} alt={props.title} />
			</Link>
			<div className={classes.info}>
				<h3>
					<Link to={`/${props.slug}/`}>{props.title}</Link>
				</h3>
				<p className={classes.description}>{props.description}</p>
				<p>
					<Link to={`/${props.slug}/`}>View this project &rarr;</Link>
				</p>
			</div>
		</div>
	);
};

export default ProjectPreview;
