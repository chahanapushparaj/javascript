
let missions = [
    { name: "Attend Technical Workshop", done: true },
    { name: "Solve 5 LeetCode Questions", done: false },
    { name: "Help a Junior", done: true },
    { name: "Complete Mini Project", done: false },
    { name: "Join a Club Activity", done: false }
];

function showMissions() {
    let list = document.getElementById("missionList");
    list.innerHTML = "";

    for (let i = 0; i < missions.length; i++) {
        let mission = document.createElement("div");
        mission.className = "mission";

        let circle = document.createElement("div");
        circle.className = "circle";
        circle.textContent = missions[i].done ? "✓" : "";

        let text = document.createElement("span");
        text.textContent = missions[i].name;

        let del = document.createElement("button");
        del.textContent = "▤ Delete";
        del.className = "delete-btn";

        if (missions[i].done) {
            mission.classList.toggle("done");
        }

        mission.onclick = function () {
            missions[i].done = !missions[i].done;
            showMissions();
        };

        del.onclick = function (event) {
            event.stopPropagation();
            missions.splice(i, 1);
            showMissions();
        };

        mission.appendChild(circle);
        mission.appendChild(text);
        mission.appendChild(del);

        list.appendChild(mission);
    }

    updateCount();
}

function addMission() {
    let input = document.getElementById("missionInput");
    let name = input.value.trim();

    if (name === "") {
        alert("Please enter a mission!");
        return;
    }

    missions.push({ name: name, done: false });
    input.value = "";

    showMissions();
}

function updateCount() {
    let list = document.getElementById("missionList");
    let total = list.children.length;
    let completed = 0;

    for (let i = 0; i < missions.length; i++) {
        if (missions[i].done) {
            completed++;
        }
    }

    document.getElementById("totalCount").textContent = total;
    document.getElementById("completedCount").textContent = completed;
    document.getElementById("pendingCount").textContent = total - completed;
}

let colours = ["#ffffff", "#fff0f5", "#e6f7ff", "#f0fff0"];
let colourIndex = 0;

function changeColour() {
    document.body.style.backgroundColor = colours[colourIndex];

    colourIndex++;

    if (colourIndex === colours.length) {
        colourIndex = 0;
    }
}

document.getElementById("missionInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addMission();
    }
});

showMissions();
