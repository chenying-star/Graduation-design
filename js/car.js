/**
 * Created by User on 2017/3/3.
 */
var caiarr=[{img:'img/index/cai1.png',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,type:1},
    {img:'img/index/cai1.png',caiming:'肥肠面',price:12,dianpu:"重庆鱼火锅",tel:12345678912,type:1},
    {img:'img/index/cai1.png',caiming:'新春你最红A套餐',price:60,dianpu:"重庆鱼火锅",tel:12345678912,type:1},
    {img:'img/index/cai1.png',caiming:'经典莎朗牛排',price:46,dianpu:"重庆鱼火锅",tel:12345678912,type:1}
];
var tbody=document.getElementsByTagName("tbody")[0];
function sheng(){
    var tbodyinner="";
    if(caiarr.length==0){
        tbodyinner="<tr><td colspan='5'>购物车为空</td></tr>";
    }
    else{
        for(var i=0;i<caiarr.length;i++){
            tbodyinner +=  "<tr><td class='goods' style='width: 42%'><img src='"+ caiarr[i].img+"' alt=''/><span class='commond'>"+ caiarr[i].caiming+" 店铺："+caiarr[i].dianpu+"<br>TEL:"+ caiarr[i].tel+"</span></td>"+
                "<td class='price'>"+caiarr[i].price+"</td>"+
                "<td class='count'><span class='reduce'>-</span><input class='count-input' type='text' value='1'/><span class='add'>+</span></td>"+
                "<td class='subtotal'>"+caiarr[i].price+"</td>"+
                "<td class='operation'><span class='delete'>删除</span></td></tr>";
        }
    }
    tbody.innerHTML=tbodyinner;
}
sheng();
var reduce=document.getElementsByClassName("reduce");
var deleteq=document.getElementsByClassName("delete");
var price=document.getElementsByClassName("price");
var add=document.getElementsByClassName("add");
var countInput=document.getElementsByClassName("count-input");
var subtotal=document.getElementsByClassName("subtotal");
function cao(){
    for(var i=0;i<caiarr.length;i++){
        add[i].index=i;
        add[i].onclick= function () {
            countInput[this.index].value=parseInt(countInput[this.index].value)+1;
            subtotal[this.index].innerHTML=parseInt(price[this.index].innerHTML)*parseInt(countInput[this.index].value);
            zong();
        }

        reduce[i].index=i;
        reduce[i].onclick= function () {
            if(countInput[this.index].value==1){
                alert("最小数为1");return
            }
            countInput[this.index].value=parseInt(countInput[this.index].value)-1;
            subtotal[this.index].innerHTML=parseInt(price[this.index].innerHTML)*parseInt(countInput[this.index].value);
            zong()
        }

        deleteq[i].index=i;
        deleteq[i].onclick= function () {
            var r=confirm("是否删除该商品")
            if (r==true)
            {
                caiarr.shift(this.index+1,1);
                sheng();cao(); zong();
            }
            else
            {
                return;
            }
        }
    }
}
cao();

function  zong() {
    var selected=document.getElementById("selected").getElementsByTagName("span")[0];
    var priceTotal=document.getElementById("priceTotal");
    var totalsum=0;
    var totalmon=0;
    for(var i=0;i<caiarr.length;i++){
        totalsum+= parseInt(countInput[i].value);
        totalmon+=parseInt(countInput[i].value)*parseInt(price[i].innerHTML);
    }
    selected.innerHTML=totalsum;
    priceTotal.innerHTML=totalmon;
}
zong();

var closing=document.getElementsByClassName("closing")[0];
var dangtel=document.getElementsByClassName("dangtel")[0];
var addre=document.getElementsByClassName("addre")[0];
var alldingdan=[];
var dingdan=[];
clicksheng();
function clicksheng() {
    closing.onclick= function () {
        if(caiarr.length<=0){
            alert("购物车为空，请添加")
        }else{
            for(var i=0;i<caiarr.length;i++){
                dingdan.push(caiarr[i]);
                var countInput=document.getElementsByClassName("count-input");
                for(var j=0;j<dingdan.length;j++){
                    dingdan[j].sum=parseInt(countInput[j].value);
                    dingdan[j].addre=addre.value;
                    dingdan[j].dangtel=dangtel.value;
                }

            } console.log(dingdan);
            alldingdan.push(dingdan);console.log(alldingdan);




            if(addre.value!="" && dangtel.value!=""){
                var r=confirm("是否生成订单")
                if (r==true)

                {   addre.value="";
                    dangtel.value="";
                    caiarr=[];
                    sheng();zong();cao();clicksheng();
                }
                else
                {
                    return;
                }
            }else{
                alert("请输入地址和电话");
            }
        }



    }
}


var xiangqing=document.getElementById("xiangqing");
xiangqing.onclick= function () {
    shengdan();
    var qingjia=document.getElementsByClassName("qingjia");
    var shouhuo=document.getElementsByClassName("shouhuo");

    for(var j=0;j<shouhuo.length;j++){
        shouhuo[j].index=j;
        var turn=true;
        shouhuo[j].onclick= function () {
            if(turn){
               qingjia[this.index].style.height=200+"px";
                qingjia[this.index].style.opacity=1;
                var li=qingjia[this.index].getElementsByTagName("li")[0];
                var inp=qingjia[this.index].getElementsByTagName("input")[0];
                var textarea=qingjia[this.index].getElementsByTagName("textarea")[0];
                inp.onclick= function () {
                    li.innerHTML=textarea.value;
                    textarea.value="";
                }
            }else{
                qingjia[this.index].style.height=0+"px";
                qingjia[this.index].style.opacity=0;
            }
            turn=!turn;
        }
    }
}
function shengdan(){
    var date=new Date();
    var year=date.getFullYear();
    var mon=date.getMonth()+1;
    var day=date.getDate();
    var hourse=date.getHours();
    var minutes=date.getMinutes();
    var seond=date.getSeconds();
    if(hourse<10 ){
        hourse="0"+hourse;
    }
    if(minutes<10 ){
        minutes="0"+minutes;
    }
    if(seond<10 ){
        seond="0"+seond;
    }
    var mydate=year+"-"+mon+"-"+day+" "+hourse+":"+minutes+":"+seond;

    var thead=document.getElementsByTagName("thead")[0];
    thead.innerHTML= "<tr><th>商品</th><th>单价</th><th>数量</th><th>小计</th></tr>";

    var tbodyinner="";
    if(dingdan.length==0){
        tbodyinner="<tr><td colspan='5'>订单为空</td></tr>";
    }
    else{
        for(var i=0;i<dingdan.length;i++){
            tbodyinner +=  "<tr><td class='goods' style='width: 42%'><img src='"+ dingdan[i].img+"' alt=''/><span class='commond'>"+ dingdan[i].caiming+" 店铺："+dingdan[i].dianpu+"<br>TEL:"+ dingdan[i].tel+"</span></td>"+
                "<td class='price'>"+dingdan[i].price+"</td>"+
                "<td class='count'>"+ dingdan[i].sum +"</td>"+
                "<td class='subtotal'>"+dingdan[i].price*dingdan[i].sum+"</td>";
            dingdan[i].time=mydate;
            dingdan[i].owner="";//获取该用户登录名
        }
    }
    tbody.innerHTML=tbodyinner;

    var subtotal=document.getElementsByClassName("subtotal");
    var num=0;
    for(var i=0;i<dingdan.length;i++){
        num+=parseInt(subtotal[i].innerHTML);
    }


    tbody.innerHTML=tbodyinner+"<tr><td colspan='4'><div class='foot'style='width: 100%;margin-left: 0;'><div class='shouhuo'>确认收货/评论</div>"+
        "<div class='futime' style=''>订单生成时间："+ mydate +"</div>"+
        "<div class='total' style='right: 3% '>总付：￥<span id='priceTotal'>"+num +"</span></div></div>"+
        "<div class='qingjia'><form><ul><li></li></ul><textarea></textarea><br>"+
        "<input type='button' class='btn btn-primary' value='确认'></form></div></td></tr>";
    var foot=document.getElementById("foot");
    foot.style.display="none";

}


