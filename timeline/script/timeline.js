function crearSlide(inicio){
    if(inicio===undefined){ limpiarElementos();alert("esto es todo!")}
    else{
        let clase=inicio.content[0].imgClass
        //document.getElementById("titulo").innerHTML=inicio.titulo
        
        document.getElementById("imagen").src="timeline/img/"+inicio.content[0].img;     
        document.getElementById("imagen").className =clase
        let i=0
        limpiarElementos()
        inicio.content[0].texto.forEach((el)=>{
            let texto=el.mensaje
            let top=el.top+"%"
            let left=el.left+"%"
            let index=i==0?"":i
            let acciones= inicio.acciones
            acciones.forEach((btn)=>{
                let cod=btn.cod
                let id=btn.id
                let nombre=btn.nombre
                let clase = btn.clase===undefined ? "" : btn.clase
                texto=texto.replace("{"+cod+"}","&nbsp;<a href='' data-id='"+id+"' class='"+clase+"' onclick='goto(event,this)'>"+nombre+"</a>&nbsp;")   
            })
            crearTextos(index,texto,top,left,el.class)
            i++;
        })
    }
}
function limpiarElementos(){
    let el=document.getElementsByClassName("btn")
    let len= el.length
    for (let i = 0; i < len; i++) {
        el[0].remove() 
      }
}
function crearTextos(index,texto,top,left,clase){
    let contain=document.getElementById("container")
    let u=document.createElement("SPAN")
    u.className=clase==""?"btn":"btn "+clase;
    u.setAttribute("id","texto"+index);

    u.setAttribute("style","top:"+top+";left:"+left);
    
        
    contain.appendChild(u);
    document.getElementById("texto"+index).innerHTML=texto
}
function goto(event,el){
    event.preventDefault();
    let id=el.dataset.id
    let obj=guion.find((slide)=>slide.id==id)
    crearSlide(obj)
}