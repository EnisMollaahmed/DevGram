import { Figure } from "react-bootstrap";
import "./ProfilePhotoName.css"

export default function ProfilePhotoName({imageUrl, username}:{imageUrl:string, username:string}){
    return (
        <section className='photo-name-container'>
            <Figure className="photoAndName">
                <Figure.Image
                    width={171}
                    height={180}
                    alt={`${username}'s profile image`}
                    src={imageUrl}
                    roundedCircle
                />
                <Figure.Caption className="username">
                    {username}{/*TODO customize styles of this Figure.Caption*/}
                </Figure.Caption>
            </Figure>
        </section>
    );
}