import Document, { Html, Head, Main, NextScript }from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="keywords" content="TADS, IFPR, Tecnologia" />
          <meta name="theme-color" content="#04D361" />


          <meta name="title" content="" />
          <meta name="description" content="Website para auxiliar os discentes do curso de Tecnologia em Analise e Desenvolvimento de Sistemas do IFPR campus Londrina - Turma 2020" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tads.dev/" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="Website para auxiliar os discentes do curso de Tecnologia em Analise e Desenvolvimento de Sistemas do IFPR campus Londrina - Turma 2020" />
          <meta property="og:image" content="https://tads.dev/img/mio-logo-share.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://tads.dev/" />
          <meta property="twitter:title" content="" />
          <meta property="twitter:description" content="Website para auxiliar os discentes do curso de Tecnologia em Analise e Desenvolvimento de Sistemas do IFPR campus Londrina - Turma 2020" />
          <meta property="twitter:image" content="https://tads.dev/img/mio-logo-share.jpg" />

          <link rel="shortcut icon" href="favicon.svg" type="image/x-icon"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}