




//used to show the drop-down contents
function myfunction(){
    let dropdownContent = document.getElementById('myDropdown');
    dropdownContent.classList.toggle('show');
    
       
    
    
}

let anchorTags = document.getElementsByClassName('myDivs');

//using event listeners on the divs so that on click , input element's text is set
for(let anchorTag of anchorTags){
    anchorTag.addEventListener('click', function(ev){
        
        let selectedEl = document.getElementById('in');
        
        
        
        
        selectedEl.setAttribute('value',this.innerHTML);
        myfunction();
    })
}


let deleteB = document.getElementById('deleteButton');
//adding an event listener on delete button. When the button is clicked, all the ids of the checked tasks are tracked.
deleteB.addEventListener('click', function(ev){
    let checkedIds = [];
    let inputEls = document.querySelectorAll("div#template>ul>li>input");
    for(inputEl of inputEls){
        if(inputEl.checked){
           
                
            
            checkedIds.push(inputEl.id);
        }
       
    }
    
 })


//For the strikethrough feature                
let inputEls = document.querySelectorAll(" ul li input");
for(inputEl of inputEls){
    inputEl.addEventListener('click', function(){
        let divs = document.querySelectorAll('ul li div');
         console.log(inputEl);
        //  if(inputEl.name == )
        //  div.classList.toggle('strike');
        for(div of divs){
            if(div.id == inputEl.name){
                div.classList.toggle('strike');
            }
        }
         
    })
}