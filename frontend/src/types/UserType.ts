export type User = {
    id:string,
    imageUrl:string,
    name:string,
    nickname:string,
    email:string,
    bio:string,
    developerLevel: 'junior' | 'mid' | 'senior' | 'architect' | 'team-lead',
    idOfDislikedNews:string[],
    idOfLikedNews:string[],
    idOfPostedMemes:string[],
    idOfPostedCodes:string[],
    idOfCommentsOfCodes:string[],
    idOfCommentsOfMemes:string[]
}

export type OutletUserContext = {
    userInfo: User | null;
    setUserInfo: React.Dispatch<React.SetStateAction<User | null>>;
};