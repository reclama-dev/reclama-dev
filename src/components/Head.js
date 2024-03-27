import React from 'react'
import PropTypes from 'prop-types'

import NextHead from 'next/head'

const DEFAULT_TITLE = 'Reclama.dev'
const DESCRIPTION = 'Onde o dev chora e a mãe não vê!'
const DEFAULT_PREVIEW_IMAGE = 'https://reclama.dev/images/preview-image.png'

export default function Head({
  title,
  previewImage,
}) {
  return (
    <NextHead>
      <title>
        { title ? ` ${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE }
      </title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta charSet="utf-8" />
      <meta property="og:title" content={DEFAULT_TITLE} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="twitter:title" content={DEFAULT_TITLE} />
      <meta property="twitter:description" content={DESCRIPTION} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={previewImage || DEFAULT_PREVIEW_IMAGE} />
      <meta name="theme-color" content="#eeeeee" />
    </NextHead>
  )
}

Head.propTypes = {
  title: PropTypes.string,
  previewImage: PropTypes.string,
}
