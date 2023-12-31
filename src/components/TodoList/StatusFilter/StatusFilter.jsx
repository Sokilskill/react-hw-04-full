import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';
import { statusFilters } from 'redux/constants';
import { setStatusFilter } from 'redux/actions';

export const StatusFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filters.status);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => handleFilterChange(statusFilters.all)}
        selected={filter === statusFilters.All}
      >
        All
      </Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.active)}
        selected={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.completed)}
        selected={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};
