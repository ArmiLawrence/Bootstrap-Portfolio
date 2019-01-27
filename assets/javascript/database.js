$(document).ready(function (){



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB_V446ZvWtNuKZK8zpPYR7AivACNAVVIs",
    authDomain: "uden-bootcamp-armi-portfolio.firebaseapp.com",
    databaseURL: "https://uden-bootcamp-armi-portfolio.firebaseio.com",
    projectId: "uden-bootcamp-armi-portfolio",
    storageBucket: "uden-bootcamp-armi-portfolio.appspot.com",
    messagingSenderId: "220711070886"
  };

  firebase.initializeApp(config);

  // Create a variable to reference the database
    var database = firebase.database();

    function clearForm (){
        document.getElementById("message-data").reset();
        };

    // 2. Button for adding Train Schedule
    /// Capture Button Click
    $("#submit").on("click", function(event) {

        event.preventDefault();

        // YOUR TASK!!!
        // Code in the logic for storing and retrieving the most recent user.
        // Don't forget to provide initial data to your Firebase database.
        var date = moment().format("YYYY-MM-DD");
        var firstName = $("#firstNameInput").val().trim();
        var lastName = $("#lastNameInput").val().trim();
        var emailAddress = $("#emailAddressInput").val().trim();
        var message = $("#messageInput").val().trim();
        var entryDate = $("#date").val(date.toString());

        var newMessage = {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            message: message,
            entryDate: entryDate
            
        }

        alert("Your message is sent!")

        // Uploads train data to the database
        database.ref().push(newMessage);

        // Logs everything to console
        console.log(newMessage.firstName);
        console.log(newMessage.lastName);
        console.log(newMessage.emailAddress);
        console.log(newMessage.message);
        console.log(newMessage.entryDate);

        clearForm();
        
    });



});