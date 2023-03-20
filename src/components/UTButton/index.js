import React from 'react'
import classes from './index.module.scss'

const UTButton = (props) => {
    const {value, css_styles, onClick} = props
    const custom_style = css_styles?.length == 0 ? classes?.utbutton : css_styles?.custom_btn

    return (
        <input
            type="button"
            value={value}
            className={custom_style}
            onClick={onClick}
        />
    )
}

UTButton.defaultProps = {
    value: 'Boton',
    css_styles: ''
}

export default UTButton