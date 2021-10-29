import { LazyImage } from "react-lazy-images";

const Artist = ({ name, photo, url }) => {
    return (
        <a href={url} rel='noreferrer' target='_blank' className="artist item has-transition">
            <figure>
                <LazyImage
                    src={photo}
                    alt={name}
                    placeholder={({ imageProps, ref }) => (
                        <svg ref={ref} className="image is-square is-lazy" viewBox="0 0 24 24">
                            <path d="M24 0h-24v24h24v-24z" />
                        </svg>
                    )}
                    actual={({ imageProps }) => <img className='image is-square is-loaded' {...imageProps} />}
                />
            </figure>

            <h3 className='artist-title'>
                {name}
            </h3>
        </a>
    )
}

export default Artist;