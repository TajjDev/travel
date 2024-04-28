import React, { createContext } from 'react'
export const createcontext = createContext()
const UserContext = ({children}) => {

  return (
    <createcontext.Provider value={''}>
        {children}
    </createcontext.Provider>
  )
}

export default UserContext
