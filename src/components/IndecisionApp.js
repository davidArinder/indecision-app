import React from 'react'

//Components
import AddOption from './AddOption' // imported as default so no curly braces
import Header from './Header'
import Action from './Action'
import Options from './Options'

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }
    // runs when component mounts
    // keeps the options on the screen even on page refresh
    componentDidMount() { // lifecycle component. only available in class based component
        try { // if valid json data
            const json = localStorage.getItem('options') // grab the locally stored data
            const options = JSON.parse(json) // convert it to json
    
            if (options) { // only run if options are not null
                this.setState(() => ({ options }))
            }
        } catch (e) { // if not valid json data
            // do nothing at all
        }

    }
    // runs when component updates
    // store options locally
    componentDidUpdate(prevProps, prevState) {
        // don't run unless there is a change to the data
        if (prevState.options.length !== this.state.options.length) { // does previous state have the same number of options as the current state?
            const json = JSON.stringify(this.state.options) // convert json to string
            localStorage.setItem('options', json) // store data locally
            console.log('saving data')
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    handleDeleteOptions() { // created method to pass from parent to child
        this.setState(() => ({ options: [] })) // parens around curlies is so one line arrow function can return an object rather than curlies being function body
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
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

        this.setState((prevState) => ({ options: prevState.options.concat(option) })) // add option to options array in this.state
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                {/* passes to Options component */}
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} 
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}