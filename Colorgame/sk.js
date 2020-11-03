var colors=[]
var num=6
genrandomnumbers(num)
var newgame=document.getElementById("newgame")
var squares=document.querySelectorAll(".square")
var pickedcolor=pickcolor()
var colordisplay=document.querySelector("span")
colordisplay.textContent=pickedcolor;
var message=document.querySelector("#message")
var easy=document.getElementById("easy")
var hard=document.getElementById("hard")
var newgame=document.getElementById("newgame")
var button=document.querySelectorAll(".mode")
for(i=0;i<button.length;i++)
{
button[i].addEventListener("click",function(){
	button[0].classList.remove("selected")
	button[1].classList.remove("selected")
	this.classList.add("selected")
	console.log(this.textContent)
	if(this.textContent==="EASY")
		num=3
	else
		num=6
	reset();
})
}
function reset()
{ 	
	genrandomnumbers(num)
	game()
	pickedcolor=pickcolor()
	document.querySelector("h1").style.backgroundColor="steelblue";
	if(num===3)	
		for(i=3;i<6;i++)
		squares[i].style.display="none"
	else
		for(i=3;i<6;i++)
		squares[i].style.display="block"
	 message.textContent=""	
	 newgame.textContent="New Game";
}
newgame.addEventListener("click",function(){
	reset()
})
game()
function game()
{
for(i=0;i<num;i++)
{
    squares[i].style.backgroundColor=colors[i];
squares[i].addEventListener("click",function(){
	if(pickedcolor===this.style.backgroundColor)
			{
				message.textContent="CORRECT"
				changecolor(pickedcolor)
				document.getElementById("newgame").textContent="Play again ?";
			}	
	else
		{ 	message.textContent="TRY AGAIN!"
		this.style.backgroundColor="#232323"
	}
})
}
}
function changecolor(color)
{
for(i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=color;	
}
document.querySelector("h1").style.backgroundColor=color;
}
function pickcolor()
{
	return colors[Math.floor(Math.random() * num)]
}
function genrandomnumbers(num)
{var k,l,m;
	for(i=0;i<num;i++)
	{
		for(j=0;j<3;j++)
		{
			k=Math.floor(Math.random()*256)
			l=Math.floor(Math.random()*256)
			m=Math.floor(Math.random()*256)
		}
	colors[i]="rgb("+k+", "+ l +", "+ m+")"
	}
}