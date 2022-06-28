function scuberGreetingForFeet(distance){
  // Write your code here!
  if(distance < 400){
    return("This one is on me!")
  } else if(2000>= distance && distance >= 400){
    let charge = "That will be twenty bucks."
    return(charge)
  } else if(2500 > distance && distance > 2000){
    let charge = "I will gladly take your thirty bucks."
    return(charge)
  } else if(2500 < distance){
    let charge ="No can do."
    return(charge)
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let rating;
  city == "NYC" ? (rating = "Ok, sounds good.") : (rating = "No go.")
  return(rating)
}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  let message;
  switch(tipAmount){
    case 'generous':
      message = 'Thank you so much.';
      return(message)
      break;
    case 'not as generous':
      message = 'Thank you.';
      return(message)
      break
    default:
      message= "Bye."
      return(message)
  }
}