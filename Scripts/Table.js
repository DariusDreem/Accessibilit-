var tableau = document.getElementById("monTableau");

var tbody = tableau.getElementsByTagName("tbody")[0];

// Ajoute les lignes au tableau
for (var i = 0; i < 10; i++) {
    var newLine = tbody.insertRow(-1); // Insére une nouvelle ligne à la fin du tbody
    for (var j = 0; j < 4; j++) {
        var cell = newLine.insertCell(j); // Insére une cellule dans la nouvelle ligne
        cell.innerHTML = "Ligne " + (i + 1) + ", Cellule " + (j + 1); // Ajoute du contenu à la cellule
    }
}