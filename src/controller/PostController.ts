import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO, postOutput } from "../model/post";

const postBusiness = new PostBusiness()

export class PostController {

    public createPost = async (req: Request, res: Response) => {

        try {
            
            const {photo, description, type, authorId} = req.body

            const input: PostInputDTO = {
                photo, 
                description, 
                type, 
                authorId
            }

            
            await postBusiness.createPost(input);

            res.status(201).send({ message: "Sucess!" })
            
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    public getPost = async (req: Request, res: Response) => {

        try {
            
            const {id} = req.params

            const post: postOutput = await postBusiness.getPost(id)

            res.status(200).send({post})
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

}