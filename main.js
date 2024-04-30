$(function () {
    $("#botontarea").click(function () {
      var elemento = $("#tarea").val();
      $("#contenedor2").prepend(
        '<div id="creacion">' +
          elemento +
          '<button id="tareaejecutada">tarea ejecutada </button>' +
          '<button id="eliminartarea">eliminar </button>'
      );
      $("#tareaejecutada").click(function () {
        $("#creacion").css("background-color", "rgb(132, 245, 138)");
      });
      $("#eliminartarea").click(function () {
        $("#creacion").remove();
      });
    }); 
  });
  