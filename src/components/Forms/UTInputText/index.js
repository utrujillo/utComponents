import React, { useState } from 'react'
import classes from './index.module.scss'

const UTInputText = (props) => {
    const {value, placeholder, css_styles} = props
    const custom_style = css_styles?.length == 0 ? classes?.utinputtext : css_styles?.custom_inputtext
    const [getValue, setValue] = useState(value)

    return (
        <input
            type='text'
            value={getValue}
            placeholder={placeholder}
            className={custom_style}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

UTInputText.defaultProps = {
    value: '',
    placeholder: 'Texto...',
    css_styles: ''
}

export default UTInputText