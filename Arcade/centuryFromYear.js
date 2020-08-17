function centuryFromYear(year) {
    
  let reminder = year % 100
  let divide = parseInt(year/100)
  return (reminder == 0) ? divide:divide+1
  
}
