import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

import Head from './Head'
import Navbar from './Navbar'

export default function Layout({ title, previewImage, children }) {
  return (
    <>
      <Head
        title={title}
        previewImage={previewImage}
      />
      <Box
        width="100%"
        height="100%"
      >
        <Navbar />
        <Box
          pt={10}
          px={2}
        >
          { children }
        </Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  previewImage: PropTypes.string,
}
