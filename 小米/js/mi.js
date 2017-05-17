/**
 * Created by Administrator on 2017/3/13.
 */
window.onload=function () {
    //banner轮播
    let banner=document.querySelector('.banner');
    let bannerimg=document.querySelector('.bannerimg');
    let img=bannerimg.querySelectorAll('li');
    let circle=document.querySelectorAll('.circle > a > .circle-box');
    let left=document.querySelector('.boult-left');
    let right=document.querySelector('.boult-right');
    let n=0;
    let flag=true;
    function move(way='right'){
        let time=circle.length;
        if(way=='right'){
            n++;
            if(n==time){
                n=0;
            }
        }
        if(way=='left'){
            n--;
            if(n<0){
                n=time-1;
            }
        }
        for(let i=0;i<time;i++){
            circle[i].classList.remove('firstbox');
            img[i].classList.remove('imgbox');
        }
        circle[n].classList.add('firstbox');
        img[n].classList.add('imgbox');
    }
    let mm;
    for(let i=0;i<circle.length;i++) {
        circle[i].onmouseover = function () {
            for(j=0;j<circle.length;j++){
                img[j].classList.remove('imgbox');
                circle[i].classList.remove('firstbox');
            }
            // circle[i].classList.remove('firstbox');
            
            mm=setTimeout(function () {
                for (let i = 0; i < banner.length; i++) {

                    circle[i].classList.remove('firstbox');
                    img[i].classList.remove('imgbox');
                }
                circle[i].classList.add('firstbox');
                img[i].classList.add('imgbox');
                n=i;
            },200)
        }
        circle[i].onmouseout=function () {
            clearTimeout(mm);
            circle[i].classList.remove('firstbox');
            // img[i].classList.remove('imgbox');

        }
        // circle[i].onclick=function(){
        //     mm=setTimeout(function () {
        //         for (let i = 0; i < banner.length; i++) {
        //             circle[i].classList.remove('firstbox');
        //             img[i].classList.remove('imgbox');
        //         }
        //         circle[i].classList.add('firstbox');
        //         img[i].classList.add('imgbox');
        //         n=i;
        //     },200)
        // }
    }

    let tt=window.setInterval(move,1000);
    //当鼠标移上banner图上是，清除时间函数
    banner.onmouseover=function(){
        clearInterval(tt);
    }
    //当鼠标移出banner图时，重新调用时间函数
    banner.onmouseout=function () {
        tt=window.setInterval(move,2000);//tt不能重新用let定义，不然以后会清除不了时间函数
    }
    //图片的事件监听
    img.forEach(function(value){// 为每个图片添加事件监听器
        value.addEventListener('transitionend',function(){
            flag=true;
        })
    })
    //点击轮播图左边按钮，图片向左走一格。调用move函数，传值，让n--。
    left.onclick=function(){
        //开关思想,判断flag是否为true
        if(flag){//flag=true，可以点击左边箭头
            flag=false;//进来就关闭flag
            move('left');//调用move函数，下一张
        }
    }
    //点击轮播图左边按钮，图片向左走一格。调用move函数，不传值，让其用默认的值，让n++。
    right.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }






// window.onload=function(){
    
//                                 // 查询选择器
//         const bannerbox=document.querySelector(".bannerimg");
//         const tu=document.querySelectorAll("li");
//         const anniu=document.querySelectorAll(".circle > a > .circle-box")
//         const leftjiaotou=document.querySelector(".boult-left")
//         const rightjiaotou=document.querySelector(".boult-right")


//         function lunbotu(){
//             var num=0;
//             tu[0].style.zIndex=2;
//             anniu[0].style.background="red";


//             var t=setInterval(move,1000)

//             bannerbox.onmouseover=function(){
//                 clearInterval(t);
//             }
//             bannerbox.onmouseout=function(){
//                 t=setInterval(move,1000);
//             }
//             leftjiaotou.onclick=function(){
//                 move("l");
//             }
//             rightjiaotou.onclick=function(){
//                 move("r");
//             }

//             for(let i=0;i<anniu.length;i++){
                
//                 anniu[i].onmouseover=function(){

//                     for(let j=0;j<anniu.length;j++){
//                         console.log(anniu[j])
//                         anniu[j].style.background="#fff";
//                         tu[j].style.zIndex=1;
//                     }
//                     anniu[i].style.background="red";
//                     tu[i].style.zIndex=2;
//                     num=i;
//                 }
//             }

//             // anniu[num].onmouseover=function(){
//             //  clearInterval(t);
//             // }
//             // anniu[num].onmouseout=function(){
//             //  t=setInterval(move,1000);
//             // }


//             function move(type="r"){
//                 if(type=="r"){
//                     num++;
//                     if(num>=tu.length){
//                         num=0;
//                     }
                    
//                         for(let j=0;j<tu.length;j++){
//                             tu[j].style.zIndex=1;
//                             anniu[j].style.background="#fff"
//                         }
//                     tu[num].style.zIndex=2;
//                     anniu[num].style.background="red"
//                 }
//                 if(type=="l"){
//                     num--;
//                     if(num<0){
//                         num=tu.length-1;
//                     }
//                     for(let j=0;j<tu.length;j++){
//                             tu[j].style.zIndex=1;
//                             anniu[j].style.background="#fff"
//                         }
//                     tu[num].style.zIndex=2;
//                     anniu[num].style.background="red"
//                 }

                    
                
//             }

//         }

//         lunbotu();




//     // }







    //搭配选项卡
    let f=document.querySelectorAll('.f');
    let f2=document.querySelectorAll('.f2');
    let f3=document.querySelectorAll('.f3');
    function tab(obj,obj2) {
        let as=obj.querySelectorAll('.titleleft > div');
        let comR=obj2.querySelectorAll('.com-right');
        for(let i=0;i<as.length;i++){
            as[i].onmouseover=function () {
                for(let i=0;i<as.length;i++){
                    as[i].classList.remove('first');
                    comR[i].classList.remove('first');
                }
                as[i].classList.add('first');
                comR[i].classList.add('first');
            }
        }
    }
    tab(f[0],f[1]);
    tab(f2[0],f2[1]);
    tab(f3[0],f3[1]);

    //banner左部侧滑
    let banleft=document.querySelectorAll('.banner-left > ul > li');
    let beyond=document.querySelectorAll('.banner-left > ul > li > .beyond');
    for(let i=0;i<beyond.length;i++){
        let bul=beyond[i].querySelectorAll('ul').length;
        banleft[i].onmouseover=function () {
            beyond[i].style.display='block';
            beyond[i].style.width=bul*265+'px';
        }
        banleft[i].onmouseout=function () {
            beyond[i].style.display='none';
            beyond[i].style.width=0;
        }
    }

    //导航下拉
    // let hasa=document.querySelectorAll('.nav-bottom > .has > a');
    // let down=document.querySelectorAll('.nav-bottom > .has > .down');
    // let swith=true;
    // let swith2=false;
    // // hasa.forEach(function (a,index) {
    // //     a.onmouseover=function () {
    // //         if(swith){
    // //             swith=false;
    // //             for(let i=0;i<hasa.length;i++){
    // //                 animate(down[i],{height:0},300)
    // //             }
    // //             animate(down[index],{height:200},300,function () {
    // //                 swith2=true;
    // //             })
    // //         }
    // //     }
    // //     a.onmouseout=function () {
    // //         if(swith2){
    // //             swith2=false;
    // //             animate(down[index],{height:0},300,function () {
    // //                 swith=true;
    // //             })
    // //         }
    // //     }
    // // })
    // for(let i=0;i<hasa.length;i++){
    //     hover(hasa[i],function () {
    //         console.log(1);
    //         for(let i=0;i<hasa.length;i++){
    //             animate(down[i],{height:0},300)
    //         }
    //         animate(down[i],{height:200},300)
    //     },function () {
    //         animate(down[i],{height:0},300)
    //     })
    //     // hasa[i].onmouseover=function () {
    //     //     console.log(1);
    //     //     for(let i=0;i<hasa.length;i++){
    //     //         animate(down[i],{height:0},300)
    //     //     }
    //     //     animate(down[i],{height:200},300)
    //     // }
    //     // hasa[i].onmouseout=function () {
    //     //     animate(down[i],{height:0},300)
    //     // }
    // }

    // for(let i=0;i<hasa.length;i++){
    //     hasa[i].onmouseover=function () {
    //         for(let i=0;i<down.length;i++){
    //             down[i].style.display='none';
    //         }
    //         down[i].style.display='block';
    //     }
    //     hasa[i].onmouseout=function () {
    //         down[i].style.display='none';
    //     }
    // }

    //内容模块的选项卡
    let conLi=document.querySelectorAll('.content > li');
    // console.log(conLi);
    conLi.forEach(function (li,index) {
        let divs=li.querySelectorAll('.div');
        let lis=li.querySelectorAll('ul > li');
        let left=li.querySelector('.effect-left');
        let right=li.querySelector('.effect-right');
        let n=0;
        //选项卡
        lis.forEach(function (li,index) {
            li.onclick=function () {
                for(let i=0;i<lis.length;i++){
                    lis[i].classList.remove('li1');
                    divs[i].classList.remove('first-div');
                }
                lis[index].classList.add('li1');
                divs[index].classList.add('first-div');
            }
        })
        //左右箭头
        function move(way='right') {
            if(way=='right'){
                n++;
                if(n==lis.length){
                    n=0;
                }
            }else if(way=='left'){
                n--;
                if(n<0){
                    n=lis.length-1;
                }
            }
            for(let i=0;i<lis.length;i++){
                lis[i].classList.remove('li1');
                divs[i].classList.remove('first-div');
            }
            lis[n].classList.add('li1');
            divs[n].classList.add('first-div');
        }
        //给左箭头添加点击事件
        left.onclick=function () {
            move('left');
        }
        right.onclick=function () {
            move();
        }

    })

    //小米明星单の轮播
    // let star=document.querySelector('.star-body');
    // let starLis=star.querySelectorAll('li');
    // console.log(starLis);
    // let number=star.offsetWidth;
    // console.log(number);
    // let now1=0;
    // let next1=1;
    // let kaiguan2=true;
    // let starright=document.querySelector('.star-title .starright');
    // let starleft=document.querySelector('.star-title .starleft');
    // function Star(fx='right') {
    //     if(fx=='right'){
    //         starLis[1].style.left='100%';
    //         animate(starLis[0],{left:-number},800);
    //         animate(starLis[1],{left:0},800);
    //     }
    //     if(fx=='left'){
    //         starLis[0].style.left='-100%';
    //         animate(starLis[1],{left:number},800);
    //         animate(starLis[0],{left:0},800);
    //     }
    // }
    // let start=setInterval(function () {
    //     if(kaiguan2){
    //         kaiguan2=false;
    //         Star()
    //     }else{
    //         kaiguan2=true;
    //         Star('left')
    //     }
    // },3000);
    // //左右按钮
    // starright.onmouseover=function () {
    //     clearInterval(start);
    // };
    // starright.onmouseout=function () {
    //     start=setInterval(Star,3000);
    // };

    // starleft.onmouseover=function () {
    //     clearInterval(start);
    // };
    // starleft.onmouseout=function () {
    //     start=setInterval(Star,3000);
    // };
    // starright.onclick=function () {
    //     Star();
    // }
    // starleft.onclick=function () {
    //     Star('left');
    // }



    //为你推荐
    // let recommend=document.querySelector('.recommend-body');
    // let reLis=recommend.querySelectorAll('li');
    // let numb=recommend.offsetWidth;
    // let now2=0;
    // let next2=0;
    // let kaiguan3=true;
    // let reright=document.querySelector('.recommend-title > .reright');
    // let releft=document.querySelector('.recommend-title > .releft');
    // console.log(reLis,releft,reright);
    // function recom(way='right') {
    //     if(way=='right'){
    //         next2=now2+1;
    //         if(next2>=reLis.length){
    //             next2=0;
    //         }
    //         reLis[next2].style.left='100%';
    //         animate(reLis[now2],{left:-numb},1000);
    //         animate(reLis[next2],{left:0},1000);
    //         now2=next2;
    //     }
    //     if(way=='left'){
    //         next2=now2-1;
    //         if(next2<0){
    //             next2=reLis.length-1;
    //         }
    //         reLis[next2].style.left='-100%';
    //         animate(reLis[now2],{left:numb},1000);
    //         animate(reLis[next2],{left:0},1000);
    //         now2=next2;
    //     }
    // }
    // // let ret=setInterval(recom,3000);
    // // 左右箭头
    //
    // reright.onclick=function () {
    //     recom();
    // }
    // releft.onclick=function () {
    //     recom('left');
    // }
    let ree=document.querySelector('.recommend-title > .reright');
    let reea=document.querySelector('.recommend-title > .reright a');
    let lee=document.querySelector('.recommend-title > .releft');
    let leea=document.querySelector('.recommend-title > .releft a');
    let wei=document.querySelector('.recommend-body');
    let weis=wei.querySelectorAll('li');
    let now=0,next;
    let flag1=true;
    leea.style.color='#e4e4e4'
    function weini(fx='right') {
        if(fx=='right'){
            next=now+1;
            weis[next].style.left='1240px'
            animate(weis[now],{left:-1240},500)
            animate(weis[next],{left:0},500,function () {
                flag1=true;
            })
            now=next;
            if(now+1>=weis.length){
                reea.style.color='#e4e4e4'
            }
        }
        if(fx=='left'){
            next=now-1;
            weis[next].style.left='-1240px'
            animate(weis[now],{left:1240},500)
            animate(weis[next],{left:0},500,function () {
                flag1=true;
            })
            now=next;
            if(now-1<0){
                leea.style.color='#e4e4e4'
            }
        }

    }
    ree.onclick=function () {
        if(flag1){
            flag1=false;
            leea.style.color='#000'
            if(now+1>=weis.length){
                flag1=true;
                return
            }
            weini()
        }

    }

    lee.onclick=function () {
        if(flag1){
            flag1=false;
            reea.style.color='#000'
            if(now-1<0){
                flag1=true;
                return
            }
            weini('left')
        }
    }
    let kg=1;
    let tttt=setInterval(function () {
        if(kg==1){
            ree.onclick()
            if(now+1==weis.length){
                kg=0
            }
        }else if(kg==0){
            lee.onclick()
            if(now-1<0){
                kg=1
            }
        }
    },3000)
    let goo=document.querySelector('#goo')
    goo.onmousemove=function () {
        clearInterval(tttt);
    }
    goo.onmouseout=function () {
        tttt=setInterval(function () {
            if(kg==1){
                ree.onclick()
                if(now+1==weis.length){
                    kg=0
                }
            }else if(kg==0){
                lee.onclick()
                if(now-1<0){
                    kg=1
                }
            }
        },3000)
    }



    //导航下
    let navpar=document.querySelector('.nav-bottom ul');
    // console.log(navpar);
    let navtop=document.querySelector('.nav-bottom ul .navtop');
    let navas=navtop.querySelectorAll('a');
    // console.log(navas);
    let navbottom=document.querySelector('.navbottom');
    let navdiv=document.querySelectorAll('.navbottom > div');
    //事件委派
    navpar.onmouseover=function (e) {
        let obj=e.target;
        navbottom.style.height='200px';
        if(obj.className=='nava'&&obj.children.length==0){
            navas.forEach((a,index)=>{
                a.onmouseover=function () {
                    for(let i=0;i<navas.length;i++){
                        navdiv[i].classList.remove('active');
                    }
                    navdiv[index].classList.add('active');
                }
            })
        }
    }
    navpar.onmouseout=function () {
        navbottom.style.height='0';
    }



}