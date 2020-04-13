import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export enum TrackEvent {
  Signup = 'signup',
}

type PlausibleArgs = [TrackEvent, () => void] | [TrackEvent]

declare global {
  const plausible: {
    (...args: PlausibleArgs): void
    q?: PlausibleArgs[]
  }

  interface Window {
    plausible?: typeof plausible
  }
}

// extending classes in Javascript?! The official suggestion from the Next.js team:
// https://github.com/zeit/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <script
            async
            defer
            data-domain="topthreethings.com"
            src="https://plausible.io/js/plausible.js"
          />
          <script
            dangerouslySetInnerHTML={{
              __html:
                'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }',
            }}
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
