import React from 'react';
import * as classes from './about.module.css';

const about = () => {
	return (
		<div className={classes.container}>
			<h3>Who I Am</h3>
			<p>My name is Mike. I am full stack developer based in Manhattan, KS.</p>
			<p>I have a beautiful wife and two dogs.</p>
			<p>
				In my free time I like to lift weights, play board games, and develop my
				own projects.
			</p>
		</div>
	);
};

export default about;
