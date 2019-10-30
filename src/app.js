console.log('App.js is running!')
//to run during dev
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing three']
        }
    }
    handleDeleteOptions() { // created method to pass from parent to child
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} 
                />
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
                <button 
                    onClick={this.handlePick}
                    disabled={!this.props.hasOptions} // if false (no options), disable button
                >
                    What should I do?
                </button> {/*handlePick only referenced but not called with (). it will get called when someone actually clicks buttons*/}
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
    render() {
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
    render() {
        return (
            <div>
                Options: {this.props.optionText}
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))