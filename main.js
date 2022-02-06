let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let runnerAge = 18;

if (runnerAge > 18 && registeredEarly ) {
  raceNumber += 1000;
} 


if (runnerAge > 18 && registeredEarly === true) {
  console.log(`You race at 9:30am. Your race number is ${raceNumber}`)
} else if (runnerAge > 18 && !registeredEarly === true) {
  console.log(`You race at 11:00am. Your race number is ${raceNumber}`)
} else if (runnerAge < 18) {
  console.log(`You race at 12:30pm. Your race number is ${raceNumber}`)
} else {
  console.log(`See registration desk`)
}

