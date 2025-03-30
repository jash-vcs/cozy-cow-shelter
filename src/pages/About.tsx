
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Clock, Heart, Users, Trophy } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      bio: 'Sarah founded Cozy Cow Shelter after rescuing her first cow, Bella, from a dairy farm. She has dedicated her life to animal welfare.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Veterinarian',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      bio: 'Dr. Rodriguez has over 15 years of experience as a large animal veterinarian and provides expert care to all our residents.'
    },
    {
      name: 'Emma Chen',
      role: 'Farm Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
      bio: 'Emma oversees the daily operations of the sanctuary, ensuring all cows receive proper nutrition, care, and enrichment.'
    },
    {
      name: 'David Wilson',
      role: 'Education Coordinator',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80',
      bio: 'David leads our educational programs, tours, and outreach initiatives to spread awareness about animal welfare.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          title="About Our Sanctuary" 
          subtitle="Learn about our story, mission, and the dedicated team behind Cozy Cow Shelter"
          backgroundImage="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80"
        />

        {/* Our Story Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Our Story" 
              subtitle="How a passion for animal welfare became a sanctuary for cows"
            />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  Cozy Cow Shelter began in 2010 when our founder, Sarah Johnson, rescued Bella, a dairy cow scheduled for slaughter. What started as a single act of compassion soon grew into a mission to provide a safe haven for cows in need.
                </p>
                <p className="text-gray-700 mb-4">
                  Over the years, we've grown from a small farmstead with one cow to a 50-acre sanctuary that's home to over 30 rescued cows and calves. Each animal has their own story, and together they form our loving community.
                </p>
                <p className="text-gray-700">
                  Today, we continue our commitment to rescue, rehabilitation, and education. We believe in a world where all animals are treated with kindness and respect, and we work every day to make that vision a reality.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80" 
                  alt="Cow at sanctuary" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-cow-sage/10">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="w-12 h-12 bg-cow-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="font-serif text-3xl font-bold text-cow-brown mb-1">30+</div>
                <div className="text-gray-600">Rescued Cows</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="w-12 h-12 bg-cow-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="font-serif text-3xl font-bold text-cow-brown mb-1">13</div>
                <div className="text-gray-600">Years of Service</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="w-12 h-12 bg-cow-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="font-serif text-3xl font-bold text-cow-brown mb-1">5,000+</div>
                <div className="text-gray-600">Visitors Yearly</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="w-12 h-12 bg-cow-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div className="font-serif text-3xl font-bold text-cow-brown mb-1">50</div>
                <div className="text-gray-600">Acres of Land</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Our Team" 
              subtitle="Meet the dedicated people who care for our sanctuary residents"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl font-semibold text-cow-brown">{member.name}</h3>
                    <p className="text-cow-brown/70 mb-3 text-sm">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-cow-brown text-white">
          <div className="container-custom">
            <SectionTitle 
              title="Our Values" 
              subtitle="The principles that guide our work every day"
            />
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-serif text-xl font-semibold mb-3">Compassion</h3>
                <p className="text-white/80">We believe in treating all beings with kindness and respect, recognizing their inherent value and right to live free from suffering.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-serif text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-white/80">We operate with honesty, transparency, and ethical practices in all aspects of our work, from animal care to community engagement.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-serif text-xl font-semibold mb-3">Education</h3>
                <p className="text-white/80">We believe knowledge leads to change, so we share information about farm animals' intelligence, emotions, and needs with the public.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
