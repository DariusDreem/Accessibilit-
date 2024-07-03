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


document.addEventListener('DOMContentLoaded', function() {
    const commentsList = document.getElementById('comments-list');

    // Liste de noms d'exemple
    const names = [
        "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Isabelle", "Jack"
    ];

    // Liste de commentaires d'exemple
    const comments = [
        "Super article, merci pour le partage !",
        "J'ai appris beaucoup de choses intéressantes.",
        "Pourriez-vous développer davantage le troisième point ?",
        "Je ne suis pas tout à fait d'accord avec la conclusion, mais c'est bien argumenté.",
        "Cet article m'a ouvert les yeux sur plusieurs aspects que je n'avais pas considérés.",
        "Excellent travail de recherche, bravo !",
        "J'aimerais voir plus de contenu comme celui-ci à l'avenir.",
        "C'est un sujet complexe, mais vous l'avez rendu accessible. Merci !",
        "Avez-vous des sources supplémentaires à recommander sur ce sujet ?",
        "Je vais certainement partager cet article avec mes collègues."
    ];

    // Fonction pour générer un nombre aléatoire entre min et max (inclus)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Fonction pour générer un commentaire aléatoire
    function generateRandomComment() {
        const name = names[getRandomInt(0, names.length - 1)];
        const comment = comments[getRandomInt(0, comments.length - 1)];
        return { name, comment };
    }

    // Générer et afficher 5 commentaires aléatoires
    for (let i = 0; i < 5; i++) {
        const { name, comment } = generateRandomComment();
        addComment(name, comment);
    }

    // Fonction pour ajouter un commentaire au DOM
    function addComment(name, text) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `
            <p class="comment-author">${name}</p>
            <p>${text}</p>
        `;
        commentsList.appendChild(commentDiv);
    }
});
