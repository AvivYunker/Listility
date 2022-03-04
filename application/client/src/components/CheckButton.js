import React from 'react'
// import styles from '../styles/modules/todoItem.module.scss'

const checkVariants = {
  initial: {
    color: '#fff',
  },
  checked: {
    pathLength: 1,
  },
  unChecked: {
    pathLength: 0,
  }
}

const boxVariant = {
  checked: {
    backgroud: 'var(--primaryPurple)',
    transition: { duration: 0.1 },
  },
  unchecked: {
    background: 'var(--gray-1)',
    transition: {
      duration: 0.1,
    }
  }
}

const CheckButton = ({ checked, handleCheck }) => {
  /*const pathLength = useMotionValue(0);*/
  /*const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);*/
  return (
    <div /*className={StyleSheet.svgBox} animate={checked ? 'checked' : 'unchecked'}*/ variants={boxVariant} onClick={handleCheck}>
        <svg
            /*className={styles.svg}*/
            viewBox="0 0 53 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
        <path
            ariants={checkVariants}
            animate={checked ? 'checked' : 'unchecked'}
            /*style={{ pathLength, opacity }}*/
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="6"
            d="M1.5 22L16 36.5L51.5 1"
            strokeLinejoin="round"
            strokeLinecap="round"
        />
        </svg>
    </div>
  )
}

export default CheckButton