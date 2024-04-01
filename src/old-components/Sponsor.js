import { Alert } from '@/components/ui/alert'
import Link from 'next/link'

export default function Sponsor() {
  return (
    <Alert
      variant="success"
      className="max-w-3xl"
    >
      <b>
        Quer converter sua planilha em uma API REST de forma rápida e fácil?
        Acesse
      </b>
      {' '}
      <Link
        rel="noopener"
        target="_blank"
        href="https://sheetapi.rest"
        className="underline"
      >
        Sheet API 📌
      </Link>
      .
      <br/>
      Utilize o cupom <b>RECLAMA50</b> para 50% de desconto por 12 meses.
    </Alert>
  )
}
