
var siteName=document.getElementById('siteName')
var siteUrl=document.getElementById('siteUrl')
var siteArray=[]
var btn=document.getElementById('submit')
var validBox=document.getElementById('demo2')
var closeBtn=document.getElementById('closeBtn')
var boxContent=document.getElementById('box')
var urlCheck1=document.getElementById('urlCheck1')
var urlCheck2=document.getElementById('urlCheck2')


var check1=document.getElementById('demo3')
var check2=document.getElementById('demo4')
btn.addEventListener('click',GetAllData);

closeBtn.addEventListener('click',closeBox)
function closeBox(){
    validBox.classList.replace('d-flex','d-none')
}

if(localStorage.getItem('site')!=null)
{
    siteArray=JSON.parse(localStorage.getItem('site'));
    display_product()
}
function GetAllData(){

    var siteObject={
        name:siteName.value,
        url:siteUrl.value,
    };




    
    if(flag&&flag2&&siteObject.name!=""&&siteObject.url!=""){
        siteArray.push(siteObject);
        localStorage.setItem('site',JSON.stringify(siteArray));
        display_product()
        clear()
        
    }else
    {
        // check2.classList.remove('d-none')
        validBox.classList.replace('d-none','d-flex')
    }


   

}



var flag=true;
function display_product(){
    var cartona=``;

    for (let index = 0; index < siteArray.length; index++) {
        cartona+=`
       

            <tr>
            <td>${index+1}</td>
            <td>${siteArray[index].name}</td>
              <td> <a target="_blank" href="https://${siteArray[index].url}"><button class="btn-visit btn btn-warning"><i class="fa-solid fa-eye"></i>  Visit</button></a></td>
               
            <td><button onclick="deleteSite(${index})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i>  Delete</button></td>
        
        </tr>
        `
     
    };

    document.getElementById('demo').innerHTML=cartona;


}

siteName.addEventListener('keyup',function(){

    
    if(validate(siteName.value,/^[a-z|A-Z]{3,}$/)){
        
        flag=true
         
        siteName.style.boxShadow='0 0 5px 1px green'
        check1.classList.replace('d-none','d-block')
        check2.classList.replace('d-block','d-none')


}
else{
    flag=false
    siteName.style.boxShadow="0 0 5px 1px red"
    check1.classList.replace('d-block','d-none')
    check2.classList.replace('d-none','d-block')
}
})


var flag2=true
siteUrl.addEventListener('keyup',function(){

    
    if(validate(siteUrl.value,/^[a-z|A-Z]{1,}.(CO|COM|co|com)$/)){
        
        flag2=true
         
        siteUrl.style.boxShadow='0 0 5px 1px green'
        urlCheck1.classList.replace('d-none','d-block')
        urlCheck2.classList.replace('d-block','d-none')

}
else{
    flag2=false
    siteUrl.style.boxShadow="0 0 5px 1px red"
    urlCheck1.classList.replace('d-block','d-none')
    urlCheck2.classList.replace('d-none','d-block')
}
})

function clear(){
 siteName.value=""
 siteUrl.value=""
    }
    

function deleteSite(index){
   siteArray.splice(index,1)
   localStorage.setItem("site",JSON.stringify(siteArray));
   display_product();
}



function validate(text,pattern){
    if(pattern.test(text)){
        return true
    }else{
        return false
    }
}



validBox.addEventListener('click', function () {

    validBox.classList.replace('d-flex','d-none')
    boxContent.addEventListener('click', function (e) {
        e.stopPropagation()
        

    })

})





// var x=document.querySelectorAll('#demo .btn-visit')
//  console.log(x);

//  for(var i=0;i<x.length;i++){
    
//     x[i].addEventListener('click',function(e){
//         console.log(e);
//     })
//  }

 










