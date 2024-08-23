

document.addEventListener("DOMContentLoaded" , () => {
  const links = document.querySelectorAll(".links");
  const paras = document.querySelectorAll(".para");
  links.forEach(link => {
    
    
    
    link.addEventListener("click" , (event) => {
      
      links.forEach(l => {
      l.classList.remove("active");
  });
      
      paras.forEach(l => {
      l.classList.remove("active");
  });
      
      link.classList.add("active");
      
      
      event.preventDefault();
      const paraID = link.getAttribute("data-target");
      const paraElement = document.getElementById(paraID);
      
       paraElement.classList.add("active");
      
      
      const reqHeight = paraElement.offsetTop - document.querySelector(".navigation-bar")
      .offsetHeight;
       
        window.scrollTo({
          top: reqHeight - 25,
          behavior: "smooth"
        });
        
        
      
    });
    
  });
  
});














