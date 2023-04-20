import React from 'react';
import PropTypes from 'prop-types';
import './collapse.css';

export const Collapse = ({ label }) => {
    return (
        <article
            className={['storybook-collapse']}
        >
            <div>{ label }</div>
            <div>Cuerpo del collapse</div>
        </article>
    );
};

Collapse.propTypes = {
    label: PropTypes.string.isRequired
}