import Image from 'next/image'
import project1 from '../../public/project-1.png'
import project2 from '../../public/project-2.png'
import project3 from '../../public/project-3.png'
import project4 from '../../public/project-4.png'
import project5 from '../../public/project-5.png'
import project6 from '../../public/project-6.jpg'
import project7 from '../../public/project-7.png'
import project8 from '../../public/project-8.png'
import project9 from '../../public/project-9.png'

export default function Projects() {
    return (
      <section>
        <div className='mb-4 sm:mb-8 md:mb-12 lg:mb-12'>
            <h1 className="text-4xl font-semibold tracking-tighter mb-1">
                Projects
            </h1>
            <h2 className="text-sm text-gray-500">
                Things that I&apos;ve made. 
            </h2>
        </div>

        {/*Projects Gallery*/}
        <section className='md:mt-6'>
            <div className='experience-details-container'>
                <div className='about-containers flex flex-wrap gap-4'>
                    {/*Contains All the Projects in Card Format */}
                    <div className="details-container color-container border border-solid border-black p-4 flex flex-col w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]">
                        <div className="article-container">
                            <Image src={project1} alt="Project 1" className="rounded-lg w-full h-auto" />
                        </div>
                        <h2 className="experience-sub-title project-title mt-2 text-lg font-medium">
                            3D Island Environment
                        </h2>
                        <div className="btn-container mt-auto pt-2">
                            <a className="btn btn-color-2 project-btn border border-black rounded px-4 py-2" href='https://github.com/CacharyT/IslandProject' target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </div>
                    </div>
                    <div className="details-container color-container border border-solid border-black p-4 flex flex-col w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]">
                        <div className="article-container">
                            <Image src={project2} alt="Project 2" className="rounded-lg w-full h-auto" />
                        </div>
                        <h2 className="experience-sub-title project-title mt-2 text-lg font-medium">
                            2D Platformer
                        </h2>
                        <div className="btn-container mt-auto pt-2">
                            <a className="btn btn-color-2 project-btn border border-black rounded px-4 py-2" href='https://github.com/CacharyT/2DPlatformerProject' target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </div>
                    </div>
                    <div className="details-container color-container border border-solid border-black p-4 flex flex-col w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]">
                        <div className="article-container">
                            <Image src={project3} alt="Project 3" className="rounded-lg w-full h-auto" />
                        </div>
                        <h2 className="experience-sub-title project-title mt-2 text-lg font-medium">
                            Tetris Clone
                        </h2>
                        <div className="btn-container mt-auto pt-2">
                            <a className="btn btn-color-2 project-btn border border-black rounded px-4 py-2" href='https://github.com/CacharyT/Tetris' target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </div>
                    </div>
                    <div className="details-container color-container border border-solid border-black p-4 flex flex-col w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]">
                        <div className="article-container">
                            <Image src={project4} alt="Project 4" className="rounded-lg w-full h-auto" />
                        </div>
                        <h2 className="experience-sub-title project-title mt-2 text-lg font-medium">
                            Breakout/Pong Clone
                        </h2>
                        <div className="btn-container mt-auto pt-2">
                            <a className="btn btn-color-2 project-btn border border-black rounded px-4 py-2" href='https://github.com/CacharyT/Breakout-Pong' target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </div>
                    </div>
                    <div className="details-container color-container border border-solid border-black p-4 flex flex-col w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]">
                        <div className="article-container">
                            <Image src={project5} alt="Project 5" className="rounded-lg w-full h-auto" />
                        </div>
                        <h2 className="experience-sub-title project-title mt-2 text-lg font-medium">
                            Pacman Clone
                        </h2>
                        <div className="btn-container mt-auto pt-2">
                            <a className="btn btn-color-2 project-btn border border-black rounded px-4 py-2" href='https://github.com/CacharyT/Pacman-Clone' target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </div>
                    </div>
                    <div className="details-container color-container border border-solid border-black p-4 flex flex-col w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]">
                        <div className="article-container">
                            <Image src={project6} alt="Project 5" className="rounded-lg w-full h-auto" />
                        </div>
                        <h2 className="experience-sub-title project-title mt-2 text-lg font-medium">
                            The Pack SSC Gym App
                        </h2>
                        <div className="btn-container mt-auto pt-2">
                            <a className="btn btn-color-2 project-btn border border-black rounded px-4 py-2" href='https://github.com/tylermong/The-Pack' target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </div>
                    </div>
                    <div className="details-container color-container border border-solid border-black p-4 flex flex-col w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]">
                        <div className="article-container">
                            <Image src={project7} alt="Project 5" className="rounded-lg w-full h-auto" />
                        </div>
                        <h2 className="experience-sub-title project-title mt-2 text-lg font-medium">
                            Diabetes Analysis
                        </h2>
                        <div className="btn-container mt-auto pt-2">
                            <a className="btn btn-color-2 project-btn border border-black rounded px-4 py-2" href='https://github.com/CacharyT/KDDM-Diabetes' target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </div>
                    </div>
                    <div className="details-container color-container border border-solid border-black p-4 flex flex-col w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]">
                        <div className="article-container">
                            <Image src={project8} alt="Project 5" className="rounded-lg w-full h-auto" />
                        </div>
                        <h2 className="experience-sub-title project-title mt-2 text-lg font-medium">
                            Nike Global Sales Dashboard
                        </h2>
                        <div className="btn-container mt-auto pt-2">
                            <a className="btn btn-color-2 project-btn border border-black rounded px-4 py-2" href='https://github.com/CacharyT/Nike-Global-Sales-Dashboard?tab=readme-ov-file' target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </div>
                    </div>
                    <div className="details-container color-container border border-solid border-black p-4 flex flex-col w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]">
                        <div className="article-container">
                            <Image src={project9} alt="Project 5" className="rounded-lg w-full h-auto" />
                        </div>
                        <h2 className="experience-sub-title project-title mt-2 text-lg font-medium">
                            Retail Stores Sales EDA
                        </h2>
                        <div className="btn-container mt-auto pt-2">
                            <a className="btn btn-color-2 project-btn border border-black rounded px-4 py-2" href='https://github.com/CacharyT/Retail-Stores-Sales-EDA' target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </section>
    )
  }