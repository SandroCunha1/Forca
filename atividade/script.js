function registrar(){

   var qntPalavra = document.getElementById("inPalavra").value;
   document.getElementById("btRegister").setAttribute('disabled', 'disabled')


   for(let i = 0; i < qntPalavra.length; i++){

        let span = document.createElement("span");
        span.setAttribute('id', i);

        let div = document.getElementById("outPalavra");
        div.appendChild(span);

        let palavraOculta = document.getElementById(i);
        palavraOculta.textContent = " _ ";

   }
}
function tentativa(){
  let letra = document.getElementById("inLetra").value;
  var qntPalavra = document.getElementById("inPalavra").value;
  let erro = document.getElementById(`outErro`)
  qntPalavra = qntPalavra.split("");
  
  for(let i = 0; i < qntPalavra.length; i++){
   if(letra == qntPalavra[i]){

      let substitui = document.getElementById(i);
      substitui.innerHTML = " "+letra+" ";

   } else{
      let erro = document.getElementById(`outErro`)
      erro.textContent = `Erros: `+letra
      
   } 
  }
  
}