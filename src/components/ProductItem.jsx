import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';
import Image from 'next/image';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className={styles.ProductItem}>
			{product.images[0]?.includes('http') &&
				<Image src={product.images[0]} alt={product.title} width="100%" height="100%" layout="responsive"/>
			}
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<Image src={addToCartImage} alt="add" width={20} height={20}/>
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
