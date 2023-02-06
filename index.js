function pluralizeOrEmpty(value, string) {

  if(value === 0) return "";
  if(value === 1) return `${value} ${string}`;
  
  return `${value} ${string}s`
}


function formatDuration (seconds) {
  if(seconds == 0) return "now";
    
  let years = (seconds >= 3.154e+7)? Math.floor(seconds / 3.154e+7): 0;
  let days = (years != 0)? Math.floor((seconds % 3.154e+7) / 86400 + 0.2):(seconds >= 86400)? Math.floor(seconds/86400): 0;
  let hours = (days != 0)? Math.floor((seconds % 86400) / 3600) : (seconds >= 3600)? Math.floor(seconds/3600): 0;
  let minutes = (days != 0 || hours != 0)? Math.floor((seconds % 3600) / 60) : (seconds >= 60)? Math.floor(seconds/60): 0;
  seconds = (hours != 0)? Math.floor((seconds % 3600) % 60) : (minutes != 0)? Math.floor((seconds % 60)) : seconds;
    
  let StrYears = pluralizeOrEmpty(years, 'year'); 
  let StrDays = pluralizeOrEmpty(days, 'day'); 
  let StrHours = pluralizeOrEmpty(hours, 'hour');
  let StrMinutes = pluralizeOrEmpty(minutes, 'minute');
  let StrSeconds = pluralizeOrEmpty(seconds, 'second');
    
  let space1 = (years != 0 && days != 0)?(hours == 0 && minutes == 0 && seconds == 0)?" and ": ", ": "";
  let space2 = (days != 0 && hours != 0)?(minutes == 0 && seconds == 0)?" and ": ", ": "";
  let space3 = (hours != 0 && minutes != 0 || (days != 0 && minutes != 0))?(seconds == 0)? " and ": ", ": "";
  let space4 = (minutes != 0 && seconds != 0 || (hours != 0 && seconds != 0))?" and ":"";
    
  return `${StrYears}${space1}${StrDays}${space2}${StrHours}${space3}${StrMinutes}${space4}${StrSeconds}`
}
  
const response = formatDuration(1928738167238);

console.log(response);