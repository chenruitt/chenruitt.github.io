/**
 * Created by Administrator on 2017/3/20.
 */
window.onload=function () {
    class Play{
        constructor(box){
            this.obj=box;
            this.snake=[
                {x:0,y:0},
                {x:1,y:0},
                {x:2,y:0},
            ];
            this.food={x:0,y:0};
            this.fx='right';
            this.t=0;
        }
        changjing(){
            for(let i=0;i<20;i++){
                for(let j=0;j<20;j++){
                    let div=document.createElement('div')
                    div.id='c'+j+'-'+i
                    this.obj.appendChild(div)
                }
            }
        }
        she(){
            this.snake.forEach((obj)=>{
                let domobj=document.querySelector('#c'+obj.x+'-'+obj.y);
                domobj.className='snake';
            })
        }
        siwu(){
            let {random:run,floor:f}=Math;
            let x,y;
            do{
                x=f(run()*20);
                y=f(run()*20);
            }while(this.panduan(x,y,this.snake))
            let domobj=document.querySelector('#c'+x+'-'+y);
            domobj.className='food';
            this.food={x,y}
        }
        panduan(a,b,arr){
            return arr.some((value)=>{
                return value.x==a&&value.y==b;
            })
        }
        move(){
            this.t=setInterval(()=>{
                let newhead;
                let oldhead=this.snake[this.snake.length-1];
                switch (this.fx){
                    case 'left':newhead={x:oldhead.x-1,y:oldhead.y};break;
                    case 'right':newhead={x:oldhead.x+1,y:oldhead.y};break;
                    case 'top':newhead={x:oldhead.x,y:oldhead.y-1};break;
                    case 'bottom':newhead={x:oldhead.x,y:oldhead.y+1};break;
                }
                let domobj=document.querySelector('#c'+newhead.x+'-'+newhead.y);
                if(!domobj||this.panduan(newhead.x,newhead.y,this.snake)){
                    alert('你好菜啊');
                    clearInterval(this.t);
                    return;
                }
                domobj.className='snake';
                this.snake.push(newhead);
                if(newhead.x==this.food.x&&newhead.y==this.food.y){
                    this.siwu()
                }else{
                    let oldend=document.querySelector('#c'+this.snake[0].x+'-'+this.snake[0].y);
                    oldend.className=''
                    this.snake.shift();
                }

            },100)

        }
        keydown(){
            document.onkeydown=(e)=>{
                let nub=e.keyCode;
                switch (nub){
                    case 37:
                        if(this.fx=='right'){
                            return
                        }
                        this.fx='left';
                        break;
                    case 38:
                        if(this.fx=='bottom'){
                            return
                        }
                        this.fx='top';
                        break;
                    case 39:
                        if(this.fx=='left'){
                            return
                        }
                        this.fx='right';
                        break;
                    case 40:
                        if(this.fx=='top'){
                            return
                        }
                        this.fx='bottom';
                        break;
                }
            }
        }
        play(){
            this.changjing();
            this.she();
            this.siwu();
            this.keydown();
            this.move();
        }
    }


    let box=document.querySelector('.box');
    let obj=new Play(box);
    obj.play();
}