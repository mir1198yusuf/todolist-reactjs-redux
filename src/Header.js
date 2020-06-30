import React from  "react";

import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component{

	render(){
		return (
			<h1 className="bg-primary p-2 text-white text-center" >
				Todo List App 
			</h1>
		);
	}
}

export default Header;