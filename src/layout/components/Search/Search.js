import { faSearch, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import VideoItems from '~/components/VideoItems';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debounceValue = useDebounce(searchValue, 600);

    useEffect(() => {
        // NẾu không có gì trong searchValue thoát ra và return
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=72d5c958e46130e805541e8fb47eef6a&query=${encodeURIComponent(
                debounceValue,
            )}`,
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res.results);
                setSearchResult(res.results);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounceValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {searchResult.map((searchReq) => (
                                <VideoItems key={searchReq.id} {...searchReq} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder="Search..."
                        value={searchValue}
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />

                    {!!searchValue && !loading && (
                        <button className="btn">
                            <FontAwesomeIcon className={cx('clear')} icon={faXmark} onClick={handleClear} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
