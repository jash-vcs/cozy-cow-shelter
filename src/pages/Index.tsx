
import React from 'react';
import { ArrowRight, Heart, Leaf, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import CowCard from '../components/CowCard';

const Index = () => {
  const featuredCows = [
    {
      name: 'Bella',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80',
      description: 'Bella is our eldest cow, rescued from a dairy farm. She loves sunbathing and getting ear scratches.',
      age: '8 years'
    },
    {
      name: 'Max',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80',
      description: 'Max is a gentle giant with a heart of gold. He enjoys spending time with our younger calves.',
      age: '5 years'
    },
    {
      name: 'Daisy',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80',
      description: 'Daisy came to us as a calf and has grown into a spirited, playful cow who loves treats.',
      age: '3 years'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          title="A Safe Haven for Cows" 
          subtitle="We rescue, rehabilitate, and provide lifelong care for cows in need, while promoting compassion for all animals."
          ctaText="Meet Our Cows"
          ctaLink="/gallery"
        />

        {/* Mission Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Our Mission" 
              subtitle="At Cozy Cow Shelter, we believe every cow deserves love, respect, and the freedom to live naturally."
            />
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-cow-sage/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-cow-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-cow-brown">Rescue</h3>
                <p className="text-gray-600">We provide emergency rescue and rehabilitation for cows from abusive situations.</p>
              </div>
              
              <div className="bg-cow-sage/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-cow-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-cow-brown">Sanctuary</h3>
                <p className="text-gray-600">We offer a peaceful, natural environment where cows can live out their lives in happiness.</p>
              </div>
              
              <div className="bg-cow-sage/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-cow-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-cow-brown">Education</h3>
                <p className="text-gray-600">We educate the public about the emotional intelligence and gentle nature of these beautiful animals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cows Section */}
        <section className="section-padding bg-cow-sage/10">
          <div className="container-custom">
            <SectionTitle 
              title="Meet Our Residents" 
              subtitle="Each cow at our sanctuary has a unique personality and story. Here are a few of our special residents."
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredCows.map((cow, index) => (
                <CowCard 
                  key={index}
                  name={cow.name}
                  image={cow.image}
                  description={cow.description}
                  age={cow.age}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/gallery" className="btn-secondary inline-flex items-center gap-2">
                View All Cows
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Donation CTA Section */}
        <section className="py-20 bg-cow-brown text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80" 
              alt="Background pattern" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-custom relative z-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Help Us Care for Our Gentle Friends</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
              Your donation directly supports our cows' feed, shelter, medical care, and more. 
              Every contribution makes a difference in their lives.
            </p>
            <Link to="/donate" className="inline-block bg-white text-cow-brown hover:bg-cow-cream transition-colors rounded-md px-8 py-4 font-medium text-lg">
              Make a Donation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
