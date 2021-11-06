import Image from 'next/image'

const Card = ({ title, description }) => {

  const getTitle = (title) => {
    if (title === 'Team Builder') return '/icon-team-builder.svg'
    if (title === 'Calculator') return '/icon-calculator.svg'
    if (title === 'Supervisor') return '/icon-supervisor.svg'
    if (title === 'Karma') return '/icon-karma.svg'
  }

  const getCardColor = (title) => {
    if (title === 'Team Builder') return 'bg-red'
    if (title === 'Calculator') return 'bg-blue'
    if (title === 'Supervisor') return 'bg-blueGreen'
    if (title === 'Karma') return 'bg-orange'
  }

  const getGridSpan = (title) => {
    if (title === 'Team Builder') return 'md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3'
    if (title === 'Calculator') return 'md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-4'
    if (title === 'Supervisor') return 'md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4'
    if (title === 'Karma') return 'md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-5'
  }

  return (
    <div className={`grid grid-rows-[auto,1fr] gap-5 border-[1px] rounded-md shadow-primary cursor-pointer ${getGridSpan(title)}`}>
      <div className={`h-1 rounded-tl-md rounded-tr-md ${getCardColor(title)}`}></div>

      <div className='grid grid-flow-row gap-4 px-8'>
        <h1 className='text-2xl text-blueBlack font-semibold'>{title}</h1>
        <p className='text-sm text-lightGray'>{description}</p>

        <div className='relative w-[67px] h-[67px] ml-auto mt-4'>
          <Image
            src={getTitle(title)}
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>

      <div className={`w-0 ${getCardColor(title)} hover:w-full group-hover:transition ease-in-out duration-500`}>
        <h1 className='opacity-0'>loremsdsddsddsdsdsdsdsdddddddddddddddd</h1>
      </div>
    </div>
  );
}
export default Card;