/**
 * Created by User on 2017/3/6.
 */
var alldingdan=[
    [{img:'img/index/cai1.png',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,
    type:1,id:1,owner:"aaa",time:"2017-3-6 22:17:39",dangtel:"123456",addre:"dkjved",num:1,sum:10},
    {img:'img/index/cai1.png',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,
        type:1,id:1,owner:"aaa",time:"2017-3-6 22:17:39",dangtel:"123456",addre:"dkjved",num:1,sum:10},
    {img:'img/index/cai1.png',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,sum:10,
        type:1,id:1,owner:"aaa",time:"2017-3-6 22:17:39",dangtel:"123456",addre:"dkjved",num:1}
     ],
    [{img:'img/index/cai1.png',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,
        type:1,id:1,owner:"aaa",time:"2017-3-6 22:17:39",dangtel:"123456",addre:"dkjved",num:1,sum:10},
        {img:'img/index/cai1.png',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,
            type:1,id:1,owner:"aaa",time:"2017-3-6 22:17:39",dangtel:"123456",addre:"dkjved",num:1,sum:10},
        {img:'img/index/cai1.png',caiming:'藤椒抄手',price:10,dianpu:"重庆鱼火锅",tel:12345678912,sum:10,
            type:1,id:1,owner:"aaa",time:"2017-3-6 22:17:39",dangtel:"123456",addre:"dkjved",num:1}
    ]
];
//根据店家id获得出相应店家的订单信息，比如此时获得的是id=1的店家
var dianjia=document.getElementById("dianjia");
go();
function go() {
    for(var j=0;j<alldingdan.length;j++){
        shengdan(alldingdan[j]);
    }
}
function shengdan(aaa){
    var table = document.createElement("table");
    table.className="table table-hover";table.border=1;
    var thead = table.createTHead();
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    var tr = document.createElement("tr");
    var tharr=["商品","单价","数量","小计"];
    for (var i = 0; i <4; i++) {
        var th = document.createElement("th");
        th.innerHTML=tharr[i];
        tr.appendChild(th);
    }
    thead.appendChild(tr);

    var tdinner="";
    for (var i = 0; i <aaa.length; i++) {

           tdinner+="<tr><td>"+aaa[i].caiming+"</td><td>"+aaa[i].price+"</td>" +
                "<td>"+aaa[i].num+"</td><td>"+aaa[i].sum+"</td></tr>" ;

    }
    tbody.innerHTML=tdinner+"<tr><td >客户："+ aaa[0].owner+"<td>地址："+aaa[0].addre+"</td>" +
        "<td>电话："+ aaa[0].dangtel+"</td><td>时间："+aaa[0].time +"</td></tr>"+
        "<tr><td colspan='4'><input type='button'class='btn btn-primary jiedan' value='接单' >" +
        "</td></tr>";
    var jiedan=document.getElementsByClassName("jiedan");
    var shanchu=document.getElementsByClassName("shanchu");
    for(var i=0;i<jiedan.length;i++){
        jiedan[i].index=i;
        jiedan[i].onclick= function () {
            alldingdan.splice(this.index,1);
            dianjia.innerHTML="";
            go();
        }

    }
     dianjia=document.getElementById("dianjia");
    dianjia.appendChild(table);


}
