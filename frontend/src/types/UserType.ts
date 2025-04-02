export type User = {
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