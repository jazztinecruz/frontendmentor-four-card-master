import Card from '../components/Card'

export default function Home() {
  return (
    <div className='grid grid-rows-[auto,1fr] gap-20 '>

      <div className='grid grid-flow-row gap-1 text-center md:align-center'>
        <h1 className='text-2xl md:text-3xl'>Reliable, efficient delivery</h1>
        <h1 className='text-2xl font-bold text-blueBlack md:text-3xl'>Powered by Technology</h1>
        <p className='mt-4 text-[16px] text-lightGray lg:px-80'>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      </div>

      <div className='grid grid-rows-1 gap-5 md:grid-rows-4 md:grid-cols-3'>

        <Card
          title='Team Builder'
          description='Scans our talent network to create the optimal team for your project'
        />

        <Card
          title='Supervisor'
          description='Monitors Activity to identify project roadblocks'
        />

        <Card
          title='Calculator'
          description='Uses data from past projects to provide better delivery estimates'
        />

        <Card
          title='Karma'
          description='Regularly evaluates our talent to ensure quality'
        />
      </div>
    </div>
  )
}
