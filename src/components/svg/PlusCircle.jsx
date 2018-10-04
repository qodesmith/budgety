import React from 'react'
import PropTypes from 'prop-types'


const PlusCircle = ({ size = 25 }) => {
  const sizePxl = `${size}px`

  return (
    <svg width={sizePxl} height={sizePxl} viewBox="0 0 612 612">
      <g>
        <path d="M306,0C136.992,0,0,136.992,0,306s136.992,306,306,306s306-137.012,306-306S475.008,0,306,0z M306,573.75
          C158.125,573.75,38.25,453.875,38.25,306C38.25,158.125,158.125,38.25,306,38.25c147.875,0,267.75,119.875,267.75,267.75
          C573.75,453.875,453.875,573.75,306,573.75z M420.75,286.875h-95.625V191.25c0-10.557-8.568-19.125-19.125-19.125
          c-10.557,0-19.125,8.568-19.125,19.125v95.625H191.25c-10.557,0-19.125,8.568-19.125,19.125c0,10.557,8.568,19.125,19.125,19.125
          h95.625v95.625c0,10.557,8.568,19.125,19.125,19.125c10.557,0,19.125-8.568,19.125-19.125v-95.625h95.625
          c10.557,0,19.125-8.568,19.125-19.125C439.875,295.443,431.307,286.875,420.75,286.875z"/>
      </g>
    </svg>
  )
}

PlusCircle.propTypes = {
  size: PropTypes.number
}

export default PlusCircle
