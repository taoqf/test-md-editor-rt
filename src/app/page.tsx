'use client';

import 'md-editor-rt/lib/style.css';
import { useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import styles from '../styles/Home.module.css';

export default function Page() {
	const [text, setText] = useState('# md-editor-v3');

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<p className={styles.description}>
					Get started by editing <code className={styles.code}>pages/index.js</code>
				</p>

				<MdEditor modelValue={text} onChange={setText} />
			</main>
		</div>
	);
}
