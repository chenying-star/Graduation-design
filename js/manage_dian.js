/**
 * Created by User on 2017/2/20.
 */
var dianjia=document.getElementById("dianjia");
var dianbody=dianjia.getElementsByTagName("tbody")[0];
var dianarr=[
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:4,id:1},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:5,id:2},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:3,id:3},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:5,id:4,tel:111689,address:"lsdmvldv",time:222},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:4,id:1},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:5,id:2},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:3,id:3},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:5,id:4},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:4,id:1},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:5,id:2},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:3,id:3},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:5,id:4},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:4,id:1},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:5,id:2},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:3,id:3},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:5,id:4},
];
function  sheng() {
    var manageinner="";
    dianbody.innerHTML="";

    for(var i=0;i<dianarr.length;i++){
        manageinner+= "<tr>"+"<td><img style='width: 100px;height: 50px' src='"+dianarr[i].img  +"'></td>"+"<td>"+ dianarr[i].id +"</td>"+"<td>"+ dianarr[i].biaoti+"</td>"+"<td>"+ dianarr[i].tel+"</td>"+
            "<td>"+ dianarr[i].time+"</td>"+"<td>"+ dianarr[i].address+"</td>"+"<td>"+ dianarr[i].peisong+
            "</td>"+"<td>"+ dianarr[i].qisong+"</td>"+"<td>"+ dianarr[i].star+"</td>"+"<td class='xiugai'>修改/<span class='shanchu'>删除</span></td>"+"</tr>";
    }
    dianbody.innerHTML="<tr>"+"<td>图片</td>"+"<td>编号</td>"+"<td>店名</td>"+"<td>电话</td>"+"<td>营业时间</td>"+"<td>地址</td>"+"<td>配送费</td>"+"<td>起送费</td>"+"<td>星级</td>"+"<td>操作</td>"+"</tr>"+manageinner;

}

var xiugai=document.getElementsByClassName("xiugai");
var shanchu=document.getElementsByClassName("shanchu");
var tianjia=document.getElementById("tianjia");
function xiugair(){
    for(var i=0;i<xiugai.length;i++){
        xiugai[i].index=i;
        xiugai[i].onclick= function () {
            var bianhao = document.getElementById("bianhao");
            var dianming = document.getElementById("dianming");
            var peisong = document.getElementById("peisong");
            var qisong = document.getElementById("qisong");
            var star = document.getElementById("star");
            var tel = document.getElementById("tel");
            var time = document.getElementById("time");
            var address = document.getElementById("address");

            zhezhao.style.opacity=1;
            zhezhao.style.transform="translateX(0px)";
            zhezhao.style.height=650+"px";
            zhezhao.style.position="fixed";
            tianjia.style.display="none";
            xiu.style.display="block";

            dianming.value=dianarr[this.index].biaoti;
            peisong.value=dianarr[this.index].peisong;
            qisong.value=dianarr[this.index].qisong;
            star.value=dianarr[this.index].star;
            bianhao.value=dianarr[this.index].id;
            tel.value=dianarr[this.index].tel;
            time.value=dianarr[this.index].time;
            address.value=dianarr[this.index].address;
            var img=dianarr[this.index].img;
            var ddimg=document.getElementById("dd").getElementsByTagName("img")[0];
            ddimg.src=img;
            var sum=this.index;
            xiu.onclick=function(){
//                var bianhao = document.getElementById("bianhao");
//                var dianming = document.getElementById("dianming");
//                var peisong = document.getElementById("peisong");
//                var qisong = document.getElementById("qisong");
//                var star = document.getElementById("star");
//                var tel = document.getElementById("tel");
//                var time = document.getElementById("time");
//                var address = document.getElementById("address");
                dianarr[sum].biaoti= dianming.value;
                dianarr[sum].peisong=peisong.value;
                dianarr[sum].qisong=qisong.value;
                dianarr[sum].star=star.value;
                dianarr[sum].id= bianhao.value;
                dianarr[sum].tel=tel.value;
                dianarr[sum].time=time.value;
                dianarr[sum].address= address.value;
                var dddd=document.getElementById("dd").getElementsByTagName("img")[0];
                dianarr[sum].img=dddd.src;
                alert("修改成功");
                sheng();shan();xiugair();
            }

        }


    }
}
function shan(){
    for(var i=0;i<shanchu.length;i++){
        shanchu[i].index=i;
        shanchu[i].onclick= function () {
            stopBubble(this);
            function stopBubble(e) {
                if ( e && e.stopPropagation ) {
                    e.stopPropagation();
                } else {
                    window.event.cancelBubble = true;
                }
            }
            var r=confirm("是否删除该店家");
            if (r==true)
            {
                dianarr.splice(this.index,1);
                sheng();shan();xiugair();
            }
            else
            {
                return;
            }
        }
    }

}

sheng();
shan();xiugair();
function addListener(element,e,fn){
    if(element.addEventListener){
        element.addEventListener(e,fn,false);
    } else {
        element.attachEvent("on" + e,fn);
    }
}
var dianadd=document.getElementById("dianadd");
var zhezhao=document.getElementById("zhezhao");
dianadd.onclick= function () {
    zhezhao.style.opacity=1;
    zhezhao.style.transform="translateX(0px)";
    zhezhao.style.height=650+"px";
};

var disp=document.getElementById("disp");
var xiu=document.getElementById("xiu");
addListener(disp,"click",function(){
    zhezhao.style.opacity=0;
    zhezhao.style.transform="translateX(1250px)";
    zhezhao.style.height=0+"px";
    zhezhao.style.position="absolute";
    bianhao.value = "";
    dianming.value = "";
    peisong.value = "";
    qisong.value = "";
    star.value = "";
    tel.value="";
    address.value="";
    address.value="";
    tianjia.style.display="block";
    xiu.style.display="none";
});



function setImagePreviews() {
    var docObj = document.getElementById("doc");
    var dd = document.getElementById("dd");
    var fileList = docObj.files;
    var dizhi="";
    var imgObjPreview = document.getElementById("img0");
    for (var i = 0; i < fileList.length; i++) {
//        dd.innerHTML = "<div style='float:left' > <img id='img" + i + "'  /> </div>";
//        var imgObjPreview = document.getElementById("img"+i);
        if (docObj.files && docObj.files[i]) {

            //火狐下，直接设img属性

            imgObjPreview.style.display = 'block';

            imgObjPreview.style.width = '100px';

            imgObjPreview.style.height = '100px';

            //imgObjPreview.src = docObj.files[0].getAsDataURL();

            //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式

            dizhi= imgObjPreview.src = window.URL.createObjectURL(docObj.files[i]);

        }
        else {

            //IE下，使用滤镜

            docObj.select();

            var imgSrc = document.selection.createRange().text;


            var localImagId = document.getElementById("img" + i);

            //必须设置初始大小

            localImagId.style.width = "100px";

            localImagId.style.height = "100px";

            //图片异常的捕捉，防止用户修改后缀来伪造图片

            try {

                localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";

                localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;

            }

            catch (e) {

                alert("您上传的图片格式不正确，请重新选择!");

                return false;

            }

            imgObjPreview.style.display = 'none';

            document.selection.empty();

        }
    }
    fuzhi(dizhi);
}

function fuzhi(dizhi) {
    var tianjia = document.getElementById("tianjia");
    var bianhao = document.getElementById("bianhao");
    var dianming = document.getElementById("dianming");
    var peisong = document.getElementById("peisong");
    var qisong = document.getElementById("qisong");
    var star = document.getElementById("star");
    var tel = document.getElementById("tel");
    var time = document.getElementById("time");
    var address = document.getElementById("address");
    tianjia.onclick = function () {
        var tiandian = {};
        if (bianhao.value != "" && dianming.value != "" && peisong.value != "" && qisong.value != "" && star.value != "") {
            tiandian.biaoti = dianming.value;
            tiandian.peisong = peisong.value;
            tiandian.qisong = qisong.value;
            tiandian.star = star.value;
            tiandian.id = bianhao.value;
            tiandian.tel = tel.value;
            tiandian.time = time.value;
            tiandian.address = address.value;
            tiandian.img = dizhi;
            dianarr.push(tiandian);
            alert("添加成功");
            sheng();xiugair();shan();

        } else {
            alert("请填写完整")
        }
    }
}




