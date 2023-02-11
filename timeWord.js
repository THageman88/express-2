//creates a list of words for the hours
const hoursWords = [
    'twelve',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven'
  ];
  //creates a list of words for the tens spot
  const tensWords = [
    '',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty'
  ];
  //creates a list of words for the minutes spot
  const minuteWords = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];
  // this creates the timeToWords function
  function timeToWords(time) {
  // spplits time into hours and minutes and converts them into numbers
    let [hours, minutes] = time.split(':').map(Number);
  // checks to see if its am or pm
    const isAm = hours < 12;

  //converts the hours input into a 12 hour format
    hours %= 12;
    hours = hours || 12;
  //sets up variable for minutes and looks up hour words
    let hourWords = hoursWords[hours];
    let minuteWord = '';
  //This figures out the words for the minuts spot
    if (minutes === 0) {
      minuteWord = '';
    } else if (minutes < 20) {
      minuteWord = `${minuteWords[minutes]}`;
    } else {
      let tens = Math.floor(minutes / 10);
      let units = minutes % 10;
      minuteWord = `${tensWords[tens]} ${hoursWords[units]}`;
    }
  //returns the phrase and checks if its am or pm
    return `${hourWords} ${minuteWord} ${isAm ? 'am' : 'pm'}`;
  }