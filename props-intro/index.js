//* Props (Properties)
//? A useful component is a reusable one
//? This often means making it configurable or customizable!

class App extends React.Component {
    render() {
        return (
            <Hello />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));