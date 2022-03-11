//* Class Components!
//? The "traditional" React component
//? Write logic in a JS class
//? MUST include a RENDER method
//? MUST RETURN SOMETHING

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

//* Function Components!
//? Historically used for simpler "dumb" functions
//? Write logic in a JS function
//? NO RENDER method needed, JUST RETURN content

function Hello2() {
	return (
		<div>
			<h1> I am also saying Hello! </h1>
			<h1> But doing so...</h1>
			<h1> Using a function component!</h1>
		</div>
	);
}

//? We're first telling it WHAT to render (Hello) and then WHERE to render it (root in HTML file)
ReactDOM.render(<Hello />, document.getElementById('root'));
ReactDOM.render(<Hello2 />, document.getElementById('otherRoot'));

//* What the heck is the difference?
//? Both can accept props and render content
//? Historically, function components couldn't use important features Like:
//? - State, or - Lifecycle Methods
//? With the introduction of React Hooks, we can now write full-featured function components
