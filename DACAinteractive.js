var state = 'total';
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}


function totalfunction() {
    document.getElementById("button").innerHTML = "We have found statistics based on everyday actions and things that affect everyday people as a way of making these numbers more relatable. The meaning of this is to help with comparing the numbers and to see the severity of what Trump is doing.";
    state = 'total'
    document.getElementById("subtitle").innerHTML = "Today"
}



function seventeenfunction() {
    document.getElementById("button").innerHTML = "In 2017, the amount of people at risk of losing DACA is close to the amount of minutes in a year.";
    state = '2017'
    document.getElementById("subtitle").innerHTML = "2017"
}



function eightteenfunction() {
    document.getElementById("button").innerHTML = "In 2018, nearly half the number of people who eat McDonalds in a week will have lost DACA by 2018.";
    state = '2018'
    document.getElementById("subtitle").innerHTML = "2018"
}



function nineteenfunction() {
    document.getElementById("button").innerHTML = "In 2019, the amount of people who will lose DACA will be nine times the number of people killed in a motor vehicle crash.";
    state = '2019'
    document.getElementById("subtitle").innerHTML = "2019"
}

var scaleValue = 1;
var canvasMax = 390;


function setup() {
    var cWidth = document.getElementById('chart').offsetWidth;
    var myCanvas = createCanvas(min(canvasMax, cWidth), min(canvasMax, cWidth));
    myCanvas.parent('chart');
}


function draw() {
    push();
    scale(scaleValue);
    background('#ffffff');


    var countX = 0;
    var countY = 0;
    var index = 0;
    var total2017 = 19;
    var total2018 = 54;
    var total2019 = 66;
    var radius = 30;
    var maxX = 12;
    var maxY = 12;
    noStroke();
    fill("#FCA311");

    while (countX < maxX) {
        countY = 0;
        while (countY < maxY) {
            index = index + 1;
            countY = countY + 1;
            if (state == "2017") {
                if (index >total2017) {
                    fill("#81B29A");
                }
            } else if (state == "2018") {
                if (index > 0 && index < total2017) {
                    fill("#FCA311");
                } else if (index > total2017 && index <= total2018) {
                    fill("#FF6A5C");
                } else if (index > total2018) {
                    fill("#81B29A");
                }
            } else if (state == "2019") {
                if (index > 0 && index < total2017) {
                    fill("#FCA311");
                } else if (index > total2017 && index <= total2018) {
                    fill("#FF6A5C");
                } else if (index > total2018) {
                    fill("#48D1CC");
                }
            }else if (state == "total") {
                    fill("#48D1CC");
            }
            ellipse(countX * radius + radius/2, countY * radius , radius, radius);
        }
        countX = countX + 1;
    }





    pop();
}

function orangefunction() {
    document.getElementById("button").innerHTML = "In 2017, the amount of people at risk of losing DACA is close to the amount of minutes in a year.";
    state = '2017'

}

function windowResized() {
    //cavas size will be resized in case window size has changed
    var cWidth = document.getElementById('chart').offsetWidth;
    var cHeight = document.getElementById('chart').offsetHeight;
    scaleValue = min(canvasMax, cWidth) / canvasMax;
    resizeCanvas(min(canvasMax, cWidth), min(canvasMax, cWidth));
}
