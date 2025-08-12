export default function dark() {



    const toggle= document.querySelector("#toggle")


  const modoSelecionado = localStorage.getItem("modo")
    if (modoSelecionado == "dark-mode") {
        document.body.classList.add("dark-mode")
        toggle.checked = true
    }




    toggle.addEventListener("change", ()=>{
    
        

  
    document.body.classList.toggle("dark-mode")


     
    const modoSelecionado = toggle.checked ? "dark-mode" : "light-mode"
    localStorage.removeItem("modo")
    localStorage.setItem("modo", modoSelecionado)

})
       
} 