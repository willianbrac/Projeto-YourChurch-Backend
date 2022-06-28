import { hash } from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidv4();
  const senha = await hash("admin", 8);

  await connection.query(
    `INSERT INTO usuario(
         )
     VALUES(
         '',
         '',
         '',
         '',
         ,
         ,
         '',
         '',
         '',
         '',
         '',
         '',
         '',
         ,
         '',
         '',
         '',
         '',
         ''
         )`
  );

  await connection.close;
}

create().then(() => console.log("Usuario administrador criado"));
