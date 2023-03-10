import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-gray-100 min-h-screen'>
           <div className='flex justify-center items-center h-screen'>
                 <p className='bg-purple-800 text-white  p-4 rounded-md text-md md:text-2xl text-center'>This is a dummy dashboard ui built with Next.js and Tailwind css</p>
           </div>
      </main>
    </>
  )
}
