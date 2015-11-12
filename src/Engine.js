var Engine = function () {
    var nbBilles = 0;

    var t = Array(6); //Tableau de taille 6
    for (var i = 0; i < 6; i++) {
        t[i] = new Array(6); //Ajoute dans chaque tableau 6 ligne
    }
    this.ajouterBilles = function (position, couleur) {
        colonne = position.charCodeAt(0) - 97;
        ligne = position.charCodeAt(1) - 49;
        t[colonne][ligne] = couleur;
        //console.log(t[colonne][ligne])
        nbBilles++;
    }

    this.init = function () {
        this.ajouterBilles("a1", "noir")
        this.ajouterBilles("a2", "jaune")
        this.ajouterBilles("a3", "bleu")
        this.ajouterBilles("a4", "rouge")
        this.ajouterBilles("a5", "blanc")
        this.ajouterBilles("a6", "jaune")

        this.ajouterBilles("b1", "vert")
        this.ajouterBilles("b2", "blanc")
        this.ajouterBilles("b3", "jaune")
        this.ajouterBilles("b4", "noir")
        this.ajouterBilles("b5", "vert")
        this.ajouterBilles("b6", "bleu")

        this.ajouterBilles("c1", "blanc")
        this.ajouterBilles("c2", "vert")
        this.ajouterBilles("c3", "bleu")
        this.ajouterBilles("c4", "rouge")
        this.ajouterBilles("c5", "jaune")
        this.ajouterBilles("c6", "noir")

        this.ajouterBilles("d1", "bleu")
        this.ajouterBilles("d2", "rouge")
        this.ajouterBilles("d3", "blanc")
        this.ajouterBilles("d4", "vert")
        this.ajouterBilles("d5", "noir")
        this.ajouterBilles("d6", "rouge")

        this.ajouterBilles("e1", "rouge")
        this.ajouterBilles("e2", "jaune")
        this.ajouterBilles("e3", "noir")
        this.ajouterBilles("e4", "bleu")
        this.ajouterBilles("e5", "jaune")
        this.ajouterBilles("e6", "vert")

        this.ajouterBilles("f1", "blanc")
        this.ajouterBilles("f2", "bleu")
        this.ajouterBilles("f3", "rouge")
        this.ajouterBilles("f4", "blanc")
        this.ajouterBilles("f5", "vert")
        this.ajouterBilles("f6", "noir")
    }

    this.getNbBilles = function () {
        return nbBilles;

    }


    this.juxtaposition = function () {
        //lecture colonne par colonne
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                if (i != 0 && t[i][j] == t[i - 1][j]) {
                    return false;
                }
                if (i != t.length - 1 && t[i][j] == t[i + 1][j]) {
                    return false;
                }
                if (j != 0 && t[i][j] == t[i][j - 1]) {
                    return false;
                }
                if (j != t.length - 1 && t[i][j] == t[i][j + 1]) {
                    return false;
                }
            }
        }
        return true
    }

    this.selectBille = function (couleur) {
        if(t[0][0] == couleur || t[0][5] == couleur || t[5][0] == couleur || t[5][5] == couleur) {
            return couleur;
        } else {
            return false;
        }
    }


}



