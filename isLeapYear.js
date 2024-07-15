function isLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}
}

// Example usage
const year = isLeapYear(2016)
const year1 =  isLeapYear(2018);
