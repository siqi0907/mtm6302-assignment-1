

 let oBox = document.getElementById('box');
let oBtn = document.getElementById("btn")
 let getRandomColor = function(){
	 return  '#' + (function(color){
		 return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
		 && (color.length == 6) ?  color : arguments.callee(color);
	 })('');
 };

 let arrEmoji = [];
 for(let i = 128001;i<128101;i++){
	 arrEmoji.push(i)
 }

 function RandomSort(a,b) {
		return Math.random()>0.5? -1:1
 }

 function makeEmoji() {
		for(let i = 0;i<100;i++){
			oBox.innerHTML += `
				<div class="items col-4 col-md-2 col-sm-3 col-lg-1 pb-2 text-center">
				<p class="emoji">&#${arrEmoji[i]}</p>	
				<span style='color: ${getRandomColor()};
				'>${arrEmoji[i]}</span>
				</div>			`
		}
 }

 window.onload = makeEmoji()
 
 function refresh() {
	 oBox.innerHTML = ''
		arrEmoji.sort(RandomSort)
	 makeEmoji()
 }

 oBtn.onclick = refresh

