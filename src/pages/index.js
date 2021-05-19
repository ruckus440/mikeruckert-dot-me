import * as React from 'react';
import Layout from '../layout/Layout';
import * as classes from './index.module.css';

import './index.css';

// markup
const IndexPage = () => {
	return (
		<Layout className={classes.container}>
			<main className={classes.main}>
				<title>Home Page</title>
				<div className={classes.greeting}>
					<h1>Hi.</h1>
					<h1>My name is Mike Ruckert.</h1>
					<p>I'm a Software Developer and this is my personal website.</p>
					<p>It's currently under construction, so come back soon!</p>
				</div>
			</main>
		</Layout>
	);
};

export default IndexPage;
