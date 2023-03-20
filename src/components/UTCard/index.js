import React from 'react'
import classes from './index.module.scss'

const UTCard = (props) => {

    const {children} = props

    return (
        <article className={classes.utcard}>
            {children}
        </article>
    )
}

UTCard.defaultProps = {
    css_styles: ''
}

export default UTCard