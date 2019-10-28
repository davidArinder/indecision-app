console.log('App.js is running!')
//to run during dev
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'
        const options = ['Thing one', 'Thing two', 'Thing four']

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
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
    handlePick() {
        alert('handlePick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button> {/*handlePick only referenced but not called with (). it will get called when someone actually clicks buttons*/}
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props) // super calls parent function to give access to this.props
        this.handleRemoveAll = this.handleRemoveAll.bind(this) // bind: wherever we call handleRemoveAll the context is correct
    }
    handleRemoveAll () {
        console.log(this.props.options)
        // alert('handleRemoveAll')
    }
    render () {
        return (
            <div>
                <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />) // optionText lets this be accessed from outside component
                }
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
            e.preventDefault() // prevent page reload
            const option = e.target.elements.option.value.trim() // option is same as value in input tag, trim gets rid of empty spaces
            if (option) { // only run if option exists
                alert(option)
                e.target.elements.option.value = '' // reset input field to blank
            }
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                Options: {this.props.optionText}
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))