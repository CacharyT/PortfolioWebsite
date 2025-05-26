import Footer from './components/footer'
import Image from 'next/image'
import profilePicture from '../public/Profile picture.png'

export default function Home() {
  return (
    <section>

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, Cachary here!
      </h1>

      <Image
        src={profilePicture}
        alt="Profile picture of Cachary Tolentino"
        width={200}
        height={200}
        className="rounded-full mx-auto shadow-lg mb-8"
      />

      <p className="mb-4">
        {`I am a recent graduate of Stockton University and an aspiring data analyst. 
        I have knowledge of using Python, Excel, Power BI, Tableau, and SQL for database management and data analysis. 
        I am open to any sector in the industry so that I can use my data analytical skills to find meaningful data.`}
      </p>
      <Footer />
    </section>
  )
}