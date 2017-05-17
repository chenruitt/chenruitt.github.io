'use strict';
	// 选项卡   btn选项卡按钮  con选项卡内容
	function xuanxiangka(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}
	}
	// 遮罩  btn是底下的块，con是遮罩的块
	function zhezhao(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}
	}
	//函数简化
	function $(select,obj=document){
		if(typeof select=="function"){
			window.onload=function(){
				select();
			}
		}else if(typeof select=="string"){
			return obj.querySelectorAll(select);
		}
	}
	//层级轮播
	//pic轮播图，填字符串的选择器；
	// bigbannerBox，通屏的banner盒子，填字符串的选择器；
	// lis，轮波点，填字符串的选择器；
	// colorArr，通屏banner盒子的所有颜色，传的是数组；["red","blue","green"]；
	// tuactiveZ,图片选中层级；
	// liactivebgColor,轮播点选中颜色；
	// lunboTime,时间间隔；
	// tuZ,图片普通层级；
	// lisColor,轮播点普通颜色；
	// bannertushuliang,banner图的数量-1；
	// type不传值时默认层级轮波，type==1时透明轮播
	function Zlunbo(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor,bannertushuliang,type=0){
		
		const tupian=$(pic);
		const banner=$(bigbannerBox)[0];
		const li=$(lis);
		const color=colorArr;
		tupian[0].style.zIndex=tuactiveZ;
		li[0].style.background=liactivebgColor;
		banner.style.background=color[0];
		var num=0;
		var t=setInterval(move,lunboTime);
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.zIndex=tuZ;
					li[i].style.background=lisColor;
				}
				tupian[j].style.zIndex=tuactiveZ;
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
				}
			}
			function move(){
			num++;
			if(num>bannertushuliang){
				num=0;
			}
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[num].style.zIndex=tuactiveZ;
			li[num].style.background=liactivebgColor;
			banner.style.background=color[num];
		}
		if(type==1){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lis);
			const color=colorArr;
			tupian[0].style.opacity=tuactiveZ;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
			var num=0;
			var t=setInterval(move,lunboTime);
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,lunboTime);
			}
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.opacity=tuZ;
						li[i].style.background=lisColor;
					}
				tupian[j].style.opacity=tuactiveZ;
				animate(tupian[j],{opacity:0},500);
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
				}
				}
				function move(){
				num++;
				if(num>bannertushuliang){
					num=0;
				}
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=tuZ;
					li[i].style.background=lisColor;
				}
				tupian[num].style.opacity=tuactiveZ;
				animate(tupian[num],{opacity:0},500);
				li[num].style.background=liactivebgColor;
				banner.style.background=color[num];
			}
		}
	}






	//层级轮播
	// pic轮波图，填字符串的选择器；
	// bigbannerBox，通屏的banner盒子，填字符串的选择器；
	// lis，轮波点，填字符串的选择器；
	// colorArr，通屏banner盒子的所有颜色，传的是数组；["red","blue","green"]；
	// zuojian 左箭头
	// youjian 右箭头
	// tuactiveZ,图片选中层级；
	// liactivebgColor,轮波点选中颜色；
	// lunboTime,时间间隔；
	// tuZ,图片普通层级；
	// lisColor,轮波点普通颜色；
	// bannertushuliang,banner图的数量-1；
		function Zlunbo22(pic,bigbannerBox,lis,colorArr,zuojian,youjian,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor,bannertushuliang){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lis);
			const color=colorArr;
			const leftBtn=$(zuojian)[0];
			const rightBtn=$(youjian)[0];
			tupian[0].style.zIndex=tuactiveZ;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
			var num=0;
			var t=setInterval(move,lunboTime);
			function move(type="r"){
				if(type=="r"){
					num++;
					if(num>bannertushuliang){
						num=0;
					}
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=tuZ;
						li[i].style.background=lisColor;
					}
					tupian[num].style.zIndex=tuactiveZ;
					li[num].style.background=liactivebgColor;
					banner.style.background=color[num];
					}
				if(type=="l"){
					num--;
					if(num<0){
						num=tupian.length-1;
					}
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=tuZ;
						li[i].style.background=lisColor;
					}
					tupian[num].style.zIndex=tuactiveZ;
					li[num].style.background=liactivebgColor;
					banner.style.background=color[num];
					}

			}
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,lunboTime);
			}
			leftBtn.onclick=function(){
				move("l");
			}
			rightBtn.onclick=function(){
				move("r");
			}
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=tuZ;
						li[i].style.background=lisColor;
					}
				tupian[j].style.zIndex=tuactiveZ;
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
				}
			}
		}



	//左右多张图节点轮播
	//hezi:放图片的盒子
	//img:要轮播的每张图
	//zuokuohao:左括号
	//youkuohao：右括号
	//num:一次需要轮播的图片数量
    //lunbotime:轮播时间
	//lunboxiaotime:轮播小时间
	function jiedianlunbo(hezi,img,zuokuohao,youkuohao,num,lunbotime,lunboxiaotime){
    	const box=$(hezi)[0];
    	// console.log(box);
    	const boxW=parseInt(window.getComputedStyle(document.querySelector(img),null).width);
    	const leftBen=$(zuokuohao)[0];
    	const rightBen=$(youkuohao)[0];
    	let n=num;
    	let flag=true;
    	// let t=setInterval(move,lunbotime);
    	function move(type="r"){
    		flag=false;
    		if(type=="l"){
	    		animate(box,{left:-boxW*n},lunboxiaotime,function(){
	    			for(let i=0;i<n;i++){
	    				let firstChild=box.firstElementChild;
	    				box.appendChild(firstChild);
	    			}
	    			box.style.left=0;
	    			flag=true;
	    		})
    		}
    		if(type=="r"){
	    		for(let i=0;i<n;i++){
	    			let lastChild=box.lastElementChild;
	    			let firstChild=box.firstElementChild;
	    			box.insertBefore(lastChild,firstChild);
	    		}
		    	box.style.left=-boxW*n+"px";
	    		animate(box,{left:0},lunboxiaotime,function(){
	    			flag=true;
	    		});
    		}
    	}
    	leftBen.onclick = function(){
    		if(flag){
    			move("r");
    		}
    	}
    	rightBen.onclick = function(){
    		if(flag){
    			move("l");
    		}
    	}
    	// box.onmouseover = function(){
    	// 	clearInterval(t);
    	// }
    	// box.onmouseout = function(){
    	// 	t=setInterval(move,lunbotime);
    	// }
    	// leftBen.onmouseover = function(){
    	// 	clearInterval(t);
    	// }
    	// leftBen.onmouseout = function(){
    	// 	t=setInterval(move,lunbotime);
    	// }
    	// rightBen.onmouseover = function(){
    	// 	clearInterval(t);
    	// }
    	// rightBen.onmouseout = function(){
    	// 	t=setInterval(move,lunbotime);
    	// }
    	
  //   	window.onblur = function(){
		// 	clearInterval(t);
		// }
		// window.onfocus = function(){
		// 	t=setInterval(move,lunbotime);
		// }
    	
	}