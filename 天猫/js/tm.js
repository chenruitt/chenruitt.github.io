/*
* @Author: Administrator
* @Date:   2017-04-10 19:54:31
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-11 22:54:12
*/

'use strict';
$(function(){
			lunbo1(".banner_tu",".banner",".lunbodian",["#000","#D03DB7","#FAFAFA","#E8E8E8","#E8E8E8","#FEFFF7"],2,"red","#a2a2a2",3000,1);
			lunbo3(".spq_t",".spq_tu1",".spq_ttt","#fff",2,"yellow","#fff",1500,1,".you",".zuo")
			
	// 		const tu=$(".spq_tu2");
	// 	const img=$(".spq_tu22")[0];
	// 	const imgW=parseInt(window.getComputedStyle(img,null).width);
	// 	const leftbtn=$(".zuo")[0];
	// 	const spd=$(".sp2");
	// 	const rightbtn=$(".you")[0];
	// 	const li=$(".spq_t");
	// 	const zhezhao=$(".above-cover");
	// 	//初始化
	// 	zhezhao[0].style.display="block";
	// 	zhezhao[3].style.display="block";
	// 	// rightbtn.style.color="#f93";
	// 	var flag=true;
	// 	// console.log(imgW)
	// 	for(let i=0;i<tu.length;i++){
	// 		tu[i].style.left=imgW+"px";
	// 	}
	// 	tu[0].style.left=0;
	// 	// var t=setInterval(move,lunboTime);
	// 	var now=0;
	// 	var next=0;

	// 	function move(type="l"){
	// 		flag=false;
	// 		if(type=="l"){
	// 		next++;
	// 		if(next>tu.length-1){
	// 			next=0;
	// 			}
	// 		tu[next].style.left=imgW+"px";
	// 		animate(tu[now],{left:-imgW},500);
	// 		animate(tu[next],{left:0},500,function(){
				
	// 			flag=true;
	// 			now=next;
	// 			leftbtn.style.pointerEvents="none";
	// 			rightbtn.style.pointerEvents="auto";

	// 		});
			
	// 		}else if(type=="r"){
	// 			next--;
	// 			if(next<0){
	// 				next=tu.length-1;
	// 			}
	// 			tu[next].style.left=-imgW+"px";
	// 			animate(tu[now],{left:imgW},500);
	// 			animate(tu[next],{left:0},500,function(){

	// 			flag=true;
	// 			now=next;
	// 			leftbtn.style.pointerEvents="auto";
	// 			rightbtn.style.pointerEvents="none";

	// 		});

	// 		}			
	// 	}

	// 	leftbtn.onclick=function(){
	// 		if(flag){
	// 		move("l");	
	// 		}		
	// 	}
		
	// 	rightbtn.onclick=function(){
	// 		if(flag){
	// 		move("r");	
	// 		}
			
	// 	}

	// 	for(let j=0;j<spd.length;j++){

	// 		spd[j].onmouseover=function(){
	// 			for(let i=0;i<spd.length;i++){
	// 				li[i].style.zIndex=1;
	// 				zhezhao[i].style.display="none";
	// 			}
	// 			li[j].style.zIndex=2;
	// 				zhezhao[j].style.display="block";

	// 			}
	// }












			const bannerli=$(".bannernav ul li");
			const bannernav=$(".bannernav ul li .k1");
			const shou=$(".spq_shou");
			const sp=$(".spq_y_t");
			const shou2=$(".spq_shou1");
			const sp2=$(".spq_y_t-1");
			const shou8=$(".spq_shou2");
			const sp8=$(".spq_y_t-2");
			xxka(sp,shou);
			xxka(sp2,shou2);
			xxka(sp8,shou8);
			const shou3=$(".wzdh");
			const sp3=$(".wzdh .gjs");
			const shou4=$(".taobao");
			const sp4=$(".xiaxuankuang1");
			const shou5=$(".choucengjia");
			const sp5=$(".xiaxuankuang2");
			const shou6=$(".shouji");
			const sp6=$(".xiaxuankuang3");
			const shou7=$(".shengjia");
			const sp7=$(".xiaxuankuang4");
			xxka(shou3,sp3);
			xxka(shou4,sp4);
			xxka(shou5,sp5);
			xxka(shou6,sp6);
			xxka(shou7,sp7);
			
			sxlunbo(".type",".spq_t3",1500,50);
			sxlunbo(".meili11 span",".meili11",3000,50);
			sxlunbo(".meili12 span",".meili12",3000,50);
			sxlunbo(".meili13 span",".meili13",3000,50);
			sxlunbo(".meili14 span",".meili14",3000,50);
			sxlunbo(".meili15 span",".meili15",3000,50);
			sxlunbo(".meili16 span",".meili16",3000,50);
			louceng(".zuo_box",".meili",".jingdong_zuo","nav","img","imgu","#918888",["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#dd2727"],1000,600,".zuob2");
			const sm1=$(".mui-mbar-tab-tip");
			const sm=$(".f1");
			for(let i=0;i<sm.length;i++){
				sm[i].onmouseover=function(){			
					sm1[i].style.display="block";
					animate(sm1[i],{right:35},300);
				}
				sm[i].onmouseout=function(){
					animate(sm1[i],{right:70},500);			
					sm1[i].style.display="none";
					
				}
			}
			const tiaod=$(".f1#tiaod")[0];
			tiaod.onclick=function(){
				animate(scroll,{scrollTop:0},500);
			}
			const stop=$(".stop")[0] ;
			let scroll= scrollobj();
			stop.onclick=function(){
			animate(scroll,{scrollTop:0},500);

			}
			const mt=$(".feileilist a");
			const mtk=$(".maotou");
			xxka(mt,mtk);
			const bannerlia=$(".bannernav ul li span");
			const bannerlii=$(".bannernav ul li i");
			const col=["#e54077","#427def","#6347ed","#e54077","#6347ed","#427def","#e54077","#f7a831","#f7a831","#427def","#dd2727","#427def","#f7a831","#427def","#dd2727","#427def"];
			// xxka(bannerli,bannernav);
			for(let i=0;i<bannerlia.length;i++){
				bannerli[i].onmouseover=function(){
				for(let j=0;j<bannerlia.length;j++){
				bannerlia[j].style.color="#333";
				bannerlii[j].style.color="#fff";
				}
				bannerlia[i].style.color=col[i];
				bannerlii[i].style.color=col[i];
				bannernav[i].style.display="block";
			}
			bannerli[i].onmouseout=function(){
				bannerlia[i].style.color="#333";
				bannerlii[i].style.color="#fff";
				bannernav[i].style.display="none";
			}	
			}
		})