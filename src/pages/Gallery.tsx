
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import CowCard from '../components/CowCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");

  const allCows = [
    {
      name: 'Bella',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80',
      description: 'Our eldest cow, rescued from a dairy farm. She loves sunbathing and ear scratches.',
      age: '8 years',
      category: 'seniors'
    },
    {
      name: 'Max',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80',
      description: 'A gentle giant with a heart of gold who enjoys spending time with our younger calves.',
      age: '5 years',
      category: 'adults'
    },
    {
      name: 'Daisy',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80',
      description: 'Daisy came to us as a calf and has grown into a spirited, playful cow who loves treats.',
      age: '3 years',
      category: 'adults'
    },
    {
      name: 'Charlie',
      image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80',
      description: 'Charlie was rescued from a veal operation and has blossomed into a curious, friendly cow.',
      age: '2 years',
      category: 'adults'
    },
    {
      name: 'Rosie',
      image: 'https://images.unsplash.com/photo-1600158331218-adf131984036?auto=format&fit=crop&q=80',
      description: 'Our resident matriarch, Rosie keeps an eye on everyone and has a calming presence.',
      age: '10 years',
      category: 'seniors'
    },
    {
      name: 'Oliver',
      image: 'https://images.unsplash.com/photo-1615272957558-527e556ef6db?auto=format&fit=crop&q=80',
      description: 'Oliver was born at our sanctuary after we rescued his mother. He's playful and full of energy.',
      age: '1 year',
      category: 'calves'
    },
    {
      name: 'Luna',
      image: 'https://images.unsplash.com/photo-1527782180335-f3cc891cb284?auto=format&fit=crop&q=80',
      description: 'Luna is shy at first but warms up quickly. She enjoys classical music during milking time.',
      age: '4 years',
      category: 'adults'
    },
    {
      name: 'Milo',
      image: 'https://images.unsplash.com/photo-1529944618158-c5a0990d92d6?auto=format&fit=crop&q=80',
      description: 'Milo is our newest rescue, still adjusting to sanctuary life. He's making friends quickly!',
      age: '8 months',
      category: 'calves'
    },
    {
      name: 'Ruby',
      image: 'https://images.unsplash.com/photo-1557399215-ddad3d8dff8e?auto=format&fit=crop&q=80',
      description: 'Ruby loves to be brushed and will follow you around until you give her attention.',
      age: '6 years',
      category: 'adults'
    }
  ];

  const filteredCows = activeTab === "all" 
    ? allCows 
    : allCows.filter(cow => cow.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          title="Meet Our Residents" 
          subtitle="Each cow at our sanctuary has a unique personality and story. Get to know them all!"
          backgroundImage="https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80"
        />

        {/* Gallery Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Our Cow Gallery" 
              subtitle="Browse through photos and stories of our beautiful sanctuary residents"
            />
            
            <Tabs defaultValue="all" className="w-full mb-12" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 max-w-md mx-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="calves">Calves</TabsTrigger>
                <TabsTrigger value="adults">Adults</TabsTrigger>
                <TabsTrigger value="seniors">Seniors</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCows.map((cow, index) => (
                    <CowCard 
                      key={index}
                      name={cow.name}
                      image={cow.image}
                      description={cow.description}
                      age={cow.age}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="calves" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCows.map((cow, index) => (
                    <CowCard 
                      key={index}
                      name={cow.name}
                      image={cow.image}
                      description={cow.description}
                      age={cow.age}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="adults" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCows.map((cow, index) => (
                    <CowCard 
                      key={index}
                      name={cow.name}
                      image={cow.image}
                      description={cow.description}
                      age={cow.age}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="seniors" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCows.map((cow, index) => (
                    <CowCard 
                      key={index}
                      name={cow.name}
                      image={cow.image}
                      description={cow.description}
                      age={cow.age}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Sanctuary Life Section */}
        <section className="section-padding bg-cow-sage/10">
          <div className="container-custom">
            <SectionTitle 
              title="Life at the Sanctuary" 
              subtitle="A glimpse into the daily routines and special moments at Cozy Cow Shelter"
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg shadow-md col-span-2 row-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1600158331218-adf131984036?auto=format&fit=crop&q=80" 
                  alt="Cows grazing in field" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1527782180335-f3cc891cb284?auto=format&fit=crop&q=80" 
                  alt="Cow being brushed" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1587734361993-0490f52d4f30?auto=format&fit=crop&q=80" 
                  alt="Feeding time" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1615272957558-527e556ef6db?auto=format&fit=crop&q=80" 
                  alt="Cow in barn" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1529944618158-c5a0990d92d6?auto=format&fit=crop&q=80" 
                  alt="Cows resting" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg shadow-md md:col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1557399215-ddad3d8dff8e?auto=format&fit=crop&q=80" 
                  alt="Sunset at the sanctuary" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
