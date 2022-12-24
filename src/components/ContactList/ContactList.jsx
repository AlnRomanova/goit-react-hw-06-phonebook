import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter} from 'redux/selector';


const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  let contactsFiltered = contacts;

   if (filter.length > 0) {
     contactsFiltered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
   }


  return (
    <ul className={css.contacts}>
    {contactsFiltered.map(({id, name, number}) => (
     <li className={css.contactsItem} key={id} >
       <p className={css.contactsName}>{name}:</p>
       <p className={css.contactsNumber}>{number}</p>
       <button className={css.contactsBtn} type="button" onClick={()=> dispatch(deleteContact(id))}>Delete</button>
     </li>
   ))}
    </ul>
  )
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
})),
}

