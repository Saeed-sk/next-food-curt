import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html dir={"rtl"}>
                <Head>
                    <meta name="description"
                          content="A site for demonstrating use of _document file"/>
                    <meta http-equiv="Content-Type"
                          content="text/html;charset=UTF-8"/>
                    <meta name="author"
                          content="GeeksForGeeks"/>
                    <meta name="keywords"
                          content="NextJS,GFG,custom document next,custom app next"/>
                    <link rel="shortcut icon"
                          href="favicon.ico"
                          type="image/x-icon"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}