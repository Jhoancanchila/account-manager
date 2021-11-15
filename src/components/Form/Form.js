import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import NativeSelects from '../InputSelect/NativeSelects';
import MaterialUIPickers from '../inputDate/MaterialUIPickers';
import { makeStyles } from '@material-ui/core/styles';
import ActionButton from '../Button/ActionButton';
import { useDispatch } from 'react-redux'
import { firebaseCrear } from '../../services';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const initState = {
  provider: "",
  email: '',
  password: '',
  observations: ''
}

export default function BasicTextFields() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [newRegister, setNewRegister] = useState(initState)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [itemSelected, setItemSelected] = React.useState('');

  const handleChange = (event) => {
    setItemSelected(event.target.value)
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTextInput = (e) => {
    setNewRegister({
      ...newRegister,
      [e.target.name]: e.target.value
    })
  }

  const handleButton = (evento) => {
    evento.preventDefault()
    newRegister.provider = itemSelected
    if (newRegister.provider === '' || newRegister.email === '' || newRegister.password === '' || newRegister.observations === '') {
      console.log('Es obligatorio llenar los campos')
    } else {
      //se formatea la fecha
      const dateFormat = selectedDate.getDate() + "/" + (selectedDate.getMonth() + 1) + "/" + selectedDate.getFullYear()
      //se incluye la fecha en el objeto 
      newRegister.createDate = dateFormat
      firebaseCrear('accounts', newRegister)
      setNewRegister(initState)
    }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleButton}>
      {console.log('Se monta el componente,se abre el telón')}
      <NativeSelects onChange={handleChange} value={itemSelected} />
      <TextField
        id="standard-basic"
        label="Email"
        name='email'
        type='text'
        value={newRegister.email}
        onChange={handleTextInput}
      />
      <TextField
        id="standard-basic"
        label="Contraseña"
        name='password'
        type='password'
        value={newRegister.password}
        onChange={handleTextInput} />
      <MaterialUIPickers onChange={handleDateChange} value={selectedDate}
      />
      <TextField
        id="standard-basic"
        label="Observación"
        name='observations'
        value={newRegister.observations}
        type='text'
        onChange={handleTextInput} />
      <ActionButton />
    </form>
  );
}
