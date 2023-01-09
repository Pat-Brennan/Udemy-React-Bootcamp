//* Default Props!
//? Components can specify DEFAULT VALUES for MISSING PROPS
//? Simply Declare object called 'defaultProps' and put your
//? default props in it as Key:Value pairs
//! IT MUST BE CALLED defaultProps to work!

class App extends React.Component {
	render() {
		return (
			<div>
				<Doggo
					name='Bongo'
					sound='Bark!'
					age='666'
					pic={
						// Curly braces used in this instance because it's a data type that's NOT a string
						<img src='https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'></img>
					}
				/>
				<Doggo />
				<Doggo
					name='Georgy'
					pic={
						// but we're already WITHIN PARENS from the return
						<img src='https://images.unsplash.com/photo-1598398386929-4d5370672e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'></img>
					}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
