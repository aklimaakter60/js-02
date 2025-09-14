function subscribe(){
	document.getElementById('text').innerHTML=
	'Subscribed';
	document.getElementById('btn').innerHTML=
	'Subscribed';
	document.getElementById('btn').style.
	backgroundColor= '#262626';
	
}
function like(){
	document.getElementById('like').innerHTML=
	'<i class="fa-solid fa-thumbs-up"></i>Liked';
}
function keyPress(){
	document.getElementById('text').innerHTML=
	'Key Pressd';
}
function onLoad(){
	alert('testing JavaScript Onload');
	document.getElementById('text').innerHTML=
	'Website Loaded Properly';

}
function windowResize(){
	document.getElementById('textarea').style.
	height='100px';
}
/*function onScroll(){
	document.getElementById('text').innerHTML=
	'Scrolling';
}*/
//best practice
/*document.getElementById('btn').onclick=function(){
	document.getElementById('btn').innerHTML=
	'Subscribed';
}*/
document.getElementById('btn').addEventListener
('click',function(){
	document.getElementById('btn').innerHTML=
	'Subscribed';
})	
