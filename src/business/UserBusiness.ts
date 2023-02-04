import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName } from "../error/customError";
import { user, UserInputDTO } from "../model/user";
import { IdGenerator } from "../service/IdGenerator";



export class UserBusiness {
    
    public insertUser = async (input: UserInputDTO) => {

        try {
            const { name, email, password} = input;
            
            if(!name || !email || !password) {
                
                throw new CustomError(400, "Preencha todos os campos");
                
            }

            if (name.length < 3) {
               
                throw new InvalidName();
                
            }

            if (!email.includes("@")){

                throw new InvalidEmail();
                
            }

            const id : string =  new IdGenerator().generateId()

            const user: user = {
                id,
                name,
                email,
                password
            }

            const userDatabase = new UserDatabase()
            await userDatabase.insertUser(user)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
            
        }
    }
}