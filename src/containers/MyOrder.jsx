import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import arrow from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className={styles.MyOrder}>
			<div className={styles["title-container"]}>
				<Image src={arrow} alt="arrow" width={7} height={12}/>
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles["my-order-content"]}>
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<Link href="/checkout" className={styles["primary-button"]}>
					Checkout
				</Link>
			</div>
		</aside>
	);
}

export default MyOrder;