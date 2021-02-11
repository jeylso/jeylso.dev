import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class JeylsoDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <main className="flex h-screen items-center justify-center">
            <Main />
          </main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default JeylsoDocument;
