//framework express utilizado para criar e configurar o servidor
const express = require('express');
const server = express();

const db = require('./db');

//configurar arquivos estáticos (css, html, imanges) 
server.use(express.static("public"));

//habilitar uso do req.body
server.use(express.urlencoded({ extended: true}));

//configuração nunjucks
const nunjucks = require('nunjucks');
//primeiro parametro é qual pasta sera guardado os html, 2 objeto de confi
nunjucks.configure("views",{
    express: server,
    noCache: true,
})

//rota index
server.get("/", function (req,res){

    db.all(`SELECT * FROM ideias`, function (err, rows) {
        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }

        let lastIdeias = []
            for (let ideia of rows){
                if (lastIdeias.length < 2){
                    lastIdeias.push(ideia)
                }
            }
            return res.render("index.html", {ideias: lastIdeias});
      })
})

//rota ideias
server.get("/ideias", function (req,res){

    db.all(`SELECT * FROM ideias`, function (err, rows) {
        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }

        return res.render("ideias.html", {ideias: rows});

    })
 
})

//receber dados do form 
server.post("/", function(req, res) {
  //inserir dados na tabela
     const query = `
      INSERT INTO  ideias(
        image,
        title,
        category,
        description,
        link
      ) VALUES (?,?,?,?,?);
  ` 
      const values = [
          req.body.image,
          req.body.title,
          req.body.category,
          req.body.description,
          req.body.link,
      ]

    db.run(query, values, function(err){
        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }
        return res.redirect("/ideias")
      })
})


//o servidor foi inicializado na porta 3000
server.listen(3000);    


