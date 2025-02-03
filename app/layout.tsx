/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import "./globals.css"

export const metadata = {
  metadataBase: new URL('https://tw-3.vercel.app'),
  title: {
    template: '%s - TW3',
    default: "Introduction aux technologies du web"
  },
  description: 'Dans le cadre de vos études à l’Université Champollion à Albi, ce programme de cours vous permettra de maîtriser les technologies essentielles au développement web moderne.',
  applicationName: 'TW3',
  generator: 'Next.js',
  appleWebApp: {
    title: 'TW3'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://tw-3.vercel.app'
  },
  openGraph: {
    title: {
      template: '%s - TW3',
      description: 'Dans le cadre de vos études à l’Université Champollion à Albi, ce programme de cours vous permettra de maîtriser les technologies essentielles au développement web moderne.',
    },
    
  },
  locale: "fr_FR",
  type: "website",
  images: [
    {
      url: '/code-html.jpg',
      width: 3543,
      height: 2365,
      type: 'image/jpeg'}
  ],
  alternates: {
    canonical: '/',
  },
}

const Champollion = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="52.213"
      version="1.1"
      viewBox="0 0 64 52.213"
      className='_transition-opacity _duration-700 _ease-in-out'
    >
      <defs>
        <clipPath id="clipPath4152" clipPathUnits="userSpaceOnUse">
          <path d="M0 595.276h841.89V0H0v595.276z"></path>
        </clipPath>
      </defs>
      <g transform="translate(-89.977 -948.996)">
        <g transform="matrix(.3796 0 0 .3796 55.821 621.145)">
          <g transform="matrix(1.25 0 0 -1.25 -352.655 1356.952)">
            <g clipPath="url(#clipPath4152)">
              <g transform="translate(430.017 295.984)">
                <path
                  fill="currentColor"
                  fillOpacity="1"
                  fillRule="nonzero"
                  stroke="none"
                  d="M0 0c8.337-7.469 19.859-11.39 34.239-11.39 8.638 0 16.704 1.597 24.727 5.007V13.74C52.096 9.87 43.74 7.588 36.07 7.588c-16.836 0-25.838 11.225-26.628 34.235V27.005C9.754 15.467 6.476 6.37 0 0"
                ></path>
              </g>
              <g transform="translate(414.412 337.676)">
                <path
                  fill="currentColor"
                  fillOpacity="1"
                  fillRule="nonzero"
                  stroke="none"
                  d="M0 0v-10.233h-.059l.015-.876c.161-13.669-5.44-20.009-17.576-20.144-12.135.135-17.736 6.475-17.575 20.144l.014.876h-.058v67.102l-25.047-14.905v-56.65c-.653-24.222 14.476-37.712 41.909-37.712.256 0 .503.009.757.012.255-.003.502-.012.758-.012 14.364 0 25.347 3.705 32.466 10.707C5.595-32.725.191-18.628 0 0"
                ></path>
              </g>
              <g transform="translate(466.42 394.63)">
                <path
                  fill="currentColor"
                  fillOpacity="1"
                  fillRule="nonzero"
                  stroke="none"
                  d="M0 0c-10.4 0-19.449-2.072-26.961-6.037V-28.75l-12.745-12.744h12.745v-8.718c.776 21.424 9.459 31.568 25.962 31.568 8.49 0 16.814-2.83 23.307-7.491l.255.116v22.014C15.847-1.423 8.281 0 0 0"
                ></path>
              </g>
              <g transform="translate(426.714 353.137)">
                <path
                  fill="currentColor"
                  fillOpacity="1"
                  fillRule="nonzero"
                  stroke="none"
                  d="M0 0l12.745 12.744v.111l-25.002-25.004c-.011-.445-.04-.875-.045-1.326v-.717L1.891 0H0zm12.745-.089l-24.486-24.486c.068-.597.143-1.188.223-1.774L12.745-2.087v1.998zM8.519 0l-20.612-20.612c.041-.626.078-1.255.132-1.869L10.521 0H8.519zm4.226 17.169L-12.031-7.607c-.054-.711-.11-1.421-.146-2.146l24.922 24.922v2zm0 8.629L-10.629 2.423a68.57 68.57 0 01-.475-2.474l23.849 23.85v1.999zm0 8.631L-6.269 15.412a52.256 52.256 0 01-1.537-3.536l20.551 20.55v2.003zM-3.351 20.646L9.653 33.651C4.428 30.325.075 25.959-3.351 20.646M12.745-4.401l-23.966-23.967c.095-.571.207-1.126.315-1.686L12.745-6.403v2.002zm0 34.515L-9.071 8.297a61.498 61.498 0 01-.821-2.822l22.637 22.638v2.001zm0-8.628L-11.52-2.78c-.105-.764-.219-1.521-.302-2.303l24.567 24.566v2.003zM4.203 0l-16.476-16.478c.013-.652.028-1.304.055-1.945L6.204 0H4.203zM-.068-53.73l11.676 11.676c.196.814.357 1.652.503 2.502L-.975-52.637c.299-.367.596-.738.907-1.093m-1.931 2.384l14.486 14.484c.076.717.14 1.445.184 2.185L-2.83-50.179c.273-.392.546-.786.831-1.167m4.034-4.596l7.258 7.257c.51 1.079.963 2.2 1.362 3.364l-9.613-9.615c.325-.342.657-.676.993-1.006m10.711 25.655L-4.526-47.561c.248-.418.507-.825.768-1.231l16.52 16.52c.008.653.001 1.315-.016 1.985M3.303-57.153a29.36 29.36 0 011.843 2.007l-1.927-1.927c.029-.025.055-.054.084-.08m9.442 48.434v.004l-23.263-23.264c.121-.545.254-1.08.387-1.615l22.836 22.837c.011.683.016 1.374.04 2.038m0-8.625L-8.608-38.699c.172-.495.341-.992.526-1.475l20.827 20.826v2.004zm-.042 4.269L-9.644-35.42c.147-.519.292-1.04.451-1.548l21.932 21.932c-.02.641-.027 1.303-.036 1.961m.042-8.585L-7.412-41.818c.198-.469.402-.931.612-1.389l19.545 19.545v2.002zm0-4.314L-6.057-44.776c.223-.443.463-.87.698-1.302l18.104 18.103v2.001z"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={<Champollion />
      }
      // Next.js discord server
      chatLink="https://discord.gg/hEM84NMkRv"
    />
  )
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦">
        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta name="apple-mobile-web-app-title" content="TW3" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://tw-3.vercel.app" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <body>
        <Layout
          banner={<Banner storageKey="JS"><a href="/JS">
            🎉 Utilisez JS efficacement →
          </a></Banner>}
          navbar={navbar}
          footer={<Footer>Champollion - TW3 -&nbsp;<a href="https://occitaweb.fr" target="_blank">Bardy Michaël</a></Footer>}
          editLink="Modifier sur GitHub"
          docsRepositoryBase="https://github.com/micmc422/TW3"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
          feedback={{ content: "Une question ?", labels: "Question" }}
          toc={{ title: "Sur cette page" }}
          search={<Search placeholder='Rechercher dans les cours' emptyResult={"Aucun résultat :s"} errorText={"Oups une erreur est survenue."} loading={"Recherche..."} />}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}