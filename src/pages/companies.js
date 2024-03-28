import useCompanies from '../hooks/useCompanies'
import CompanyCard from '../old-components/CompanyCard'
import LoadingFooter from '../old-components/LoadingFooter'
import Sponsor from '../old-components/Sponsor'

export default function Home() {
  const { data: companies, loading } = useCompanies()

  return (
    <div>
      <div className="flex flex-col items-center h-full w-full space-y-1">
        <Sponsor />
        <h1>Empresas:</h1>
        <div className="flex flex-wrap justify-center gap-2 py-4">
          {companies?.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
            />
          ))}
          {loading && <LoadingFooter />}
        </div>
      </div>
    </div>
  )
}
