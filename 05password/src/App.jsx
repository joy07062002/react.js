import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numallow, setNumallow] = useState(false)
  const [charallow, setCharallow] = useState(false)
  const [pass, setPass] = useState()

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    let passw = ""
    if (numallow) {
      str += "0123456789"

    }
    if (charallow) {
      str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      passw += str.charAt(char)
    }
    setPass(passw)


  }, [length, numallow, charallow, setPass])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);

    window.navigator.clipboard.writeText(pass)

  }, [pass])


  useEffect(() => {
    passwordGenerator()
  }, [length, numallow, charallow, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 cursor-pointer hover:bg-blue-600 active:scale-95 transition-all"
          >
            Copy
          </button>



        </div>
        <div className="flex items-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={100} value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length}</label>


          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numallow}
              id="numberInput"
              onChange={() => setNumallow(prev => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallow}
              id="characterInput"
              onChange={() => setCharallow(prev => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>



        </div>


      </div>

    </>
  )
}

export default App
