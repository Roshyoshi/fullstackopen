const Total = ({arr}) => {
  const total = arr.reduce((acc, next) => acc + next, 0);

  return <p> Number of excercises {total}</p>;
};


export default Total;