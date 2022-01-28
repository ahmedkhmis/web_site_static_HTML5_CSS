function alterne(id)
{

this.montrer = 'inline-block';

this.id=id;

if (typeof this.highlighted=='undefined' || this.highlighted=='')
{
document.getElementById(this.id).style.display = this.montrer;
this.highlighted=this.id;
}
else
{
if (this.id!=this.highlighted)
{
document.getElementById(this.id).style.display = this.montrer;
document.getElementById(this.highlighted).style.display = 'none';
this.highlighted = this.id;
}
}
}

/* ======= Tous les id sont configures prealablement en {display:none} ======= */
/* ======= <body onload="alterne('le_premier_id');"> permet d'initier le_premier_id en {display:inline-block} ======= */