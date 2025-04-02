import { Figure } from "react-bootstrap";

export default function ProfilePhotoName({imageUrl, username}:{imageUrl:string, username:string}){
    return (
        <section className='photo-name-container'>
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt={`${username}'s profile image`}
                    src={imageUrl}
                    roundedCircle
                />
                <Figure.Caption>
                    {username}{/*TODO customize styles of this Figure.Caption*/}
                </Figure.Caption>
            </Figure>
        </section>
    );
}