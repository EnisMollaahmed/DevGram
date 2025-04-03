import {useEffect, useState} from 'react';
import { getOneNews } from '../api/newsAPI';
import { News } from '../types/NewsType';
import { ErrorMessage } from '../types/ErrorMessage';
import { useParams } from 'react-router';
import './NewsPage.css'


export default function NewsPage(){//TODO add prop to users like and disslike
    const {id} = useParams();
    const [item, setItem] = useState<News|ErrorMessage>();
    const [clickLike, setClickLike] = useState<boolean>(false);
    const [clickDislike, setClickDislike] = useState<boolean>(false);

    useEffect(()=>{
        getOneNews(id as string).then(data => setItem(data));
    },[id]);

   const handleLikeButton = ()=>{
        if(!clickLike){
            setItem((prev)=>{
                if(prev && 'likesCount' in prev)
                    return {
                        ...prev,
                        likesCount:prev.likesCount + 1
                    }
                
                return prev;
            });
        }
        else{
            setItem((prev)=>{
                if(prev && 'likesCount' in prev)
                    return {
                        ...prev,
                        likesCount:prev.likesCount - 1
                    }
                
                return prev;
            });
        }
        setClickLike(prev=>!prev);
   }

   const handleDislikeCount = () => {
        if(!clickDislike){
            
            setItem((prev=>{
                if(prev && 'dislikeCount' in prev)
                    
                    return {
                        ...prev,
                        dislikeCount:prev.dislikeCount + 1
                    }
                
                return prev;
            }));
        }
        else{
            setItem((prev=>{
                if(prev && 'dislikeCount' in prev)
                    return {
                        ...prev,
                        dislikeCount:prev.dislikeCount - 1
                    }
                
                return prev;
            }));
        }
        setClickDislike(prev => !prev);
   }

   const Article =() => (
        <main>
            <img src={(item as News).imageUrl} alt={(item as News).title}/>
            <p className='publishing-time'>{`${new Date((item as News).publishingDate).getDate()}.${new Date((item as News).publishingDate).getMonth()}.${new Date((item as News).publishingDate).getFullYear()}`}</p>
            <section className='btn-container'>
                <section className='btn-count-pair'>
                    <button type='button' className={clickLike ? 'clicked' : 'unclicked'} onClick={handleLikeButton}>Like👍🏼</button>
                    <p className='like-dis-count'>{(item as News).likesCount}</p>
                </section>
                <section className='btn-count-pair'>
                    <button type='button' className={clickDislike ? 'clicked' : 'unclicked'} onClick={handleDislikeCount}>Dislike🤬</button>
                    <p className='like-dis-count'>{(item as News).dislikeCount}</p>
                </section>
            </section>
            <section className='news-container'>
                {(item as News).news.split('\n').map((par, index)=><p key={index} className='separated-paragraph'>{par}</p>)}
            </section>
        </main>
   );

   return (
        (!item || 'error' in item) ? (<h1 className='newspage-error'>Could not load the article, try again later...</h1>): <Article/>
   );
}