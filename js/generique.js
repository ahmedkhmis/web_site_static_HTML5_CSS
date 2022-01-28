	// ----- Le principe de telles methodes permet de modifier d'un clic n'importe quelle valeur de style (.css) de n'importe quel element  id="_"  d'une page.
	// ----- Dans une meme fonction, on peut associer pour les modifier autant de proprietes que l'on veut :  this.modiff1= _; this.modiff2=_;  etc.
	// ----- Selon ce principe, il est ainsi aise de creer toute fonction ... selon une utilite bien precise et repetee.
	// ----- Par commodite, l'intitule d'une fonction evoque ce sur quoi elle agit. Veiller a respester la casse.

	// ----- L'ecriture sera, par exemple pour modifier l'elem  id="bloc"  :
	// -----  <div id="bloc">Texte dont l'apparence est a modifier</div>
	// -----     ...   ...   
	// -----  <a onclick="Texte1('bloc');">Modifier l'apparence du texte</a> <a onclick="Texte0('bloc');">Retablir l'apparence du texte</a>

function DisplayB(id){this.modiff = 'block'; this.id=id; {document.getElementById(id).style.display = this.modiff;}}

function DisplayIB(id){this.modiff = 'inline-block'; this.id=id; {document.getElementById(id).style.display = this.modiff;}}

function None(id){this.modiff = 'none'; this.id=id; {document.getElementById(id).style.display = this.modiff;}}

function zIndex1(id){this.modiff = '1'; this.id=id; {document.getElementById(id).style.zIndex = this.modiff;}}

function zIndex2(id){this.modiff = '2'; this.id=id; {document.getElementById(id).style.zIndex = this.modiff;}}

function zIndex3(id){this.modiff = '3'; this.id=id; {document.getElementById(id).style.zIndex = this.modiff;}}

function zIndex4(id){this.modiff = '4'; this.id=id; {document.getElementById(id).style.zIndex = this.modiff;}}

function zIndex5(id){this.modiff = '5'; this.id=id; {document.getElementById(id).style.zIndex = this.modiff;}}

function Opac100(id){this.modiff1 = '1'; this.modiff2 = 'alpha(opacity=100)'; this.id=id; {document.getElementById(id).style.opacity =this.modiff1; document.getElementById(id).style.filter = this.modiff2;}}

function Opac80(id){this.modiff1 = '0.8'; this.modiff2 = 'alpha(opacity=80)'; this.id=id; {document.getElementById(id).style.opacity =this.modiff1; document.getElementById(id).style.filter = this.modiff2;}}

function Flash2(id){this.modiff1 = '22px'; this.modiff2 = '22px'; this.id=id; {document.getElementById(id).style.width =this.modiff1; document.getElementById(id).style.height = this.modiff2;}}
 
function Texte1(id){this.modiff1 = '2.5em'; this.modiff2 = '#555'; this.modiff3 = '0.8em'; this.id=id; {document.getElementById(id).style.fontSize =this.modiff1; document.getElementById(id).style.color = this.modiff2; document.getElementById(id).style.lineHeight = this.modiff3;}}

function Texte0(id){this.modiff1 = '1em'; this.modiff2 = '#000'; this.modiff3 = '1.2em'; this.id=id; {document.getElementById(id).style.fontSize =this.modiff1; document.getElementById(id).style.color = this.modiff2; document.getElementById(id).style.lineHeight = this.modiff3;}}

function Substitue(a_cacher,a_montrer)
{
{this.id=a_cacher; document.getElementById(id).style.display='none';}
{this.id=a_montrer; document.getElementById(id).style.display='inline-block';}
}