/**
 * Created by User on 2017/2/22.
 */
var caiarr=[{img:'',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,id:1}
];
var shenghe=[{img:'',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,id:1},
    {img:'',caiming:'肥肠面',price:12,dianpu:"重庆鱼火锅",tel:12345678912,id:2},
    {img:'',caiming:'吧啦啦啦',price:60,dianpu:"重庆鱼火锅",tel:12345678912,id:3},
    {img:'',caiming:'经典莎朗牛排',price:46,dianpu:"重庆鱼火锅",tel:12345678912,id:4}
];
var caipin=document.getElementById("caipin");
var caibody=caipin.getElementsByTagName("tbody")[0];
function  sheng() {
    var manageinner="";
    caibody.innerHTML="";

    for(var i=0;i<shenghe.length;i++){
        manageinner+= "<tr>"+"<td><img style='width: 100px;height: 50px' src='"+shenghe[i].img  +"'></td>"+"<td>"+ shenghe[i].id +"</td>"+"<td>"+ shenghe[i].caiming+"</td>"+"<td>"+ shenghe[i].price+
            "</td>"+"<td>"+ shenghe[i].dianpu+"</td>"+"<td>"+ shenghe[i].tel+"</td>"+"<td class='tongguo'>通过/<span class='butong'>不通过</span></td>"+"</tr>";
    }
    caibody.innerHTML="<tr>"+"<td>图片</td>"+"<td>所属店家标号</td>"+"<td>菜名</td>"+"<td>价格</td>"+"<td>所属店铺</td>"+"<td>电话</td>"+"<td>操作</td>"+"</tr>"+manageinner;

    var tongguo=document.getElementsByClassName("tongguo");
    var butong=document.getElementsByClassName("butong");
    for(var i=0;i<tongguo.length;i++){
        tongguo[i].index=i;
        tongguo[i].onclick= function () {

            var r=confirm("是否通过菜品");
            if (r==true)
            {
               var aa= shenghe.splice(this.index,1);
                var bb=aa[0];
                caiarr.push(bb);
                sheng();
            }
            else
            {
                return;
            }


        };


        butong[i].index=i;
        butong[i].onclick= function () {
                stopBubble(this);
                function stopBubble(e) {
                    if ( e && e.stopPropagation ) {
                        e.stopPropagation();
                    } else {
                        window.event.cancelBubble = true;
                    }
                }
                var r=confirm("是否不通过");
                if (r==true)
                {
                    shenghe.splice(this.index,1);
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






