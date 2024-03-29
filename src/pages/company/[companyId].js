import { useRouter } from 'next/router'
import { useMemo } from 'react'
import useRants from '../../hooks/useRants'
import Disclaimer from '../../old-components/Disclaimer'
import LoadingFooter from '../../old-components/LoadingFooter'
import RantCard from '../../old-components/RantCard'
import Sponsor from '../../old-components/Sponsor'

export default function Home() {
  const router = useRouter()
  const { companyId } = router.query
  const { data: companyRants, loading } = useRants({ companyId })
  const rants = useMemo(
    () => companyRants.filter((r) => r.company.id === companyId),
    [companyId, companyRants],
  )

  return (
    <div className="p-5">
      <div className="flex flex-col items-center size-full gap-2">
        <Disclaimer />
        <Sponsor />
        <h1 className="text-2xl font-semibold py-4">
          Reclamações {companyRants[0].company.name}:
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {rants?.map((rant) => (
            <RantCard
              key={rant.id}
              rant={rant}
              hideCompanyButton
            />
          ))}
          {loading && <LoadingFooter />}
        </div>
      </div>
    </div>
  )
}
