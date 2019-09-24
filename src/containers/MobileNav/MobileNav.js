import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MobileNav.scss';

class MobileNav extends Component {
	state = { sideBarActive: false };

	toggleSideBar = () => {
		this.setState({
			sideBarActive: !this.state.sideBarActive
		});
	};

	render () {
		const { sideBarActive } = this.state;
		return (
			<div className="mobile-nav-component" id="header">
				<nav>
					<div className="name">
						<NavLink to="/Movie-Tracker" className="nav">
							<h3>Movie Tracker</h3>
						</NavLink>
					</div>
					<div className="hamburger" onClick={() => this.toggleSideBar()}>
						<div className="line" />
						<div className="line" />
						<div className="line" />
					</div>
					<ul className={sideBarActive ? 'open nav-links' : 'nav-links'}>
						<li className={sideBarActive ? 'fade' : null} onClick={() => this.toggleSideBar()}>
							<NavLink to="/Movie-Tracker" className="nav">
								Home
							</NavLink>
						</li>
						<li className={sideBarActive ? 'fade' : null} onClick={() => this.toggleSideBar()}>
							<NavLink to="/Favorites" className="nav">
								My Favorites
							</NavLink>
						</li>
						<li className={sideBarActive ? 'fade' : null} onClick={() => this.toggleSideBar()}>
							<NavLink to="/Movies" className="nav">
								Movies
							</NavLink>
						</li>
						<li className={sideBarActive ? 'fade' : null} onClick={() => this.toggleSideBar()}>
							<NavLink to="/TV_Shows" className="nav">
								TV Shows
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default MobileNav;
