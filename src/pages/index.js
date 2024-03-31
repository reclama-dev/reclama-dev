import { RenderRantCards } from '@/components/app/RenderRantCards'
import LoadingFooter from '@/old-components/LoadingFooter'
import useThrottledCallback from 'beautiful-react-hooks/useThrottledCallback'
import useWindowScroll from 'beautiful-react-hooks/useWindowScroll'
import { useEffect, useRef } from 'react'
import useRants from '../hooks/useRants'
import Disclaimer from '../old-components/Disclaimer'
import Sponsor from '../old-components/Sponsor'

export default function Home() {
  const paginationRef = useRef(null)
  const { data: rants, fetchMore, loading } = useRants()

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
    <section className="max-w-screen w-full min-h-screen p-5 subpixel-antialiased">
      <div className="flex flex-col items-center h-full w-full gap-2">
        <div className="flex flex-col gap-2">
          <Disclaimer />
          <Sponsor />
        </div>
        <h1 className="font-semibold text-2xl my-3">Últimas reclamações:</h1>
        <RenderRantCards rants={rants} />
        {loading && <LoadingFooter />}
      </div>
    </section>
  )
}
