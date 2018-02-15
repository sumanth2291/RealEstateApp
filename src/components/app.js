import React, { Component }  from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from './NavigationBar';

export default class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<NavigationBar />
		  	</MuiThemeProvider>
		);
	}
}
