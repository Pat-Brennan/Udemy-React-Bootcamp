function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

// class NumPicker extends React.Component {
// 	render() {
// 		const num = getNum();
// 		return (
// 			<div>
// 				<h1>Your number is... {num}!</h1>
// 				<p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p>
// 				{num === 7 ? (
// 					<img src='https://media2.giphy.com/media/S3We8KS67EbjID2H85/200w.webp?cid=ecf05e4788oez0v2i5h21udzq6zzkzap7iayxu9ynz25f1bi&rid=200w.webp&ct=g'></img>
// 				) : null}
// 			</div>
// 		);
// 	}
// }

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
