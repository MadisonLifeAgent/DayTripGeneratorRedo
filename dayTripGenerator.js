"use strict";

// Day Trip Generator

// Possible trip selections
let possibleDestinations = ["Madison", "Green Bay", "Milwaukee", "Chicago", "Dubuque", "Eau Claire", "Twin Cities", "Detroit", "Lake Geneva", "Wausau"];
let possibleTransportModes = ["Taxi", "Personal Vehicle", "Bus", "Car Pool", "Shuttle", "Bicycle", "Motorcycle", "Walking"];
let possibleRestaurants = ["McDonalds", "Culvers", "Burger King", "Taco Bell", "Applebees", "Famous Dave's", "Perkins", "Taco Johns", "Wendy's", "Dairy Queen"];
let possibleEntertainment = ["Baseball Game", "Theatrical Play", "Live Music", "Festival / Flea Market", "Parks and Trails", "Museums", "Circus"];

// Get the randomly selected trip details
let randomDestination = getTripItem(possibleDestinations);
let randomRestaurant = getTripItem(possibleRestaurants);
let randomTransportMode = getTripItem(possibleTransportModes);
let randomEntertainment = getTripItem(possibleEntertainment);

// select a trip item for user
function getTripItem(tripItemArray){

    // generate random trip item
    let chosenTripItem = tripItemArray[Math.floor(Math.random() * tripItemArray.length)];

    // ask if user likes trip item generated
    let tripItemChoice = prompt("Would you like to go to " + chosenTripItem + "?", "yes or no");

    // if user doesn't like trip item, rerun selection until user does
    while (tripItemChoice !== "yes"){
        chosenTripItem = tripItemArray[Math.floor(Math.random() * tripItemArray.length)];
        tripItemChoice = prompt("Would you like this mode of transportation: " + chosenTripItem + "?", "yes or no");
    }

    // send selection back to where called
    return chosenTripItem;
}

// confirm if user likes trip details they selected
let tripDetailConfirmation = userConfirmationPrompt();

// get user confirmation
function userConfirmationPrompt(){
    let userConfirmation = prompt("Here are your trip details." + 
                                "\n" + 
                                "Type 'yes' to complete your trip or 'no' to get another trip. " +
                                "\n\n" +
                                "Destination: " + randomDestination +
                                "\n" +
                                "Transportation Mode: " + randomTransportMode +
                                "\n" +
                                "Restaurant: " + randomRestaurant +
                                "\n" +
                                "Entertainment: " + randomEntertainment, "yes or no");
        // console.log(userConfirmation);
        return userConfirmation;
}

// verify user confirmation
let userFinalAnswer = verifyUserConfirmation(tripDetailConfirmation)

// confirm if user likes trip details they selected
function verifyUserConfirmation(userConfirmation){
    while (userConfirmation !== "yes"){

        // Regenerate the trip selections again
        randomDestination = getTripItem(possibleDestinations);
        randomRestaurant = getTripItem(possibleRestaurants);
        randomTransportMode = getTripItem(possibleTransportModes);
        randomEntertainment = getTripItem(possibleEntertainment);

        // display newly generated trip details in prompt and ask user to confirm
        userConfirmation = prompt("Here are your trip details. Type 'yes' to confirm or 'no' to start over." +
                                "\n\n" +
                                "Destination: " + randomDestination +
                                "\n" +
                                "Transportation Mode: " + randomTransportMode +
                                "\n" +
                                "Restaurant: " + randomRestaurant +
                                "\n" +
                                "Entertainment: " + randomEntertainment, "yes or no");
    }

    
    // if user confirms trip, redisplay trip details and wish them well on their trip
    if (userConfirmation === "yes"){
        alert("Your trip is complete, enjoy!" +
                "\n\n" +
                "Destination: " + randomDestination +
                "\n" +
                "Transportation Mode: " + randomTransportMode +
                "\n" +
                "Restaurant: " + randomRestaurant +
                "\n" +
                "Entertainment: " + randomEntertainment);
    }
}

// display user trip details
let displayUserTripDetails = displayTripDetails(randomDestination, randomRestaurant, randomTransportMode, randomEntertainment);

function displayTripDetails(tripDestination, tripRestaurant, tripTransportation, tripEntertainment){
    // display user confirmed trip details one last time
    console.log("Trip Details" +
                "\n\n" +
                "Destination: " + tripDestination +
                "\n" +
                "Restaurant: " + tripRestaurant +
                "\n" +
                "Transportation Mode: " + tripTransportation +
                "\n" +
                "Entertainment: " + tripEntertainment);
}