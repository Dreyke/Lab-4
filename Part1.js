/* Lab 4, Part 1 - write the code requested by lines marked //TODO  */


/* a. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */

var rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
};

// TODO add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
// TODO if you had 100 Euros, calculate the equivalent value in Australian Dollars (AUD)
// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.

// adds Swiss Francs symbol and value to rates
rates.CHF = 1.1787;

// .toFixed doesn't do a great job of rounding to show two decimal places. I tried a few other ways but this was the best I could find
console.log("If you had 100 Euros, the equivalent in AUD would be: " + 100*rates.AUD.toFixed(2));

// source: https://stackoverflow.com/questions/1069666/sorting-javascript-object-by-property-value
// Sorts the keys by keys with highest value, starting from the lowest value...there is probably an easier way to accomplish this todo.
symbolsSorted = Object.keys(rates).sort(function (a, b) { return rates[a] - rates[b] });
console.log('The currency symbol with the highest exchange rate is ' + symbolsSorted[4]);

/* b. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th, fetched from http://api.open-notify.org/iss-now.json.
 */

var iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
};

// TODO Extract the latitude value, and log it to the console.
// TODO Extract the longitude value, and log it to the console.

// Logs the latitude and longitude to console
console.log("Latitude is: " + iss_location.iss_position.latitude);
console.log("Longitude is: " + iss_location.iss_position.longitude);

/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

var cats_and_owners = [
    { name: 'Bill Clinton', cat : 'Socks' },
    { name: 'Gary Oldman', cat : 'Soymilk' },
    { name: 'Katy Perry', cat : 'Kitty Purry' },
    { name: 'Snoop Dogg', cat : 'Miles Davis' }
];

// TODO print Gary Oldman's cat's name
// TODO Taylor Swift's cat is called  'Meredith'. Add this data to the array.
// TODO write a loop to print each cat owner, and their cat's name, one per line

// Prints Gary Oldman's cats name
console.log("Gary Oldman's cat name is " + cats_and_owners[1].cat);

//Adds Taylor Swift and her cats name to the array
cats_and_owners[cats_and_owners.length] = { name : 'Taylor Swift', cat : 'Meredith' };

// Loops through the array and prints each celeb and their cat
for (var r = 0 ; r < cats_and_owners.length ; r++) {
    var celebsAndCats = cats_and_owners[r];
    console.log(celebsAndCats.name + ", " + celebsAndCats.cat)
}

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

var nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
};

// TODO print the full name of the Literature Nobel laureate.
// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
// TODO write code to print the total number of prize categories
// TODO write code to count the total number of laureates from 2017. (have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.)

// Would a loop work better to print the full name?
// This took some time because after I was putting the element place, like laureates[1], rather than [0].key
var firstName = nobel_prize_winners_2017.prizes[3].laureates[0].firstname;
var lastName = nobel_prize_winners_2017.prizes[3].laureates[0].surname;
console.log(firstName + " " + lastName);

// prints id of each Physics Nobel laureates
// I can't figure out how to make this work without adding laureate
ids = [];
for (var id_component in nobel_prize_winners_2017.prizes[0].laureates) {
    id = nobel_prize_winners_2017.prizes[0].laureates[id_component]['id'];

    ids.push(id);
}
console.log(ids);

//prints total number of prize categories
categories = [];
for (var category_list in nobel_prize_winners_2017.prizes) {
    category = nobel_prize_winners_2017.prizes[category_list].category;

    categories.push(category);
}
console.log("Total count of prize categories is " + categories.length);


// prints list of all prize categories
// Using a different way than a for-in loop
// this is a mix of code between https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// and https://stackoverflow.com/questions/40530752/how-to-access-nested-json-object-key-and-values
Object.keys(nobel_prize_winners_2017["prizes"]).forEach(function (key) {
    console.log(nobel_prize_winners_2017["prizes"][key].category);
});

// Displays number of prize categories
console.log(Object.keys(nobel_prize_winners_2017["prizes"]).length);

// loop to count the number of laureates
var count = 0;

for (prizes in nobel_prize_winners_2017) {
    for (laureates in prizes) {
        count++;
    }
}

console.log(count);