const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("Insert the time in seconds: ", seconds => {
  const formatedString = formatDuration(seconds);
    
  console.log(formatedString);
  
  readline.close();
})

function formatDuration (seconds) {
  if(seconds == 0) return "now";
    
  const years = (seconds >= 3.154e+7)? Math.floor(seconds / 3.154e+7): 0;
  const days = (years != 0)? Math.floor((seconds % 3.154e+7) / 86400 + 0.2):(seconds >= 86400)? Math.floor(seconds/86400): 0;
  const hours = (days != 0)? Math.floor((seconds % 86400) / 3600) : (seconds >= 3600)? Math.floor(seconds/3600): 0;
  const minutes = (days != 0 || hours != 0)? Math.floor((seconds % 3600) / 60) : (seconds >= 60)? Math.floor(seconds/60): 0;
  seconds = (hours != 0)? Math.floor((seconds % 3600) % 60) : (minutes != 0)? Math.floor((seconds % 60)) : seconds;
    
  const StrYears = pluralizeOrEmpty(years, 'year'); 
  const StrDays = pluralizeOrEmpty(days, 'day'); 
  const StrHours = pluralizeOrEmpty(hours, 'hour');
  const StrMinutes = pluralizeOrEmpty(minutes, 'minute');
  const StrSeconds = pluralizeOrEmpty(seconds, 'second');
    
  const space1 = (years != 0 && days != 0)?(hours == 0 && minutes == 0 && seconds == 0)?" and ": ", ": "";
  const space2 = (days != 0 && hours != 0)?(minutes == 0 && seconds == 0)?" and ": ", ": "";
  const space3 = (hours != 0 && minutes != 0 || (days != 0 && minutes != 0))?(seconds == 0)? " and ": ", ": "";
  const space4 = (minutes != 0 && seconds != 0 || (hours != 0 && seconds != 0))?" and ":"";
    
  return `${StrYears}${space1}${StrDays}${space2}${StrHours}${space3}${StrMinutes}${space4}${StrSeconds}`
}

function pluralizeOrEmpty(value, string) {
  if(value === 0) return "";
  if(value === 1) return `${value} ${string}`;
  
  return `${value} ${string}s`
}