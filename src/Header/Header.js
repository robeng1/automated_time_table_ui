import React from 'react';

const Header = () => {
    return (
        <header> 
		<div className="container">
			<div id="branding">
				<h1> <span className="highlight">Hex. Inc</span></h1>
			</div>
			<nav>
				<ul>
					<li className="current"><a href="index.html">Home</a></li>
					<li><a href="#">Services</a></li>
                    <li><a href="#">Company</a></li>
					<li><a href="services.html">Contact Us</a></li>
				</ul>
			</nav>
		</div>
	</header>
    );
};

export default Header;