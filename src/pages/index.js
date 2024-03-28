import useThrottledCallback from 'beautiful-react-hooks/useThrottledCallback'
import useWindowScroll from 'beautiful-react-hooks/useWindowScroll'
import { useEffect, useRef } from 'react'
import useRants from '../hooks/useRants'
import Disclaimer from '../old-components/Disclaimer'
import RantCard from '../old-components/RantCard'
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {rants?.map((rant) => (
            <RantCard
              key={rant.id}
              rant={rant}
            />
          ))}
          {loading && (
            <div className="flex flex-col items-center justify-center w-full pt-6">
              <div
                role="loading"
                className="self-center justify-self-center"
              >
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-accent fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
              <h4 className="text-lg font-regular">Carregando...</h4>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
