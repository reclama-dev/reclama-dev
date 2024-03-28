import {
  Alert,
} from '@mui/material'
import Link from 'next/link'

export default function Sponsor() {
  return (
    <Alert variant="outlined" severity="success">
      <b>
        Quer converter sua planilha em uma API REST de forma rápida e fácil?
        Acesse
      </b>
      {' '}
      <Link
        rel="noopener"
        target="_blank"
        href="https://sheetapi.rest"
      >
        Sheet API 📌
      </Link>
      .
    </Alert>
  )
}
