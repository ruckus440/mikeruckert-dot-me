import * as React from 'react';
import { Link } from 'gatsby';
import * as classes from './404.module.css';

// styles
const headingStyles = {
	marginTop: 0,
	marginBottom: 64,
	maxWidth: 320,
};

// markup
const NotFoundPage = () => {
	return (
		<main className={classes.pageStyles}>
			<title>Not found</title>
			<h1 style={headingStyles}>Page not found</h1>
			<p className={classes.paragraphStyles}>
				Sorry{' '}
				<span role="img" aria-label="Pensive emoji">
					😔
				</span>{' '}
				we couldn’t find what you were looking for.
				<Link to="/">Go home</Link>.
			</p>
		</main>
	);
};

export default NotFoundPage;
