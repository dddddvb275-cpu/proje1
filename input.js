let input=document.getElementById("search");
export input.addEventListener("input", (e)=>{ 
    let searchTerm = input.value.toLowerCase().trim();
    let filter=state.province.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm);
    
});
render(filter);
});
