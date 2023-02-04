import { post, postOutput } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";


export class PostDatabase extends BaseDatabase {

    public insertPost = async (post: post) => {

        await PostDatabase.connection("labook_posts")
        .insert({
            id:post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            author_id: post.authorId
        })
    }

    public getPost = async (id: string): Promise<postOutput> => {

        const queryResult = await PostDatabase.connection("labook_posts")
        .select("photo", "description", "type").where({id})

        const post: postOutput = {
            photo: queryResult[0].photo,
            description: queryResult[0].description,
            type: queryResult[0].type,
            authorId: queryResult[0].author_id,
        }

        return post
    }
}