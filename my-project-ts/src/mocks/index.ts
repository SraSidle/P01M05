import { createServer } from "miragejs";

class Mocks {
  static Initialize(): void {
    createServer({
      routes() {
        this.post("api/auth", () => {
          return {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
          }
        });

        this.post("/api/register", () => {
          return {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
          }
        })
      }
    })
  }
}

export default Mocks;

// import { Server } from "miragejs";

// const Mocks = new Server({
//   routes() {
//     this.urlPrefix = "https://api.com.br/";
//     this.namespace = "listadejogos/";

//     this.get("/", () => {
//       return{ message: "servidor ok!!"}
//     });

//     this.post("/registrar", () => {

//     });

//   }
// });

// export default Mocks;