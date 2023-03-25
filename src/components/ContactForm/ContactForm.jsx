import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import {
  FormStyled,
  Label,
  Button,
  InputName,
  Div,
  ErrorText,
} from './ContactForm.styled';
import * as yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

const namePattern =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phonePattern =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup
    .string().max(24)
    .matches(
      namePattern,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .max(20)
    .matches(
      phonePattern,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = ({ onContactFormSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onContactFormSubmit}
    >
      <FormStyled>
        <Div>
          <Label>
            Name
            <InputName type="text" name="name" />
            <ErrorMessage
              name="name"
              render={errorMessage => <ErrorText> {errorMessage} </ErrorText>}
            />
          </Label>
          <Label>
            Number
            <InputName type="tel" name="number" />
            <ErrorMessage
              name="number"
              render={errorMessage => <ErrorText> {errorMessage} </ErrorText>}
            />
          </Label>
        </Div>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};

ContactForm.propTypes = {
  onContactFormSubmit: PropTypes.func.isRequired,
}