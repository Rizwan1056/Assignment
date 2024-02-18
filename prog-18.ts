// Array of places to visit
let placesToVisit = ["Murree", "Naran", "Kaghan", "Islamabad", "Babusar top"];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that the array is still in its original order
console.log("Original order:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("Original order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();

// Print the array to show the changed order
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();

// Print the array to show it's back to its original order
console.log("Back to original order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();

// Print the array to show the changed order
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();

// Print the array to show the changed order
console.log("Sorted in reverse alphabetical order:", placesToVisit);
