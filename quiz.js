var btnElement = document.querySelector("#start");
var divContEL = document.querySelector(".divContainer");
var hElement = document.querySelector("#title");
var finishDiv = document.querySelector(".finish-section");
var initialInput = document.querySelector("#inputInitial").value;
var submitEl = document.querySelector(".btn btn-primary mb-2");
var responsDiv = document.querySelector("#response");
var finaPageEl = document.querySelector(".finalpage");
var initialAndScore = document.querySelector("#NameScore");
var timeElement = document.querySelector("#time");
var errormessage = document.querySelector("#errormessage");
var finalScore = document.querySelector("#final");
var wrapperElement = document.querySelector(".wrapper");
var oderListEl = document.querySelector("#q-list");
var initialPageEl = document.querySelector(".initialpage");

// Sets of Java Questions //
var questions = [
    {
        title: "What is the HTML tag under which one can write the JavaScript code?:",
        choices: ["javascript", "scripted", "script", "js"],
        answer: "script",
    },
    {
        title: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
        choices: ["alertbox", "msg", "parentheses", "msgbox"],
        answer: "alert",
    },
    {
        title: "There are 3 different ways in which a JavaScript code can be involved in an HTML file. Selct the one that's not correct.",
        choices: ["Inline", "Import", "External", "Internal"],
        answer: "Import",
    },
    {
        title: "Which of the following is not a reserved word in JavaScript?",
        choices: ["interface", "throws", "program", "short"],

        answer: "program",
    },
    {   
        title: "What is the correct syntax for referring to an external script called “geek.js”?",
        choices: ["<script src=”geek.js”>", "<script href=”geek.js”>", 
        "<script ref=”geek.js”>", "<script name=”geek.js”>"],
        answer: "<script src=”geek.js”>",
    }
]


 /**Add to HTML document, questions*/
function displayQuestions() {
    var holdQ1Title = questions[i].title
    hElement.textContent = holdQ1Title
    var holdq1Choice1 = questions[i].choices[0];
    var holdq1Choice2 = questions[i].choices[1];
    var holdq1Choice3 = questions[i].choices[2];
    var holdq1Choice4 = questions[i].choices[3];

    oderListEl.innerHTML = '';

    var liTag1 = document.createElement("li");
    liTag1.setAttribute("class", "all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = holdq1Choice1;
    liTag1.appendChild(btn)
    oderListEl.appendChild(liTag1);
    divContEL.appendChild(oderListEl);

    var liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li");
    var btn2 = document.createElement('button');
    btn2.setAttribute("class", "all_btn")
    btn2.textContent = holdq1Choice2;
    liTag2.appendChild(btn2)
    oderListEl.appendChild(liTag2)
    divContEL.appendChild(oderListEl);

    var liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    var btn3 = document.createElement('button');
    btn3.setAttribute("class", "all_btn")
    btn3.textContent = holdq1Choice3;
    liTag3.appendChild(btn3)
    oderListEl.appendChild(liTag3)
    divContEL.appendChild(oderListEl);

    var liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    var btn4 = document.createElement('button');
    btn4.setAttribute("class", "all_btn");
    btn4.textContent = holdq1Choice4;
    liTag4.appendChild(btn4);
    oderListEl.appendChild(liTag4);
    divContEL.appendChild(oderListEl);
    var allBtnEl = document.querySelectorAll(".all_btn")
    allBtnEl.forEach(function (event) {
        event.addEventListener("click", onclickHandler)
    });

}