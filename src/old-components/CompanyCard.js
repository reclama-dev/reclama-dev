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
        <Button
          component={Link}
          href={`/company/${company.id}`}
          variant="contained"
          color="primary"
        >
          Ver Reclamações
        </Button>
      </div>
    </Card>
  )
}

CompanyCard.propTypes = {
  company: PropTypes.object,
}
