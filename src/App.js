import React from "react"
import styled from "styled-components";
import NoAccess_ from './NO_ACCESS.svg';


const NoAccess = styled(NoAccess_)`
  width: 100px;
  height: 75px;
`;


const App = () => {
  return (
    <div>
      <NoAccess />    </div>
  );
}

export default App;
