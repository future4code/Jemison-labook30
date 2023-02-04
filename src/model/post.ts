export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }

export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
}

export interface PostInputDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
    
 }

export type postOutput = {
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
}
