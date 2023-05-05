import styles from '@/styles/loading-dots.module.css';

const LoadingDots = ({ color = '#000', style = 'small' }: { color: string; style: string }) => {
    return (
        <span className={style == 'small' ? styles.loading2 : styles.loading}>
            <span style={{ backgroundColor: color }} />
            <span style={{ backgroundColor: color }} />
            <span style={{ backgroundColor: color }} />
        </span>
    );
};

export default LoadingDots;

LoadingDots.defaultProps = {
    color: '#000000',
    style: 'small',
};
