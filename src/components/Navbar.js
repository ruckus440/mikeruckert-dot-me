import React from 'react';
import { Link } from 'gatsby';
import * as classes from './Navbar.module.css';

const Navbar = () => {
	const activeStyle = {
		borderBottom: 'solid 2px white',
	};

	return (
		<header>
			<div className={classes.logo}>Mike Ruckert</div>
			<nav>
				<ul>
					{/* <li>
						<Link to="/" activeStyle={activeStyle}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" activeStyle={activeStyle}>
							About
						</Link>
					</li>
					<li>
						<Link to="/projects" activeStyle={activeStyle}>
							Projects
						</Link>
					</li> */}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
