const fortunes = {
    partOne: ["You",],
    
    partTwo: ["are having", "are seeking", "will see", "should have", "won't have", 
    "won't see", "will experience", "won't experience", "will be", "won't be",
    "definitely will have", "definitely won't have", "must have", "must not have",
    "shall never have", "can't see", "can see", "will touch", "won't touch", 
    "mustn't touch", "will undergo", "won't undergo", "will encounter",
    "won't encounter", "shall find", "won't find", "will enjoy", "won't come across", 
    "won't enjoy", "shall taste", "shan't taste", "will be subjected to",
    "won't be subjected to", "will run into", "won't run into", "will meet",
    "won't meet", "will suffer from", "will make", "won't make",
    "will be blessed with", "won't be blessed with", "will keep",
    "won't keep", "will use", "won't use", "shall utilize", "shan't utilize",
    "should occupy", "shouldn't occupy"],

    partThree:["good fortune", "bad fortune", "death", "a sunny day", "a cloudy day", 
    "a stormy day", "a dark night", "a dark knight", "the ends of the earth", 
    "vast riches", "a destitute life", "a sad kitten", "a Bitcoin millionaire", 
    "your wildest dreams", "my darkest nightmares", "your bleakest reality", 
    "the Devil for dinner", "a sad wendigo", "a 1967 Impala", 
    "a sixteenth season of Supernatural", "a jar of bees", "a jar of beans", 
    "Sam and Dean Winchester", "Netflix but without the wokeness", 
    "a Bored Ape Yacht Club NFT", "Daddy Winchester", "Castiel but when he thinks he's God", 
    "Moloch, the Pagan God of Child Sacrifice", "a puppy", 
    "a chicken sandwich from Chick-Fil-A", "My Chemical Romance", 
    "Five Finger Death Punch", "a F/A-18 Super Hornet", "the Chinese Communist Party", 
    "the Ghost of Kiev", "Vladimir Putin", "Chuck Norris", "a Bisquick Pancake", 
    "a hornet's nest", "an angry rooster", "a happy life", "a sad life", 
    "the United States Marine Corps", "the United States Navy", "the United States Army", 
    "Donald Trump", "Hillary Clinton", "Joe Biden", "a gun", "many guns", 
    "Avenged Sevenfold", "a good book", "many good books", "the Demogorgon", 
    "Marvel but before Disney ruined it", "night terrors", "good health", "bad health", 
    "a nice car", "a private plane", "Dr. Nick Beans", "the great state of Ohio"],


};

// Declaring the random words that will be generated as variables

let wordOne = fortunes.partOne[Math.floor(Math.random() * fortunes.partOne.length)];

let wordTwo = fortunes.partTwo[Math.floor(Math.random() * fortunes.partTwo.length)];

let wordThree = fortunes.partThree[Math.floor(Math.random() * fortunes.partThree.length)];

//  logs the random words to the console

function randomFortune () {
    console.log(`${wordOne} ${wordTwo} ${wordThree}.`);
};

randomFortune();