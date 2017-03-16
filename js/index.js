/**
 * Created by User on 2017/2/15.
 */
var search=document.getElementById("search");
var basicaddon2=document.getElementById("basic-addon2");
basicaddon2.onclick= function () {
    location.href="search.html?c="+search.value+"&&a=cai";
}
//获取html
var html = document.documentElement;
//设置html的字体大小 = 可视区的宽度 / 15
html.style.fontSize = html.clientWidth / 15 + 'px';
//阻止pc和浏览器默认行为。
//    document.addEventListener('touchstart',function(ev){
//        ev.preventDefault();
//    });
//轮播开始
var wrap = document.getElementsByClassName("wrap")[0];
var list = wrap.getElementsByClassName("list")[0];
var yuan = wrap.getElementsByClassName("yuan")[0];
var  w = wrap.clientWidth;
var arr=["img.jpg","img2.jpg","img3.jpg","img4.jpg"];
list.style.width=w*arr.length+"px";
var num=0;
var li="";
var btn="";
for(var i=0;i<arr.length;i++){
    li+="<li><img src='./img/index/"+arr[i]+"' ></li>";
    btn+="<a></a>";
}
list.innerHTML=li;
yuan.innerHTML=btn;
var yuandian=yuan.getElementsByTagName("a");
var listli=list.getElementsByTagName("li");
yuandian[0].className="active";
var disX = 0;//按下的坐标
  var  chaju = 0;
for(var i=0;i<arr.length;i++){
    yuandian[i].index=i;
    listli[i].index=i;
if( html.clientWidth<770){
    yuandian[i].addEventListener("touchstart" , function () {
        for(var j=0;j<arr.length;j++){
            yuandian[j].className="";
        }
        this.className="active";
        num=this.index;
        list.style.transform="translate("+num *(-w) +"px)";
    },false)

    listli[i].addEventListener('touchstart',start);
    listli[i].addEventListener('touchmove',move);
    listli[i].addEventListener('touchend',end);
    function start(ev){
        var e = ev.changedTouches[0];
        disX = e.pageX;
    }
    function move(ev){
        var e = ev.changedTouches[0];
        chaju=e.pageX - disX
    }
    function end(){
        clearInterval(titi);
        if(chaju <0){
            if(num==arr.length-1){
                num=-1
            }
            num++;
            for(var j=0;j<arr.length;j++){
                yuandian[j].className="";
            }
            yuandian[num].className="active";
            list.style.transform="translate("+num *(-w) +"px)";
        }else{
            if(num==0){
                num=arr.length;
            }
            num--;
            for(var j=0;j<arr.length;j++){
                yuandian[j].className="";
            }
            yuandian[num].className="active";
            list.style.transform="translate("+num *(-w) +"px)";
        }
        lunbo();
    }


}else {
    yuandian[i].onclick = function () {
        for (var j = 0; j < arr.length; j++) {
            yuandian[j].className = "";
        }
        this.className = "active";
        num = this.index;
        list.style.transform = "translate(" + num * (-w) + "px)";
    }

}
}
lunbo();
var titi;
function lunbo() {
     titi=setInterval(function () {
        if(num==arr.length-1){
            num=-1;
        }
        for(var j=0;j<arr.length;j++){
            yuandian[j].className="";
        }
        num++;
        list.style.transform="translate("+ num*(-w) +"px)";
        yuandian[num].className="active";

    },4000)
}

//轮播结束

//菜单推荐开始
var cararr=[];
var cai=document.getElementById("cai");
var caiiner="";
var caiarr=[{img:'',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,id:1},
    {img:'',caiming:'肥肠面',price:12,dianpu:"重庆鱼火锅",tel:12345678912,id:1},
    {img:'',caiming:'新春你最红A套餐',price:60,dianpu:"重庆鱼火锅",tel:12345678912},
    {img:'',caiming:'经典莎朗牛排',price:46,dianpu:"重庆鱼火锅",tel:12345678912},
    {img:'',caiming:'棒棒鸡+海带丝',price:30,dianpu:"重庆鱼火锅",tel:12345678912},
    {img:'',caiming:'咖喱鸡肉饭',price:25,dianpu:"重庆鱼火锅",tel:12345678912},
    {img:'',caiming:'土耳其手撕鸡肉披萨',price:45,dianpu:"重庆鱼火锅",tel:12345678912},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912}

];

    for(var i=0;i<caiarr.length;i++){
        caiiner+= "<div class='col-sm-6 col-md-4 col-lg-3 col-xs-6 caia caia"+i+"'>"+
            "<div class='thumbnail'>"+
            "<img src='img/index/cai"+ (i+1) +".png' alt='...'>"+
            "<div class='caption'>"+
            "<p class='caixinxi'>"+ caiarr[i].caiming+"  <span class='jiaqian'>&yen"+caiarr[i].price +"/份</span> "+
            "<br><a href='dianpu.html?id="+ caiarr[i].id +"' >店铺：" +caiarr[i].dianpu+"<br>Tel:"+ caiarr[i].tel+"</a> </p> "+
            "</div></div></div>" ;
    }

cai.innerHTML=caiiner;
var caia=document.getElementsByClassName("caia");
for(var i=0;i<caia.length;i++) {
    caia[i].index = i;
    caia[i].onclick = function () {
        var a = this.getAttribute("class");
        var b = a.split(" ");
        var c = b[b.length - 1];
        var f = c.split("");
        var d = f.splice(4);
        var h = parseInt(d.join(""));
        cararr.push(caiarr[h]);
        this.onclick = function () {
            alert("已加入购物车")
        }

        var tanchu = document.getElementsByClassName("tanchu")[0];
        tanchu.style.zIndex = 100000;
        tanchu.style.opacity = 1;
        setTimeout(function () {
            tanchu.style.zIndex = -1;
            tanchu.style.opacity = 0;
        }, 500);
    }
}
//菜单推荐结束

//店家推荐开始
var dianjia=document.getElementById("dianjia");
var dianjiainner="";
var dianarr=[{img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,id:1},
             {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,id:2},
             {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,id:3},
             {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,id:4}];
for(var i=0;i<dianarr.length;i++){
    dianjiainner+= "<a href='dianpu.html?id="+(i+1)+"'><div class='col-sm-6 col-md-4 col-lg-3 col-xs-6 ' >"+
        "<div class='thumbnail'>"+
        "<img src='img/index/dian"+ (i+1) +".png' alt='...'>"+
        "<div class='caption'>"+
        "<h3>"+ dianarr[i].biaoti  +"</h3>"+
        "<p class='xingp'>配送费  &yen"+ dianarr[i].peisong+"&nbsp 起送  &yen"+ dianarr[i].qisong+"</p> "+
        "</div></div></div></a>" ;

}
dianjia.innerHTML=dianjiainner;

//店家推荐结束

//公告轮播开始
var news=[{content:"公告1",time:"2017-2-22",yonghu:"aaa"},{content:"公告2",time:"2017-2-22",yonghu:"aaa"},{content:"公告3",time:"2017-2-22",yonghu:"aaa"},
    {content:"公告4",time:"2017-2-22",yonghu:"aaa"},{content:"公告5",time:"2017-2-22",yonghu:"aaa"},{content:"公告6",time:"2017-2-22",yonghu:"aaa"},
    {content:"公告7",time:"2017-2-22",yonghu:"aaa"},{content:"公告8",time:"2017-2-22",yonghu:"aaa"},{content:"公告9",time:"2017-2-22",yonghu:"aaa"},
    {content:"公告10",time:"2017-2-22",yonghu:"aaa"},{content:"公告11",time:"2017-2-22",yonghu:"aaa"},{content:"公告12",time:"2017-2-22",yonghu:"aaa"},
    {content:"公告13",time:"2017-2-22",yonghu:"aaa"},{content:"公告14",time:"2017-2-22",yonghu:"aaa"},
    {content:"公告15",time:"2017-2-22",yonghu:"aaa"}];
if(news.length/2==0){

}else{
    var ff={content:"...",time:"...",yonghu:"..."};
    news.push(ff);
}
var ull=document.getElementById('ull');
function gongnews() {
    var gong="";
    for(var i=0;i<=news.length/2+5;i++){
        if(i==0){
            gong += "<li><div><p>" + news[i].content + "<span>" + news[i].time + "("+ news[i].yonghu +")</span></p><p>" + news[i + 1].content + "<span>" + news[i + 1].time +"("+ news[i+1].yonghu +")</span></p></div></li>";

        }else {i++
            gong += "<li><div><p>" + news[i].content + "<span>" + news[i].time +"("+ news[i].yonghu +")</span></p><p>" + news[i + 1].content + "<span>" + news[i + 1].time + "("+ news[i+1].yonghu +")</span></p></div></li>";
        }
    }
    ull.innerHTML=gong;
}
gongnews();
var divv=ull.getElementsByTagName('div');
var pp=ull.getElementsByTagName("p");
var advice=document.getElementById("advice").getElementsByTagName("textarea")[0];
var qradvice=document.getElementById("qradvice");
qradvice.onclick= function () {
    var newa={};
    var date=new Date();
    var year=date.getFullYear();
    var mon=date.getMonth()+1;
    var day=date.getDate();
    var mydate=year+"-"+mon+"-"+day;
    newa.content=advice.value;
    newa.time=mydate;
    newa.yonghu="";
    news.unshift(newa);
    gongnews();
    alert("提交成功");
    advice.value="";
}
var time=null;
var now=0;
var btnb=true;
setInterval(change,4000)
function change(){
    time=setInterval(function(){

        if(now==divv.length){
            clearInterval(time);
            now=0;
            btnb=!btnb;
        }
        else if(btnb){
            startMove(divv[now],{top:0});
            now+=1;
        }
        else{
            startMove(divv[now],{top:-30});
            now+=1;
        }

    },200);
}

//公告插件
function startMove(obj,json,endFn){

    clearInterval(obj.timer);

    obj.timer = setInterval(function(){

        var bBtn = true;

        for(var attr in json){

            var iCur = 0;

            if(attr == 'opacity'){
                if(Math.round(parseFloat(getStyle(obj,attr))*100)==0){
                    iCur = Math.round(parseFloat(getStyle(obj,attr))*100);

                }
                else{
                    iCur = Math.round(parseFloat(getStyle(obj,attr))*100) || 100;
                }
            }
            else{
                iCur = parseInt(getStyle(obj,attr)) || 0;
            }

            var iSpeed = (json[attr] - iCur)/20;
            iSpeed = iSpeed >0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if(iCur!=json[attr]){
                bBtn = false;
            }

            if(attr == 'opacity'){
                obj.style.filter = 'alpha(opacity=' +(iCur + iSpeed)+ ')';
                obj.style.opacity = (iCur + iSpeed)/100;

            }
            else{
                obj.style[attr] = iCur + iSpeed + 'px';
            }


        }

        if(bBtn){
            clearInterval(obj.timer);

            if(endFn){
                endFn.call(obj);
            }
        }

    },30);

}


function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
}
//公告轮播结束

var oDiv2 = document.getElementById('div2');
var oDiv3 = document.getElementById('div3');

var r = 4;
var L2 = 150;
var T2 = 33;
var L3 = 165;
var T3 = 33;

document.onmousemove = function(ev){
    var ev = ev || window.event;

    change(oDiv2,ev.clientX,ev.clientY,L2,T2);
    change(oDiv3,ev.clientX,ev.clientY,L3,T3);

    function change(obj,x,y,l,t){

        var changeX = 0;
        var changeY = 0;

        var b = Math.abs( x - (obj.offsetLeft + obj.parentNode.offsetLeft) );
        var a = Math.abs( y - (obj.offsetTop + obj.parentNode.offsetTop) );

        if( x > obj.offsetLeft + obj.parentNode.offsetLeft && y < obj.offsetTop + obj.parentNode.offsetTop ){   //右上

            changeX = Math.sin(Math.atan(b/a)) * r;
            changeY = Math.cos(Math.atan(b/a)) * -r;

        }
        else if(x > obj.offsetLeft + obj.parentNode.offsetLeft && y > obj.offsetTop + obj.parentNode.offsetTop){   //右下

            changeX = Math.sin(Math.atan(b/a)) * r;
            changeY = Math.cos(Math.atan(b/a)) * r;

        }
        else if(x < obj.offsetLeft + obj.parentNode.offsetLeft && y > obj.offsetTop + obj.parentNode.offsetTop){   //左下
            changeX = Math.sin(Math.atan(b/a)) * -r;
            changeY = Math.cos(Math.atan(b/a)) * r;
        }
        else if(x < obj.offsetLeft + obj.parentNode.offsetLeft && y < obj.offsetTop + obj.parentNode.offsetTop){   //左上

            changeX = Math.sin(Math.atan(b/a)) * -r;
            changeY = Math.cos(Math.atan(b/a)) * -r;

        }

        obj.style.left = l + changeX + 'px';
        obj.style.top = t + changeY + 'px';

    }

};

var balll=document.getElementById("balll");

var hat=document.getElementById("hat");
var timer = null;
var iSpeed = -10;
var iSpeedX = 18;
var search=document.getElementById("search");
search.onfocus= function () {
    movee();
}
search.onblur= function () {
   balll.style.top=0+"px";
   balll.style.left=200+"px";
}
function movee(){
    clearInterval(timer);
    timer = setInterval(function(){

        iSpeed += 3;

        var T = balll.offsetTop + iSpeed;

        if(T > 150){
            T =150;
            iSpeed *= -1;

            iSpeed *= 0.75;

            iSpeedX *= 0.75;

        }

if(hat.offsetLeft-balll.offsetLeft<=20){
    clearInterval(timer);
    hat.style.transformOrigin="center";
    hat.style.transform="rotate(150deg)";

}
        balll.style.top = T + 'px';

        balll.style.left = balll.offsetLeft + iSpeedX + 'px';

    },30);
}
