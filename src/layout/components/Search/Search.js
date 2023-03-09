import { faSearch, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import VideoItems from '~/components/VideoItems';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    });

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <VideoItems />
                            <VideoItems />
                            <VideoItems />

                            {/* {searchResult.map((result) => {
                                <VideoItems key={result.id} data={result} />;
                            })} */}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Search..." />
                    <FontAwesomeIcon className={cx('clear')} icon={faXmark} />
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
