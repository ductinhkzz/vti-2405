import { IPerson } from '../../types';
import PersonItem from './PersonItem';
import classes from './person.module.css';

interface PersonListProps {
  list: IPerson[];
}

const PersonList = ({ list }: PersonListProps) => {
  return (
    <ul className={classes['list-container']}>
      {list.map((person) => (
        <PersonItem key={person.id} person={person} />
      ))}
    </ul>
  );
};

export { PersonList };
