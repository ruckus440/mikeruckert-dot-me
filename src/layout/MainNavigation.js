import React from 'react';
import { Link } from 'gatsby';
import * as classes from './MainNavigation.module.css';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link to="/">Mike Ruckert</Link>
			</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
