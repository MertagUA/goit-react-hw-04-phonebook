import { Form, Field } from 'formik';
import styled from '@emotion/styled';
import { theme } from 'utils/theme';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  margin-bottom: 10px;
  padding: 10px 0;
  border: 2px solid ${theme.color.darkGrey};
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: start;
  :not(:first-of-type){
    margin-top: 10px;
  }
  font-size: 18px;
  font-weight: 500;
`;

export const InputName = styled(Field)`
  width: 200px;
  height: 30px;
  margin-top: 5px;
  border-radius: 10px;
  font-size: 16px;`;

export const Button = styled.button`
  width: 120px;
  height: 30px;
  border: 1px solid ${theme.color.darkGrey};
  border-radius: 10px;
  padding: 5px;
  margin-top: 20px;
  font-size: 16px;
  box-shadow: ${theme.boxShadow};
  background-color: ${theme.color.white}
`;

export const ErrorText = styled.p`
margin-top: 5px;
  color: ${theme.color.red};
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
