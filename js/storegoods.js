/**
 * Created by User on 2017/3/6.
 */
var dianjia=document.getElementById("dianjia");
var dianbody=dianjia.getElementsByTagName("tbody")[0];
var caiarr=[{img:'',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,id:1}
];
var shenhecai=[];
function  sheng() {
    var manageinner="";
    dianbody.innerHTML="";

    for(var i=0;i<caiarr.length;i++){
        manageinner+= "<tr>"+"<td><img style='width: 100px;height: 50px' src='"+caiarr[i].img  +"'></td>"+"<td>"+ caiarr[i].id +"</td>"+"<td>"+ caiarr[i].caiming+"</td>"+"<td>"+ caiarr[i].tel+"</td>"+
            "<td>"+ caiarr[i].price+"</td>"+"<td>"+ caiarr[i].dianpu+"</td>"+"<td class='xiugai'>修改/<span class='shanchu'>删除</span></td>"+"</tr>";
    }
    dianbody.innerHTML="<tr>"+"<td>图片</td>"+"<td>所属店铺编号</td>"+"<td>菜名</td>"+"<td>电话</td>"+"<td>价钱</td>"+"<td>所属店铺</td>"+"<td>操作</td>"+"</tr>"+manageinner;

}

var xiugai=document.getElementsByClassName("xiugai");
var shanchu=document.getElementsByClassName("shanchu");
var tianjia=document.getElementById("tianjia");
function xiugair(){
    for(var i=0;i<xiugai.length;i++){
        xiugai[i].index=i;
        xiugai[i].onclick= function () {
            var bianhao = document.getElementById("bianhao");
            var caiming = document.getElementById("caiming");
            var tel = document.getElementById("tel");
            var price = document.getElementById("price");
            var ownsotre = document.getElementById("ownsotre");

            zhezhao.style.opacity=1;
            zhezhao.style.transform="translateX(0px)";
            zhezhao.style.height=500+"px";
            zhezhao.style.position="fixed";
            tianjia.style.display="none";
            xiu.style.display="block";

            caiming.value=caiarr[this.index].caiming;
            bianhao.value=caiarr[this.index].id;
            tel.value=caiarr[this.index].tel;
            price.value=caiarr[this.index].price;
            ownsotre.value=caiarr[this.index].dianpu;
            var img=caiarr[this.index].img;
            var ddimg=document.getElementById("dd").getElementsByTagName("img")[0];
            ddimg.src=img;
            var sum=this.index;
            xiu.onclick=function(){

                caiarr[sum].caiming= caiming.value;
                caiarr[sum].id= bianhao.value;
                caiarr[sum].tel=tel.value;
                caiarr[sum].price=price.value;
                caiarr[sum].dianpu= ownsotre.value;
                var dddd=document.getElementById("dd").getElementsByTagName("img")[0];
                caiarr[sum].img=dddd.src;
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
            var r=confirm("是否删除该菜品");
            if (r==true)
            {
                caiarr.splice(this.index,1);
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
    zhezhao.style.height=500+"px";
};

var disp=document.getElementById("disp");
var xiu=document.getElementById("xiu");
addListener(disp,"click",function(){
    zhezhao.style.opacity=0;
    zhezhao.style.transform="translateX(1250px)";
    zhezhao.style.height=0+"px";
    zhezhao.style.position="absolute";
    bianhao.value = "";
    caiming.value = "";
    tel.value="";
    ownsotre.value="";
    price.value="";
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
    var caiming = document.getElementById("caiming");
    var tel = document.getElementById("tel");
    var price = document.getElementById("price");
    var ownsotre = document.getElementById("ownsotre");
    tianjia.onclick = function () {
        var tiandian = {};
        if (bianhao.value != "" && caiming.value != "" && bianhao.value!=""&&tel.value!=""&& price.value!=""&&ownsotre.value!="") {
            tiandian.caiming = caiming.value;
            tiandian.id = bianhao.value;
            tiandian.tel = tel.value;
            tiandian.price = price.value;
            tiandian.dianpu = ownsotre.value;
            tiandian.img = dizhi;
            shenhecai.push(tiandian);
            alert("添加成功,请等待审核");

        } else {
            alert("请填写完整")
        }
    }
}






