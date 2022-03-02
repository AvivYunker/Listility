import React from 'react'
import styled from 'styled-components'

const PageTitle = ({ children, ...rest }) => {
  return (
    <div>
        <p className={styled.title} {...rest}>
            {children}
        </p>
    </div>
  )
}

export default PageTitle