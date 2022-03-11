//* Class Components!
//? The "traditional" React component
//? Write logic in a JS class
//? MUST include a RENDER method

//? This is the consistent format for writing class components
class Hello extends React.Component {
	// Notice the capital H in 'Hello'
	render() {
		// Every Component needs to know how to RENDER itself (always have a render)
		return (
			// Parens mean you're entering JSX land
			<div>
				<h1>Hellllo There!</h1>
				{/* THIS is JSX! HTML looking stuff in your JavaScript*/}
				<h1>HOwdy Partner !</h1>
				{/*These Adjacent tags MUST be wrapped in an enclosing tag*/}
				<h1>Boppa !</h1>
				{/*Otherwise error city!*/}
			</div>
		);
	}
}

//? We're first telling it WHAT to render (Hello) and then WHERE to render it (root in HTML file)
ReactDOM.render(<Hello />, document.getElementById('root'));
