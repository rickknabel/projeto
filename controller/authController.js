class authController {
    static async  auth (req,res){
        try {
         const data = req.body
         const query = "SELECT * FROM usuarios WHERE email = ?"
         connection.query [data.email] (query, (error,results)=> {
          if (error){
              callback(error,null)
              return 
          }
          callback(null,results)
      })
        } catch (error) {
            
        }
    }



}