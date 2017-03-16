/**
 * Created by User on 2017/2/15.
 */

function page(opt) {
    if(!opt.id){return false}

    var obj=document.getElementById(opt.id);
    var nownum=opt.nownum || 1;
    var allnum=opt.allnum || 5;
    var callback=opt.callback || function () { };

    if(allnum>=6 && nownum>=4){
        var oa=document.createElement("a");
        oa.href="#1";
        oa.innerHTML="首页";
        obj.appendChild(oa);
    }

    if(nownum>=2){
        var oa=document.createElement("a");
        oa.href="#"+ (nownum-1);
        oa.innerHTML="上一页";
        obj.appendChild(oa);
    }

    if(allnum<=5){
        for(var i=1;i<=allnum;i++){
            var oa=document.createElement("a");
            oa.href="#"+i;
            if(nownum==i){
                oa.innerHTML=i;
            }else{
                oa.innerHTML="["+ i +"]"
            }
            obj.appendChild(oa);
        }
    }
    else{
        for(var i=1;i<=5;i++){
            var oa=document.createElement("a");

            if(nownum==1 || nownum==2){
                oa.href="#"+i;
                if(nownum==i){
                    oa.innerHTML= i ;
                }else{
                    oa.innerHTML="["+ i +"]"
                }
            }

            else if((allnum-nownum==0) || (allnum-nownum==1)){
                oa.href="#"+(allnum-5+i);
                if(allnum-nownum==0 && i==5){
                    oa.innerHTML= (allnum-5+i) ;
                }
                else if(allnum-nownum==1 && i==4){
                    oa.innerHTML= (allnum-5+i) ;
                }
                else{
                    oa.innerHTML="["+(allnum-5+i) +"]"
                }
            }
            else{
                oa.href="#"+(nownum-3+i);
                if(i==3){
                    oa.innerHTML=nownum-3+i
                }
                else{
                    oa.innerHTML="["+ (nownum-3+i) +"]"
                }
            }

            obj.appendChild(oa);
        }
    }

    if((allnum-nownum)>=1){
        var oa=document.createElement("a");
        oa.href="#"+ (nownum+1);
        oa.innerHTML="下一页";
        obj.appendChild(oa);
    }

    if((allnum-nownum)>=3 && allnum>=6){
        var oa=document.createElement("a");
        oa.href="#"+ allnum;
        oa.innerHTML="尾页";
        obj.appendChild(oa);
    }
    callback(nownum,allnum)
    var aa=obj.getElementsByTagName("a");
    for(var i=0;i<aa.length;i++){
        aa[i].onclick= function () {
            var nownum=parseInt(this.getAttribute("href").substring(1));
            obj.innerHTML="";
            page({
                id:opt.id,
                nownum:nownum,
                allnum:allnum,
                callback:callback
            });
            //return false;
        }
    }
}




