import Image from 'next/image'
import about2 from '../../public/about2.jpg'
import about3 from '../../public/about3.jpg'
import about4 from '../../public/about4.jpg'
import stocktonlogo from '../../public/stockton-logo.png'
import { Mail, MoveUpRight, Linkedin, Github } from "lucide-react"

export default function About() {
    return (
      <section>
        <div className='mb-4 sm:mb-8 md:mb-12 lg:mb-12'>
            <h1 className="text-4xl font-semibold tracking-tighter mb-1">
                About
            </h1>
            <h2 className="text-sm text-gray-500">
                A little bit of me.
            </h2>
        </div>

        {/*Picture Gallery*/}
        <div className="flex animate-in flex-col sm:mb-4 md:mb-4">

            {/*Images of Me*/}
            <section className="relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:flex md:flex-row justify-center">
                <Image src={about2} alt="Image 2" className="rounded-lg transform md:-rotate-3 md:translate-x-2 hidden sm:block" width={200} height={200} />
                <Image src={about4} alt="Image 4" className="rounded-lg transform md:-rotate-3 md:translate-x-2 hidden sm:block" width={200} height={200} />
                <Image src={about3} alt="Image 3" className="rounded-lg transform md:-rotate-3 md:translate-x-2 mx-auto" width={200} height={200} />
            </section>
        </div>

        {/*About Me*/}
        <div className="flex animate-in flex-col gap-16 md:gap-24 mt-4 sm:mt-8 md:mt-20 lg:mt-32">
            {/*About*/}
            <section className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9">
                <h2 className="text-black shrink-0 md:w-32">
                    About 
                </h2>
                <div className="flex flex-col gap-6">
                    <p className='font-semibold'>
                        Hello, I'm Cachary Tolentino! You can also call me Rance.
                        I'm from the Phillipines but now live in New Jersey.
                    </p>
                    <p className='font-semibold'>
                        I'm currently a student in Stockton University studying Computer Science.
                        I also work as a student aid/grader for Professor Yitzhak. 
                        I'm also an EOF mentor for incoming EOF students.
                    </p>
                    <p className='font-semibold'>
                        I've recently learned about the wonders of big data. 
                        More specifically, about the insights that can be found from data.
                        Hence, my new found passion for data analytics.
                    </p>
                    <p className='font-semibold'>
                        When I'm not coding or doing analysis, I'm often found in the gym or simply
                        reading some comics! I also do some game development on the side.
                    </p>
                </div>
            </section>
        </div>

        {/*Contacts*/}
        <div className="flex animate-in flex-col gap-16 md:gap-24 mt-4 sm:mt-8 md:mt-20 lg:mt-32">
            {/*Contacts*/}
            <section className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9">
                <h2 className="text-black shrink-0 md:w-32">
                    Contacts
                </h2>

                <ul className='animated-list grid flex-frow grid-cols-1 gap-3 md:grid-cols-2'>
                    <li className='col-span-1 transition-opacity'>
                        <a className='underline-offset-4 underline inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity' target="_blank" href="mailto:tolenti2@go.stcokton.edu">
                            <div className='flex items-center gap-3'>
                                <span className='text-xl'>
                                    <Mail/>
                                </span>
                                Email
                                <MoveUpRight className='ml-auto'/>
                            </div>
                        </a>
                    </li>

                    <li className='col-span-1 transition-opacity'>
                        <a className='underline-offset-4 underline inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity' target="_blank" href="https://www.linkedin.com/in/cachary-tolentino-304796278/">
                            <div className='flex items-center gap-3'>
                                <span className='text-xl'>
                                    <Linkedin/>
                                </span>
                                LinkedIn
                                <MoveUpRight className='ml-auto'/>
                            </div>
                        </a>
                    </li>

                    <li className='col-span-1 transition-opacity'>
                        <a className='underline-offset-4 underline inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity' target="_blank" href="https://github.com/CacharyT">
                            <div className='flex items-center gap-3'>
                                <span className='text-xl'>
                                    <Github/>
                                </span>
                                Github
                                <MoveUpRight className='ml-auto'/>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </div>

        {/*Experience*/}
        <div className="flex animate-in flex-col gap-16 mb-32 md:gap-24 mt-4 sm:mt-8 md:mt-20 lg:mt-32">
            {/*Experience*/}
            <section className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9">
                <h2 className="text-black shrink-0 md:w-32">
                    Experience
                </h2>

                <div className='flex w-full flex-col gap-8'>
                    <p className='font-semibold'>
                        In my undergraduate studies I specialized in Software Engineering related 
                        skills. As such I am proficient in Java and Python. I've also learned 
                        NextJS which is accompanied by Typescript, React, Tailwind CSS, and many more. 
                        For game development I know Unity, Unreal, Pixel Art and C#/C++.
                        I am currently learning MySQL, Excel, Tableau, and Power BI for data analysis. 
                    </p>
                    <ul className='flex flex-col gap-8 animated-list'>
                        <li className='transition-opacity'>
                            <a className="underline-offset-4 underline flex justify-between w-full px-3 py-2 -mx3 -my-2 no-underline" target="_blank" href="mailto:Yitzhak.Sharon@stockton.edu">
                                <div className='flex items-center gap-4'>
                                    <Image src={stocktonlogo} alt='stockton logo' width={48} height={48} />
                                    <div className='flex flex-col gap-px'>
                                        <h3 className='font-semibold'>Student Aid/Grader</h3>
                                        <p className='text-black'>Stockton University - Professor Yitzhak</p>
                                    </div>
                                </div>
                                <time className='text-black'>2023 - Present</time>
                            </a>
                        </li>
                        <li className='transition-opacity'>
                            <a className="underline-offset-4 underline flex justify-between w-full px-3 py-2 -mx3 -my-2 no-underline" target="_blank" href="mailto:Naheel.Naber@stockton.edu">
                                <div className='flex items-center gap-4'>
                                    <Image src={stocktonlogo} alt='stockton logo' width={48} height={48} />
                                    <div className='flex flex-col gap-px'>
                                        <h3 className='font-semibold'>EOF Mentor</h3>
                                        <p className='text-black'>Stockton University - Naheel Naber</p>
                                    </div>
                                </div>
                                <time className='text-black'>2023 - Present</time>
                            </a>
                        </li>
                    </ul>
                </div>
                
            </section>
        </div>
      </section>
    )
  }
  