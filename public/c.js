let boton = document.getElementById('boton')
boton.addEventListener('click',()=>{
		let nombre = document.getElementById('nombre').value
        let dinero = document.getElementById('cdinero').value
        let opciones = document.getElementById('opciones').value
        let Suma=0,Resta=0, salir=0;

        let maquina=Math.floor(Math.random() * 2)+1;
          
            	alert(`La cantidad que ha apostado es : $${parseInt(dinero)}`);

            	console.log(parseInt(maquina))

                if (opciones==parseInt(maquina)){
                    alert("Felicidades " +nombre+ " usted ha ganado, la opcion de la maquina fue: "+maquina+ " \n");
                    Suma = Suma+dinero;
                alert(`La cantidad de dinero que ha sumado es: ${parseInt(Suma)}`);
                
                }

                else{
                    alert(":( Perdiste " + nombre + " intentalo de nuevo ");
                    Resta= Resta-Suma;
                alert(`La cantidad de dinero que tiene acumulado hasta ahora es:  ${parseInt(Resta)}`);
                
                }
             }
            )
        