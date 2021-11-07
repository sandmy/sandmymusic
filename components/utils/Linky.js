import Link from 'next/link';

const Linky = ({ children, to, className, onClick }) => {

    return (
        <Link href={to}>
            <a className={className} onClick={onClick}>
                {children}
            </a>
        </Link>
    )
}

export default Linky;