function mostrarHorayfecha(){

    creado = new Date();

    var day = ("0" + creado.getDate()).slice(-2);
    var month = ("0" + (creado.getMonth() + 1)).slice(-2);
    hora = creado.getHours();
    minuto = creado.getMinutes();
    segundo = creado.getSeconds();
    
    fechayhora = creado.getFullYear()+"-"+(month)+"-"+(day)+ " / " + hora  + " : " + minuto  + " : " +  segundo ;
    
    $("#datetime").val(fechayhora);
    }