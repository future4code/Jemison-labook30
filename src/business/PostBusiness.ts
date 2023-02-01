import { PostDatabase } from "../data/PostDatabase";
import { CustomError } from "../error/customError";
import { post, PostInputDTO } from "../model/post";
import { IdGenerator } from "../service/IdGenerator";


export class PostBusiness {

    public createPost = async (input: PostInputDTO) => {

        try {
            const {photo, description, type, authorId } = input

            if(!photo || !description || !type) {
                throw new Error("forneca todos os dados solicitados!");
                
            }

            const id: string = new IdGenerator().generateId()
            const createdAt: string = Date.now().toString()
            const postDatabase = new PostDatabase()

            const post: post = {
                id,
                photo,
                description,
                type,
                createdAt,
                authorId
            }

            await postDatabase.insertPost(post)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    } 
}