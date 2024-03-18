import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

const ContactsForm = ({ getData }) => {
  const onFormikSubmit = (values, actions) => {
    getData(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={onFormikSubmit}>
      <Form>
        <label>
          Name
          <Field type="text" name="name" required />
        </label>
        <label>
          phone
          <Field type="tel" name="number" required />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactsForm;

ContactsForm.propTypes = {
  getData: PropTypes.func.isRequired,
};
