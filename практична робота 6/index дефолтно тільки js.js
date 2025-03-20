function fetchData(id) {
    return new Promise((resolve) => {
      const delay = Math.floor(Math.random() * 2000) + 1000;
      setTimeout(() => {
        resolve(`Data from server for ID: ${id}`);
      }, delay);
    });
  }
  async function processData() {
    const parallelResults = await Promise.all([fetchData(1), fetchData(2), fetchData(3)]);
    console.log('Parallel results:', parallelResults);
    const sequentialResults = [];
    for (const id of [4, 5, 6]) {
      const result = await fetchData(id);
      sequentialResults.push(result);
    }
    console.log('Sequential results:', sequentialResults);
  }
  processData();