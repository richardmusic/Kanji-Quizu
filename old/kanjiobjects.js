const data = [
    {   imgSrc: 'img/1.png',
        hiragana: 'あ',
        english: 'a'    },
    {   imgSrc: 'img/2.png',
        hiragana: 'い',
        english: 'i'    },
    {   imgSrc: 'img/3.png',
        hiragana: 'う',
        english: 'u'    },
    {   imgSrc: 'img/4.png',
        hiragana: 'え',
        english: 'e'    },
    {   imgSrc: 'img/5.png',
        hiragana: 'お',
        english: 'o'    },
    {   imgSrc: 'img/6.png',
        hiragana: 'か',
        english: 'ka'    },
    {   imgSrc: 'img/7.png',
        hiragana: 'か',
        english: 'ka'    },
    {   imgSrc: 'img/8.png',
        hiragana: 'か',
        english: 'ka'    },
    {   imgSrc: 'img/9.png',
        hiragana: 'か',
        english: 'ka'    },
    {   imgSrc: 'img/10.png',
        hiragana: 'か',
        english: 'ka'    },
    {   imgSrc: 'img/11.png',
        hiragana: 'か',
        english: 'ka'    },
    {   imgSrc: 'img/12.png',
        hiragana: 'か',
        english: 'ka'    },
    {   imgSrc: 'img/13.png',
        hiragana: 'か',
        english: 'ka'    },
    {   imgSrc: 'img/14.png',
        hiragana: 'か',
        english: 'ka'    },
    {   imgSrc: 'img/15.png',
        hiragana: 'か',
        english: 'ka'    },
    {   imgSrc: 'img/16.png',
        hiragana: 'か',
        english: 'ka'    },
    {   imgSrc: 'img/17.png',
        hiragana: 'か',
        english: 'ka'    },
    {   imgSrc: 'img/18.png',
        hiragana: 'か',
        english: 'ka'    },
    {   imgSrc: 'img/19.png',
        hiragana: 'か',
        english: 'ka'    },
    {   imgSrc: 'img/20.png',
        hiragana: 'か',
        english: 'ka'    },

        
        
        
];

function displayArray(item) {
    emptyDivElement.innerHTML = '';
    const container = document.createElement('div'); 

    const imgElement = document.createElement('img');
    imgElement.src = item.imgSrc;
    container.appendChild(imgElement);

    const hiraganaElement = document.createElement('p');
    hiraganaElement.textContent = `${item.hiragana}`;
    container.appendChild(hiraganaElement); 

    const englishElement = document.createElement('p');
    englishElement.textContent = `${item.english}`;
    container.appendChild(englishElement); 

    emptyDivElement.appendChild(container);
}

const wrongButtonElement = document.getElementById('wrongButton');
const rightButtonElement = document.getElementById('rightButton');
const resetButtonElement = document.getElementById('resetButton');
const emptyDivElement = document.getElementById('emptyDiv'); 
let count = 0; let timer;

function startTimer(){
    const timerElement = document.getElementById('timerDiv');
    const countdown = () => {
        timerElement.innerText = count;
        count++;
        if(count > 10) {clearInterval(timer)}};
    countdown();
    timer = setInterval(countdown, 1000);}
function stopTimer() {clearInterval(timer); count = 0;}

function handleWrongMove() {
    const currentCount = count;
    wrongMove(currentCount);
    displayArray(data);
}

function wrongMove(currentCount) {
    let timeScore;
    if (currentCount < 6) {timeScore = 3;}
    else if (currentCount >= 6 && currentCount <= 10) {timeScore = 2;}
    else {timeScore = 1;}
    const wrongScore = 1
    const totalScore = wrongScore + timeScore;    
    console.log(totalScore);
    const firstNumber = data.splice(0,1);
    data.splice(totalScore, 0, firstNumber);
    
}

function handleRightMove() {
    const currentCount = count;
    rightMove(currentCount);
}

function rightMove(currentCount) {
    // Handle right move logic here

    // Update display
    const firstItem = data.shift();
    data.push(firstItem);
    displayArray(data[0]);
}

function resetGame() {
    stopTimer();
    count = 0;
    startTimer();
    resetArray();
    displayArray(data[0]);
}

function resetArray() {
    data.sort((a, b) => a.hiragana.localeCompare(b.hiragana));
}

displayArray(data[0]); // Display initial data
// startTimer(); // Start the timer

wrongButtonElement.addEventListener('click', handleWrongMove);
rightButtonElement.addEventListener('click', handleRightMove);
resetButtonElement.addEventListener('click', resetGame);
