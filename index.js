// code your solution here
function superbowlWin(record) {
    const winningYear = record.find(game => game.result === "W");
  
    if (winningYear) {
      return winningYear.year;
    } else {
      return undefined;
    }
  }
  
  // Example usage:
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // Add more game records here
  ];
  
  const winYear = superbowlWin(record);
  console.log("Superbowl win year:", winYear);
  