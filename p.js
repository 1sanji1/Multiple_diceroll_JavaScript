const ipn=document.getElementById("input");
const res=document.getElementById("result");
const img=document.getElementById("imge");
const sub=document.getElementById("submit");
let r;
let arrnum=[];
let arrpic=[];

sub.onclick=function(){

    arrnum = []; //clear old output
    arrpic = []; //clear old output

    input=Number(ipn.value);
    for(let i=0;i<=input-1;i++){
        let rv=Math.floor(Math.random()*(7-1)+1);
        arrnum.push(rv);

        arrpic.push(`<img src="dice images/${rv}.png">`);
    }
    
    let l=[...arrnum].join(",");
    res.textContent=`dice result :${l}`;

    let im=[...arrpic].join(",");
    img.innerHTML=im;
}



