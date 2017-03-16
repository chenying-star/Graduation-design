/**
 * Created by User on 2017/2/18.
 */
var managearr=[{name:"陈莹",ps:123456},{name:"付描",ps:55555},{name:"涂永攀",ps:233333}];
var manage=document.getElementById("manage");
var managebody=manage.getElementsByTagName("tbody")[0];

function  sheng() {
    var manageinner="";
    managebody.innerHTML="";

        for(var i=0;i<managearr.length;i++){
            manageinner+= "<tr>"+"<td>"+ managearr[i].name +"</td>"+"<td>"+ managearr[i].ps+"</td>"+"<td class='shanchu'>删除</td>"+"</tr>";
        }
    managebody.innerHTML="<tr>"+"<td>账号</td>"+"<td>密码</td>"+"<td>操作</td>"+"</tr>"+manageinner;
    var shanchu=document.getElementsByClassName("shanchu");
    for(var i=0;i<shanchu.length;i++){
        shanchu[i].index=i;
        shanchu[i].onclick= function () {
            var r=confirm("是否删除该管理员")
            if (r==true)
            {
                managearr.splice(this.index,1);
                sheng();
            }
            else
            {
               return;
            }
        }
    }
}
sheng();




var manageadd=document.getElementById("manageadd");
var zhezhao=document.getElementById("zhezhao");
manageadd.onclick= function () {
    zhezhao.style.opacity=1;
    zhezhao.style.transform="translateX(0px)";
    zhezhao.style.height=500+"px";
};
var disp=document.getElementById("disp");
addListener(disp,"click",function(){
    zhezhao.style.opacity=0;
    zhezhao.style.transform="translateX(1250px)";
    zhezhao.style.height=0+"px";
});

var zhanghao=document.getElementById("zhanghao");
var password1=document.getElementById("password1");
var password2=document.getElementById("password2");
var zhu=document.getElementById("zhu");

function addListener(element,e,fn){
    if(element.addEventListener){
        element.addEventListener(e,fn,false);
    } else {
        element.attachEvent("on" + e,fn);
    }
}


addListener(zhu,"click",function() {
    var tianjiaarr={};
    if (zhanghao.value != "" && password1.value != "" && password2.value != "") {
        if (password1.value == password2.value) {
            for (var i = 0; i < managearr.length; i++) {
                if (managearr[i].name == zhanghao.value) {
                    alert("用户名被占用");
                    return
                }
            }
            tianjiaarr.name = zhanghao.value;
            tianjiaarr.ps = password1.value;
            managearr.push(tianjiaarr);
            alert("添加成功");
            sheng();
        } else {
            alert("请确认密码");
        }
    }else{
        alert("请填写完整信息");
    }

})





