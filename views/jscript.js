function myfunction(){
    let dropdownContent = document.getElementById('myDropdown');
    dropdownContent.classList.toggle('show');
    
}

let anchorTags = document.getElementsByClassName('myDivs');
console.log(anchorTags);
for(let anchorTag of anchorTags){
    anchorTag.addEventListener('click', function(ev){
        
        let selectedEl = document.getElementById('in');
        
        console.log(this.innerHTML);
        console.log(selectedEl.innerHTML);
        
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
    console.log(checkedIds);
})