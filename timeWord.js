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
    'eleven',
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

const minuteWords = [
    '',
    'oh one',
    'oh two',
    'oh three',
    'oh four',
    'oh five',
    'oh six',
    'oh seven',
    'oh eight',
    'oh nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'quarter',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty one',
    'twenty two',
    'twenty three',
    'twenty four',
    'twenty five',
    'twenty six',
    'twenty seven',
    'twenty eight',
    'twenty nine',
    'half'
];

function timeToWords(time) {
    const [hours, minutes] = time.split(':').map(Number);
    const isAm = hours < 12;

    let hourWords = hoursWords[hours];
    let minuteWords = minuteWords[minutes];

    if (minutes === 0) {
        return `${hourWords} o'clock ${isAm ? 'am' : 'pm'}`;
    } else {
        return `${hourWords} ${minuteWords} ${isAm ? 'am' : 'pm'}`;
    }
}