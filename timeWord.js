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
  
  const tensWords = [
    '',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty'
  ];
  
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
  
  function timeToWords(time) {
    let [hours, minutes] = time.split(':').map(Number);
    const isAm = hours < 12;
    hours %= 12;
    hours = hours || 12;
  
    let hourWords = hoursWords[hours];
    let minuteWord = '';
  
    if (minutes === 0) {
      minuteWord = '';
    } else if (minutes < 20) {
      minuteWord = `${minuteWords[minutes]}`;
    } else {
      let tens = Math.floor(minutes / 10);
      let units = minutes % 10;
      minuteWord = `${tensWords[tens]} ${hoursWords[units]}`;
    }
  
    return `${hourWords} ${minuteWord} ${isAm ? 'am' : 'pm'}`;
  }