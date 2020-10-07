var score = JSON.parse(localStorage.getItem("highScores") || "[]");
var userScore = document.getElementById("userlist");

score.sort(function (l, k) {
    return k.score - l.score
});

for (var p = 0; p < score.length; p++) {
    var updateList = document.createElement("li")
    updateList.textContent = score[p].name + "  " + score[p].score
    userScore.appendChild(updateList)
};


