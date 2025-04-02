export type User = {
    imageUrl:string,
    name:string,
    nickname:string,
    email:string,
    developerLevel: 'junior' | 'mid' | 'senior' | 'architect' | 'team-lead',
    idOfLikedNews:string[],
    idOfPostedMemes:string[],
    idOfPotedCodes:string[],
    idOfCommentsOfCodes:string[],
    idOfCommentsOfMemes:string[]
}