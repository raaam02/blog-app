import React from 'react'

const Button = ({title, onClick, color}) => {
  return (
    <button
    className={`px-8 py-2 rounded-full bg-gradient-to-b from-${color}-500 to-${color}-600 text-white focus:outline-none focus:ring-1 focus:ring-${color}-700 hover:from-${color}-600 hover:to-${color}-800 hover:shadow-xl transition duration-200`}
    onClick={onclick}
    >
        {title}
    </button>
  )
}

export default Button