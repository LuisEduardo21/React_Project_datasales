import React from 'react';
import Context from './Context'
import useStorages from '../../utils/useStorage'

const StoreProvider = ({ children }) => {
    const [token, setToken] = useStorages('token');

    return (
        <Context.Provider
          value={{ 
              token,
              setToken
          }}
        >
            {children}
        </Context.Provider>
    )
}

export default StoreProvider;