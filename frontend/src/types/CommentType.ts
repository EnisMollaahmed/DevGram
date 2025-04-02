export type Comment = {//TODO add complex comment (comment which has replies)
    id:string,
    type: 'meme' | 'snippet';
    author:string,
    publishingDate:Date,
    content:string
}