class Friend extends React.Component {
	render() {
		const { name, hobbies } = this.props;
		return (
			<div>
				<h1>{name}:</h1>
				<h2>
					<ul>
                        {hobbies.map((h) => <li>{h}</li> )}
					</ul>
				</h2>
			</div>
		);
	}
}
