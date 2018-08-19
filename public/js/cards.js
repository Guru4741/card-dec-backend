function allowDrop(event){
	event.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    //console.log(ev.target.className);
    var data = ev.dataTransfer.getData("text")
    var dataID = data.replace(/ .*/,'');

    console.log(data);
    console.log("ID : ", dataID.length);
    console.log(ev.target)
    console.log("Class Name :", ev.target.classList.contains(dataID));

    if(ev.target.classList.contains(dataID))
    	document.getElementById(data).style.display = "none";
    else
    	alert('Not the right stack!!');
}

function generateCards(cardNumb, cardHouse, cardImage){

		//console.log(i)
		let card = document.createElement('div');
		card.classList.add('card');
		card.id = `${cardHouse} ${cardNumb}`;
		card.setAttribute('draggable', 'true');
		card.addEventListener('dragstart', function(event){
			event.dataTransfer.setData("text", event.target.id);
			//console.log(event.dataTransfer);
		})

		let cardNumElement = document.createElement('h2');
		let cardNumber = document.createTextNode(cardNumb);
		cardNumElement.appendChild(cardNumber);
		card.appendChild(cardNumElement);
		/*
		let cardTypeElement = document.createElement('h3');
		let cardType = document.createTextNode(cardHouse);
		cardTypeElement.appendChild(cardType);
		card.appendChild(cardTypeElement);
		*/

		let cardSuiteImage = document.createElement('img');
		cardSuiteImage.src = cardImage;
		cardSuiteImage.setAttribute('draggable', 'false');

		card.appendChild(cardSuiteImage);


		document.querySelector('.cardContainer').appendChild(card);
	
}

//generateCards('Spades');
//generateCards('Diamond');
//generateCards('Hearts');
//generateCards('Club');


let cardDeck = [];

function createCard(cardSuite){

	for(let i = 1; i <= 13; i++){
		let card = {
			suite: cardSuite,
			number: i,
			image: `./images/${cardSuite}.png`
		}
		cardDeck.push(card);
	}
	return cardDeck;
}


function createCardSuits(){
	createCard('hearts');
	createCard('spades');
	createCard('club');
	createCard('diamond');
}

createCardSuits();

shuffle(cardDeck);
console.log(cardDeck);

cardDeck.forEach(function(each){
	generateCards(each.number, each.suite, each.image);

})

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function sayName(){
	alert('Gaurav');
}

//Restart Button
var button = document.getElementById('restartBtn');
restartBtn.addEventListener('click', function(){
	shuffle(cardDeck);
	document.querySelector('.cardContainer').innerHTML = "";
	cardDeck.forEach(function(each){
	generateCards(each.number, each.suite, each.image);

})
	console.log(cardDeck);
});


