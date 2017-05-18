/**
 * Created by Administrator on 2017/3/20.
 */
window.onload=function () {
    box=document.querySelector('.box')
    for(let i=0;i<20;i++){
        for(let j=0;j<20;j++){
            let div=document.createElement('div')
            box.appendChild(div)
            div.id='c'+j+'-'+i;
        }
    }
    //画蛇
    let snake=[
        {x:0,y:0},
        {x:1,y:0},
        {x:2,y:0}
    ]
    snake.forEach((obj)=>{
        let idname='c'+obj.x+'-'+obj.y;
        let domobj=document.querySelector('#'+idname)
        domobj.className='snake';
    })
    //画食物
    let {random:ran,floor:f}=Math
    let food,x,y;
    function pd(a,b,arr) {
        return arr.some((value)=>{
            return value.x==a&&value.y==b;
        })
    }
    function getfood() {
        do{
            x=f(ran()*20);
            y=f(ran()*20);
            let idname='c'+x+'-'+y;
            let domobj=document.querySelector('#'+idname)
            domobj.className='food';
            food={x,y};
            console.log(food)
            return food
        }while(pd(x,y,snake))

    }
    food=getfood()
    //向前
    let fx='right';
    function move(fx) {
        let oldheader=snake[snake.length-1];
        let newheader
        switch(fx){
            case 'left':
                newheader={x:oldheader.x-1,y:oldheader.y};
            break
            case 'right':
                newheader={x:oldheader.x+1,y:oldheader.y};
            break;
            case 'top':
                newheader={x:oldheader.x,y:oldheader.y-1};
            break;
            case 'bottom':
                newheader={x:oldheader.x,y:oldheader.y+1};
            break
        }
    //判断是否撞墙
        let domobj=document.querySelector('#c'+newheader.x+'-'+newheader.y)
        if(!domobj||pd(newheader.x,newheader.y,snake)){
            alert('Game over')
            clearInterval(t)
            return
        }
        domobj.className='snake'
        snake.push(newheader)
        if(newheader.x==food.x&&newheader.y==food.y){
            food=getfood()
        }else{
            let oldend=document.querySelector('#c'+snake[0].x+'-'+snake[0].y)
            oldend.className=''
            snake.shift()
        }
    //吃到food
    }

    //控制方向

    let t=setInterval(function (){
        document.onkeydown=function (e) {
            let nub=e.keyCode;
            switch(nub){
                case 37:
                    if(fx=='right'){
                        return
                    }else{
                        fx='left';
                    }
                    break;
                case 38:
                    if(fx=='bottom'){
                        return
                    }else{
                        fx='top';
                    }
                    break;
                case 39:
                    if(fx=='left'){
                        return
                    }else{
                        fx='right';
                    }
                    break;
                case 40:
                    if(fx=='top'){
                        return
                    }else{
                        fx='bottom';
                    }
                    break
            }
        }
        move(fx);
    },100);








}

