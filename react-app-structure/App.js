// class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<Hello />
//         <NumPicker />
// 			</div>
// 		);
// 	}
// }

function App() {
	return (
		<div>
			<Hello />
			<NumPicker />
		</div>
	);
}

//? This is where everything is rendering!
ReactDOM.render(<App />, document.getElementById('root'));
