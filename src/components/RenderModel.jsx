"use client"

import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'
import useScreenSize from './hooks/useScreenSize'

const RenderModel = ({ children, className }) => {
    const size = useScreenSize()
    const isMobile = size < 768
    
    return (
        <Canvas
            className={clsx("w-screen h-screen -z-10 relative", className)}
            camera={{
                position: isMobile ? [0, 0, 5] : [0, 0, 8],
                fov: isMobile ? 45 : 35
            }}
            performance={{ min: isMobile ? 0.5 : 0.8 }}
            dpr={isMobile ? [1, 1.5] : [1, 2]}
        >
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Environment preset='sunset' />
        </Canvas>
    )
}

export default RenderModel


// (property) preset?:
// | "apartment"
// | "city"
// | "dawn"
// | "forest"
// | "lobby"
// | "night"
// | "park"
// | "studio"
// | "sunset"
// | "warehouse"