import React from 'react'

const Button = ({title, onClick}) => {
  return (
    <button
    className={`px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:outline-none focus:ring-1 focus:ring-blue-700 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl transition duration-200`}
    onClick={onclick}
    >
        {title}
    </button>
  )
}

export default Button