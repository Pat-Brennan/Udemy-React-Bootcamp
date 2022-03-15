class Messages extends React.Component {
	render() {
		const msgs = [
			{ id: 1, text: 'Hey Partner!' },
			{ id: 2, text: 'What up!' },
		];
		return (
			<ul>
                {msgs.map((m) => // going through each object in the array
                    <li>{m.text}</li> // and displaying the 'text' key
                )}
			</ul>
		);
	}
}
