import React, { useState } from 'react';

export const myContext = React.createContext();

const Provider = props => {
  const [isDark, setTheme] = useState('nl');
const changeTheme = ()=>{
    isDark === 'nl' ? setTheme('en') : setTheme('nl')
}
  return (
    <myContext.Provider value={{
      isDark,
      changeTheme: changeTheme
    }}>
      {props.children}
    </myContext.Provider>
  )
};



export default ({ element }) => (
    <Provider>
      {element}
    </Provider>
  );