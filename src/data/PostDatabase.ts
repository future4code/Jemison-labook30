import { post } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";


export class PostDatabase extends BaseDatabase {

    public insertPost = async (post: post) => {

        await PostDatabase.connection("labook_posts")
        .insert({
            id:post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            createdAt: post.createdAt,
            author_id: post.authorId
        })
    }
}