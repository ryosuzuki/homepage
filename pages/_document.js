import Document, { Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from './_analytics'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>

          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" />
          <link href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" rel="stylesheet" />
          <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css' />
          <link href='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.css' rel='stylesheet' type='text/css' />

          <link href='/assets/img/favicon.ico' rel='shortcut icon' />

          <link rel="stylesheet" href="/static/css/style.css" />


          <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
          <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
          <script type="text/javascript" src="https://www.google.com/jsapi"></script>
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.js"></script>

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}}
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
