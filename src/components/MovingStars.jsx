"use client"

import React, { useEffect, useState } from 'react'
import useScreenSize from './hooks/useScreenSize'

const createStar = () => {
  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * 50 + 50; // Random distance to move the star (ensuring a good range)
  const xDirection = Math.cos(angle) * 1000 + 'px';
  const yDirection = Math.sin(angle) * 1000 + 'px';

  // Random initial position across the screen
  const randomTop = `${Math.random() * 100}%`; // Random top position
  const randomLeft = `${Math.random() * 100}%`; // Random left position

  return {
    id: Math.random(),
    animationDuration: `${Math.random() * 105 + 105}s`,
    xDirection,
    yDirection,
    top: randomTop,
    left: randomLeft,
  }
}

const MovingStars = () => {
  const [stars, setStars] = useState([])
  const size = useScreenSize()

  // Adjust number of stars based on screen size for performance
  const maxStarsOnScreen = size < 768 ? 100 : 200;

  useEffect(() => {
    const addStarPeriodically = () => {
      const newStar = createStar();

      // Remove the first star if the number of stars exceeds maxStarsOnScreen
      setStars((prevStars) => {
        if (prevStars.length >= maxStarsOnScreen) {
          return [...prevStars.slice(1), newStar];
        }
        return [...prevStars, newStar];
      });
    }

    const interval = setInterval(addStarPeriodically, 1000);
    return () => clearInterval(interval);
  }, [maxStarsOnScreen]) // Add maxStarsOnScreen as dependency

  return (
    // This is the scope of the starfield
    <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
      {stars.map((star) => {
        return (
          <div
            key={star.id}
            className='absolute rounded-full w-[10px] h-[10px] bg-star-radial' // Initial size of the stars
            style={{
              top: '50%', //Starting point for stars to move from the center of the screen
              left: '50%',
              animation: `move ${star.animationDuration} infinite`,
              '--x': star.xDirection, // Custom horizontal movement
              '--y': star.yDirection
            }}
          ></div>
        )
      })}
    </div>
  )
}

export default MovingStars

