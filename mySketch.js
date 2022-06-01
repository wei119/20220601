var inputElement
var txts = []
var ay
var colors = "ff99c8-fcf6bd-d0f4de-a9def9-e4c1f9".split("-").map(a=>"#"+a)
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	inputElement =createInput("")
	inputElement.position(50,50)
	inputElement.input(userInput)
	sliderElement= createSlider(-1,1,0.2,0.1)
	sliderElement.position(50,100)
	sliderElement.input(setGravity)	
	ay=sliderElement.value()
}
function setGravity(){
	ay = this.value()
}

function userInput(){
	txts.push({
		text: this.value(),
		x:width/2,
		y:50,
		vx: random(-5,5),
		vy: 1 ,
		color: random(colors)
	})
	this.value('')
}
function draw() {
	background(0);
	fill(255)
	textSize(100)
	for(var i=0;i<txts.length;i++){
		let txt = txts[i]
		fill(txt.color)
		text(txt.text , txt.x , txt.y)
		txt.x= txt.x + txt.vx
		txt.y= txt.y + txt.vy
		txt.vy = txt.vy +ay //往下速率vy，在加0.1
		txt.vx = txt.vx*0.999  //產生一點在X軸上的摩擦力
		txt.vy = txt.vy*0.999  //產生一點在y軸上的摩擦力
		if(txt.y>height){
			txt.vy = -abs(txt.vy)  //abs取絕對值
		}
	}
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

