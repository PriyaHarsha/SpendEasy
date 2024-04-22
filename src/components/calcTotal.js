function calcTotal(array) {
  const total = array.reduce((prev, curr) => {
    return prev + parseFloat(curr.amount);
  }, 0);

  return total;
}

export default calcTotal;
