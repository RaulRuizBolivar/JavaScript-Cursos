var buttonpiedra = document.getElementById("piedra");
var buttonpapel =  document.getElementById("papel");
var buttontijeras = document.getElementById("tijeras");
var pResultado = document.getElementById("resultado");
buttonpiedra.addEventListener("click", jugadorPiedra);
buttonpapel.addEventListener("click", jugadorPapel);
buttontijeras.addEventListener("click", jugadorTijeras);
var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";
var jugadaCPU = calculoCPU();
var jugadaJugador;
var ganador;

function calculoCPU (  ) {
  var jugada = Math.floor(Math.random() * 3);
  if ( jugada == 0 ) {
    return piedra;
  } else if ( jugada == 1 ) {
    return papel;
  } else if ( jugada == 2 ) {
    return tijeras;
  }
}

function jugadorPiedra(  ) {
  jugadaJugador = piedra;
  resultado( jugadaJugador , jugadaCPU );
}

function jugadorPapel (  ) {
  jugadaJugador = papel;
  resultado( jugadaJugador , jugadaCPU );
}

function jugadorTijeras (  ) {
  jugadaJugador = tijeras;
  resultado( jugadaJugador , jugadaCPU );
}

function resultado ( jugadaJugador , jugadaCPU ) {
  if ( jugadaJugador === jugadaCPU ){
    pResultado.innerHTML = "Empate";
    ganador = "Empate";
  } else if ( jugadaJugador === piedra && jugadaCPU === papel ) {
    ganador = "CPU";
  } else if ( jugadaJugador === piedra && jugadaCPU === tijeras ) {  
    ganador = "Jugador";
  } else if ( jugadaJugador === papel && jugadaCPU === piedra ) {
    ganador = "Jugador";
  } else if ( jugadaJugador === papel && jugadaCPU === tijeras ) {
    ganador = "CPU";
  } else if ( jugadaJugador === tijeras && jugadaCPU === piedra ){
    ganador = "CPU";
  } else if ( jugadaJugador === tijeras && jugadaCPU === papel) {
    ganador = "Jugador";
  }
  imprimirGanador(ganador);
}

function imprimirGanador( a ) {
  if ( a === "Empate" ){
    pResultado.innerHTML = ganador;
  } else {
    pResultado.innerHTML = "Gana " + ganador + ", Jugador: " + jugadaJugador + " CPU: " + jugadaCPU;
  }
}
