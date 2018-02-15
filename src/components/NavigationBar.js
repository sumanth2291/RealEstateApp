import React, { Component } from "react";
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import styled from 'styled-components';

const Wrapper = styled.div`
background: #0A0029;
color: white;
overflow: auto;
padding: 20px 15px;

.logo {
	float: left;
	font-weight: 800;
	cursor: pointer;
}
nav {
	float: right;

	a {
		color: white;
		font-weight: 500;
		text-decoration: none;
		padding: 10px 20px;

		&:hover {
			color: #F6698C;
		}

		&.register-btn {
			color: white;
			padding: 10px 20px;
			text-align: center;
			background-color: #F6698C;
			border-radius: 5px;
			cursor: pointer;
		}
	}
}
`;
export default class NavigationBar extends Component {
	render() {
		return (
			<Wrapper>
				<div className="logo">RealEstate.dk</div>
				<nav>
					<a href="#">Create Ads</a>
					<a href="#">About Us</a>
					<a href="#">Log In</a>
					<a className="register-btn">Register</a>
				</nav>	
			</Wrapper>	
		);
	}
}
