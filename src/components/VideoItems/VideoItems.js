import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '~/style.css';

function VideoItems() {
    return (
        <Link
            className={'relative p-[5px] h-auto inline-block w-full text-left hover:bg-[#4242429e]  hover:rounded-lg'}
        >
            <img
                className={' w-[70px] float-left h-[70px]  '}
                src="https://avatars.githubusercontent.com/u/113039601?s=40&v=4"
                alt="dst"
            />
            <div className="inline-block w-60  mt-0 ml-[25px] mr-[5px] mb-[5px] ">
                <div
                    className="uppercase block
                overflow-hidden whitespace-nowrap 
                text-ellipsis w-full text-base 
                font-bold text-white"
                >
                    Phù Thủy Tối Thượng
                </div>
                <div className="text-[#abb7c4] text-sm leading-normal "> Doctor Strange </div>
                <div className="text-[#abb7c4] text-sm leading-normal"> Vietsub 720p </div>
            </div>
        </Link>
    );
}
// VideoItems.propTypes = {
//     data: PropTypes.object.isRequired,
// };
export default VideoItems;
