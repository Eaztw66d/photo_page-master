import React from 'react'

const initialState = {
  key: '',
  list: []
}

export const Context = React.createContext(initialState );

// export const Provider = Context.Provider;
// export const Consumer = Context.Consumer;