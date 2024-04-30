let jugadores = [
  {
    jugador: "jugador1",
    color: "rgb(132, 245, 138)",
  },
  {
    jugador: "jugador2",
    color: "rgb(247, 31, 31)",
  },
];

let turno = jugadores[0];
let marcadas = new Array(9).fill(null); 

let ganador = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

$(function () {
  $(".item").click(function () {
    let indice = $(this).data("indice") - 1; 
    if (!marcadas[indice]) {
   
      $(this).css("background-color", turno.color);
      marcadas[indice] = turno;
      if (verificarGanador()) {
        alert(`¡${turno.jugador} ha ganado!`);
        reiniciarJuego();
        return;
      }
      cambiarTurno();
    }
  });
});

$(function () {
  $("#boton").click(reiniciarJuego);
});

function verificarGanador() {
  for (let i = 0; i < ganador.length; i++) {
    let [a, b, c] = ganador[i];
    if (
      marcadas[a] &&
      marcadas[a] === marcadas[b] &&
      marcadas[a] === marcadas[c]
    ) {
      return true;
    }
  }
  return false;
}

function cambiarTurno() {
  turno = turno === jugadores[0] ? jugadores[1] : jugadores[0];
}

function reiniciarJuego() {
  $(".item").css("background-color", "rgb(114, 117, 117)");
  marcadas.fill(null);
  turno = jugadores[0];
}