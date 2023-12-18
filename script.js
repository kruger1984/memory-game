/**
 * 1. Вибрати поле для Гри
 * 2. Заповнити поле картками (тегами Li)
 * 3. Зробити клік по карточкам
 * 4. Зробити перекидання карт
 *  4.1. Розміщати картинки для кожної картки
 *  4.2. Показати картинку.
 * 5. Якщо вибрано 2 картинки перевірка :
 *  - якщо співпадають видаляємо
 *  - перекидаємо всі карточки
 * 6. Якщо всі карти видалені вивести вікно з перезапуском гри.
 * 7. При клікі на кнопку перезапуск оновити сторінку.
 */

let cardsField = document.querySelector("#cards");
let resetBlock = document.querySelector('#reset');
let resetBtn = document.querySelector('#reset-btn');
let countCards = 16;
let images = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
// let deleteCards = 0;
let selected = [];
let deletedCards = 0;
let pause = false;
let countClick = 0;

images.sort((a, b) => 0.5 - Math.random());
console.dir (images);


for (i=0; i < countCards; i++){
    // cardsField.innerHTML = cardsField.innerHTML + ('<li></li>');

let li = document.createElement ("li");
li.id = i;
cardsField.appendChild (li);

};

cardsField.onclick = function(event){
    
    if (pause == false) {
        let element = event.target;
    if (element.tagName == "LI" && element.className != "active" ){
        countClick = countClick+1;
             console.dir(countClick);
        
        selected.push(element);
        element.className = "active";
        let img = images[element.id];
        element.style.backgroundImage = "url(images/" + img + ".png)";
        if (selected.length == 2){
            pause = true;
            if (images[selected[0].id] == images[selected[1].id]){
                selected[0].style.visibility = "hidden";
                selected[1].style.visibility = "hidden";
                deletedCards = deletedCards + 2;
                
            }
            
        setTimeout (refreshCards, 600);
       
            
        }
    }
    console.dir(selected);

    }
    
  }

 function refreshCards(){
     for (let i=0; i < countCards; i++) {
        cardsField.children[i].className = "";
       cardsField.children[i].style.backgroundImage = 'url("images/back.png")';
    }
    if (deletedCards == countCards) {
        resetBlock.style.display = "block";
    }
    selected = [];
    pause = false; 
}

resetBtn.onclick = function(){
    location.reload();
}