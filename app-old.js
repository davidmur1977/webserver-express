const http = require ('http');

http.createServer( (req, res) =>{

      res.writeHead(200, {'Content-Type':'application/json'}); //enviamos un json, junto con respuesta de OK

      let salida = {
         nombre: 'david',
         edad: 42,
         url:req.url
      }


      res.write(JSON.stringify(salida));
      res.end(); //indicamos que acabamos la respuesta
} )
.listen(8080);

console.log('Escuchando el puerto 8080');