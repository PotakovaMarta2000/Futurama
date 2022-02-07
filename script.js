

let benderHead = document.querySelector('.head');
benderHead.addEventListener('mouseover', playsound);

function playsound()
{
	document.getElementById('sound').play();
	
}

/* setTimeout(playsound(), 5000); */