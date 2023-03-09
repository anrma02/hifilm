import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import '~/style.css';
import config from '~/config';
import Search from '../Search';

function Header() {
    return (
        <header
            className=" fixed top-0
            left-0 flex z-10 
            justify-center h-20 bg-[#0f2133] w-[100%] "
        >
            <div className="h-[100%] w-[1150px] py-0 flex items-center justify-between ">
                <Link to={config.routes.home} className="flex">
                    <p className="text-[1.5em] text-white  uppercase font-bold"> hiphim.tv</p>
                </Link>

                <Search />

                <div> sdassad </div>
            </div>
        </header>
    );
}

export default Header;
