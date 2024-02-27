import PropTypes from 'prop-types';

const Filter = ({ onFilterChange, filter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        onChange={onFilterChange}
        name="filter"
        value={filter}
      ></input>
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
