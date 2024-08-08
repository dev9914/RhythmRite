"use client"
import React from 'react'
import { WavyBackground } from './ui/wavy-background';
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructors = [
  {
    id: 1,
    name: 'Anu Malik',
    designation: 'Vocal Coach',
    image:
      'https://www.radioandmusic.com/sites/www.radioandmusic.com/files/images/entertainment/2021/12/11/anu.jpg',
  },
  {
    id: 2,
    name: 'Sonu Nigam',
    designation: 'Pitch and Tone Instructor',
    image:
      'https://i.pinimg.com/474x/f6/a2/fd/f6a2fd6dae2b2937e79f2e3a64d0ab84.jpg',
  },
  {
    id: 3,
    name: 'Dhinchak Pooja',
    designation: 'Teaches Uniqueness in Music',
    image:
      'https://content.tupaki.com/twdata/2017/1017/news/Get-Ready-For-Dhinchak-Pooja--1508478896-149.jpg',
  },
  {
    id: 4,
    name: 'Neha Kakkar',
    designation: 'Articulation and Diction',
    image:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQj-s0hTUfBs0xycTiUjpmbFJfx3PWYAJzjqOErR0IHNadQTJSr',
  },
];

const instructor = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground>
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructor</h2>
        <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  )
}

export default instructor
