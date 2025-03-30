import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import DonationCard from '../components/DonationCard';
import { Leaf, Heart, ArrowRight, Apple, Carrot, MilkOff } from 'lucide-react';

const Donate = () => {
  const donationOptions = [
    {
      title: 'Feed a Cow',
      description: 'Provide nutritious food for one of our sanctuary residents.',
      amount: 25,
      icon: <Apple className="h-8 w-8" />,
      benefits: [
        'Provide hay and fresh feed for one cow for a week',
        'Supply essential minerals and supplements',
        'Support sustainable feeding practices'
      ]
    },
    {
      title: 'Medical Care',
      description: 'Help cover veterinary costs and ongoing medical needs.',
      amount: 50,
      icon: <Heart className="h-8 w-8" />,
      benefits: [
        'Fund regular veterinary check-ups',
        'Cover medication costs for sick or injured cows',
        'Support preventative healthcare measures'
      ]
    },
    {
      title: 'Sanctuary Supporter',
      description: 'Contribute to the overall running of our sanctuary and facilities.',
      amount: 100,
      icon: <Leaf className="h-8 w-8" />,
      benefits: [
        'Help maintain and improve cow living spaces',
        'Support educational programs about cow welfare',
        'Fund staff who provide daily care to our residents'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          title="Support Our Sanctuary" 
          subtitle="Your generous donations help us provide the best care for our cows and continue our mission"
          backgroundImage="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80"
        />

        {/* Why Donate Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Why Your Support Matters" 
              subtitle="Every donation directly improves the lives of our rescued cows"
            />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  At Cozy Cow Shelter, we rely entirely on donations to provide food, shelter, medical care, and enrichment for our sanctuary residents. Each cow requires approximately $3,000 per year for basic care.
                </p>
                <p className="text-gray-700 mb-4">
                  Beyond daily care, your support helps us rescue more cows in need, improve our facilities, and expand our educational programs that teach compassion for farm animals.
                </p>
                <p className="text-gray-700">
                  As a registered non-profit organization, all donations to Cozy Cow Shelter are tax-deductible. We're committed to transparency in how your contributions are used.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cow-sage/10 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-cow-brown rounded-full flex items-center justify-center mb-4 text-white">
                    <Carrot className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-cow-brown">Nutrition</h3>
                  <p className="text-gray-600 text-sm">
                    Each cow eats about 30 pounds of food daily, requiring quality hay and supplements.
                  </p>
                </div>
                
                <div className="bg-cow-sage/10 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-cow-brown rounded-full flex items-center justify-center mb-4 text-white">
                    <MilkOff className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-cow-brown">Rescue</h3>
                  <p className="text-gray-600 text-sm">
                    We rescue cows from dairy farms, auctions, and abuse situations across the country.
                  </p>
                </div>
                
                <div className="bg-cow-sage/10 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-cow-brown rounded-full flex items-center justify-center mb-4 text-white">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-cow-brown">Healthcare</h3>
                  <p className="text-gray-600 text-sm">
                    Many rescued cows arrive with health issues requiring extensive veterinary care.
                  </p>
                </div>
                
                <div className="bg-cow-sage/10 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-cow-brown rounded-full flex items-center justify-center mb-4 text-white">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-cow-brown">Enrichment</h3>
                  <p className="text-gray-600 text-sm">
                    We provide natural habitats, toys, brushes, and activities for physical and mental health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Options Section */}
        <section className="section-padding bg-cow-sage/10">
          <div className="container-custom">
            <SectionTitle 
              title="Ways to Donate" 
              subtitle="Choose how you'd like to support our sanctuary residents"
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              {donationOptions.map((option, index) => (
                <DonationCard 
                  key={index}
                  title={option.title}
                  description={option.description}
                  amount={option.amount}
                  icon={option.icon}
                  benefits={option.benefits}
                />
              ))}
            </div>
            
            <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-serif text-2xl font-bold mb-6 text-cow-brown text-center">Custom Donation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cow-brown"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cow-brown"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="amount" className="block text-gray-700 mb-2">Donation Amount</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input 
                      type="number" 
                      id="amount" 
                      className="w-full pl-8 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cow-brown"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Donation Frequency</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="frequency" 
                        value="one-time" 
                        className="mr-2 h-4 w-4 accent-cow-brown"
                        defaultChecked
                      />
                      <span>One-time</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="frequency" 
                        value="monthly" 
                        className="mr-2 h-4 w-4 accent-cow-brown"
                      />
                      <span>Monthly</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="frequency" 
                        value="yearly" 
                        className="mr-2 h-4 w-4 accent-cow-brown"
                      />
                      <span>Yearly</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cow-brown"
                    placeholder="Share why you're donating or if you'd like to dedicate this donation to someone special"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg">
                    Complete Donation
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Other Ways to Help Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Other Ways to Help" 
              subtitle="Beyond financial donations, there are many ways to support our mission"
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-cow-sage/10 p-6 rounded-lg">
                <h3 className="font-serif text-xl font-semibold mb-3 text-cow-brown">Volunteer</h3>
                <p className="text-gray-600 mb-4">
                  We welcome volunteers to help with farm work, event planning, animal care, and more. No experience necessary—we'll provide training!
                </p>
                <a href="#" className="text-cow-brown font-medium hover:text-cow-earth inline-flex items-center">
                  Apply to Volunteer
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-cow-sage/10 p-6 rounded-lg">
                <h3 className="font-serif text-xl font-semibold mb-3 text-cow-brown">Sponsor a Cow</h3>
                <p className="text-gray-600 mb-4">
                  Our sponsorship program lets you form a special bond with one of our residents. You'll receive updates and photos of your sponsored cow.
                </p>
                <a href="#" className="text-cow-brown font-medium hover:text-cow-earth inline-flex items-center">
                  Sponsor a Cow
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-cow-sage/10 p-6 rounded-lg">
                <h3 className="font-serif text-xl font-semibold mb-3 text-cow-brown">In-kind Donations</h3>
                <p className="text-gray-600 mb-4">
                  We gratefully accept donations of hay, feed, bedding, equipment, and other supplies. Check our current wishlist for our most needed items.
                </p>
                <a href="#" className="text-cow-brown font-medium hover:text-cow-earth inline-flex items-center">
                  View Wishlist
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
