import './NewsFeed.css';

export default function ErrorMessage({message}:{message:string}){
    return (
        <section className="errorSect">
            <p className='errBig'>Oops! Error occured..</p>
            <p className='errSmall'>{message}</p>
        </section>
    )
}