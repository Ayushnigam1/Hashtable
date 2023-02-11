import React from 'react'
import { createGetInitialProps } from '@mantine/next';
import { Html, Head, Main, NextScript } from 'next/document'

const getInitialProps = createGetInitialProps();

export default class _document extends React.Component {
    static getInitialProps = getInitialProps;

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.css"/>
                </body>
            </Html>
        )
    }

}
