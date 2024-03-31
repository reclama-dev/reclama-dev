import useCompanies from '../hooks/useCompanies'
import CompanyCard from '../old-components/CompanyCard'
import LoadingFooter from '../old-components/LoadingFooter'
import Sponsor from '../old-components/Sponsor'

export default function Home() {
  const { data: companies, loading } = useCompanies()

  return (
    <div className="p-5">
      <div className="flex flex-col items-center h-full w-full space-y-1">
        <Sponsor />
        <h1 className="text-2xl font-semibold py-4">Empresas:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {companies?.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
            />
          ))}
        </div>
        {loading && <LoadingFooter />}
      </div>
    </div>
  )
}
