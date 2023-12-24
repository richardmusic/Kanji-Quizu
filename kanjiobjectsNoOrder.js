const objectsArray = [
{cardNumber: "1", kanji: "沸", hiragana: "わかす わく", english: "to boil", example1: "水を沸かす", example2: "お湯が沸いている", jishoLink: "https://jisho.org/search/%E6%B2%B8", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU6CB8"},
{cardNumber: "2", kanji: "需", hiragana: "じゅ", english: "demand - request", example1: "需要が高まっている", example2: "需給の調整には慎重な計画が必要", jishoLink:"https://jisho.org/search/%E9%9C%80", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU9700"},
{cardNumber: "3", kanji: "腫", hiragana: "しゅ はれる", english: "tumor - swelling", example1: "彼女は腫瘍の手術を受けた", example2: "顔が腫れている", jishoLink:"https://jisho.org/search/%E8%85%AB", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU816B"},
{cardNumber: "4", kanji: "疾", hiragana: "はやい しつ", english: "rapidly", example1: "疾患", example2: "疾病", jishoLink:"https://jisho.org/search/%E7%96%BE", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU75BE"},
{cardNumber: "5", kanji: "匿", hiragana: "かくす　かくれる　とく", english: "hide - shelter", example1: "プレゼントを隠す", example2: "彼は木の後ろに隠れた", jishoLink:"https://jisho.org/search/%E5%8C%BF", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU533F"},
{cardNumber: "6", kanji: "紺", hiragana: "こん", english: "dark blue - navy", example1: "彼は紺色のバッグを持っています", example2: "紺四郎", jishoLink:"https://jisho.org/search/%E7%B4%BA", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU7D3A"},
{cardNumber: "7", kanji: "帽", hiragana: "ぼう", english: "cap - headgear", example1: "帽子を取る", example2: "帽子屋", jishoLink:"https://jisho.org/search/%E5%B8%BD", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU5E3D"},
{cardNumber: "8", kanji: "鼓", hiragana: "つづみ　こ", english: "hand drum - beat", example1: "鼓動", example2: "鼓膜", jishoLink:"https://jisho.org/search/%E9%BC%93", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU9F13"},
{cardNumber: "9", kanji: "潤", hiragana: "うるおい じゅん", english: "wet - moisture", example1: "この場所は潤いがある", example2: "潤滑油", jishoLink:"https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU6F64", jimLink: "https://jisho.org/search/%E6%BD%A4"},
{cardNumber: "10", kanji: "宴", hiragana: "うたげ　えん", english: "feast", example1: "宴で盛り上げる", example2: "宴会が楽しかったです", jishoLink:"https://jisho.org/search/%E5%AE%B4", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU5BB4"},
{cardNumber: "11", kanji: "貢", hiragana: "こう", english: "finance", example1: "貢献", example2: "貢納", jishoLink:"https://jisho.org/search/%E8%B2%A2", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU8CA2"},
{cardNumber: "12", kanji: "痩", hiragana: "やせる　そう", english: "to get thin", example1: "痩せるために運動する", example2: "痩身", jishoLink:"https://jisho.org/search/%E7%97%A9", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU75E9"},
{cardNumber: "13", kanji: "恩", hiragana: "おん", english: "grace - kindness", example1: "彼の恩恵に助けられました", example2: "政府は恩赦を発表しました", jishoLink:"https://jisho.org/search/%E6%81%A9", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU6069"},
{cardNumber: "14", kanji: "謀", hiragana: "はかる ぼう", english: "to conspire - devise", example1: "彼は計画を謀りました", example2: "謀議", jishoLink:"https://jisho.org/search/%E8%AC%80", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU8B00"},
{cardNumber: "15", kanji: "旋", hiragana: "せん", english: "rotation", example1: "旋律を歌う", example2: "旋風に巻き込まれる", jishoLink:"https://jisho.org/search/%E6%97%8B", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU65CB"},
{cardNumber: "16", kanji: "盾", hiragana: "たて", english: "shield", example1: "盾を構える", example2: "楯突く", jishoLink:"https://jisho.org/search/%E7%9B%BE", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU76FE"},
{cardNumber: "17", kanji: "寮", hiragana: "りょう", english: "hostel - dorm", example1: "寮での規則を守る", example2: "寮の仲間と食事を共にする", jishoLink:"https://jisho.org/search/%E5%AF%AE", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU5BEE"},
{cardNumber: "18", kanji: "刃", hiragana: "は　やいば", english: "sword", example1: "刃物を使って果物を切る", example2: "刃を鍛える", jishoLink:"https://jisho.org/search/%E5%88%83", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU5203"},
{cardNumber: "19", kanji: "啓", hiragana: "けい", english: "disclose - say", example1: "啓発活動を行う", example2: "啓蒙活動を支援", jishoLink:"https://jisho.org/search/%E5%95%93", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU5553"},
{cardNumber: "20", kanji: "誉", hiragana: "ほめる　ほまれ", english: "honor - glory", example1: "褒め言葉は心を温める", example2: "その行為には大いなる誉れがある", jishoLink:"https://jisho.org/search/%E8%AA%89", jimLink: "https://www.edrdg.org/cgi-bin/wwwjdic/wwwjdic?1MKU8A89"},];
function displayCards(){                                                                 //?  👀 DISPLAY
    const buttonDelays = document.querySelectorAll('.kanji, .hiragana, .english, #twoExamples');   //? Button fade delay
        buttonDelays.forEach(element => {
        element.style.transition = "opacity 0s"; element.style.opacity = 0;});
    setTimeout(() => { buttonDelays.forEach(element => {
        element.style.transition = "opacity .7s ease-in-out"; element.style.opacity = 1;});}, 1);
    document.querySelector('#threeP .kanji').textContent = objectsArray[0].kanji;
    document.querySelector('#threeP .hiragana').textContent = objectsArray[0].hiragana;
    document.querySelector('#threeP .english').textContent = objectsArray[0].english;    //?TOGETHER const kanjiParagraph = document.querySelector('#threeP .kanji'); let allKanji = '';objectsArray.forEach(card => {allKanji += card.kanji + ' ';}); kanjiParagraph.textContent = allKanji;}
    document.querySelector('#threeP .cardNumber').textContent = objectsArray[0].cardNumber;
    document.querySelector('#twoExamples .box1').textContent = objectsArray[0].example1;
    document.querySelector('#twoExamples .box2').textContent = objectsArray[0].example2;}
displayCards();

let count = 0; 
function rightMove(count){   //                                      ✅ RIGHT BUTTON SCORE & TIMER
    const rightScore = 9; let timeScore;
    if(count < 4) {timeScore = 10;}                                  //?  <4sec = +10
    else if (count >= 4 && count <= 8) {timeScore = 5;}              //?  4-8sec = +5
    else {timeScore = 0;}                                            //?  >8sec = +0⁡
    const totalScore = rightScore + timeScore; console.log(totalScore); 
    let shufflingObject = objectsArray.splice(0, 1)[0];                     //?  cut first number
    objectsArray.splice(totalScore, 0, shufflingObject);}                   //?  place shufflingObject @ totalScore index number
document.getElementById('rightButton').addEventListener('click',function(){ 
    rightMove(count);  stopTimer();  startTimer();  displayCards();});   
//!-----------------------------------------------------------------------------------------------------------------------------
function wrongMove(count) {   //!                                    🟥 WRONG BUTTON SCORE & TIMER
    const wrongScore = 1; let timeScore;     
    if (count < 6) {timeScore = 3;}                                  //?  <6sec = +3
    else if (count >= 6 && count <= 10) {timeScore = 2;}             //?  6-10sec = +2
    else {timeScore = 1;}                                            //?  10sec = +1
    const totalScore = wrongScore + timeScore; console.log(totalScore);
    let shufflingObject = objectsArray.splice(0,1)[0];                      //?  cut first number
    objectsArray.splice(totalScore, 0, shufflingObject);}                   //?  place shufflingObject @ totalScore index number
document.getElementById('wrongButton').addEventListener('click',function(){
    wrongMove(count);  stopTimer();  startTimer(); displayCards();})       
//!-----------------------------------------------------------------------------------------------------------------------------
document.getElementById('resetButton').addEventListener('click',function(){ //?  RESET BUTTON 
    stopTimer();   startTimer();   resetArray();  displayCards();})
    let initialCards = [...objectsArray];
    function resetArray(){objectsArray.splice(0, objectsArray.length, ...initialCards);}
//!-----------------------------------------------------------------------------------------------------------------------------
document.getElementById('randomizeButton').addEventListener('click',function(){ //?  RANDOMIZE BUTTON
    stopTimer();   startTimer();   randomize();   displayCards();});
    function randomize() {
        for (let i = objectsArray.length - 1; i > 0; i--){
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [objectsArray[i], objectsArray[randomIndex]] = [objectsArray[randomIndex], objectsArray[i]];}}
//!-----------------------------------------------------------------------------------------------------------------------------            
document.getElementById('jisho').addEventListener('click', function () {    //?  External Links
    const jishoLink = objectsArray[0].jishoLink; if (jishoLink) {window.open(jishoLink, '_blank');}})
document.getElementById('jb').addEventListener('click', function(){
    const jimLink = objectsArray[0].jimLink; if (jimLink) {window.open(jimLink, '_blank');}})

//!-----------------------------------------------------------------------------------------------------------------------------
let timer = null;                                                               //?  🕔 TIMERS    
function updateTimer(){ 
    document.querySelector('#timerDiv').textContent = count; count++;
    if (count > 10){clearInterval(timer);}}
function startTimer() {clearInterval(timer); updateTimer(); 
    timer = setInterval(updateTimer, 1000);}
function stopTimer() {clearInterval(timer);  count = 0;}
//!-----------------------------------------------------------------------------------------------------------------------------
function generateLeavesContent(){                                           //? Inputting array into falling leaves
    const leavesGroup = document.querySelector('.leavesGroup')
    const leafDiv = leavesGroup.querySelectorAll('div');
leafDiv.forEach((div,index)=> {div.textContent = objectsArray[index].kanji;});}
generateLeavesContent();
//!-----------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {                 //? HIDING BUTTONS
    const hideHiraganaBtn = document.getElementById("hideHiragana");
    const hideEnglishBtn = document.getElementById("hideEnglish");
    const hideExamplesBtn = document.getElementById("hideExamples");
    const hideAllBtn = document.getElementById("hideAll");
    const hiraganaElement = document.querySelector("#threeP .hiragana");
    const englishElement = document.querySelector("#threeP .english");
    const box1Element = document.querySelector("#twoExamples .box1");
    const box2Element = document.querySelector("#twoExamples .box2");
hideHiraganaBtn.addEventListener("click", function () {toggleVisibility(hiraganaElement, hideHiraganaBtn);});
hideEnglishBtn.addEventListener("click", function () {toggleVisibility(englishElement, hideEnglishBtn);});
hideExamplesBtn.addEventListener("click", function () {toggleVisibility(box1Element, hideExamplesBtn); toggleVisibility(box2Element, hideExamplesBtn);});
hideAllBtn.addEventListener("click", function () {toggleVisibility(hiraganaElement, hideHiraganaBtn); toggleVisibility(englishElement, hideEnglishBtn);
    toggleVisibility(box1Element, hideExamplesBtn); toggleVisibility(box2Element, hideExamplesBtn);});
function hideElement(element, button) {element.classList.add("hidden");
        button.innerHTML = '<i class="fa-solid fa-eye"></i>';}
function toggleVisibility(element, button) { element.classList.toggle("hidden");
    if (element.classList.contains("hidden")){button.innerHTML = '<i class="fa-solid fa-eye"></i>';}
    else {button.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';}}});
//!-----------------------------------------------------------------------------------------------------------------------------    
document.addEventListener("keydown", function (event) {                 //? HOTKEYS
    if(event.key === "w" || event.key === "W"){
        rightButton.click(); simulateFlash(rightButton);}})
document.addEventListener("keydown", function (event) { 
    if(event.key === "r" || event.key === "R"){
        wrongButton.click(); simulateFlash(wrongButton);}})        
document.addEventListener("keydown", function (event) { 
    if(event.key === "s" || event.key === "S"){
        resetButton.click(); simulateFlash(resetButton);}})        
document.addEventListener("keydown", function (event) { 
    if(event.key === "f" || event.key === "F"){
        randomizeButton.click(); simulateFlash(randomizeButton);}})
document.addEventListener("keydown", function (event) { 
    if(event.key === "1" ){const hideHiraganaBtn = document.getElementById("hideHiragana"); 
    hideHiraganaBtn.click(); simulateFlash(hideHiragana);}})
document.addEventListener("keydown", function (event) { 12344
    if(event.key === "2" ){hideEnglish.click(); simulateFlash(hideEnglish);}})
document.addEventListener("keydown", function (event) { 
    if(event.key === "3" ){hideExamples.click(); simulateFlash(hideExamples);}})
document.addEventListener("keydown", function (event) { 
    if(event.key === "4" ){hideAll.click(); simulateFlash(hideAll);}})
function simulateFlash(element) {                                   //? Button press white flash
    element.style.transition = "background-color 0s"; 
    element.style.backgroundColor = "#ffffff"; 
    element.style.filter = "brightness(1.05)";
    element.style.transform = "scale(1.1)";
    setTimeout(function() {
        element.style.transition = "background-color 0.5s";
        element.style.backgroundColor = ""; 
        element.style.filter = ""; 
        element.style.transform = "";}, 100);}
// document.getElementById('rightButton').addEventListener('click', function(){
//     setTimeout(function(){
//         const element = document.getElementById('rightButton');
//         element.style.transition = "opacity 0.5s";}, 500);  
// });
    
        
        
        
//innerHTML = generateFuriganaHTML(objectsArray[0].kanji, objectsArray[0].furigana);
//objectsArray[0].kanji;

// document.querySelector('#threeBoxes .box1').textContent = examplesArray[(objectsArray[0])].example1;



