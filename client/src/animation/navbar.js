export function burgerReponsive(){
    const nav_links=document.getElementsByClassName("reponsive_nav_links")[0]
    
    if (nav_links.style.display==="none"){
        nav_links.style.display="flex"
    }   
    else{
        nav_links.style.display="none"
    }
        
}