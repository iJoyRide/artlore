'use client'

import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const contents = [
  { id: 1, header: 'School Holiday Programmes', text: 'Are you looking for a fun and enriching experience for your child during the holidays? Look no further. Choose from a range of flexible programmes spanning from Art, Architecture and 3D printing Classes.', image: '/images/teacher1.jpg' },
  { id: 2, header: 'Fine Art and Design Class', text: 'In these classes, young minds are introduced to a diverse range of art forms, from painting, sketching, 3D Printing, water-colouring to sculpture and digital art, Explore the world beyond just fine art and experience fun and engaging lessons.', image: '/images/teacher2.jpg' },
  { id: 3, header: 'Advanced Preparatory Class (DSA)', text: 'Comprehensive training and guidance to aspiring young artists, equipping them with the skills and techniques necessary to excel in their Direct School Admission portfolio submissions.', image: '/images/teacher3.jpg' },
];

const ClassessPage:React.FC = () => {
  return (
    <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
      <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {/* {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}> */}
        {contents.map((content) => (
          <CarouselItem key={content.id}>
            <div className="p-1">
              <Card className='h-[85vh]'>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className='flex flex-col'>
                    <img src={content.image} alt={content.text} className="w-full h-auto mb-4" />
                    <span className="text-xl font-semibold pt-2">{content.header}</span>
                    <span className="text-3l pt-5">{content.text}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
};

export default ClassessPage;
