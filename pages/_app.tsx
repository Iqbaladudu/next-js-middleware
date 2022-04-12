import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="w-screen h-screen flex justify-center items-center text-center text-[100px]">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
