import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useMemo } from 'react'
import ShareButton from './ShareButton'

export default function RantCard({ rant, hideCompanyButton }) {
  const link = useMemo(() => `/rant/${rant.id}`, [rant])

  return (
    <Card className=" h-full min-h-80 max-w-md shadow-sm py-2">
      <CardTitle>
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
        <Separator className="mt-2 mb-4" />
      </CardTitle>
      <CardContent>
        <p className="text-base text-primary dark:text-card-foreground/50 font-regular">
          {rant.description}
        </p>
      </CardContent>
      <CardFooter>
        <ShareButton link={link} />
        <p
          className="text-zinc-400 text-sm font-regular"
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
