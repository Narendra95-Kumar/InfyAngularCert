

function showSteps(){
    document.getElementById('instructions_p').style.display = "none";
    document.getElementById('questions_p').style.display = "none";
    document.getElementById('welcome_p').style.display = "none";
    document.getElementById('steps_p').style.display = "block";
}


function showQuestions(){
    document.getElementById('instructions_p').style.display = "none";
    document.getElementById('questions_p').style.display = "block";
    document.getElementById('welcome_p').style.display = "none";
    document.getElementById('steps_p').style.display = "none";
}

function showInstructions(){
    document.getElementById('instructions_p').style.display = "block";
    document.getElementById('questions_p').style.display = "none";
    document.getElementById('welcome_p').style.display = "none";
    document.getElementById('steps_p').style.display = "none";
}

function showWelcome(){
    document.getElementById('steps_p').style.display = "none";
    document.getElementById('instructions_p').style.display = "none";
    document.getElementById('questions_p').style.display = "none";
    document.getElementById('welcome_p').style.display = "block";
}