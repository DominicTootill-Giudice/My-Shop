console.log("Hey");

function greet() {
    let username = prompt("What is your name?");
    document.write("Oi, " + username,);
}
greet()


function askTime() {
    let time = prompt("What time is it?  (0-23)");
    let message;

    if (time <= 11) {
    message = ", Good Morning, Welcome to our endless realm of";
    } else if  (time <= 17) {
    message = ", Good Afternoon, Welcome to our endless realm of";
    } else if  (time = 23) {
    message = ", Good Evening, Welcome to our endless realm";
    }

    document.write(message);
}
  askTime()


  function getRating()  {
    let rating = prompt('Rate my site between 1-5','5');

    // validate / check that they input a number between 1 - 5;

    while  (!(rating > 0 && rating <=5)) {
        rating = prompt('Please enter a number 5 or lower!')
    }
     
     // while (!(rating > 0 && rating <= 5)) {
     //   rating = prompt('Please enter a number 5 or lower')
     // }
    
     for (let i = 0; i < rating; i++) {
         document.write("<img src='https://st.depositphotos.com/1795881/1619/i/450/depositphotos_16199827-stock-photo-3d-symbol.jpg'/>")
    }

  }
