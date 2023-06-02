import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({
  contacts,
  onDeleteContact,
  filter,
  onFilterContacts,
}) => {
  return (
    <>
      {contacts !== [] && filter !== '' ? (
        <ul className={css.list}>
          {onFilterContacts.map(item => (
            <li className={css.item__contact} key={item.id}>
              <p className={css.contact}>
                {item.name}: {item.number}
              </p>
              <button
                type="button"
                className={css.btn__delete}
                onClick={() => {
                  onDeleteContact(item.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={css.list}>
          {contacts.map(item => {
            return (
              <li className={css.item__contact} key={item.id}>
                <p className={css.contact}>
                  {item.name}: {item.number}
                </p>
                <button
                  type="button"
                  className={css.btn__delete}
                  onClick={() => {
                    onDeleteContact(item.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
  filter: PropTypes.string,
  onFilterContacts: PropTypes.func,
};
