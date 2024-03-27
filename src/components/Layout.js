import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

import Head from './Head'
import Navbar from './Navbar'

export default function Layout({ previewImage, children }) {
  return (
    <>
      <Head
        previewImage={previewImage}
      />
      <Box
        width="100%"
        height="100%"
      >
        <Navbar />
        <Box
          pt={10}
        >
          { children }
        </Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  previewImage: PropTypes.string,
}
