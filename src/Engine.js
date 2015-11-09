var Engine = function(){
    var nbBilles = 0;

    var t = Array(6); //Tableau de taille 6
    for(var i=0;i<6;i++) {
        t[i] = new Array(6); //Ajoute dans chaque tableau 6 ligne
    this.ajouterBilles = function(position,couleur) {
        colonne = position.charCodeAt(0)-97;
        ligne = position.charCodeAt(1)-49;
        t[colonne][ligne] = couleur;
        nbBilles++;
    }

}
}



