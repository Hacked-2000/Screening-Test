// Problem-2: Odd Number Series

function generateOddSeries(a) {
    const series = [];
    for (let i = 0; i < a; i++) {
      series.push(2 * i + 1);
    }
    return series.join(', ');
  }
  
  console.log(generateOddSeries(4)); 