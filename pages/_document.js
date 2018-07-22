import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>

          <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" />
          <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
          <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css' />
          <link href='/assets/img/favicon.ico' rel='shortcut icon' />

          <link rel="stylesheet" href="/_next/static/style.css" />


          <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
          <script type="text/javascript" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
          <script type="text/javascript" src="https://www.google.com/jsapi"></script>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}