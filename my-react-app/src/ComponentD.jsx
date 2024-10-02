import React, {useContext} from 'react';
import { UserContext } from './ComponentA';

function ComponentD() {

  const value = useContext(UserContext);

  return(<div className="box">
          <h1>Component D</h1>
          <h2>{`Bye ${value}`}</h2>
        </div>);
}

export default ComponentD;