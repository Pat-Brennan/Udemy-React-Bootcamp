class Machine extends React.Component {
	render() {
		console.log(this.props);
		const { s1, s2, s3 } = this.props; // This gets rid of the need to always write "this.props"
		const winner = s1 === s2 && s2 === s3; // Logic to determine a winner that is much shorter thanks to destructuring above
		return (
			<div className='Machine'>
				<p style={{ fontSize: '50px', backgroundColor: 'purple' }}> {/* inline styling in JSX!*/}
					{s1}
					{s2}
					{s3}
				</p>
				<p className={winner ? 'Machine-Win' : 'Machine-Lose'}>
					{winner ? 'Winner!!!' : 'Loser!!!'}
				</p>
			</div>
		);
	}
}
