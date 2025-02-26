"use client"
import React from 'react'
import ItemLayout from './ItemLayout'

const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
      <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>

        <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
          <h2 className=' text-xl md:text-2xl text-left w-full capitalize'>
            Chief Flight Director
          </h2>
          <p className='font-light text-xs sm:text-sm md:text-base'>
            My odyssey in web development orbits around an arsenal of tools and languages, with JavaScript as the guiding star of my web engineering. I navigate frameworks like React.js and Next.js with precision, forging seamless portals (websites) that unite realms (users) across the digital cosmos. The disciplines of the JAMstack empower me to engineer swift, secure, and dynamic experiences, while my design acumen ensures every creation is not only functional but also visually captivating. Embark with me as I chart new courses through technologies, shaping the future of the web.
          </p>
        </ItemLayout>


        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
            18+ <sub className='font-semibold text-base'>Clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
            4+ <sub className='font-semibold text-base'>Years of Experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/top-langs?username=JackSawyerWATX&layout=pie&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false' alt="JackSawyer" loading='lazy' />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api?username=JackSawyerWATX&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false' alt="JackSawyer" loading='lazy' />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img className='w-full h-auto' src='https://skillicons.dev/icons?i=anaconda,angular,apollo,apple,atom,aws,bash,bootstrap,codepen,css,django,dynamodb,express,figma,flask,gatsby,git,github,html,idea,java,js,jquery,linux,mongodb,mysql,nextjs,nodejs,npm,postgres,powershell,pycharm,py,pytorch,react,regex,replit,spring,sqlite,stackoverflow,sklearn,tailwind,tensorflow,threejs,ts,vscode' alt="JackSawyer" loading='lazy' />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p=0"}>
          <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=JackSawyerWATX&theme=gotham&hide_border=true&short_numbers=true&date_format=j%20M%5B%20Y%5D&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="JackSawyer" loading='lazy' />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/pin/?username=JackSawyerWATX&repo=Nextjs-Creative-Portfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2' alt="JackSawyer" loading='lazy' />
        </ItemLayout>

        {/* https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=github-readme-stats */}

      </div>
    </section >
  )
}

export default AboutDetails