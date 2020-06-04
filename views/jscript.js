





function myfunction(){
    let dropdownContent = document.getElementById('myDropdown');
    dropdownContent.classList.toggle('show');
    
       
    
    
}

let anchorTags = document.getElementsByClassName('myDivs');

for(let anchorTag of anchorTags){
    anchorTag.addEventListener('click', function(ev){
        
        let selectedEl = document.getElementById('in');
        
        
        
        
        selectedEl.setAttribute('value',this.innerHTML);
        myfunction();
    })
}

let deleteB = document.getElementById('deleteButton');
deleteB.addEventListener('click', function(ev){
    let checkedIds = [];
    let inputEls = document.querySelectorAll("div#template>ul>li>input");
    for(inputEl of inputEls){
        if(inputEl.checked){
           
                
            
            checkedIds.push(inputEl.id);
        }
       
    }
    
})


                
let inputEls = document.querySelectorAll("div#template>ul>li>input");
for(inputEl of inputEls){
    inputEl.addEventListener('click', function(){
        let div = document.getElementById('strike');
         div.classList.toggle('strike');
    })
}