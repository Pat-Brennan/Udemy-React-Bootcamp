class App extends React.Component {

	render() {
		let random = Math.floor(Math.random() * 3)
		return (
			<div>
				<Machine s1={ random } s2={ random } s3={ random } />
				<Machine s1={ random } s2={ random } s3={ random } />
				<Machine s1={ random } s2={ random } s3={ random } />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
