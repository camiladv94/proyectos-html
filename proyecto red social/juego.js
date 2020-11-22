//juego piedra,papel,tijera con condicionales if-else

var op1 = 'piedra';
var op2 = 'papel';
var op3 = 'tijera';

var juego = function (user, cpu){ 
    if(user != cpu){
      if( user === op1 && cpu === op3){
        console.log('ganador: user con ' + op1)
      }else if( user === op2 && cpu === op1){
        console.log('ganador: user con ' + op2)
      }else if( user ===op3 && cpu === op2){
        console.log('ganador: user con ' + op3)
      }else{
        console.log('gano la cpu')
      }
    }else if( user === cpu){
    console.log('han empatado')
  }
};

//recorro con un for

var frutas= ['manzanas', 'bananas', 'ciruelas', 'peras', 'mangos']

function gustos(futas){
  console.log(`me gustan las ${fruta}`)
}

for( var i=0 ; i < frutas.length ; i++){
  gustos(fruta[i])
}

//for-of

for (var fruta of frutas){
  gustos(fruta);
}

//obejtos: funcion constructora

function auto(Marca, Modelo, Ano){
  this.marca=Marca;
  this.modelo=Modelo;
  this.ano= Ano;  
}

var autos=[];

for(let i = 0; i < 3 ; i++){
  var marca= prompt('ingrese marca');
  var modelo= prompt('ingrese modelo');
  var ano= prompt('ingrese ano');
  autos.push(new auto (marca, modelo, ano));
}

for (let i=0; i < autos.length; i++){
  console.log(autos[i])
}

//Métodos de recorridos de Arrays
//filter
var articulos= [
  {nombre:'primero',costo:200 },
  {nombre:'segundo', costo:500 },
  {nombre:'tercero', costo:650 },
  {nombre:'cuarto', costo:1000 },
  {nombre:'quinto', costo:120 },
  {nombre:'sexto', costo:600 },
  {nombre:'septimo', costo:250 },
];

var articulosFiltrados= articulos.filter(function(articulo){

  return articulo.costo <= 500  
  
})
//map
var nombreArticulos= articulos.map(function(articulo){
  return articulo.nombre})

  //Recorriendo Arrays con .find(), .forEach() y .some()
  //find
  var encuentrame = articulos.find(function(articulo){
    return articulo.nombre === 'quinto'})

    //foreach
    articulos.forEach(function(articulo){
      console.log(articulo.nombre)})

    //some
    var articulosBaratos = articulos.some(function(articulo){
      return articulo.costo <= 700})