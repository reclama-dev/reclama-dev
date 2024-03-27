import {
  Alert,
} from '@mui/material'
import Link from 'next/link'

export default function Disclaimer() {
  return (
    <Alert variant="outlined" severity="info">
      <b>
        Todas as opiniões expressas nesta página não necessariamente refletem a
        opinião do mantenedor deste board.
      </b>
      <br />
      Todo o conteúdo exibido aqui reflete as respostas dos usuários que está
      {' '}
      <Link
        label="Fonte dos Dados"
        rel="noopener noreferrer"
        target="_blank"
        href="https://docs.google.com/spreadsheets/d/1u1_8ND_BY1DaGaQdu0ZRZPebrOaTJekE9hyw_7BAlzw/htmlview?usp=sharing"
      >
        nesta planilha
      </Link>
      ,
      {' '}
      que pode ser respondida publicamente.
    </Alert>
  )
}
