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