
let gender = "m";

document.getElementById("maleButton").onclick = function() {
    gender = "m";
};

document.getElementById("femaleButton").onclick = function() {
    gender = "f";
};


function calculator() {
    const age = parseInt(document.getElementById("age").value);
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const activity = parseFloat(document.getElementById("activity").value);

    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        document.getElementById("result1").innerText = "Please enter valid numbers for age, height, and weight.";
        document.getElementById("result2").innerText = "Please enter valid numbers for age, height, and weight.";
        document.getElementById("result3").innerText = "Please enter valid numbers for age, height, and weight.";

        return;
    }

    let firstAnswer;
    let secondAnswer;
    let thirdAnswer
    if (gender === "m") {
        
        
        firstAnswer = ((10 * weight) + (6.25 * height) - (5 * age) + 5)*activity;
        firstAnswer = Big(firstAnswer).toFixed(0);
        secondAnswer = weight/((height/100)*(height/100));
        secondAnswer=Big(secondAnswer).toFixed(1);
        thirdAnswer = 1.20*secondAnswer+0.23*age-10.8*1-5.4
        thirdAnswer = Big(thirdAnswer).toFixed(1);

    } else {
        firstAnswer = (10 * weight) + (6.25 * height) - (5 * age) - 151;
        firstAnswer = Big(firstAnswer).toFixed(0);
        secondAnswer = weight/((height/100)*(height/100));
        secondAnswer=Big(secondAnswer).toFixed(1);
        thirdAnswer = 1.20*secondAnswer+0.23*age-10.8*0-5.4;
        thirdAnswer = Big(thirdAnswer).toFixed(1);

    }

    




    
    
   
    document.getElementById("result1").innerText = "Your calculated result is: " + firstAnswer;
    document.getElementById("result2").innerText = "Your calculated result is: " + secondAnswer;
    document.getElementById("result3").innerText = "Your calculated result is: " + thirdAnswer;


}
