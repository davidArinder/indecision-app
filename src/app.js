console.log('App.js is running!')
//to run during dev
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: []
        }
    }
    handleDeleteOptions() { // created method to pass from parent to child
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length) // generate random number tied to the options array
        const option = this.state.options[randomNum] // use randomNum as indeces to randomly choose an option
        alert(option)
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add option'
        } else if (this.state.options.indexOf(option) > -1) { // check if new option already exists in array
            return 'This option already exists'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option) // add option to options array in this.state
            }
        })
    }
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} 
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
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
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions} // if false (no options), disable button
                >
                    What should I do?
                </button>
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
    constructor(props) { // constructor set up here and parent to keep the specific logic in this component
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = { // state just for this component for error
            error: undefined
        }
    }
    handleAddOption(e) {
            e.preventDefault() // prevent page reload
            const option = e.target.elements.option.value.trim() // option is same as value in input tag, trim gets rid of empty spaces
            if (option) { // only run if option exists
                e.target.elements.option.value = '' // reset input field to blank
            }
            const error = this.props.handleAddOption(option)
            this.setState(() => {
                return { error }
            })

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>} {/*add if error needed */}
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