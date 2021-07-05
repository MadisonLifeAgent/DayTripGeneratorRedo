"use strict";

// Day Trip Generator

// Possible trip selections
let possibleDestinations = ["Madison", "Green Bay", "Milwaukee", "Chicago", "Dubuque", "Eau Claire", "Twin Cities", "Detroit", "Lake Geneva", "Wausau"];
let possibleTransportModes = ["Taxi", "Personal Vehicle", "Bus", "Car Pool", "Shuttle", "Bicycle", "Motorcycle", "Walking"];
let possibleRestaurants = ["McDonalds", "Culvers", "Burger King", "Taco Bell", "Applebees", "Famous Dave's", "Perkins", "Taco Johns", "Wendy's", "Dairy Queen"];
let possibleEntertainment = ["Baseball Game", "Theatrical Play", "Live Music", "Festival / Flea Market", "Parks and Trails", "Museums", "Circus"];

// Get the randomly selected trip details
let randomDestination = getDestination(possibleDestinations);
let randomRestaurant = getRestaurant(possibleRestaurants);
let randomTransportMode = getTransportMode(possibleTransportModes);
let randomEntertainment = getEntertainment(possibleEntertainment);

// select a destination for user
function getDestination(destinationArray){

    // generate random destination selection
    let chosenDestination = destinationArray[Math.floor(Math.random() * destinationArray.length)];

    // ask if user likes destination
    let destinationChoice = prompt("Would you like to go to " + chosenDestination + "?", "yes or no");

    // if user doesn't like destination, rerun selection until user does
    while (destinationChoice !== "yes"){
        chosenDestination = destinationArray[Math.floor(Math.random() * destinationArray.length)];
        destinationChoice = prompt("Would you like this mode of transportation: " + chosenDestination + "?", "yes or no");
    }

    // send selection back to where called
    return chosenDestination;
}

// select a restaurant for user
function getRestaurant(restaurantArray){

    // generate random restaurant selection
    let chosenRestaurant = restaurantArray[Math.floor(Math.random() * restaurantArray.length)];

    // ask if user likes restaurant
    let restaurantChoice = prompt("Would you like to eat at " + chosenRestaurant + "?", "yes or no");

    // if user doesn't like restaurant, rerun selection until they do
    while (restaurantChoice !== "yes"){
        chosenRestaurant = restaurantArray[Math.floor(Math.random() * restaurantArray.length)];
        restaurantChoice = prompt("Would you like to eat at " + chosenRestaurant + "?", "yes or no");
    }

    // send selection back to where called
    return chosenRestaurant;
}

// select a transportation mode for user
function getTransportMode(transportModeArray){

    // generate random transportation mode selection
    let chosenTransportMode = transportModeArray[Math.floor(Math.random() * transportModeArray.length)];

    // ask if user likes transportation mode
    let transportChoice = prompt("Would you like to go by " + chosenTransportMode + "?", "yes or no");

    // if user doesn't like selected transportation mode, rerun selection until they do
    while (transportChoice !== "yes"){
        chosenTransportMode = transportModeArray[Math.floor(Math.random() * transportModeArray.length)];
        transportChoice = prompt("Would you like to go by " + chosenTransportMode + "?", "yes or no");
    }

    // send selection back to where called
    return chosenTransportMode;
}

// select a form of entertainment for user
function getEntertainment(entertainmentArray){

    // generate random entertainment selection
    let chosenEntertainment = entertainmentArray[Math.floor(Math.random() * entertainmentArray.length)];

    // ask if user likes restaurant
    let entertainmentChoice = prompt("Would you like this form of entertainment, " + chosenEntertainment + "?", "yes or no");

    // if user doesn't like transportation mode, rerun selection until they do
    while (entertainmentChoice !== "yes"){
        chosenEntertainment = entertainmentArray[Math.floor(Math.random() * entertainmentArray.length)];
        entertainmentChoice = prompt("Would you like this form of entertainment, " + chosenEntertainment + "?", "yes or no");
    }

    // send selection back to where called
    return chosenEntertainment;
}


// confirm if user likes trip details they selected
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


    while (userConfirmation !== "yes"){

        // Regenerate the trip selections again
        randomDestination = getDestination(possibleDestinations);
        randomTransportMode = getTransportMode(possibleTransportModes);
        randomRestaurant = getRestaurant(possibleRestaurants);
        randomEntertainment = getEntertainment(possibleEntertainment);

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
    
    // after user confirms trip, redisplay trip details and wish them well on their trip
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

    // display user confirmed trip details one last time
    console.log("Trip Details" +
                "\n\n" +
                "Destination: " + randomDestination +
                "\n" +
                "Transportation Mode: " + randomTransportMode +
                "\n" +
                "Restaurant: " + randomRestaurant +
                "\n" +
                "Entertainment: " + randomEntertainment);