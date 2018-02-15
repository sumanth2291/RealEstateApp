import "./styles/app.scss";
import React from "react";
import ReactDOM, { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from "./components/app";

const renderApp = Component =>
	render(
			<Component />,
		document.getElementById("root")
	);

renderApp(App);

if (module.hot) module.hot.accept("./components/app", () => renderApp(App));
