// Problem-3: Modified Odd Number Series

function generateModifiedSeries(a) {
    const n = a % 2 !== 0 ? a : a - 1;
    const series = [];
    for (let i = 0; i < (n + 1) / 2; i++) {
      series.push(2 * i + 1);
    }
    return series.join(', ');
  }
  

  console.log(generateModifiedSeries(6)); 