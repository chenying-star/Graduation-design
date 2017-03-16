/**
 * Created by User on 2017/3/5.
 */

/**
 * Created by User on 2017/2/20.
 */
var dianjia=document.getElementById("dianjia");
var dianbody=dianjia.getElementsByTagName("tbody")[0];
var caiccai=document.getElementById("caiccai");
var caibody=caiccai.getElementsByTagName("tbody")[0];
var dianarr=[
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:4,id:1},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:5,id:2},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:3,id:3},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:5,id:4,tel:111689,address:"lsdmvldv",time:222},
    {img:'',biaoti:'我家台湾餐厅',peisong:2,qisong:20,star:4,id:1}
];
var caiarr=[{img:'',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,id:1},
    {img:'',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,id:2},
    {img:'',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,id:3}
];
function  sheng() {

    var manageinner="";
    dianbody.innerHTML="";
    for(var i=0;i<dianarr.length;i++){
        manageinner+= "<tr>"+"<td><img style='width: 100px;height: 50px' src='"+dianarr[i].img  +"'></td>"+"<td>"+ dianarr[i].id +"</td>"+"<td>"+ dianarr[i].biaoti+"</td>"+"<td>"+ dianarr[i].tel+"</td>"+
            "<td>"+ dianarr[i].time+"</td>"+"<td>"+ dianarr[i].address+"</td>"+"<td>"+ dianarr[i].peisong+
            "</td>"+"<td>"+ dianarr[i].qisong+"</td>"+"<td>"+ dianarr[i].star+"</td>"+"<td class='shanchu'>删除</td>"+"</tr>";
    }
    dianbody.innerHTML="<tr>"+"<td>图片</td>"+"<td>编号</td>"+"<td>店名</td>"+"<td>电话</td>"+"<td>营业时间</td>"+"<td>地址</td>"+"<td>配送费</td>"+"<td>起送费</td>"+"<td>星级</td>"+"<td>操作</td>"+"</tr>"+manageinner;

    var caiiner="";
    caibody.innerHTML="";
    for(var i=0;i<caiarr.length;i++){
        caiiner+= "<tr>"+"<td><img style='width: 100px;height: 50px' src='"+caiarr[i].img  +"'></td>"+"<td>"+ caiarr[i].id +"</td>"+"<td>"+ caiarr[i].caiming+"</td>"+"<td>"+ caiarr[i].price+
            "</td>"+"<td>"+ caiarr[i].dianpu+"</td>"+"<td>"+ caiarr[i].tel+"</td>"+"<td class='shanchucai'>删除</td>"+"</tr>";
    }
    caibody.innerHTML="<tr>"+"<td>图片</td>"+"<td>所属店家标号</td>"+"<td>菜名</td>"+"<td>价格</td>"+"<td>所属店铺</td>"+"<td>电话</td>"+"<td>操作</td>"+"</tr>"+caiiner;
}

var shanchu=document.getElementsByClassName("shanchu");
var shanchucai=document.getElementsByClassName("shanchucai");
function shan(){
    for(var i=0;i<dianarr.length;i++){
        shanchu[i].index=i;
        shanchu[i].onclick= function () {
            var r=confirm("是否删除该推荐店家");
            if (r==true)
            {
                dianarr.splice(this.index,1);
                sheng();shan();
            }
            else
            {
                return;
            }
        };
    }

    for(var i=0;i<caiarr.length;i++){
        shanchucai[i].index=i;
        shanchucai[i].onclick= function () {
            var rr=confirm("是否删除该推荐菜品");
            if (rr==true)
            {
                caiarr.splice(this.index,1);
                sheng();shan();
            }
            else
            {
                return;
            }
        }
    }
}
sheng();
shan();

var dianadd=document.getElementById("dianadd");
var caiadd=document.getElementById("caiadd");
var zhezhao=document.getElementById("zhezhao");
var formm=document.getElementById("formm");
var zhezhao2=document.getElementById("zhezhao2");
var formmm=document.getElementById("formmm");
dianadd.onclick= function () {
    zhezhao.style.opacity=1;
    zhezhao.style.transform="translateX(0px)";
    zhezhao.style.height=580+"px";
};
caiadd.onclick= function () {

    zhezhao2.style.opacity=1;
    zhezhao2.style.transform="translateX(0px)";
    zhezhao2.style.height=500+"px";
//    zhezhao2.style.position="fixed";
};

var disp=document.getElementById("disp");
var disp2=document.getElementById("disp2");
disp.onclick= function () {
    zhezhao.style.opacity=0;
    zhezhao.style.transform="translateX(1250px)";
    zhezhao.style.height=0+"px";
    zhezhao.style.position="absolute";
    bianhao.value = "";
    dianming.value = "";
    peisong.value = "";
    qisong.value = "";
    star.value = "";
    time.value="";
    tel.value="";
    address.value="";
    tianjia.style.display="block";

}
disp2.onclick= function () {
    zhezhao2.style.opacity=0;
    zhezhao2.style.transform="translateX(1250px)";
    zhezhao2.style.height=0+"px";
    zhezhao2.style.position="absolute";

    biaohao.value="";
    tell.value="";
    caiming.value="";
    price.value="";
    store.value="";
    tianjia2.style.display="block";

}
function setImagePreviews2() {
    var docObj = document.getElementById("docc");
    var dd = document.getElementById("ddd");
    var fileList = docObj.files;
    var dizhi="";
    var imgObjPreview = document.getElementById("img1");
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
    fuzhifuzhi(dizhi);
}
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

function fuzhifuzhi(dizhi) {
    var tianjia2 = document.getElementById("tianjia2");
    var biaohao = document.getElementById("biaohao");
    var caiming = document.getElementById("caiming");
    var price = document.getElementById("price");
    var tell = document.getElementById("tell");
    var store = document.getElementById("store");
    tianjia2.onclick = function () {
        var tiancai = {};
        if (biaohao.value != "" && caiming.value != "" && price.value != "" && tell.value != "" && store.value != "") {
            tiancai.id = biaohao.value;
            tiancai.caiming = caiming.value;
            tiancai.price = price.value;
            tiancai.tel = tell.value;
            tiancai.dianpu = store.value;
            tiancai.img = dizhi;
            caiarr.push(tiancai);
            alert("添加成功");
            sheng();shan();

        } else {
            alert("请填写完整")
        }
    }
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
            sheng();shan();

        } else {
            alert("请填写完整")
        }
    }
}




