//* Intro to JSX
//? Stands for JavaScript Extension, JS + XML
//? Allows us to write our JS, HTML, and CSS together
//? Combines writing your UI, and logic for that UI TOGETHER
//? It's then compiled by BABEL into regular JS

//* JSX Rules
//? JSX is MORE STRICT than HTML - elements must either:
//? - have an EXPLICIT closing tag: <b> ... </b>
//? - be explicitly self-closed: <input name="msg" />
//? -- you CANNOT leave off the "/" or you will get a syntax error

function getMood() {
	const moods = ['hungry', 'sad', 'depressed', 'aggrivated', 'annoyed'];
	return moods[Math.floor(Math.random() * moods.length)]; // Grabbing random mood from Array
}

const silly = () => {
	console.log('Silly');
};

silly();
class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>My Image!</h1>
				<h1>My number is: {2 * 8 - 4}</h1>{' '}
				{/* when we use {}, we're entering JS land!*/}
				<h2>My Current Mood is: {getMood()}</h2>
				<img src='https://images.unsplash.com/photo-1515705576963-95cad62945b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>
			</div>
		);
	}
}

function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

// class NumPicker extends React.Component {
//     render() {
//         const num = getNum()
// 		return (
// 			<div>
//                 <h1>Your number is... {num}!</h1>
//                 <p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p>
//                 {
//                     num === 7
//                     ? <img src='https://media2.giphy.com/media/S3We8KS67EbjID2H85/200w.webp?cid=ecf05e4788oez0v2i5h21udzq6zzkzap7iayxu9ynz25f1bi&rid=200w.webp&ct=g'></img>
//                     : null
//                 }
// 			</div>
// 		);
// 	}
// }

//? Same as above but with a functional component
function NumPicker() {
	const num = getNum();
	return (
		<div>
			<h1>Your number is... {num}!</h1>
			<p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p>
			{num === 7 ? (
				<img src='https://media2.giphy.com/media/S3We8KS67EbjID2H85/200w.webp?cid=ecf05e4788oez0v2i5h21udzq6zzkzap7iayxu9ynz25f1bi&rid=200w.webp&ct=g'></img>
			) : null}
		</div>
	);
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
ReactDOM.render(<NumPicker />, document.getElementById('root2'));
