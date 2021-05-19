import React, { Fragment } from 'react';
import MainNavigation from './MainNavigation';
// import * as classes from './Layout.module.css';

const Layout = (props) => {
	return (
		<Fragment>
			<MainNavigation />
			<main>{props.children}</main>
		</Fragment>
	);
};

export default Layout;
