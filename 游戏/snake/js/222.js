/**
 * Created by Administrator on 2017/3/20.
 */
window.onload=function () {
    class Play{
        constructor(box,h1,h2,h3){
            this.obj=box;
            this.snake=[
                {x:0,y:0},
                {x:1,y:0},
                {x:2,y:0}
            ]
            this.food={x:0,y:0}
            this.fx='right'
            this.t=0
            this.fenshu=0
            this.h1=h1;
            this.h2=h2;
            this.h3=h3;
        }
        changjing(){
            for(let i=0;i<20;i++){
                for(let j=0;j<20;j++){
                    let div=document.createElement('div')
                    div.id='c'+j+'-'+i;
                    this.obj.appendChild(div);
                }
            }
        }
        she(){
            this.snake.forEach(function (value) {
                let domobj=document.querySelector('#c'+value.x+'-'+value.y);
                domobj.className='snake';
            })
        }
        siwu(){
            let x,y;
            let {random:ran,floor:f}=Math;
            do{
                x=f(ran()*20)
                y=f(ran()*20)
            }while (this.panduan(x,y,this.snake))
            let domobj=document.querySelector('#c'+x+'-'+y)
            domobj.className='food';
            this.food={x,y}
        }
        panduan(a,b,arr){
            return arr.some(function (value) {
                return a==value.x&&b==value.y;
            })
        }
        move(){
            this.t=setInterval(()=>{
                let newobj;
                let oldobj=this.snake[this.snake.length-1]
                switch (this.fx){
                    case 'left':newobj={x:oldobj.x-1,y:oldobj.y};
                        break;
                    case 'right':newobj={x:oldobj.x+1,y:oldobj.y};
                        break;
                    case 'top':newobj={x:oldobj.x,y:oldobj.y-1};
                        break;
                    case 'bottom':newobj={x:oldobj.x,y:oldobj.y+1};
                        break;
                }
                let domobj=document.querySelector('#c'+newobj.x+'-'+newobj.y);
                if(!domobj||this.panduan(newobj.x,newobj.y,this.snake)){
                    alert('Game over')
                    this.h2.innerHTML='最高分：'+this.fenshu;
                    clearInterval(this.t)
                    return
                }
                domobj.className='snake';
                this.snake.push(newobj);
                if(newobj.x==this.food.x&&newobj.y==this.food.y){
                    this.siwu()
                    this.fenshu++
                    this.h1.innerHTML='分数：'+this.fenshu
                }else{
                    let oldend=document.querySelector("#c"+this.snake[0].x+'-'+this.snake[0].y);
                    oldend.className=''
                    this.snake.shift();
                }

            },100)
        }
        keydown(){
            document.onkeydown=(e)=>{
                let nub=e.keyCode;
                switch (nub){
                    case 37:if(this.fx=='right'){
                        return
                    }
                    this.fx='left';
                    break;
                    case 38:if(this.fx=='bottom'){
                        return
                    }
                    this.fx='top';
                    break;
                    case 39:if(this.fx=='left'){
                        return
                    }
                    this.fx='right';
                    break;
                    case 40:if(this.fx=='top'){
                        return
                    }
                    this.fx='bottom';
                    break;
                }
            }
        }
        h(){
            this.h3.onclick=()=>{
                location.reload()
            }
        }
        play(){
            this.changjing();
            this.she();
            this.siwu();
            this.move();
            this.keydown()
            this.h()
        }
    }

    box=document.querySelector('.box')
    h1=document.querySelector('h1')
    h2=document.querySelector('h2')
    h3=document.querySelector('h3')
    let obj=new Play(box,h1,h2,h3);
    obj.play();
}