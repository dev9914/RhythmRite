"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Link from "next/link";

const whyChooseUs = () => {
    const musicSchoolContent = [
        {
          title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
          description:
            'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        },
        {
          title: 'Unleash Your Artistic Potential: A Tailored Experience in Visual Arts',
          description:
            'Dive into the world of visual arts with a journey tailored just for you. Our personalized approach caters to your unique style and pace, ensuring your creative vision flourishes. At our art school, your dreams are nurtured with our unwavering support, guiding you toward artistic excellence.',
        },
        {
          title: 'Shape Your Future: A Customized Path in Culinary Arts',
          description:
            'Begin your culinary adventure with a program designed specifically for your tastes and ambitions. Our individualized instruction focuses on your goals, blending technique and creativity to elevate your culinary skills. At our culinary institute, your passion is met with expert guidance, leading you to gastronomic mastery.',
        },
        {
          title: 'Elevate Your Craft: A Personalized Journey in Dance',
          description: "Embark on a dance journey that's uniquely your own. Our customized instruction adapts to your strengths and goals, fostering growth and expression. At our dance academy, your aspirations align with our dedicated support, creating a dynamic path to dance excellence."


        },
        {
          title: 'Live Feedback & Engagement',
          description:
            'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
        },
        {
          title: 'Cutting-Edge Curriculum',
          description:
            'Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
        },
        {
          title: 'Limitless Learning Opportunities',
          description:
            'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.',
        },
      ];
  return (
    <div>
      <Link href={'https://www.musictheory.net/lessons'}>
      <StickyScroll content={musicSchoolContent}></StickyScroll>
      </Link>
    </div>
  )
}

export default whyChooseUs
