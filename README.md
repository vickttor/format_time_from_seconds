# Convert Seconds to a friendly formatted string

Here we have two functions, the `pluralizeOrEmpty` function and the `formatDuration`. First of all we get the seconds passed as parameter when we call the function `formatDuration`:

```js
function formatDuration(seconds) {

  if(seconds == 0) return "now";
  // code to convert
}
```

if the "seconds" parameter is equal zero (0) we return the string "now". However, if the seconds is different of zero we need to validate each case to get the Years, Days, Hours, Minutes and Seconds. 
These values will be used to mount the message at the end of the function. but before it we need to make some mathematical calculations to figure out if the seconds match with at least one year or one day, one hour etc...

These calculations are persisted into constants (`years`, `days`, `hours`, `minutes`). The value stored into them are now passed into the second function called `pluralizeOrEmpty`
Basically this second function will validate if the first parameter (`value`) is equal zero, if so the function returns an empty string. If the value is equal one (1), so the function returns the string implementing the value passed plus the second parameter that is the text we want.

Example:

```js

function pluralizeOrEmpty(value, string){
  if(value === 0) return "";
  if(value === 1) return `${value} ${string}`;
  
  return `${value} ${string}s`;
}

pluralizeOrEmpty(1, 'day');

// It Will return the message: "1 day"

```

But if the value is higher than 1 we only add the 's' letter at the end of the string to pluralize the message

Now we need to concat all these values together using a conjunction `and`. But we need to use the `and` just before the last value if there'are more than one.

The constants `space1`, `space2` and so on, will persist the string containing "and" or an empty string ("").
With this implementation we can validate if we need to put the "and" conjunction between the `years` and `days` or between `days` and `hours` etc...

At the end we return the following joined string:

```js
return `${StrYears}${space1}${StrDays}${space2}${StrHours}${space3}${StrMinutes}${space4}${StrSeconds}`;
```

This was my implementation, if you think that we can improve this code feel free to contribute with the repository. ^_^


