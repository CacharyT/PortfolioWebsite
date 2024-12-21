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
        {`I am a current student at Stockton University and an aspiring data analyst. 
        I am currently practicing my skills in working on Python, Excel, Power BI, Tableau and SQL. 
        I am open to any sectors in the industry so that I can use my data analytical skills to find meaningful data.`}
      </p>
      <Footer />
    </section>
  )
}