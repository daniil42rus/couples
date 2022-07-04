let container = document.getElementById('container');

let div = document.createElement('div');
div.classList.add('top');
div.classList.add('center');

let h1 = document.createElement('h1');
h1.textContent = 'Пары';

div.append(h1);

let spanTimer = document.createElement('span');
spanTimer.textContent = '60';

let spanTimerDubl = document.createElement('span');
spanTimerDubl.textContent = spanTimer.textContent;


let h2 = document.createElement('h2')
h2.textContent = 'Количество карточек по вертикали/горизонтали';


let form = document.createElement('form');

form.append(h2);


let inputVertical = document.createElement('input');
inputVertical.setAttribute('type', 'number');
inputVertical.value = 4;
form.append(inputVertical);

let labelVertical = document.createElement('label');
form.append(labelVertical);

let inputHorizontal = document.createElement('input');
inputHorizontal.setAttribute('type', 'number');
inputHorizontal.value = 4;
form.append(inputHorizontal);

let buttonStart = document.createElement('button');
buttonStart.classList.add('button', 'button_start')
buttonStart.textContent = 'Начать игру';

form.append(buttonStart);


function createCardList() {
  let list = document.createElement('ul');
  list.classList.add('card__list');
  return list;
}

function createCardItem() {
  let item = document.createElement('li');
  item.classList.add('card__item', 'card__item_background');
  return { item };
}

function buttonReset() {
  let buttonReset = document.createElement('button');
  buttonReset.classList.add('button')
  buttonReset.textContent = 'Сыграть ещё раз';
  return buttonReset;
}




let arrAllCard = [
  { value: 'aceHearts', open: false, done: false },
  { value: 'aceHearts', open: false, done: false },
  { value: 'kingHearts', open: false, done: false },
  { value: 'kingHearts', open: false, done: false },
  { value: 'queenHearts', open: false, done: false },
  { value: 'queenHearts', open: false, done: false },
  { value: 'jackHearts', open: false, done: false },
  { value: 'jackHearts', open: false, done: false },
  { value: 'hearts10', open: false, done: false },
  { value: 'hearts10', open: false, done: false },
  { value: 'hearts9', open: false, done: false },
  { value: 'hearts9', open: false, done: false },
  { value: 'hearts8', open: false, done: false },
  { value: 'hearts8', open: false, done: false },
  { value: 'hearts7', open: false, done: false },
  { value: 'hearts7', open: false, done: false },
  { value: 'hearts6', open: false, done: false },
  { value: 'hearts6', open: false, done: false },
  { value: 'hearts5', open: false, done: false },
  { value: 'hearts5', open: false, done: false },
  { value: 'hearts4', open: false, done: false },
  { value: 'hearts4', open: false, done: false },
  { value: 'hearts3', open: false, done: false },
  { value: 'hearts3', open: false, done: false },
  { value: 'hearts2', open: false, done: false },
  { value: 'hearts2', open: false, done: false },

  { value: 'aceClubs', open: false, done: false },
  { value: 'aceClubs', open: false, done: false },
  { value: 'kingClubs', open: false, done: false },
  { value: 'kingClubs', open: false, done: false },
  { value: 'queenClubs', open: false, done: false },
  { value: 'queenClubs', open: false, done: false },
  { value: 'jackClubs', open: false, done: false },
  { value: 'jackClubs', open: false, done: false },
  { value: 'clubs10', open: false, done: false },
  { value: 'clubs10', open: false, done: false },
  { value: 'clubs9', open: false, done: false },
  { value: 'clubs9', open: false, done: false },
  { value: 'clubs8', open: false, done: false },
  { value: 'clubs8', open: false, done: false },
  { value: 'clubs7', open: false, done: false },
  { value: 'clubs7', open: false, done: false },
  { value: 'clubs6', open: false, done: false },
  { value: 'clubs6', open: false, done: false },
  { value: 'clubs5', open: false, done: false },
  { value: 'clubs5', open: false, done: false },
  { value: 'clubs4', open: false, done: false },
  { value: 'clubs4', open: false, done: false },
  { value: 'clubs3', open: false, done: false },
  { value: 'clubs3', open: false, done: false },
  { value: 'clubs2', open: false, done: false },
  { value: 'clubs2', open: false, done: false },

  { value: 'aceDiamonds', open: false, done: false },
  { value: 'aceDiamonds', open: false, done: false },
  { value: 'kingDiamonds', open: false, done: false },
  { value: 'kingDiamonds', open: false, done: false },
  { value: 'queenDiamonds', open: false, done: false },
  { value: 'queenDiamonds', open: false, done: false },
  { value: 'jackDiamonds', open: false, done: false },
  { value: 'jackDiamonds', open: false, done: false },
  { value: 'diamonds10', open: false, done: false },
  { value: 'diamonds10', open: false, done: false },
  { value: 'diamonds9', open: false, done: false },
  { value: 'diamonds9', open: false, done: false },
  { value: 'diamonds8', open: false, done: false },
  { value: 'diamonds8', open: false, done: false },
  { value: 'diamonds7', open: false, done: false },
  { value: 'diamonds7', open: false, done: false },
  { value: 'diamonds6', open: false, done: false },
  { value: 'diamonds6', open: false, done: false },
  { value: 'diamonds5', open: false, done: false },
  { value: 'diamonds5', open: false, done: false },
  { value: 'diamonds4', open: false, done: false },
  { value: 'diamonds4', open: false, done: false },
  { value: 'diamonds3', open: false, done: false },
  { value: 'diamonds3', open: false, done: false },
  { value: 'diamonds2', open: false, done: false },
  { value: 'diamonds2', open: false, done: false },

  { value: 'aceSpades', open: false, done: false },
  { value: 'aceSpades', open: false, done: false },
  { value: 'kingSpades', open: false, done: false },
  { value: 'kingSpades', open: false, done: false },
  { value: 'queenSpades', open: false, done: false },
  { value: 'queenSpades', open: false, done: false },
  { value: 'jackSpades', open: false, done: false },
  { value: 'jackSpades', open: false, done: false },
  { value: 'spades10', open: false, done: false },
  { value: 'spades10', open: false, done: false },
  { value: 'spades9', open: false, done: false },
  { value: 'spades9', open: false, done: false },
  { value: 'spades8', open: false, done: false },
  { value: 'spades8', open: false, done: false },
  { value: 'spades7', open: false, done: false },
  { value: 'spades7', open: false, done: false },
  { value: 'spades6', open: false, done: false },
  { value: 'spades6', open: false, done: false },
  { value: 'spades5', open: false, done: false },
  { value: 'spades5', open: false, done: false },
  { value: 'spades4', open: false, done: false },
  { value: 'spades4', open: false, done: false },
  { value: 'spades3', open: false, done: false },
  { value: 'spades3', open: false, done: false },
  { value: 'spades2', open: false, done: false },
  { value: 'spades2', open: false, done: false },
];

buttonStart.addEventListener('click', function (e) {
  e.preventDefault();

  buttonStart.setAttribute('disabled', 'disabled');

  let verticalNumber = parseInt(inputVertical.value);
  let horizontalNumber = parseInt(inputHorizontal.value);

  if (verticalNumber == 1 || verticalNumber == 3 || verticalNumber == 5 || verticalNumber == 7 || verticalNumber == 9 || verticalNumber > 10) {
    verticalNumber = 4;
    inputVertical.value = verticalNumber
  }

  if (horizontalNumber == 1 || horizontalNumber == 3 || horizontalNumber == 5 || horizontalNumber == 7 || horizontalNumber == 9 || horizontalNumber > 10) {
    horizontalNumber = 4;
    inputHorizontal.value = horizontalNumber
  }

  let number = verticalNumber * horizontalNumber;

  let doneCard = [];
  let arrCard = [];

  for (i in arrAllCard) {
    if (i < number) {
      arrCard.push(arrAllCard[i])
    }
  }

  arrCard.sort(() => Math.random() - 0.5);

  function createCardApp(arr) {
    let cardList = createCardList();
    container.append(cardList);

    cardList.classList.add('card__list_h' + horizontalNumber)

    for (i in arr) {
      let obj = arr[i];
      let cardValue = arr[i].value;

      let cardItem = createCardItem(arr[i]);

      function outSide() {
        cardItem.item.classList.add(cardValue)
      };

      if (obj['open']) {
        cardItem.item.classList.add('open')
        outSide();
      }

      if (obj['done']) {
        cardItem.item.classList.add('done')
      };

      cardList.append(cardItem.item);

      cardItem.item.addEventListener('click', () => {

        if (obj['open']) {
          obj['open'] = false;
        } else {
          obj['open'] = true;
          doneCard.push(obj);
        };

        if (doneCard.length > 1) {
          card1 = arr.indexOf(doneCard[0]);
          card2 = arr.indexOf(doneCard[1]);

          if (doneCard[0]['value'] == doneCard[1]['value']) {
            arr[card1]['done'] = true;
            arr[card2]['done'] = true;
            doneCard = [];
          };
        };

        if (doneCard.length > 2) {
          arr[card1]['open'] = false;
          arr[card2]['open'] = false;
          doneCard[0] = doneCard[2];
          doneCard.splice(1, 2);
        };

        cardList.remove(cardItem.item);
        createCardApp(arr);

        let trueArr = [];
        for (i of arrCard) {
          trueArr.push(i['done']);
        }

        function endGameCard(element) {
          return element == true;
        }

        if (trueArr.every(endGameCard) == true) {
          clearInterval(nIntervId);
          let buttonRest = buttonReset()
          container.append(buttonRest);
          buttonRest.addEventListener('click', () => {
            location.reload();
          })
        }
      });
    };

  };

  createCardApp(arrCard);

  (function timer() {

    div.classList.remove('center');

    div.append(spanTimer);
    div.append(h1);
    div.append(spanTimerDubl);

    let spanText = parseInt(spanTimer.textContent)
    nIntervId = setInterval(finalCountdown, 1000);
    function finalCountdown() {
      while (spanText) {
        --spanText;
        spanTimerDubl.textContent = spanText;
        spanTimer.textContent = spanText;
        return spanText;
      }
      clearInterval(nIntervId);
      if (spanText == 0) {
        container.classList.add('endgame');
        let buttonRest = buttonReset()
        buttonRest.classList.add('endgame_button')
        container.append(buttonRest)

        buttonRest.addEventListener('click', () => {
          location.reload();
        })
      }
    }
  })();

});

document.addEventListener('DOMContentLoaded', () => {
  container.append(div);
  container.append(form);
})





