import css from './Filter.module.css';
import { useDispatch} from 'react-redux';
import { filterContacts } from 'redux/filterSlice';




const Filter = () => {
  const dispatch = useDispatch();


  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        onChange={changeFilter}
        placeholder="give me keyword..."
      />
    </label>
  );
};

export default Filter;
