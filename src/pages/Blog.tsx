import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import BlogPostCard from '../components/BlogPostCard';

const Blog = () => {
  const featuredPost = {
    id: '1',
    title: 'The Hidden Intelligence of Cows: What Science Is Discovering',
    excerpt: 'Recent studies are revealing that cows have complex emotional lives and cognitive abilities that rival those of many other mammals. In this article, we explore the fascinating research into bovine intelligence and what it means for how we should treat these gentle creatures.',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80',
    date: 'June 15, 2023',
    author: 'Dr. Emma Chen'
  };

  const blogPosts = [
    {
      id: '2',
      title: 'A Day in the Life: Caring for Sanctuary Cows',
      excerpt: 'Ever wonder what goes into caring for our sanctuary residents? From morning feedings to evening tuck-ins, this post walks you through our daily routine.',
      image: 'https://images.unsplash.com/photo-1529944618158-c5a0990d92d6?auto=format&fit=crop&q=80',
      date: 'May 28, 2023',
      author: 'Sarah Johnson'
    },
    {
      id: '3',
      title: "Milo's Journey: From Dairy Farm to Sanctuary",
      excerpt: 'This heartwarming story follows Milo, one of our youngest residents, from his rescue from a dairy farm to his new life at our sanctuary.',
      image: 'https://images.unsplash.com/photo-1615272957558-527e556ef6db?auto=format&fit=crop&q=80',
      date: 'April 10, 2023',
      author: 'Michael Rodriguez'
    },
    {
      id: '4',
      title: 'The Environmental Impact of Cow Sanctuaries',
      excerpt: 'How do animal sanctuaries affect the environment? This post explores sustainable practices we use to minimize our ecological footprint.',
      image: 'https://images.unsplash.com/photo-1527782180335-f3cc891cb284?auto=format&fit=crop&q=80',
      date: 'March 5, 2023',
      author: 'David Wilson'
    },
    {
      id: '5',
      title: 'Nutrition Guide: What We Feed Our Cows and Why',
      excerpt: 'A detailed look at the specialized diets we provide for our cows of different ages and health conditions to keep them happy and healthy.',
      image: 'https://images.unsplash.com/photo-1587734361993-0490f52d4f30?auto=format&fit=crop&q=80',
      date: 'February 18, 2023',
      author: 'Dr. Emma Chen'
    },
    {
      id: '6',
      title: 'Volunteer Spotlight: Meet the People Who Make Our Work Possible',
      excerpt: 'Our dedicated volunteers share their stories and why they choose to spend their time helping at our cow sanctuary.',
      image: 'https://images.unsplash.com/photo-1557399215-ddad3d8dff8e?auto=format&fit=crop&q=80',
      date: 'January 30, 2023',
      author: 'Sarah Johnson'
    },
    {
      id: '7',
      title: 'Winter at the Sanctuary: Preparing for Cold Weather',
      excerpt: 'As temperatures drop, we take special measures to ensure our cows stay warm and comfortable. Learn about our winter preparations.',
      image: 'https://images.unsplash.com/photo-1600158331218-adf131984036?auto=format&fit=crop&q=80',
      date: 'December 12, 2022',
      author: 'Michael Rodriguez'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          title="Our Blog" 
          subtitle="Stories, updates, and education about our cows and animal welfare"
          backgroundImage="https://images.unsplash.com/photo-1600158331218-adf131984036?auto=format&fit=crop&q=80"
        />

        {/* Featured Post Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Featured Article" 
              subtitle="Our latest and most impactful stories"
            />
            
            <BlogPostCard 
              id={featuredPost.id}
              title={featuredPost.title}
              excerpt={featuredPost.excerpt}
              image={featuredPost.image}
              date={featuredPost.date}
              author={featuredPost.author}
              featured={true}
            />
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="section-padding bg-cow-sage/10">
          <div className="container-custom">
            <SectionTitle 
              title="Recent Articles" 
              subtitle="Stay updated with the latest from our sanctuary"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogPostCard 
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  date={post.date}
                  author={post.author}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section-padding bg-cow-brown text-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-white/80">
                Stay updated with our latest sanctuary news, events, and cow stories delivered straight to your inbox.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <form className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-cow-gold text-gray-900"
                  />
                </div>
                <button type="submit" className="bg-cow-gold hover:bg-cow-gold/90 text-cow-brown font-medium py-3 px-6 rounded-md transition-colors">
                  Subscribe
                </button>
              </form>
              <p className="text-white/60 text-sm mt-4">
                We respect your privacy and will never share your information. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
