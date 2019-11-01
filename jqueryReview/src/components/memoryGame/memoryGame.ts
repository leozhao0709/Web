(function() {
  const shuffle = (arr: number[][], row: number, column: number) => {};

  const loadGameArray = (row: number, column: number): number[][] => {
    const arr = Array(row)
      .fill(0)
      .map(_ => Array(column).fill(0));

    return arr;
  };

  $(document).ready(() => {
    const row = 4;
    const column = 4;

    loadGameArray(row, column);
  });
})();
