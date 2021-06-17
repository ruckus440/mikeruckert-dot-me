import React from 'react';
import { Link } from 'gatsby';
// import Image from 'gatsby-image';
import { GatsbyImage } from 'gatsby-plugin-image'; ///dist/src/components/gatsby-image.browser';

const ProjectPreview = (props) => {
	return (
		<div>
			<Link to={`/${props.slug}/`}>
				<GatsbyImage image={props.imageData} alt={props.title} />
			</Link>
			<h2>
				<Link to={`/${props.slug}/`}>{props.title}</Link>
			</h2>
			<p>{props.description}</p>
			<p>
				<Link to={`/${props.slug}/`}>View this project &rarr;</Link>
			</p>
		</div>
	);
};

export default ProjectPreview;
