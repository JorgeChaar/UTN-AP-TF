

// Ventana modal 
let modal = document.getElementById("ventanaModal");
let modal2 = document.getElementById("ventanaModal2");
let modal3 = document.getElementById("ventanaModal3");
// Botón que abre el modal
let boton = document.getElementById("abrirModal");
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
let span = document.getElementsByClassName("cerrar")[0];
let suma = 0;
let bdg_shop = document.getElementById('bdg_carrito');
let btn_carrito = document.getElementById('btn_carrito');
let array_carrito = [];
let tableBody = document.getElementById('tdBody');
let innertotal = document.getElementById('total');
let total = 0;
let precio = 0;


boton.addEventListener("click",function() {
    modal.style.display = "block";
  });
  
  span.addEventListener("click",function() {
    modal.style.display = "none";
  });
 
  window.addEventListener("click",function(event) {
    if (event.target == modal || event.target == modal3 ) {
      modal.style.display = "none";
      modal3.style.display = "none";
    }
  });

  btn_carrito.addEventListener("click",function() {
    modal3.style.display = "block";
    verCompra()
  });

function msgCarrito(producto){
   suma++;
   bdg_shop.innerHTML = suma;
    array_carrito.push(producto);
   modal2.style.display = "block";
   setTimeout(function(){
   modal2.style.display = "none";
}, 2000);
  
}


function verCompra(){
    let body = array_carrito.map(function(bar){
         total += Number(bar.precio);
        // total +=  precio;
        //console.log(total);
        return  '<li>'+bar.cant+' '+bar.producto+' '+'$'+bar.precio+'</li>'
        
        
      })
      
      tableBody.innerHTML = body;

      innertotal.innerHTML = '<h3>Total: $'+total+'</h3>';
   
  } 
  
 