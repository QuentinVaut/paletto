'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var plateau = new Engine();
    //36 BIlles
    plateau.ajouterBilles("a1","noir")
    plateau.ajouterBilles("a2","jaune")
    plateau.ajouterBilles("a3","bleu")
    plateau.ajouterBilles("a4","rouge")
    plateau.ajouterBilles("a5","blanc")
    plateau.ajouterBilles("a6","jaune")

    plateau.ajouterBilles("b1","vert")
    plateau.ajouterBilles("b2","blanc")
    plateau.ajouterBilles("b3","jaune")
    plateau.ajouterBilles("b4","noir")
    plateau.ajouterBilles("b5","vert")
    plateau.ajouterBilles("b6","bleu")

    plateau.ajouterBilles("c1","blanc")
    plateau.ajouterBilles("c2","vert")
    plateau.ajouterBilles("c3","bleu")
    plateau.ajouterBilles("c4","rouge")
    plateau.ajouterBilles("c5","jaune")
    plateau.ajouterBilles("c6","noir")

    plateau.ajouterBilles("d1","bleu")
    plateau.ajouterBilles("d2","rouge")
    plateau.ajouterBilles("d3","blanc")
    plateau.ajouterBilles("d4","vert")
    plateau.ajouterBilles("d5","noir")
    plateau.ajouterBilles("d6","rouge")

    plateau.ajouterBilles("e1","rouge")
    plateau.ajouterBilles("e2","jaune")
    plateau.ajouterBilles("e3","noir")
    plateau.ajouterBilles("e4","bleu")
    plateau.ajouterBilles("e5","jaune")
    plateau.ajouterBilles("e6","vert")

    plateau.ajouterBilles("f1","blanc")
    plateau.ajouterBilles("f2","bleu")
    plateau.ajouterBilles("f3","rouge")
    plateau.ajouterBilles("f4","blanc")
    plateau.ajouterBilles("f5","vert")
    plateau.ajouterBilles("f6","noir")
    plateau.juxtaposition()
    assertTrue(plateau.juxtaposition() == true)



};