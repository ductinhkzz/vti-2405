import { useState } from 'react';

import './App.css';
import { Logo, Counter, PersonList } from './components';
import { IPerson } from './types';

function App() {
  const [count, setCount] = useState(0);

  const personList: IPerson[] = [
    {
      id: 1,
      name: 'Tinh Le',
      email: 'tinh.le@gmail.com',
      color: 'red'
    },
    {
      id: 2,
      name: 'Nhan Nguyen',
      email: 'nhan.nguyen@gmail.com',
      color: 'yellow'
    },
  ];

  const onClickCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <Logo />
      <h1 style={{ color: 'red', fontSize: 25 }}>Vite + React</h1>
      <div className='card'>
        <Counter onClick={onClickCount} count={count} />
      </div>
      <div>
        <PersonList list={personList} />
      </div>
    </div>
  );
}

export default App;
