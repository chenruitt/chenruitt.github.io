/**
 * Created by Administrator on 2017/3/20.
 */
window.onload=function () {
    let box=document.querySelector('.box')
    h1=document.querySelector('h1')
    h2=document.querySelector('h2')
    h3=document.querySelector('h3')
    //绘制场景
    for(let i=0;i<20;i++){
        for(let j=0;j<20;j++){
            div=document.createElement('div');
            box.appendChild(div);
            div.id='c'+j+'-'+i;
        }
    }
    // 画蛇
    let snake=[
        {x:0,y:0},
        {x:1,y:0},
        {x:2,y:0}
    ]
    snake.forEach(function (value,index) {
        let domobj=document.querySelector('#c'+value.x+'-'+value.y);
        // if(index==0){
        //     domobj.className='snake1';
        // }
        domobj.className='snake';
    })
    //食物
    let food={x:0,y:0};
    let x,y;
    let {random:ran,floor:f}=Math;
    function getfood() {
        do{
            x=f(ran()*20)
            y=f(ran()*20)
            food={x,y};
        }while(panduan(x,y,snake))
        let foodobj=document.querySelector('#c'+x+'-'+y)
        foodobj.className='food'
        return food
    }
    food=getfood()
    function panduan(a,b,arr) {
        return arr.some((value)=>{
            return a==value.x&&b==value.y;
        })
    }
    //移动
    let fenshu=0;
    let mix=0
    function move() {
        let oldhead=snake[snake.length-1];
        let newhead;
        switch (fx){
            case 'left':
                newhead={x:oldhead.x-1,y:oldhead.y};
            break;
            case 'right':
                newhead={x:oldhead.x+1,y:oldhead.y};
            break
            case 'top':
                newhead={x:oldhead.x,y:oldhead.y-1};
                break
            case 'bottom':
                newhead={x:oldhead.x,y:oldhead.y+1};
                break
        }
        let domobj=document.querySelector('#c'+newhead.x+'-'+newhead.y);
        let end=document.querySelector('.end')
        if(!domobj||panduan(newhead.x,newhead.y,snake)){
            end.style.opacity='1'
            clearInterval(t);
            if(mix<fenshu){
                h2.innerHTML='最高分：'+fenshu
            }
            return;
        }
        snake.forEach(function (value) {
            let she=document.querySelector('#c'+value.x+'-'+value.y)
            she.classList.remove('snake')
            she.classList.add('snake1')
        })
        domobj.className='snake'
        snake.push(newhead);
        if(newhead.x==food.x&&newhead.y==food.y){
            food=getfood()
            fenshu++
            h1.innerHTML='分数：'+fenshu

        }else {
            let oldend=document.querySelector('#c'+snake[0].x+'-'+snake[0].y);
            oldend.className='';
            snake.shift();
        }

    }
    let t=setInterval(move,100)
    //控制方向
    let fx='right';
    document.onkeydown=function (e) {
        let num=e.keyCode;
        switch (num){
            case 37:
                if(fx=='right'){
                    return
                }
                fx='left';
             break;
            case 38:
                if(fx=='bottom'){
                    return
                }
                fx='top';
                break;
            case 39:
                if(fx=='left'){
                    return
                }
                fx='right';
                break;
            case 40:
                if(fx=='top'){
                    return
                }
                fx='bottom';
                break;
        }
    }
    h3.onclick=function () {
        location.reload()
    }




}