
const cards = document.getElementsByClassName('card');

let imgArray = ["../img/66.png","../img/chrome.png","../img/firefox.png","../img/linux.png","../img/tapu.png"];

function fillArray(array){
    let num = [0,1,2,3,4];
    let temp =-1;
    let count=0;

    if(array.length==9){
        location.reload();
    }
    for(let j=0;j<num.length;j++){

        for(let i =0;i<array.length;i++){
            let index = array.indexOf(num[j],temp+1);
            if(index!=-1){
                temp=index;
                count++;
            }
            else{
                break;
            }
        }

        if(count==0){
            for(let i =0;i<array.length;i++){
                if(array[i]==undefined){
                    array.splice(i,2);
                }
            }            
                array.push(num[j]);
                array.push(num[j]);    
        }
        if(count==1){
            for(let i =0;i<array.length;i++){
                if(array[i]==undefined){
                    array.splice(i,1);
                }
            }            
            array.push(num[j]);    
        }
        count=0;
        temp=-1;

    }
}

function randomControl(array,sayi){
    let temp =-1;
    let a ;
    let count=0;
    for(let i =0;i<array.length;i++){
        a = array.indexOf(sayi,temp+1);
        if(a!=-1){
            temp=a;
            count++;            
        }
      
    }
    if(count>2){
        let b =array.indexOf(array[temp],0);
        array.splice(b,count-2);

    }
  
}


function randomEvenNumber(){
    let temp=[];

    for(let i =0;i<cards.length;i++){
        let rand = Math.floor(Math.random()*5);
        temp[i]=rand;
        let a =randomControl(temp,temp[i]);
        
    }
    fillArray(temp);
    if(temp<10){
        location.reload();
    }
    return temp;
}




let num = [0,1,2,3,4];
function fillImg(){
    let arr = randomEvenNumber();
        for(let i =0;i<arr.length;i++){
            //cards[i].style.background=`url(${imgArray[arr[i]]})`
            cards[i].textContent=arr[i];
            
        }
}
const container = document.querySelector("#container");

let countText = document.querySelector(".count");

function match(){
   
    container.addEventListener('click',(e)=>{
        if(e.target.classList=="card"){
            e.target.style.background=`url(${imgArray[e.target.textContent]})`;
            matchControl();

        }
        
    });

}
function matchControl(){

    let arr = [];
    let count =0;
    for(let i =0;i<cards.length;i++){
        if(cards[i].style.background!="" && cards[i].style.opacity==""){
            arr[count]=cards[i];
            count++;
        }        
    }
    if(arr.length==2){

        if(arr[0].textContent==arr[1].textContent){
            arr[0].style.opacity="0.2";
            arr[1].style.opacity="0.2";
            arr.splice(0,arr.length);
        }
        else{
            setTimeout(()=>{
                arr[1].style.background="";
                arr[0].style.background="";    
            },500);
        }
                
    }
}

function Game(){
fillImg();
match();
}


new Game();





