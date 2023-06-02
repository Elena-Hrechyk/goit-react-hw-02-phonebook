import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onSearchContact }) => {
  return (
    <>
      <div className={css.box__filter}>
        <label className={css.label__filter}>
          Filter contacts by Name
          <input
            type="text"
            name="filter"
            className={css.input__filter}
            value={filter}
            onChange={onSearchContact}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </label>
      </div>
    </>
  );
};

Filter.prototype = {
  filter: PropTypes.string,
  onSearchContact: PropTypes.func,
};
