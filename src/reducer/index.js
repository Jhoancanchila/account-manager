export const reducer = (state, action) => {
  switch (action.type) {

    case 'SET_NEW_REGISTER_DB': {
      console.log('reducer', action.payload)
      return {
        ...state,
        accountsListDB: action.payload
      }
    }
    default: {
      return state
    }
  }
}