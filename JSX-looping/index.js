//* Looping in JSX
//? It's common to use array.map(fn) to output loops in JSX

//? class messages extends React.Component {
//?     render() {
//?         const msgs = [
//?             {id: 1, text: 'hey!'},
//?             {id: 2, text: 'what up!'},
//?         ];
//?     return (
//?         <ul> {msgs.map(m => <li> {m.text} </li>)} </ul>
//?     );
//?   }
//? }

class App extends React.Component {
	render() {
		return (
			<div>
				<Messages />
				<Friend
					name='Django'
					hobbies={['Guitar', 'More Guitar', 'Even more Guitar']}
				/>
				<Friend name='Jobin' hobbies={['Books', 'B-Ball']} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
