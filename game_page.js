player1_name = localStorage.getItem("player_1_name");
player2_name = localStorage.getItem("player_2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name;
document.getElementById("player2_name").innerHTML = player_2_name;

document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "question turn-" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn-" + player2_name;