import * as React from 'react';
import * as classes from './index.module.css';

const IndexPage = () => {
	return (
		<div className={classes.greeting}>
			<h1>Hi.</h1>
			<h1>My name is Mike Ruckert.</h1>
			<p>I'm a Full Stack Software Developer.</p>
		</div>
	);
};

export default IndexPage;
