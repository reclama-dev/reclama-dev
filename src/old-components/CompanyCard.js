import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import PropTypes from 'prop-types'

export default function CompanyCard({ company }) {
  return (
    <Card className="flex flex-col max-w-md items-center shadow-sm">
      <div className="flex flex-col justify-center p-2 gap-1">
        <h5
          className="text-xl font-semibold text-center"
          variant="h5"
          sx={{
            textAlign: 'center',
          }}
        >
          {company.name}
        </h5>
        <Link
          href={`/company/${company.id}`}
          className="dark:text-accent-foreground/70 hover:bg-accent/90 dark:hover:bg-accent/90 hover:dark:text-accent-foreground px-2 py-1 text-center rounded"
        >
          Ver Reclamações
        </Link>
      </div>
    </Card>
  )
}

CompanyCard.propTypes = {
  company: PropTypes.object,
}
