//* Props (Properties)
//? A useful component is a reusable one
//? This often means making it configurable or customizable!
//! Props are NOT MUTABLE!. Something like this.props.to = "Johnny" will NOT WORK

//? Props can be Strings:
//? <User name="Jane" title="CEO" />

//? but for other types, we embed JS expressions with {}
//? <User name="Jane" salary={ 100000 } hobbies={["Being weird", "Doing stuff", "Makin things"]} />
class App extends React.Component {
	render() {
		return (
			<div>
				{/* These are Props! (to="" from="")*/}
				{/* They make it very to pass info from a PARENT comp to a CHILD comp*/}
				<Hello
					to='Ringo'
					from='Paul'
					num={7}
					data={[1, 2, 3, 4, 5]}
					isFunny={false}
				/>
				<Hello
					to='George'
					from='John'
					bangs={10}
					img='https://images.unsplash.com/photo-1597582797808-6a4162708a4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZ2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
