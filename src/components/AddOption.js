import React from 'react'

export default class AddOption extends React.Component { // React.Component gives all the behavior of React component w/o having to write out the code
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
            e.preventDefault() // prevent page reload
            const option = e.target.elements.option.value.trim() // option is same as value in input tag, trim gets rid of empty spaces
            if (option) { // only run if option exists
                e.target.elements.option.value = '' // reset input field to blank
            }
            const error = this.props.handleAddOption(option)

            this.setState(() => ({ error }))

            if (!error) { // if no error, wipe the input
                e.target.elements.option.value = ''
            }
    }
    render() { // React components must define render()
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>} {/*add if error needed */}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Optione</button>
                </form>
            </div>
        )
    }
}