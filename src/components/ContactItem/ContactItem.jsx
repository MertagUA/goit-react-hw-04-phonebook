import { Item, Div, ContactName, DeleteButton } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <Div />
      <ContactName>{name}</ContactName>
      <p>{number}</p>
      <DeleteButton
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
