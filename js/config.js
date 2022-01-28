/* -----Configurations des animations des albums-----Auteur : Jean Sentrais nov 2011 -----113.sentrais@gmail.com-----*/


// -----Note--------------------------------------------------------------

var note = byId('note');
var allernote = new Animate({elem:note, ease:1, duration:1500, from:{height:'0px',paddingBottom:'0px'}, to:{height:'1300px',paddingBottom:'10px'}});
var revenirnote = new Animate({elem:note, ease:1, duration:1500, from:{height:'1300px',paddingBottom:'10px'}, to:{height:'0px',paddingBottom:'0px'}});


// -----Ombres et lumieres--------------------------------------------------------------

var fond = byId('fond');
var allerfond = new Animate({elem:fond, ease:3, duration:1000, from:{width:'536px', left:'0px'}, to:{width:'1050px', left:'-500px'}});
var revenirfond = new Animate({elem:fond, ease:2, duration:1000, from:{width:'1050px', left:'-500px'}, to:{width:'536px', left:'0px'}});

var ombre1 = byId('ombre1');
var allerombre1 = new Animate({elem:ombre1, ease:1.5, duration:1000, from:{width:'0px', left:'0px'}, to:{width:'45px', left:'0px'}});
var allerombre1bis = new Animate({elem:ombre1, ease:0.6, duration:1000, from:{width:'0px', left:'0px'}, to:{width:'45px', left:'0px'}});
var allerombre1ter = new Animate({elem:ombre1, ease:0.6, duration:1000, from:{width:'45px', left:'0px'}, to:{width:'0px', left:'0px'}});
var allerombre1quater = new Animate({elem:ombre1, ease:1, duration:500, from:{width:'0px', left:'450px'}, to:{width:'200px', left:'50px'}});
var allerombre1quinter = new Animate({elem:ombre1, ease:1, duration:500, from:{width:'200px', left:'50px'}, to:{width:'0px', left:'100px'}});
var revenirombre1 = new Animate({elem:ombre1, ease:2.2, duration:500, from:{width:'45px', left:'0px'}, to:{width:'0px', left:'0px'}});

var ombre3 = byId('ombre3');
var allerombre3 = new Animate({elem:ombre3, ease:2.9, duration:1000, from:{width:'0px', left:'510px'}, to:{width:'250px', left:'0px'}});
var allerombre3bis = new Animate({elem:ombre3, ease:0.6, duration:1000, from:{width:'250px', left:'0px'}, to:{width:'0px', left:'0px'}});
var allerombre3ter = new Animate({elem:ombre3, ease:2.9, duration:1000, from:{width:'0px', left:'510px'}, to:{width:'250px', left:'0px'}});
var allerombre3quater = new Animate({elem:ombre3, ease:0.6, duration:1000, from:{width:'250px', left:'0px'}, to:{width:'0px', left:'0px'}});
var allerombre3sixter = new Animate({elem:ombre3, ease:2.9, duration:1000, from:{width:'0px', left:'450px'}, to:{width:'250px', left:'0px'}});
var revenirombre3 = new Animate({elem:ombre3, ease:3, duration:1000, from:{width:'0px', left:'0px'}, to:{width:'250px', left:'0px'}});
var revenirombre3bis = new Animate({elem:ombre3, ease:0.6, duration:1000, from:{width:'250px', left:'0px'}, to:{width:'0px', left:'510px'}});
var revenirombre3ter = new Animate({elem:ombre3, ease:3, duration:1000, from:{width:'0px', left:'0px'}, to:{width:'260px', left:'0px'}});
var revenirombre3quater = new Animate({elem:ombre3, ease:0.6, duration:1000, from:{width:'260px', left:'0px'}, to:{width:'0px', left:'510px'}});
	
var ombre5 = byId('ombre5');
var allerirombre5 = new Animate({elem:ombre5, ease:0.6, duration:1000, from:{width:'0px', left:'0px'}, to:{width:'510px', left:'-510px'}});
var allerirombre5bis = new Animate({elem:ombre5, ease:0.6, duration:1000, from:{width:'0px', left:'0px'}, to:{width:'510px', left:'-510px'}});
var revenirombre5 = new Animate({elem:ombre5, ease:3, duration:1000, from:{width:'510px', left:'-510px'}, to:{width:'0px', left:'0px'}});
var revenirombre5bis = new Animate({elem:ombre5, ease:3, duration:1000, from:{width:'510px', left:'-510px'}, to:{width:'0px', left:'0px'}});

// -----Couvertures et pages--------------------------------------------------------------

var couverture1 = byId('couverture1');
var invitealler1 = new Animate({elem:couverture1, ease:1, duration:500, from:{width:'510px'}, to:{width:'450px'}});
var inviterevenir1 = new Animate({elem:couverture1, ease:1, duration:500, from:{width:'450px'}, to:{width:'510px'}});
var aller1 = new Animate({elem:couverture1, ease:3, duration:1000, from:{width:'450px'}, to:{width:'0px'}});
var revenir1 = new Animate({elem:couverture1, ease:0.6, duration:1000, from:{width:'0px'}, to:{width:'510px'}});

var couverture2 = byId('couverture2');
var aller2 = new Animate({elem:couverture2, ease:0.6, duration:1000, from:{width:'0px', left:'0px', opacity:'0'}, to:{width:'510px', left:'-510px', opacity:'1'}});
var revenir2 = new Animate({elem:couverture2, ease:3, duration:1000, from:{width:'510px', left:'-510px', opacity:'1'}, to:{width:'0px', left:'0px', opacity:'0.3'}});

var page3 = byId('page3');
var aller3 = new Animate({elem:page3, ease:3, duration:1000, from:{width:'510px'}, to:{width:'0px'}});
var revenir3 = new Animate({elem:page3, ease:0.6, duration:1000, from:{width:'0px'}, to:{width:'510px'}});

var page4 = byId('page4');
var aller4 = new Animate({elem:page4, ease:0.6, duration:1000, from:{width:'0px', left:'0px', opacity:'0'}, to:{width:'510px', left:'-510px', opacity:'1'}});
var revenir4 = new Animate({elem:page4, ease:3, duration:1000, from:{width:'510px', left:'-510px', opacity:'1'}, to:{width:'0px', left:'0px', opacity:'0.3'}});

var page5 = byId('page5');
var aller5 = new Animate({elem:page5, ease:3, duration:1000, from:{width:'510px'}, to:{width:'0px'}});
var revenir5 = new Animate({elem:page5, ease:0.6, duration:1000, from:{width:'0px'}, to:{width:'510px'}});

var page6 = byId('page6');
var aller6 = new Animate({elem:page6, ease:0.6, duration:1000, from:{width:'0px', left:'0px', opacity:'0'}, to:{width:'510px', left:'-510px', opacity:'1'}});
var revenir6 = new Animate({elem:page6, ease:3, duration:1000, from:{width:'510px', left:'-510px', opacity:'1'}, to:{width:'0px', left:'0px', opacity:'0.3'}});

var page7 = byId('page7');
var aller7 = new Animate({elem:page7, ease:3, duration:1000, from:{width:'510px'}, to:{width:'0px'}});
var revenir7 = new Animate({elem:page7, ease:0.6, duration:1000, from:{width:'0px'}, to:{width:'510px'}});

var page8 = byId('page8');
var aller8 = new Animate({elem:page8, ease:0.6, duration:1000, from:{width:'0px', left:'0px', opacity:'0'}, to:{width:'510px', left:'-510px', opacity:'1'}});
var revenir8 = new Animate({elem:page8, ease:3, duration:1000, from:{width:'510px', left:'-510px', opacity:'1'}, to:{width:'0px', left:'0px', opacity:'0.3'}});

var page9 = byId('page9');
var aller9 = new Animate({elem:page9, ease:3, duration:1000, from:{width:'510px'}, to:{width:'0px'}});
var revenir9 = new Animate({elem:page9, ease:0.6, duration:1000, from:{width:'0px'}, to:{width:'510px'}});

var page10 = byId('page10');
var aller10 = new Animate({elem:page10, ease:0.6, duration:1000, from:{width:'0px', left:'0px', opacity:'0'}, to:{width:'510px', left:'-510px', opacity:'1'}});
var revenir10 = new Animate({elem:page10, ease:3, duration:1000, from:{width:'510px', left:'-510px', opacity:'1'}, to:{width:'0px', left:'0px', opacity:'0.3'}});

/* -----Fin des config----- */

