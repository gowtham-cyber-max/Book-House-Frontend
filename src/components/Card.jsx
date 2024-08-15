import React from 'react'
import LazyLoad from 'react-lazy-load'
import { API_URL } from '../redux/store';
import { useDispatch } from 'react-redux';
import { getNextBooks } from '../redux/actions/bookListAction';
import Rating from 'react-rating';

const LazyCard = ({ book }) => {
    return (
        <div className="book-list-item" onClick={() => window.location.href = `/#/book/${book.id}`}>
            <img className="book-item-img" src={book.imageIds ? `${API_URL}/api/file/download/${book.imageIds[0]}` : "/src/assets/images.jpeg"} />
            <div className="book-item-desc">
                <p className="book-item-name" aria-description={book.name}>{book.name}</p>
                <p className="book-item-author">{book.author}</p>
                <p>₹{book.price}</p>
                <Rating readonly initialRating={book.avg} emptySymbol={<span className="material-symbols-outlined">
                star
            </span>} fullSymbol={<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24" }}>
                star
            </span>} />
            </div>
        </div>
    )
}

export default function Card({ book, isMainList = false }) {
    const dispatch = useDispatch();
    const loadNext = () => {
        if (!isMainList)
            return;
        dispatch(getNextBooks());
    }
    return (
        <LazyLoad elementType='div' height={340} width={250} threshold={0.25} onContentVisible={loadNext}>
            <LazyCard book={book} />
        </LazyLoad>
    )
}
