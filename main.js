var quotes = [
    "But man is not made for defeat. A man can be destroyed but not defeated.",
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "There is nothing permanent except change.",
    "Learning never exhausts the mind.",
    "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself."
];

var authors = [
    "Ernest Hemingway",
    "Franklin D. Roosevelt",
    "Heraclitus",
    "Leonardo da Vinci",
    "Henry James"
];

var safeColors = ['800000', '008000', '800080', '008080', '000080', '000000', '3d2a14'];
var randomColor = function () {
    var r = Math.floor(Math.random() * 7);
    return "#" + safeColors[r];
};

$(document).ready(function () {

    giveQuote();

    $('#btn1').click(function () {
        giveQuote()
    });

    $('#btn2').click(function () {
        tweetMe()
    });

});

function giveQuote() {
    var num = Math.floor(Math.random() * quotes.length);
    var newQuote = quotes[num];
    var newAuthor = authors[num];
    $('#para1').html('"' + newQuote + '"');
    $('#para2').html("--" + newAuthor);
    $('#body, #btn1, #btn2').css('background', randomColor());
}

function tweetMe() {
    var url = "http://twitter.com/intent/tweet";
    var text = document.getElementById("para1").innerHTML + document.getElementById("para2").innerHTML;
    window.open(url + "?text=" + text, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
}

