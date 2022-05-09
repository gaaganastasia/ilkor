import 'normalize.css/normalize.css';
import './index.css';
import { NextSeo } from 'next-seo';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <NextSeo
        title="ILKOR"
        description="продающий сайт для вашего бизнеса"></NextSeo>
      <Component {...pageProps} />
    </>
  )
}