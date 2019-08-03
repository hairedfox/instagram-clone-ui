import Document, { Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head/>
        <body className="container">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
