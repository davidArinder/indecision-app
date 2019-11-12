import React from 'react'

const Action = (props) => { // in stateless component, must pass props in as arg to get access
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions} // if false (no options), disable button
            >
                What should I do?
            </button>
        </div>
    )
}

export default Action