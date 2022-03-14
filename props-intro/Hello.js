class Hello extends React.Component {
	render() {
		console.log(this.props); //Verify we are getting props with console

		let bangs = '!'.repeat(this.props.bangs);
		return (
			<div>
				<h1>
					To: {this.props.to} From: {this.props.from}
					{this.props.num} {this.props.data} {bangs}
				</h1>
				{/* the image url is brought in as a string in PROPS */}
				{/* then displayed using the IMAGE TAG */}
				<img src={this.props.img}></img>
			</div>
		);
	}
}
