import React from 'react'
import { NavLink } from "react-router-dom";
import classes from './index.module.scss'

const UTNavbar = (props) => {

    return (
        <section>
            <NavLink to="/" className={classes.utlink}>Inicio</NavLink>
            <NavLink to="/buttons" className={classes.utlink}>Botones</NavLink>
        </section>
    )
}

UTNavbar.defaultProps = {
    css_styles: ''
}

export default UTNavbar