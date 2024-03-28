import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {} from '@mui/material'
import { SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useMemo } from 'react'
import ShareButton from './ShareButton'

export default function RantCard({ rant, hideCompanyButton }) {
  const link = useMemo(() => `/rant/${rant.id}`, [rant])

  return (
    <Card className="flex flex-col h-full min-h-80 max-w-md shadow-sm p-2 py-4">
      <CardHeader className="p-2 mb-2 gap-2">
        <h5 className="flex flex-col justify-center gap-1 items-center font-semibold text-xl">
          {rant.company.name}
          {!hideCompanyButton && (
            <Link
              href={`/company/${rant.company.id}`}
              className="bg-accent flex gap-2 items-center text-accent-foreground hover:bg-accent-foreground/10 px-4 py-2 rounded-md text-xs font-medium transition-colors"
            >
              Ver empresa
              <SquareArrowOutUpRight size={14} />
            </Link>
          )}
        </h5>
        <Separator className="mb-4" />
      </CardHeader>
      <CardContent className="mb-10 flex-1">
        <p className="text-base text-primary dark:text-card-foreground/50 font-regular text-justify">
          {rant.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <ShareButton link={link} />
        <p
          className="text-zinc-400 text-xs font-regular"
          sx={{
            fontSize: '0.75em',
          }}
        >
          Adicionado em: {new Date(rant.createdAt).toLocaleString()}
        </p>
      </CardFooter>
    </Card>
  )
}

RantCard.propTypes = {
  rant: PropTypes.object,
  hideCompanyButton: PropTypes.bool,
}
