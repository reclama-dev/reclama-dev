import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertTitle } from '@mui/material'
import { AlertOctagonIcon } from 'lucide-react'
import Link from 'next/link'

export default function Disclaimer() {
  return (
    <Alert
      variant="warning"
      className="max-w-3xl"
    >
      <AlertTitle>
        <div className="flex gap-2 mb-2">
          <AlertOctagonIcon className="w-6 h-6 mr-2" />
          Isenção de responsabilidade!
        </div>
        <span className="text-sm">
          Todas as opiniões expressas nesta página não necessariamente refletem
          a opinião do mantenedor deste board.
        </span>
      </AlertTitle>
      <AlertDescription>
        Todo o conteúdo exibido aqui reflete as respostas dos usuários que está{' '}
        <Link
          className="underline text-blue-500 hover:text-blue-700"
          label="Fonte dos Dados"
          rel="noopener noreferrer"
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/1u1_8ND_BY1DaGaQdu0ZRZPebrOaTJekE9hyw_7BAlzw/htmlview?usp=sharing"
        >
          nesta planilha
        </Link>
        , que pode ser respondida publicamente.
      </AlertDescription>
    </Alert>
  )
}
