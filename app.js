console.log("Hey");

function greet() {
    let username = prompt("What is your name?");
    document.write("Greetings, " + username,);
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
