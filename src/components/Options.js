import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>} {/* if there are no options, display <p> message */}
            {
                props.options.map((option) => (
                    // optionText lets this be accessed from outside component
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    /> 
                ))    
            }
        </div>
    )
}

export default Options