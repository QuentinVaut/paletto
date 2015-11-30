'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var plateau = new Engine();
    //36 BIlles
    plateau.init()
    plateau.juxtaposition()
    assertTrue(plateau.juxtaposition() == true)
};

PalettoTestCase.prototype.testStory2 = function () {
    var plateau = new Engine();
    //36 BIlles
    plateau.init()
    assertTrue(plateau.selectBille("jaune") == "jaune") //Fin de l'histoire 2
};

PalettoTestCase.prototype.testStory3 = function () {
    var plateau = new Engine();
    //36 BIlles
    plateau.init()
    plateau.deleteBille("a6")
    assertTrue(plateau.getBilleColor("a6") == false)
};

PalettoTestCase.prototype.testStory4 = function () {
    var plateau = new Engine();
    //36 BIlles
    plateau.init()
    plateau.deleteBille("a1")
    plateau.deleteBille("f6")
    var list = plateau.couleursJouable()
    assertTrue(list.indexOf("noir") >= 0 || list.indexOf("blanche") >= 0 || list.indexOf("bleu") >= 0  )
};