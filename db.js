const sqlite3 = require("sqlite3").verbose()
const db  = new sqlite3.Database('./ws.db')

//comando serialize permite que seja inserido varios comandos dentro dele
db.serialize(function () {
    //criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideias(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
            );
    `)

      //inserir dados na tabela
  /*   const query = `
      INSERT INTO  ideias(
        image,
        title,
        category,
        description,
        link
      ) VALUES (?,?,?,?,?);
  ` 
      const values = [
        "https://image.flaticon.com/icons/svg/2729/2729007.svg" ,
        "Cursos de Programação",
        "Estudo",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "https://rocketseat.com.br/"
      ]

     db.run(query, values, function(err){
          if (err) return console.log(err)

          console.log(this)
      })*/

      //deletar um dado na tabela
      
    /* db.run(`DELETE FROM ideias WHERE id = ?`, [15], function (err){
          if (err) return console.log(err)

          console.log("Deletei", this)
      })*/


      //consultar dados na tabela
  /*  db.all(`SELECT * FROM ideias`, function (err, rows){
        if (err) return console.log(err)
        
        console.log(rows)
      })*/


})

module.exports = db;
