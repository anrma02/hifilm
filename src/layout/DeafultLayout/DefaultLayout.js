import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import '~/style.css';

import styles from './DeafultLayout.module.scss';
import Header from '../components/Header';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={'container'}>
                <div className={cx('conten ')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
