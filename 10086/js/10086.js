window.onload = function () {


    //banner
    let ban = document.querySelector('.banner');
    let li = ban.querySelectorAll('li');
    let cir = ban.querySelectorAll('.circle1');
    let width = parseInt(window.getComputedStyle(ban, null).width)
    // console.log(width)
    let left = ban.querySelector('.left')
    let right = ban.querySelector('.right')
    let now = 0;
    let next = 0;
    let flag = true;

    function move(fx='right') {
        if (fx == 'right') {
            if (flag) {
                flag = false;
                next = now + 1;
                if (next >= li.length) {
                    next = 0
                }
                li[next].style.left = '100%';
                animate(li[now], {left: -width}, 500)
                animate(li[next], {left: 0}, 500, function () {
                    flag = true;
                })
            }
        }
        if (fx == 'left') {
            if (flag) {
                flag = false
                next = now - 1;
                if (next < 0) {
                    next = li.length - 1
                }
                li[next].style.left = '-100%';
                animate(li[now], {left: width}, 500)
                animate(li[next], {left: 0}, 500, function () {
                    flag = true;
                })
            }

        }
        for (let i = 0; i < li.length; i++) {
            cir[i].classList.remove('pink')
        }
        cir[next].classList.add('pink')
        now = next;
    }

    let t = setInterval(move, 4000);
    ban.onmousemove = function () {
        clearInterval(t)
    }
    ban.onmouseout = function () {
        t = setInterval(move, 4000)
    }
    right.onclick = function () {
        move()
    }
    left.onclick = function () {
        move(fx = 'left')
    }


    let deng;
    cir.forEach(function (value, index) {
        value.onclick = function () {
            deng = setTimeout(function () {
                if (index > now) {
                    li[index].style.left = '100%';
                    animate(li[now], {left: -width}, 500)
                    animate(li[index], {left: 0}, 500)
                } else if (index < now) {
                    li[index].style.left = '-100%';
                    animate(li[now], {left: width}, 500)
                    animate(li[index], {left: 0}, 500)
                }
                for (let i = 0; i < li.length; i++) {
                    cir[i].classList.remove('pink')
                }
                cir[index].classList.add('pink')
                now = index;
            }, 200)
        }
        value.onmouseout = function () {
            clearTimeout(deng)
        }
    })


    // 4格轮播
    let box3 = document.querySelector('.box3')
    let scroll4 = document.querySelector('.scroll');
    let li3s = scroll4.querySelectorAll('li');
    let widths = (parseInt(window.getComputedStyle(li3s[0], null).width) + parseInt(window.getComputedStyle(li3s[0], null).marginRight))
    let left4 = document.querySelector('.box3 > .left')
    let right4 = document.querySelector('.box3 > .right')
    let t4;
    let flag4 = true;

    function scroll4s() {
        if (flag4) {
            animate(scroll4, {left: -widths}, 500, function () {
                let first = scroll4.firstElementChild;
                scroll4.appendChild(first);
                scroll4.style.left = '0';
            });
        } else {
            scroll4.style.left = -widths + 'px';
            let first = scroll4.firstElementChild;
            let last = scroll4.lastElementChild;
            scroll4.insertBefore(last, first);
            animate(scroll4, {left: 0}, 500)
        }

    }

    t4 = setInterval(scroll4s, 3000)
    box3.onmousemove = function () {
        clearInterval(t4);
    }
    box3.onmouseout = function () {
        t4 = setInterval(scroll4s, 3000)
    }
    right4.onclick = function () {
        flag4 = true;
        scroll4s();
    };
    left4.onclick = function () {
        flag4 = false;
        scroll4s()
    }


    //banner上面的东西
    let top = document.querySelector('.top');
    let tops = top.querySelectorAll('.top2');
    let topul = top.querySelectorAll('.top2 > ul');
    let topdiv = top.querySelectorAll('.top2 > .jiao');
    // console.log(topdiv);
    tops.forEach(function (value, index) {
        value.onmouseover = function () {
            for (let i = 0; i < tops.length; i++) {
                topul[i].style.display = 'none';
                topdiv[i].style.display = 'none';
            }
            topul[index].style.display = 'block';
            topdiv[index].style.display = 'block';
        };
        value.onmouseout = function () {
            for (let i = 0; i < tops.length; i++) {
                topul[i].style.display = 'none';
                topdiv[i].style.display = 'none';
            }
        }
    });


    //最上面
    let topa = document.querySelectorAll('.fh')
    let topdivs = document.querySelectorAll('.fh > div')
    topa.forEach(function (value, index) {
        value.onmouseover = function () {
            for (let i = 0; i < 2; i++) {
                topdivs[i].style.display = 'none'
            }
            topdivs[index].style.display = 'block'
        }
        value.onmouseout = function () {
            for (let i = 0; i < 2; i++) {
                topdivs[i].style.display = 'none'
            }
        }
    })

    //城市
    let city = document.querySelector('.city');
    let many = document.querySelector('.manycity');
    city.onclick = function () {

    }
    document.onclick = function (e) {
        let obj = e.target;
        if (obj.innerHTML == "太原" || obj.className == 'xiaosanjiao' || obj.className == 'city') {
            many.style.display = 'block'
            // console.log(obj)
        } else {
            many.style.display = 'none'
        }
    }

    //公告
    let as = document.querySelectorAll('.a');
    let a1 = as[0].querySelectorAll('a');
    let a2 = as[1].querySelectorAll('a');
    let biaoti = document.querySelectorAll('.biaoti--');
    let biaoti1 = [biaoti[0], biaoti[1], biaoti[2]]
    let biaoti2 = [biaoti[3], biaoti[4], biaoti[5]]
    let lefta = document.querySelector('.last > a');
    let righta = document.querySelector('.last > a:nth-child(2)');
    let x = 0
    let g;
    // console.log(a1, a2, biaoti1, biaoti2)
    function gg(fx='right') {
        if (fx == 'left') {
            x++
            if (x >= a1.length) {
                x = 0
            }
        }
        if (fx == 'right') {
            x--
            if (x < 0) {
                x = a1.length - 1
            }
        }
        for (let i = 0; i < a1.length; i++) {
            a1[i].classList.remove('hi')
            a2[i].classList.remove('hi')
            biaoti1[i].classList.remove('hi')
            biaoti2[i].classList.remove('hi')
        }
        a1[x].classList.add('hi')
        a2[x].classList.add('hi')
        biaoti1[x].classList.add('hi')
        biaoti2[x].classList.add('hi')
    }

    g = setInterval(gg, 3000);
    lefta.onclick = function () {
        gg('left')
    }
    righta.onclick = function () {
        gg()
    }
    lefta.onmouseover = function () {
        clearInterval(g);
    }
    righta.onmouseover = function () {
        clearInterval(g);
    }
    lefta.onmouseout = function () {
        g = setInterval(gg, 3000);
    }
    righta.onmouseout = function () {
        g = setInterval(gg, 3000);
    }

}