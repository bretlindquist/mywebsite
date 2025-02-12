// pages/_app.tsx
import '../src/app/globals.css'; // Your global styles
import 'glightbox/dist/css/glightbox.min.css'; // GLightbox styles

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
