import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>} {/*shows if subtitle provided, disappears if not*/}
        </div>
    )
}

Header.defaultProps = { // sets default props for Header, will render if no title prop provided, can be overridden
    title: 'Indecision'
}

export default Header