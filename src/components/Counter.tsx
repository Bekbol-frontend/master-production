interface IProps {
  count: number;
}

function Counter({ count }: IProps) {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <p>{count + 1}</p>
    </div>
  );
}

export default Counter;
