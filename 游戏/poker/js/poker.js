/**
 * Created by Administrator on 2017/4/10.
 */
$(document).ready(function () {
    let huaarr=['c','d','h','s'] //用来存放花色的数组
    let arr=[] //用来牌的数组
    let sign={} //用来判断选到的牌是否已经存在
    while(arr.length<52){
        let zi=Math.ceil(Math.random()*13); //产生一个1到3之间的随机数
        let hua=huaarr[Math.floor(Math.random()*huaarr.length)]
        if(!sign[zi+'_'+hua]){
            sign[zi+'_'+hua]=true
            arr.push({zi,hua})
        }
    }
    let n=0;
    for(let i=0;i<7;i++){
        for(let j=0;j<=i;j++){
            $('<li class="pai">').css({backgroundImage:`url(img/${arr[n].zi}${arr[n].hua}.png)`}).attr({
                id:i+'_'+j,
                value:arr[n].zi,
            }).appendTo($('ul')).delay(70*n).animate({
                left:300-50*i+100*j,
                top:50*i,
                opacity:1,
            },400)
            n++;
        }
    }
    for(;n<52;n++){
        $('<li class="pai zuo">').css({backgroundImage:`url(img/${arr[n].zi}${arr[n].hua}.png`}).attr({
            id:7+'_'+n,
            value:arr[n].zi,
        }).appendTo($('ul')).delay(70*n).animate({
            left:150,
            top:460,
            opacity:1,
        },400)
    }
    let current=null;
    $('.pai').click(function () {
        let x=parseInt($(this).attr('id').split('_')[0]);
        let y=parseInt($(this).attr('id').split('_')[1]);
        console.log(x,y)
        if(x<6){
            if($(`#${x+1}_${y}`).length==1||$(`#${x+1}_${y+1}`).length==1){
                return;
            }
        }
        $(this).toggleClass('move')
        if(!current){
            if($(this).attr('value')==13){
                $(this).animate({
                    left:600,
                    top:20,
                    opacity:0,
                },400,function () {
                    $(this).remove()
                })
            }else{
                current=$(this)
            }
        }else{
            if(parseInt($(this).attr('value'))+parseInt(current.attr('value'))==13){
                $('.move').animate({
                    left:600,
                    top:20,
                    opacity:0,
                },400,function () {
                    $('.move').remove()
                    current=null
                })
            }else{
                setTimeout(function () {
                    $('.move').removeClass('move')
                    current=null
                },400)
            }
        }
    })
    indexs=1
    $('.right').click(function () {
        $('.zuo').last().removeClass('zuo').addClass('you').css('z-index',++indexs).animate({
            left:500
        })
    })
    $('.left').click(function () {
        $('.you').each(function (index) {
            $(this).removeClass('you').addClass('zuo').delay(index*40).animate({
                left:150
            }).css('z-index',++indexs)
        })
    })
})