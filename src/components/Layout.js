import React from 'react';
import Navbar from './Navbar';
import '../styles/global.css';
import * as classes from './Layout.module.css';

const Layout = (props) => {
	return (
		<div className={classes.layout}>
			<Navbar />
			<main>{props.children}</main>
			<footer>
				<p>&copy; {new Date().getFullYear()} Mike Ruckert</p>
			</footer>
		</div>
	);
};

export default Layout;
