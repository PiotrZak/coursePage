import Image, { StaticImageData } from 'next/image'
import styles from './designsystem.module.scss'

interface IProduct {
    title: string;
    duration: string;
    imageUrl: StaticImageData;
    price: string;
    link: string;
}

interface ISimilarProducts {
    header: string;
    products: IProduct[];
}

export const SimilarProducts = ({ header, products }: ISimilarProducts) => {

    return (
        <div className={styles.similarProducts}>
            <h2>{header}
            </h2>
                {products.map((product: IProduct, index: number) => {
                    return (
                        <div key={index} className={styles.product}>
                            <Image src={product.imageUrl} alt={''} />
                            <h3>{product.title}</h3>
                            <p>{product.duration}</p>
                            <p>{product.price}</p>
                            <a target="_blank" href={product.link}>Visit</a>
                        </div>
                    )
                }
            )}
        </div >
    )
}
