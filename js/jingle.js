function PlayMusic(Bang)
{
var ecriture_lecteur = "<object type='application/x-shockwave-flash' data='swf/lecteur.swf?mp3=" + Bang + "&amp;autoplay=1' height='1' width='1'><param name='movie' value='swf/lecteur.swf?mp3=" + Bang + "&amp;autoplay=1' /><param name='wmode' value='transparent' /></object>"; 

document.getElementById("jingle").innerHTML = ecriture_lecteur;
} 

function StopMusic()
{
document.getElementById("jingle").innerHTML = "";
}
