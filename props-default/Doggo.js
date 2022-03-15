//* The Static Keyword
//? defines a static method or property for a class, or a
//? class static intialization block.
//? Called on the class itself usually for things that will not change (like a default)

class Doggo extends React.Component {
	static defaultProps = {
		// This will create a default Doggo!
		name: 'Digiorno',
		sound: 'ARF!',
		age: '420',
		pic: (
			<img src='https://images.unsplash.com/photo-1601795378251-664219a9747c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'></img>
		),
	};
	render() {
		const { name, sound, age, pic } = this.props; // shortens writing this.props everywhere
		return (
			<div>
				<h1>Name: {name}</h1>
				<h2>Age: {age}</h2>
				<h2>Motto: {sound}</h2>
				<p>{pic}</p>
			</div>
		);
	}
}
