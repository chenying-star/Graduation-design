/**
 * Created by User on 2017/2/16.
 */
var diandian=document.getElementById("diandian");
var caiarr=[
    {img:'',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,id:1},
    {img:'',caiming:'肥肠面',price:12,dianpu:"重庆鱼火锅",tel:12345678912,id:1},
    {img:'',caiming:'新春你最红A套餐',price:60,dianpu:"重庆鱼火锅",tel:12345678912,id:1},
    {img:'',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,id:2},
    {img:'',caiming:'肥肠面',price:12,dianpu:"重庆鱼火锅",tel:12345678912,id:2},
    {img:'',caiming:'新春你最红A套餐',price:60,dianpu:"重庆鱼火锅",tel:12345678912,id:3},
    {img:'',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,id:1},
    {img:'',caiming:'肥肠面',price:12,dianpu:"重庆鱼火锅",tel:12345678912,id:4},
    {img:'',caiming:'新春你最红A套餐',price:60,dianpu:"重庆鱼火锅",tel:12345678912,id:1}
];
var dianarr=[
    {img:'img/index/dian1.png',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:4,id:4,time:"10：00-21.25",address:"成都市郫县犀浦镇浦兴街224号",songtime:20},
    {img:'img/index/dian3.png',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:5,id:5,time:"10：00-21.25",address:"成都市郫县犀浦镇浦兴街224号",songtime:40},
    {img:'img/index/dian4.png',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:3,id:3,time:"10：00-21.25",address:"成都市郫县犀浦镇浦兴街224号",songtime:35},
    {img:'img/index/dian5.png',biaoti:'我家wfef',peisong:2,qisong:20,star:5,id:1,time:"10：00-21.25",address:"成都市郫县犀浦镇浦兴街224号",songtime:30}
];

var listxin=document.getElementsByClassName("listxin")[0];
var listh4=listxin.getElementsByTagName("h4")[0];
var listp1=listxin.getElementsByTagName("p")[0];
var listp2=listxin.getElementsByTagName("p")[1];
var dianleft=document.getElementById("dianleft");
var dianleftimg=dianleft.getElementsByTagName("img")[0];
var dianright=document.getElementById("dianright");
var dianrightspan=dianright.getElementsByTagName("span")[0];
var dianrightspan1=dianright.getElementsByTagName("span")[1];
var dianrightspan2=dianright.getElementsByTagName("span")[2];
var adress=window.location.search;
var idd=adress.substr(4,1);console.log(idd);
for(var i=0;i<dianarr.length;i++){
    if(dianarr[i].id==idd){
        dianleftimg.src=dianarr[i].img;
        listh4.innerHTML=dianarr[i].biaoti;
        listp1.innerHTML="营业时间："+dianarr[i].time;
        listp2.innerHTML="商家地址："+dianarr[i].address;
        dianrightspan.innerHTML=dianarr[i].songtime+"<span>平均送餐时间</span>";
        dianrightspan1.innerHTML=dianarr[i].qisong+"<span>起送</span>";
        dianrightspan2.innerHTML=dianarr[i].peisong+"<span>配送费</span>"
    }
}
//ajax得到所有菜品信息，让id值和页面获取的idd相等的push到一个新建数组中，即为diancai数组
var dangdiancai=[];
var cararr=[];
for(var i=0;i<caiarr.length;i++){
    if(idd==caiarr[i].id){
        dangdiancai.push(caiarr[i]);
    }
}
if(dangdiancai.length==0){
    diandian.innerHTML="没有菜品"
}else{
    page({
        id:"fenye",
        nownum:1,
        allnum:Math.ceil(dangdiancai.length/12),
        callback: function (now,all) {
            var num=now*12<dangdiancai.length?12:dangdiancai.length-(now-1)*12;

            function  fenzhonf() {

                for(var i=0;i<num;i++){

                    caiiner+= "<div class='col-sm-6 col-md-4 col-lg-3 col-xs-6 caia caia"+i+"' >"+
                        "<div class='thumbnail'>"+
                        "<img src='img/index/cai"+ ((now-1)*12+i+1) +".png' alt='...'>"+
                        "<div class='caption'>"+
                        "<p class='caixinxi'>"+ dangdiancai[(now-1)*12+i].caiming +"  <span class='jiaqian'>&yen"+dangdiancai[(now-1)*12+i].price +"/份</span>" +
                        "<br><a>店铺：" +dangdiancai[(now-1)*12+i].dianpu+"<br>Tel:"+ dangdiancai[(now-1)*12+i].tel+"</a> </p> "+
                        "</div></div></div>" ;
                }


                diandian.innerHTML=caiiner;

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
                        cararr.push(dangdiancai[h]);console.log(cararr);
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

            if(diandian.innerText==""){
                var  caiiner="";
                fenzhonf();addcar();
            }
            else{
                diandian.innerHTML="";
                var  caiiner="";
                fenzhonf();addcar();
            }
        }
    })
}

document.title=document.body.offsetWidth
