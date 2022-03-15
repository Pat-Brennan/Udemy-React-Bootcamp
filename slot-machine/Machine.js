const emojiArr = ['🤠', '👾', '👽'];

function randomEmoji(arr) {}

class Machine extends React.Component {
	render() {
		console.log(this.props);
        const { s1, s2, s3 } = this.props; // This gets rid of the need to always write "this.props"
        const winner = (s1 === s2) && (s2 === s3); // Logic to determine a winner that is much shorter thanks to destructuring above
		return (
			<div>
				<h1>Let's Begin!</h1>
				<p>
					{s1}
					{s2}
					{s3}
                </p>
                <p>{winner ? 'Winner!!!' : 'Loser!!!'}</p>
			</div>
		);
	}
}
