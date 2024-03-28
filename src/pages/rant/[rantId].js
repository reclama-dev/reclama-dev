import useThrottledCallback from 'beautiful-react-hooks/useThrottledCallback'
import useWindowScroll from 'beautiful-react-hooks/useWindowScroll'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import useRant from '../../hooks/useRant'
import useRants from '../../hooks/useRants'
import Disclaimer from '../../old-components/Disclaimer'
import LoadingFooter from '../../old-components/LoadingFooter'
import RantCard from '../../old-components/RantCard'
import Sponsor from '../../old-components/Sponsor'

export default function Home() {
  const paginationRef = useRef(null)
  const router = useRouter()
  const { rantId } = router.query
  const { data: rant, loadinRant } = useRant(rantId)
  const { data: rants, loading, fetchMore } = useRants({ skip: !rant })

  useEffect(() => {
    paginationRef.current = {
      loading,
      fetchMore: () => fetchMore(),
    }
  }, [loading, fetchMore])

  const onWindowScroll = useWindowScroll()
  onWindowScroll(
    useThrottledCallback(
      () => {
        if (!paginationRef.current) {
          return
        }

        if (paginationRef.current.loading) {
          return
        }

        const viewportHeight = window.innerHeight
        const { scrollHeight } = document.documentElement
        const scrollBottom = window.scrollY + viewportHeight
        const shouldFetchMore = scrollHeight - scrollBottom < viewportHeight
        if (shouldFetchMore) {
          paginationRef.current.fetchMore()
        }
      },
      [],
      100,
    ),
  )

  return (
    <section className="py-5">
      <div className="flex flex-col items-center h-full w-full space-y-1">
        <Disclaimer />
        <Sponsor />
        <h1 className="text-2xl font-semibold py-4">Reclamação:</h1>
        {rant && <RantCard rant={rant} />}
        {loadinRant && <LoadingFooter />}
        {rant && (
          <>
            <h1 className="text-2xl font-semibold pt-8 pb-4">
              Últimas Reclamações:
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
              {rants?.map((rantItem) => (
                <RantCard
                  key={rantItem.id}
                  rant={rantItem}
                />
              ))}
              {loading && <LoadingFooter />}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
