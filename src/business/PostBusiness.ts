import { PostDatabase } from "../data/PostDatabase";
import { CustomError } from "../error/customError";
import { post, PostInputDTO, postOutput } from "../model/post";
import { IdGenerator } from "../service/IdGenerator";

const postDatabase = new PostDatabase()

export class PostBusiness {
    
    public createPost = async (input: PostInputDTO) => {

        try {
            const {photo, description, type, authorId } = input

            if(!photo || !description || !type) {
                throw new Error("forneca todos os dados solicitados!");
                
            }

            const id: string = new IdGenerator().generateId()
            const createdAt: number = Date.now()
            

            const post: post = {
                id,
                photo,
                description,
                type,
                authorId
            }

            await postDatabase.insertPost(post)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    } 

    public getPost = async (id: string) => {

        return await postDatabase.getPost(id)
    }
}