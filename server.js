const express = require('express');
const app = express();

//partial: son trozos de html que comparten varios html's
const hbs = require('hbs');

require('./hbs/helpers');


//variable creada para subir a heroku, ya que desconocemos el puerto
const port = process.env.PORT || 3000

//Middleware: instrucción o callback que se ejecuta siempre, sin importar que servicio pida la persona
app.use(express.static(__dirname+'/public'));

//Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
 
app.get('/',  (req, res) => {
  
//Modificacion para usar HBS (renderizar home.hbs)
    res.render('home', {

      //enviamos los valores de las variables de los {{}} en home
       nombre: 'David',
       //anio: new Date().getFullYear()
    });


//   let salida = {
//     nombre: 'david',
//     edad: 42,
//     url:req.url
//  };

//  res.send(salida);
});

app.get('/about',  (req, res) => {
  
  //Modificacion para usar HBS (renderizarabout.hbs)
      // res.render('about', {
      //   anio: new Date().getFullYear()
      // });

      res.render('about');
  });



//servicio para trabajar con /data (y poner en postman localhost:3000/data)
app.get('/data',  (req, res) => {
   
    
  
   res.send('Hola data');
  });
 
app.listen(port, () =>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});