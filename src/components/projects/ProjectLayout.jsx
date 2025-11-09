import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 }
}

const NavLink = motion(Link)

const ProjectLayout = ({ name, description, date, demoLink }) => {
    return (
        <NavLink
            variants={item}
            href={demoLink}
            target={"_blank"}
            className='text-xs xxs:text-sm md:text-base flex flex-col xxs:flex-row items-start xxs:items-center justify-between w-full relative rounded-lg overflow-hidden p-3 xxs:p-4 md:p-6 custom-bg space-y-2 xxs:space-y-0'>
            <div className='flex flex-col xxs:flex-row xxs:items-center space-y-1 xxs:space-y-0 xxs:space-x-2 flex-shrink-0'>
                <h2 className='text-foreground font-medium whitespace-nowrap'>{name}</h2>
                <p className='text-muted text-xs xxs:text-sm hidden sm:block'>{description}</p>
            </div>
            <div className='hidden xxs:block flex-1 mx-2 border-b border-dashed border-muted' />
            <p className='text-muted xxs:text-muted sm:text-foreground text-xs xxs:text-sm flex-shrink-0'>
                {new Date(date).toDateString()}
            </p>
        </NavLink>
    )
}

export default ProjectLayout

