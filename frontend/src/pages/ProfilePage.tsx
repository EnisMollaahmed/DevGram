import { Figure } from "react-bootstrap"

export default function ProfilePage(){
    
    return (
        <main>
            <section className='photo-name-container'>
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src="holder.js/171x180"
                        roundedCircle
                    />
                    <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>
            </section>
            
        </main>
    )
}