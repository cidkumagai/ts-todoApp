import React from 'react';
import { UserInput } from './components/UserInput/UserInput';
import { PrintArea } from './components/PrintArea/PrintArea';

function App() {
  return (
    <React.Fragment>
      <UserInput />
      <PrintArea />
    </React.Fragment>
  );
}

export default App;