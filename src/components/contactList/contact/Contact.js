import PropTypes from 'prop-types';

const Contact = ({ contact, removeContact }) => {
  return (
    <li id={contact.id}>
      {contact.name} : {contact.number}
      <button id={contact.id} onClick={removeContact}>
        delete
      </button>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  removeContact: PropTypes.func.isRequired,
};
