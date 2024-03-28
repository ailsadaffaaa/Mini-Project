const matchList = [
    ["mu", "city"],
    ["munchen", "mu"],
    ["city", "munchen"]
  ]
  
  const resultMatch = [1, 0, 1]
  
  const generateWinner = () => {
    let muPoints = 0;
    let cityPoints = 0;
    let munchenPoints = 0;
    
    
    for (let i = 0; i < matchList.length; i++) {
      if (matchList[i][1] === 'mu') {
        if (resultMatch[i] === 1) {
          muPoints += 3;
        }
        if (resultMatch[i] === 0) {
          cityPoints += 3;
        }
      }
      if (matchList[i][1] === 'munchen') {
        if (resultMatch[i] === 1) {
          munchenPoints += 3;
        }
        if (resultMatch[i] === 0) {
          muPoints += 3;
        }
      }
      if (matchList[i][1] === 'munchen') {
        if (resultMatch[i] === 1) {
          munchenPoints += 3;
        }
        if (resultMatch[i] === 0) {
          cityPoints += 3;
        }
      }
    }
    
    
  
    if (munchenPoints > Math.max(muPoints, cityPoints)) {
      return 'munchen';
    }
    else return Math.max(muPoints, cityPoints) === muPoints ? 'mu' : 'city';
       
  }
  
  const winner = generateWinner();
  console.log(winner)
  
  