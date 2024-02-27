import type { AppProps } from 'next/app';
import GlobalStyle from '@/common/styles/GlobalStyle';
import Layout from '@/components/layout/Layout';
import { Provider } from 'react-redux';
import store from '@/common/store/Store';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Provider store={store}>
				<GlobalStyle />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</>
	);
}
