console.log('App.js is running!')
//to run during dev
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component { // React.Component gives all the behavior of React component w/o having to write out the code
    render() { // React components must define render()
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render () {
        return (
            <div>
                Options component here
                <Option />
            </div>
        )
    }
}

class AddOption extends React.Component {
    render () {
        return (
            <div>
                Add option component here
            </div>
        )
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                Option component here
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))