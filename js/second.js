/**
 * Created by User on 2017/2/15.
 */
var search=document.getElementById("search");
var basicaddon2=document.getElementById("basic-addon2");
basicaddon2.onclick= function () {
    location.href="search.html?c="+search.value+"&&a=cai";
}
var caiarr=[{img:'',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,type:1},
    {img:'',caiming:'肥肠面',price:12,dianpu:"重庆鱼火锅",tel:12345678912,type:1},
    {img:'',caiming:'新春你最红A套餐',price:60,dianpu:"重庆鱼火锅",tel:12345678912,type:1},
    {img:'',caiming:'经典莎朗牛排',price:46,dianpu:"重庆鱼火锅",tel:12345678912,type:1},
    {img:'',caiming:'棒棒鸡+海带丝',price:30,dianpu:"重庆鱼火锅",tel:12345678912,type:1},
    {img:'',caiming:'咖喱鸡肉饭',price:25,dianpu:"重庆鱼火锅",tel:12345678912,type:2},
    {img:'',caiming:'土耳其手撕鸡肉披萨',price:45,dianpu:"重庆鱼火锅",tel:12345678912,type:2},
    {img:'',caiming:'咖喱鸡肉饭',price:25,dianpu:"重庆鱼火锅",tel:12345678912,type:2},
    {img:'',caiming:'土耳其手撕鸡肉披萨',price:45,dianpu:"重庆鱼火锅",tel:12345678912,type:2},
    {img:'',caiming:'咖喱鸡肉饭',price:25,dianpu:"重庆鱼火锅",tel:12345678912,type:2},
    {img:'',caiming:'土耳其手撕鸡肉披萨',price:45,dianpu:"重庆鱼火锅",tel:12345678912,type:2},
    {img:'',caiming:'咖喱鸡肉饭',price:25,dianpu:"重庆鱼火锅",tel:12345678912,type:2},
    {img:'',caiming:'土耳其手撕鸡肉披萨',price:45,dianpu:"重庆鱼火锅",tel:12345678912,type:2},
    {img:'',caiming:'咖喱鸡肉饭',price:25,dianpu:"重庆鱼火锅",tel:12345678912,type:2},
    {img:'',caiming:'土耳其手撕鸡肉披萨',price:45,dianpu:"重庆鱼火锅",tel:12345678912,type:2},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:3},

    {img:'',caiming:'肥肠面',price:12,dianpu:"重庆鱼火锅",tel:12345678912,type:1},
    {img:'',caiming:'新春你最红A套餐',price:60,dianpu:"重庆鱼火锅",tel:12345678912,type:1},
    {img:'',caiming:'经典莎朗牛排',price:46,dianpu:"重庆鱼火锅",tel:12345678912,type:1},
    {img:'',caiming:'棒棒鸡+海带丝',price:30,dianpu:"重庆鱼火锅",tel:12345678912,type:1},
    {img:'',caiming:'咖喱鸡肉饭',price:25,dianpu:"重庆鱼火锅",tel:12345678912,type:1},
    {img:'',caiming:'土耳其手撕鸡肉披萨',price:45,dianpu:"重庆鱼火锅",tel:12345678912,type:1},
    {img:'',caiming:'水果蔬菜沙拉',price:13,dianpu:"重庆鱼火锅",tel:12345678912,type:1}
 ];
var arr1=[];
var arr2=[];
var arr3=[];
var cararr=[];
for(var i=0;i<caiarr.length;i++){
    if(caiarr[i].type==1){
        arr1.push(caiarr[i]);
    }else if(caiarr[i].type==2){
        arr2.push(caiarr[i]);
    }else{
        arr3.push(caiarr[i]);
    }
}
var cai=document.getElementById("cai");
var cai2=document.getElementById("cai2");
var cai3=document.getElementById("cai3");
var things=document.getElementsByClassName("thing")[0];


//分页开始
page({
    id:"fenye",
    nownum:1,
    allnum:Math.ceil(arr1.length/8),
    callback: function (now,all) {
        var num=now*8<arr1.length?8:arr1.length-(now-1)*8;

        function  fenzhonf() {

                for(var i=0;i<num;i++){

                    caiiner+= "<div class='col-sm-6 col-md-4 col-lg-3 col-xs-6 caia caia"+ ((now-1)*8+i+1)+"'  >"+
                        "<div class='thumbnail'>"+
                        "<img src='img/index/cai"+ ((now-1)*8+i+1) +".png' alt='...'>"+
                        "<div class='caption'>"+
                        "<p class='caixinxi'>"+ arr1[(now-1)*8+i].caiming +"  <span class='jiaqian'>&yen"+arr1[(now-1)*8+i].price +"/份</span>" +
                        "<br><a>店铺：" +arr1[(now-1)*8+i].dianpu+"<br>Tel:"+ arr1[(now-1)*8+i].tel+"</a> </p> "+
                        "</div></div></div>" ;

            cai.innerHTML=caiiner;
        }
        }

        function addcar() {
            var caia=document.getElementsByClassName("caia");
            for(var i=0;i<num;i++){
                caia[i].index=i;
                caia[i].onclick= function () {
                    var a=this.getAttribute("class");
                   var b= a.split(" ");
                    var c=b[b.length-1];
                    var f= c.split("");
                    var d= f.splice(4);
                    var h=parseInt(d.join("")) ;
                    cararr.push(arr1[h-1]);console.log(cararr);
                    var tanchu=document.getElementsByClassName("tanchu")[0];
                    tanchu.style.zIndex=100000;
                    tanchu.style.opacity=1;
                    setTimeout(function () {
                        tanchu.style.zIndex=-1;
                        tanchu.style.opacity=0;
                    },500);
                    this.onclick= function () {
                        alert("已加入购物车")
                    }
                }

            }
        }



        if(cai.innerText==""){
            var  caiiner="";
            fenzhonf();addcar()
        }
        else{
            cai.innerHTML="";
            var  caiiner="";
            fenzhonf();addcar()
        }
    }
});
page({
    id:"fenye2",
    nownum:1,
    allnum:Math.ceil(arr2.length/8),
    callback: function (now,all) {
        var num=now*8<arr2.length?8:arr2.length-(now-1)*8;

        function  fenzhonf() {

            for(var i=0;i<num;i++){

                caiiner+= "<div class='col-sm-6 col-md-4 col-lg-3 col-xs-6 guoa guoa"+ ((now-1)*8+i+1)+"' >"+
                    "<div class='thumbnail'>"+
                    "<img src='img/index/cai"+ ((now-1)*8+i+1) +".png' alt='...'>"+
                    "<div class='caption'>"+
                    "<p class='caixinxi'>"+ arr2[(now-1)*8+i].caiming +"  <span class='jiaqian'>&yen"+arr2[(now-1)*8+i].price +"/份</span>" +
                    "<br><a>店铺：" +arr2[(now-1)*8+i].dianpu+"<br>Tel:"+ arr2[(now-1)*8+i].tel+"</a> </p> "+
                    "</div></div></div>" ;
            }
            cai2.innerHTML=caiiner;
        }

        function addcar() {
            var guoa=document.getElementsByClassName("guoa");
            for(var i=0;i<num;i++){
                guoa[i].index=i;
                guoa[i].onclick= function () {
                    var a=this.getAttribute("class");
                    var b= a.split(" ");
                    var c=b[b.length-1];
                    var f= c.split("");
                    var d= f.splice(4);
                    var h=parseInt(d.join("")) ;
                    cararr.push(arr2[h-1]);console.log(cararr);
                    var tanchu=document.getElementsByClassName("tanchu")[0];
                    tanchu.style.zIndex=100000;
                    tanchu.style.opacity=1;
                    setTimeout(function () {
                        tanchu.style.zIndex=-1;
                        tanchu.style.opacity=0;
                    },500);
                    this.onclick= function () {
                        alert("已加入购物车")
                    }
                }

            }
        }

        if(cai2.innerText==""){
            var  caiiner="";
            fenzhonf();addcar()
        }
        else{
            cai2.innerHTML="";
            var  caiiner="";
            fenzhonf();addcar()
        }
    }
});
page({
    id:"fenye3",
    nownum:1,
    allnum:Math.ceil(arr3.length/8),
    callback: function (now,all) {
        var num=now*8<arr3.length?8:arr3.length-(now-1)*8;

        function  fenzhonf() {

            for(var i=0;i<num;i++){

                caiiner+= "<div class='col-sm-6 col-md-4 col-lg-3 col-xs-6 tiana tiana"+ ((now-1)*8+i+1)+"' >"+
                    "<div class='thumbnail'>"+
                    "<img src='img/index/cai"+ ((now-1)*8+i+1) +".png' alt='...'>"+
                    "<div class='caption'>"+
                    "<p class='caixinxi'>"+ arr3[(now-1)*8+i].caiming +"  <span class='jiaqian'>&yen"+arr3[(now-1)*8+i].price +"/份</span>" +
                    "<br><a>店铺：" +arr3[(now-1)*8+i].dianpu+"<br>Tel:"+ arr3[(now-1)*8+i].tel+"</a> </p> "+
                    "</div></div></div>" ;
            }
            cai3.innerHTML=caiiner;
        }

        function addcar() {
            var tiana=document.getElementsByClassName("tiana");
            for(var i=0;i<num;i++){
                tiana[i].index=i;
                tiana[i].onclick= function () {
                    var a=this.getAttribute("class");
                    var b= a.split(" ");
                    var c=b[b.length-1];
                    var f= c.split("");
                    var d= f.splice(5);
                    var h=parseInt(d.join("")) ;
                    cararr.push(arr3[h-1]);console.log(cararr);
                    var tanchu=document.getElementsByClassName("tanchu")[0];
                    tanchu.style.zIndex=100000;
                    tanchu.style.opacity=1;
                    setTimeout(function () {
                        tanchu.style.zIndex=-1;
                        tanchu.style.opacity=0;
                    },500);
                    this.onclick= function () {
                        alert("已加入购物车")
                    }
                }

            }
        }

        if(cai3.innerText==""){
            var  caiiner="";
            fenzhonf();addcar()
        }
        else{
            cai3.innerHTML="";
            var  caiiner="";
            fenzhonf();addcar()
        }
    }
});


