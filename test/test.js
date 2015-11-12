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
    assertTrue(plateau.getBielleColor("a6") == false) 
};