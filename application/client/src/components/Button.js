import React, { Children } from 'react'
import { getClasses } from '../utils/getClasses'
import styles from '../styles/modules/button.module.scss'


const buttonTypes = {
    primary: 'primary',
    secondary: 'secondary',
}

const Button = ({ children, type, variant, ...rest }) => {
  return (
    <button /*className={getClasses([styles.button, styles[`button--${buttonTypes[variant]}`],])}*/
        type={type === 'submit' ? 'submit' : 'button'}
        {...rest}
    >
        {children}
    </button>
  )
}

function SelectButton ({ children, ...rest }) {
    return (
        <select
            className={getClasses([/*styles.button, styles.button__select*/])}
            {...rest}
        >
            {children}
        </select>
    );
}

export { SelectButton };
export default Button;