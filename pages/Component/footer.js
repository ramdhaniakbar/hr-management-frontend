import React from "react";
import Head from "next/head";
import styles from "/styles/Component/Footer.module.css";

export default function Footer() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Company Name</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.footer}></div>
			</main>
		</div>
	);
}
