import Contact from './contact';
import PropTypes from 'prop-types';

const ContactList = ({ filtered, removeContact }) => {
  return (
    <ul>
      {filtered.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          removeContact={removeContact}
        ></Contact>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  filtered: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};
