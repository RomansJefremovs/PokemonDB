import { Children } from 'react';
import Document, { Html, Main, Head, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { fonts } from './_app';
import { globalStyles } from '../styles';
import type { DocumentContext, DocumentProps } from 'next/document';

const Doc = (props: DocumentProps) => {
    const { locale } = props;

    return (
        <Html dir="ltr" lang={locale}>
            <Head>
                <base href="/" />
                <meta charSet="utf-8" />
                <link href="/favicon.ico" rel="icon" />
                <meta content="yes" name="mobile-web-app-capable" />
                <meta content="yes" name="apple-mobile-web-app-capable" />
                <meta content="IE=edge, chrome=1" httpEquiv="X-UA-Compatible" />
                <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
};

Doc.getInitialProps = async (context: DocumentContext) => {
    globalStyles();

    const initialProps = await Document.getInitialProps(context);

    const nextFontStyles = () => {
        const __html = `:root {
      --font-orbitron: ${fonts.orbitron};
    }`;

        return <style key="next-font" dangerouslySetInnerHTML={{ __html }} id="next-font" />;
    };

    return {
        ...initialProps,
        styles: Children.toArray([initialProps.styles, CssBaseline.flush(), nextFontStyles()])
    };
};

export default Doc;
