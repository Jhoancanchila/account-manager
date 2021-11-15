import { useState, useEffect } from "react"
import { firebaseBuscar } from '../services'
import { useDispatch } from 'react-redux'


export const useGetData = () => {
  const [accounts, setAccounts] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    buscarCuentas()
  }, [accounts])
  const buscarCuentas = async () => {
    let cuentas = await firebaseBuscar('accounts')
    setAccounts(cuentas)
    dispatch({
      type: 'SET_NEW_REGISTER_DB',
      payload: accounts
    })
  }
  return accounts
}