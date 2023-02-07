import { Formik, Field, ErrorMessage  } from 'formik';
import * as yup from 'yup';

import { StyleForm } from './Form.styled'
import { useFetchAllQuery, useAddContactMutation } from '../../redux/contactsSlice'

const initialValues = {
  name: '', number: ''
}

const schema = yup.object().shape({
  name: yup.string().matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/).required(),
  number: yup.number().required().integer(),
});

const FormErrorName = ({ name }) => {
  return (
    <ErrorMessage name={name} component='div'
      render={() => <div>Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan</div>} />
  )
}

const FormErrorNumber = ({ name }) => {
  return (
    <ErrorMessage name={name} component='div'
      render={() => <div>Phone number must be digits and can contain spaces, dashes, parentheses and can start with +</div>} />
  )
}

const FormSubmit = () => {
  const { data } = useFetchAllQuery()
  const [ addContact ] = useAddContactMutation();
  const handlSubmit = (value, { resetForm }) => {
  const { name, number } = value
  const arrayContact = { name, number }

  if (!(data.filter(contact => contact.name.toLowerCase() === arrayContact.name.trim().toLowerCase())).length) {
    resetForm()
    return addContact(arrayContact)
  } else alert(`${arrayContact.name} is already in contacts`)
    resetForm()  
  }

  return (
    <>
      <h2 style={{textAlign: 'center',
                  fontSize: 30,
                  fontWeight:700}}>Phonebook</h2>
        
      <Formik initialValues={initialValues} onSubmit={handlSubmit} validationSchema={schema}>
        <StyleForm>
          <label htmlFor='userName'>Name</label>
          <Field  
          id='userName'
          name="name"
          />
          <FormErrorName name="name"/>
          
          <label htmlFor='userNumber'>Number</label>
          <Field
            id='userNumber'
            name="number"
          />
          <FormErrorNumber name="number"/>
          <button type='submit'>Add Contact</button>
        </StyleForm>
      </Formik>
    </>    
  );
}

export default FormSubmit;