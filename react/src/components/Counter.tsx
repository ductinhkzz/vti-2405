interface CounterProps {
  count: number;
  onClick: () => void;
}

const Counter = ({ onClick, count }: CounterProps) => {
  return <button onClick={onClick}>count is {count}</button>;
};

export { Counter };
