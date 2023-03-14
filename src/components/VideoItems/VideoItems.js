import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '~/style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

function VideoItems({ title, original_title, poster_path, vote_average }) {
    return (
        <Link
            
            className={'relative p-[5px] h-auto inline-block w-full text-left hover:bg-[#4242429e]  hover:rounded-lg'}
        >
            <img className={' w-[70px] float-left h-[70px]  '} src={API_IMG + poster_path} alt="dst" />
            <div className="inline-block w-60  mt-0 ml-[25px] mr-[5px] mb-[5px] ">
                <div
                    className="uppercase block
                overflow-hidden whitespace-nowrap 
                text-ellipsis w-full text-base 
                font-bold text-white"
                >
                    {title}
                </div>
                <div className="text-[#abb7c4] text-sm leading-normal "> {original_title} </div>
                <div className="text-[#abb7c4] text-sm leading-normal flex">
                    {vote_average}
                    <FontAwesomeIcon icon={faStar} className={'text-yellow-200 text-xs p-1'} />
                </div>
            </div>
        </Link>
    );
}
VideoItems.propTypes = {
    title: PropTypes.string,
};
export default VideoItems;
