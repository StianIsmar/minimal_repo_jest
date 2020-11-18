import React from "react"
// import { CONSTANT } from './myConstants.js'

// console.log("THIS IS IN THE COMPONENT:", CONSTANT)

const App = () => {
  const { CONSTANT } = require('./myConstants.js')
  return (
    <div>
      {CONSTANT.NUMBER}
    </div>
  );
}

export default App;
