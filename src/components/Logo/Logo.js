import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className='Tilt'>
				<div style={{ height: '150px'}}>
					<h1>React Parallax Tilt 👀</h1>
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;