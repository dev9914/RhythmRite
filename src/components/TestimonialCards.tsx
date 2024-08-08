"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const musicSchoolTestimonials = [
  {
    quote:
      "His lyrics are more than words; they are the anthem of a generation, boldly proclaiming the stories of the unheard. With a pen as powerful as his voice, he transformed the struggles of life into verses that resonate deeply with his listeners.",
    name: 'Siddhu mosse wala',
    title: 'Vocal Student',
  },
  {
    quote:
      "Karan Aujla's lyrics capture the essence of life, weaving personal experiences into powerful narratives that resonate with listeners. His ability to turn everyday stories into compelling songs has made him a voice for many. Through his writing, he brings authenticity and emotion to every verse, making his music a reflection of real-life struggles and triumphs.",
    name: 'Karan Aujla',
    title: 'lyricist',
  },
  {
      quote:
        'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
      name: 'Jimi hendrix',
      title: 'Guitar Student',
    },
    {
      quote:
        "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
      name: 'Martha Argerich',
      title: 'Piano Student',
    },
    {
      quote:
        "A.R. Rahman's music transcends boundaries, weaving a tapestry of sound that resonates with hearts around the world.",
      name: 'A.R Rahman',
      title: 'Music Production Student',
    },
  ];

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
        items={musicSchoolTestimonials}
        direction="right"
        speed="slow"
      />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCards
