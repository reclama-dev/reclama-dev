import RantCard from '@/old-components/RantCard'

export const RenderRantCards = ({ rants }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
      {rants.map((rant) => (
        <RantCard
          key={rant.id}
          rant={rant}
        />
      ))}
    </div>
  )
}
