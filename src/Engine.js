var Engine = function(){
    var nbBilles = 0;

    var t = Array(6); //Tableau de taille 6
    for(var i=0;i<6;i++) {
        t[i] = new Array(6); //Ajoute dans chaque tableau 6 ligne
    }
    this.ajouterBilles = function(position,couleur) {
        colonne = position.charCodeAt(0)-97;
        ligne = position.charCodeAt(1)-49;
        t[colonne][ligne] = couleur;
        //console.log(t[colonne][ligne])
        nbBilles++;
    }

        this.getNbBilles = function() {
            return nbBilles;

        }


    this.juxtaposition = function() {
        //lecture colonne par colonne
        for(var i=0;i<6;i++) {
            for(var j=0;j<6;j++) {
                if(i!=0 && t[i][j] == t[i-1][j]) {
                    return false;
                }
                if(i!= t.length-1 && t[i][j] == t[i+1][j]) {
                    return false;
                }
                if(j!= 0 && t[i][j] == t[i][j-1]) {
                    return false;
                }
                if(j!= t.length-1 && t[i][j] == t[i][j+1]) {
                    return false;
                }
            }
        }
        return true
    }




}



