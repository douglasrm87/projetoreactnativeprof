import React, {createContext, useContext, useState} from 'react';

const MyContext = createContext(null);

function MyContextProvider({children}) {
  const [value, setValue] = useState('This is MyContext');

  return (
    <MyContext.Provider value={{value, setValue}}>
      {children}
    </MyContext.Provider>
  );
}

const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('Trying to acess MyContext out of the Provider');
  }

  return context;
};

export {MyContextProvider, useMyContext};