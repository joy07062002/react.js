import React from 'react'

function Card({ username, btn = "Visit-Me" }) {
  return (
    <div>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black mt-2">
        <img
          src="https://media.gettyimages.com/id/1976099664/photo/artificial-intelligence-processor-concept-ai-big-data-array.jpg?s=612x612&w=0&k=20&c=rTtWP9ywxZM_BygzURikdoWRHnO4ohD73Z-RDAg_u8M="
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Tittle
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
          </p>
            <button className="text-center p-1 text-black bg-gray-200">
              {btn}
            </button>

    </div>
    </div>
    
  )
}
export default Card