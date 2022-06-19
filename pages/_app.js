import 'normalize.css/normalize.css';
import './index.css';
import { NextSeo } from 'next-seo';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <noscript><div><img src="https://mc.yandex.ru/watch/89240992" style={{position:'absolute', left:'-9999px'}} alt="" /></div></noscript>
      <NextSeo
        title="ILKOR"
        description="продающий сайт для вашего бизнеса"></NextSeo>
      <Component {...pageProps} />
    </>
  )
}