import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap"
            rel="stylesheet"
          />

          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />

          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="theme-color" content="#6D55FD" />
          <meta name="msapplication-TileColor" content="#6D55FD" />
          <meta name="google" content="notranslate" />

          <meta
            property="og:title"
            content="review.it - Revise seu código facilmente!"
          />
          <meta
            property="og:description"
            content="Plataforma feita para revisar seus códigos!"
          />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content="review.it - Revise seu código facilmente!"
          />
          <meta property="og:image" content="/ogimage.png" />
          <meta property="og:image:secure_url" content="/ogimage.png" />
          <meta property="og:image:alt" content="Thumbnail" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta
            name="twitter:title"
            content="review.it - Revise seu código facilmente!"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/ogimage.png" />
          <meta name="twitter:image:src" content="/ogimage.png" />
          <meta name="twitter:image:alt" content="Thumbnail" />
          <meta name="twitter:image:width" content="1200" />
          <meta name="twitter:image:height" content="620" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
