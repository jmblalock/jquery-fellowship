console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  //  HINT: Make a console.log for each of your functions to make sure that, 
  //  when you click, the correct function is being called!

  console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  const $newSection = $('<section />');
  $newSection.attr('id', 'middle-earth');

  // 2. append the section to the body of the DOM.
  const $bodyEl = $('body');
  $bodyEl.append($newSection);

  // 3. use a for loop to iterate over the lands array that does the following:

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section
  
  for (i = 0; i < lands.length; i++) {
    const $newArticle = $(`<a />`);
    $newArticle.attr('id', `${lands[i]}`);
    $newArticle.html(`<h1 ${lands[i]} />`);
    $newSection.append($newArticle);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log("Make hobbits");

  // 1. display an unordered list of the hobbits in the shire.

  // 2. give each hobbit a class of "hobbit"

  const $newUl = $('<ul />');
  const $articleEl = $('#The-Shire');
  $articleEl.append($newUl);

  for (i = 0; i < hobbits.length; i++) {
    const $newLi = $(`<li ${hobbits[i]} />`);
    $newLi.addClass('hobbit');
    $newUl.append($newLi);
  }
  
  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  console.log('Keep it Secret. Keep it Safe.');

  // 1. create an empty div with an id of 'the-ring'
  const $newDiv = $('<div />');
  $newDiv.attr('id', 'the-ring');

  // 2. add the ring as a child of Frodo
  const $hobbitLi = $('.hobbit');
  const $frodo = $hobbitLi.eq(0);
  $frodo.append($newDiv);

  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  console.log("Make baddies");

  // 1. display an unordered list of baddies in Mordor

  // 2. give each of the baddies a class of "baddy"

  // 3. remember to append them to Mordor

  const $baddyUl = $('<ul />');
  const $mordorEl = $('#Mordor');
  $mordorEl.append($baddyUl);

  for (i = 0; i < baddies.length; i++) {
    const $baddyLi = $(`<li ${baddies[i]} />`);
    $baddyLi.addClass('baddy');
    $baddyUl.append($baddyLi);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  console.log("Make buddies")

  // 1. create an aside tag and append it to middle-earth below mordor
  const $middleEarth = $('#middle-earth');
  const $buddyAside = $('<aside />');
  $middleEarth.append($buddyAside);

  // 2. display an unordered list of buddies in the aside

  // 3. give each of the buddies a class of "buddy"
  const $buddyUl = $('<ul />');
  $buddyAside.append($buddyUl);

  for (i = 0; i < buddies.length; i++) {
    const $buddyLi = $(`<li ${buddies[i]} />`);
    $buddyLi.addClass('buddy');
    $buddyUl.append($buddyLi);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {

  console.log("Leave The Shire.")

  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  const $removedHobbits = $('#The-Shire').find('ul').remove();
  let $rivendell = $('#Rivendell');
  $rivendell.append($removedHobbits);

  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  console.log("Beautiful stranger")

  // 1. change the buddy 'Strider' textnode to "Aragorn"
  const $buddies = $('.buddy');
  const $beautifulStranger = $buddies.eq(3);
  $beautifulStranger.text('Aragorn');
  console.log($beautifulStranger);

  // hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  console.log("Forge the fellowship.");

  // 1. create a new div with an id 'the-fellowship'
  const $fellowshipDiv = $('<div />');
  $fellowshipDiv.attr('id', 'the-fellowship');

  // 2. add an h1 with the text 'The Fellowship' to this new div
  const $fellowshiph1El = ('<h1 The Fellowship />');
  $fellowshipDiv.append($fellowshiph1El);

  // 3. append the fellowship to middle-earth
  const $middleEarth = $('#middle-earth');
  $middleEarth.append($fellowshipDiv);

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  const $removedHobbits = $('#Rivendell').find('ul').remove();
  const $removedBuddies = $('#middle-earth').find('aside').find('ul').remove();
  $fellowshipDiv.append($removedHobbits);
  $fellowshipDiv.append($removedBuddies);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  console.log("The Balrog");

  // 1. change the 'Gandalf' textNode to 'Gandalf the White'
  const $buddies = $('.buddy');
  const $gandalf = $buddies.eq(0);
  $gandalf.text('Gandalf the White');

  // 2. add a class "the-white" to this element
  $gandalf.addClass('the-white');

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  console.log('Horn of Gondor')

  // 1. create a pop-up alert that the horn of gondor has been blown
  alert('The Horn of Gondor has been blown!');

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  const $buddies = $('.buddy');
  const $boromir = $buddies.eq(4);
  $boromir.wrap("<strike>");

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  const $baddies = $('.baddy');
  const $urukHai = $baddies.eq(2);

  $urukHai.remove();

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  console.log("It's dangerous to go alone");

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  const $hobbits = $('.hobbit');
  const $frodo = $hobbits.eq(0).remove();
  const $sam = $hobbits.eq(1).remove();
  const $mordor = $('#Mordor');
  $mordor.append($frodo);
  $mordor.append($sam);

  // 2. add a div with an id of 'mount-doom' to Mordor
  const $mordorDiv = $('<div />');
  $mordorDiv.attr('id', 'mount-doom');
  $mordor.append($mordorDiv);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  console.log('We wants it')

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const $gollumDiv = $('<div />');
  const $mordor = $('#Mordor');
  $gollumDiv.attr('id', 'gollum');
  $mordor.append($gollumDiv);

  // 2. Move the ring from Frodo and give it to Gollum
  const $theRing = $('#the-ring').remove();
  $gollumDiv.append($theRing);

  // 3. Move Gollum into Mount Doom
  const $gollum = $gollumDiv.remove();
  const $mountDoom = $('#mount-doom');
  $mountDoom.append($gollum);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  console.log('There and back again');

  // 1. remove Gollum and the Ring from the DOM
  const $gollum = $('#gollum').remove();

  // 2. remove all the baddies from the DOM
  const $baddies = $('.baddy').remove();

  // 3. Move all the hobbits back to the shire
  const $hobbits = $('.hobbit').remove();
  const $theShire = $('#The-Shire');
  $theShire.append($hobbits);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
  $('#14').on('click', () => {
    makeMiddleEarth();
    makeHobbits();
    keepItSecretKeepItSafe();
    makeBaddies();
    makeBuddies();
    leaveTheShire();
    beautifulStranger();
    forgeTheFellowShip();
    theBalrog();
    hornOfGondor();
    itsDangerousToGoAlone();
    weWantsIt();
    thereAndBackAgain();
  });

});
