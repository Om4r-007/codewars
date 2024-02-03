// 1700 = 17 century
// 1701 = 18 century

function century(year) {
    let z = year - 1;
      let x = z/100 ;
      let y = Math.floor(x);
    return y + 1 ;
  }