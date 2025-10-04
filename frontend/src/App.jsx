import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';

import growthImg from '../public/growth.webp';
import askExpert from '../public/ask-the-expert.webp';
import tailoredSolutions from '../public/problem-solving.webp';



// Why Choose Us Section
const WhyChooseUs = () => {
  const features = [
    {
      title: "Setting Up a Seller Account",
      description: "Establishing a seller account is simple with our expert assistance. We'll smoothly walk you through the registration process and promptly address any seller account concerns that arise.",
      icon: "🏪"
    },
    {
      title: "eCommerce Product Listing",
      description: "Our product listing experts understand marketplace guidelines. We prioritize crafting detailed, appealing listings to attract online buyers, leading to increased sales and conversions.",
      icon: "📋"
    },
    {
      title: "eCommerce Advertising & Marketing",
      description: "Our advertising services, tailored to increase sales and boost efficiency, focus on optimizing your ads for enhanced performance, improved rankings, efficient conversions, and ultimately driving more sales.",
      icon: "📈"
    },
    {
      title: "eCommerce SEO",
      description: "Our experts find the most relevant keywords for your products and create a comprehensive listing. We use the best keyword research tools to optimize your products and help your listings remain competitive in search results.",
      icon: "🎯"
    },
    {
      title: "Product Listing Optimization",
      description: "We improve your product pages through optimization, boosting keyword rankings. With our SEO know-how, we make the most of these rankings to raise and maintain high conversion rates for your product listings.",
      icon: "🚀"
    },
    {
      title: "Brand Registry & Protection",
      description: "Our experts not only create a customized seller account for you but also take care of such as brand registry and protection, managing case logs, category optimization, sponsored ads, order management, feedback management, etc.",
      icon: "🛡️"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Ecom Account Is The Best eCommerce Service Provider?
          </h2>
          <p className="text-lg text-gray-600 max-w-5xl mx-auto">
            Ecom Solutions foster seller account growth with our comprehensive ecommerce services. We excel in seller account management, product listing, advertising, and sales-boost services. Our full-time support ensures your online business thrives, drawing more customers and increasing sales while maintaining a strong and efficient seller account.
          </p>
          <div className="w-16 h-1 bg-orange-400 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-orange-600">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Plans Component
const PricingPlans = ({ pricingData }) => {
  const defaultPlans = [
    {
      id: 1,
      name: "SOLO PLAN",
      originalPrice: "₹2,500",
      price: "₹1,999",
      period: "PER MONTH",
      isPopular: false,
      features: [
        "1 Marketplace",
        "Account Manager",
        "Upto 30 SKUs per Marketplace",
        "SEO Optimised Listing",
        "Free Image Resizing",
        "First Order Assistance",
        "Personalised WhatsApp Group",
        "Priority Email Support",
        "Monthly Progress Report"
      ]
    },
    {
      id: 2,
      name: "DUO PLAN",
      originalPrice: "₹5,000",
      price: "₹3,600",
      period: "PER MONTH",
      isPopular: true,
      features: [
        "2 Marketplaces",
        "Account Manager",
        "Upto 30 SKUs per Marketplace",
        "SEO Optimised Listing",
        "Free Image Resizing",
        "First Order Assistance",
        "Personalised WhatsApp Group",
        "Priority Email Support",
        "Monthly Progress Report"
      ]
    },
    {
      id: 3,
      name: "TRIO PLAN",
      originalPrice: "₹7,500",
      price: "₹5,400",
      period: "PER MONTH",
      isPopular: false,
      features: [
        "3 Marketplaces",
        "Account Manager",
        "Upto 30 SKUs per Marketplace",
        "SEO Optimised Listing",
        "Free Image Resizing",
        "First Order Assistance",
        "Personalised WhatsApp Group",
        "Priority Email Support",
        "Monthly Progress Report"
      ]
    }
  ];

  const plans = pricingData || defaultPlans;

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            OUR MONTHLY PACKAGES
          </h2>
          <p className="text-gray-500 mb-2">"Sit Back & Relax, We Are Here For You"</p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our affordable pricing and e-commerce expert team will take care of your marketplace accounts. You just count your sales, we are here for managing the back end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-lg overflow-hidden ${plan.isPopular
                  ? 'bg-lime-600 text-white transform scale-105'
                  : 'bg-white text-gray-800'
                } shadow-lg`}
            >
              <div className="p-8 text-center">
                <h3 className={`text-lg font-semibold mb-4 ${plan.isPopular ? 'text-white' : 'text-gray-500'}`}>
                  {plan.name}
                </h3>

                <div className="mb-4">
                  <div className={`text-sm line-through ${plan.isPopular ? 'text-gray-200' : 'text-gray-400'}`}>
                    {plan.originalPrice}
                  </div>
                  <div className="text-4xl font-bold">{plan.price}</div>
                  <div className={`text-sm ${plan.isPopular ? 'text-gray-200' : 'text-gray-500'}`}>
                    {plan.period}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="text-lime-500 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-full font-semibold ${plan.isPopular
                      ? 'bg-white text-lime-600 hover:bg-gray-100'
                      : 'bg-lime-600 text-white hover:bg-lime-700'
                    } transition-colors duration-300`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500 mb-8">
          *GST as extra as applicable on any plan
        </div>

        <div className="bg-white rounded-lg p-8 text-center mb-8">
          <div className="text-lime-600 text-lg mb-4">💚 Wait! We Have An Additional Discount For You 💚</div>
          <div className="text-gray-600 mb-6">"Longer the Duration, Bigger the Discounts"</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6">
            <div className="flex items-center justify-center">
              <span className="text-lime-600 mr-2">💚</span>
              <span>1 Month Package - Same Pricing As Mentioned Above</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-lime-600 mr-2">💚</span>
              <span>3 Months Package - 10% Extra Discount On The Given Pricing</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-lime-600 mr-2">💚</span>
              <span>6 Months Package - 15% Extra Discount On The Given Pricing</span>
            </div>
          </div>

          <button className="bg-lime-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-lime-700 transition-colors duration-300">
            Get Started Now!
          </button>
        </div>
      </div>
    </section>
  );
};

// Add-on Packages Component
const AddOnPackages = () => {
  const packages = [
    {
      title: "EXTRA SKUS",
      originalPrice: "₹150",
      price: "₹30",
      period: "PER SKU",
      features: ["SEO Optimised Listing", "Free Image Resizing"]
    },
    {
      title: "IMAGE EDITING",
      originalPrice: "₹50",
      price: "₹10",
      period: "PER IMAGE",
      features: ["White Background", "Image Resolution Adjustment"]
    },
    {
      title: "PROMOTIONAL ACTIVITIES",
      originalPrice: "₹1000",
      price: "₹300",
      period: "PER MONTH",
      features: ["Participating In Promotional Activities To Boost Sales"]
    },
    {
      title: "ADS MANAGEMENT",
      originalPrice: "",
      price: "20%",
      discountPrice: "7%",
      period: "OF AD SPENDS",
      features: ["Paid Ads Creation", "Campaign Management"]
    }
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ADD-ON PACKAGES
          </h2>
          <p className="text-gray-600">
            These plans are only available as Add-ons with the above given monthly plans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-500 mb-4">{pkg.title}</h3>

                <div className="mb-4">
                  {pkg.originalPrice && (
                    <div className="text-sm line-through text-gray-400">{pkg.originalPrice}</div>
                  )}
                  <div className="text-3xl font-bold text-gray-800">
                    {pkg.price}
                    {pkg.discountPrice && (
                      <div className="text-2xl font-bold text-gray-800 mt-1">{pkg.discountPrice}</div>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{pkg.period}</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <ul className="space-y-2">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500">
          *GST as extra as applicable on any plan
        </div>
      </div>
    </section>
  );
};

// How We Work Component
const HowWeWork = () => {
  const steps = [
    {
      title: "Sales Growth",
      description: "We focus on boosting sales, driving higher conversions, increasing revenue, and ensuring business success in the competitive ecommerce marketplace by implementing strategic solutions tailored to your needs.",
      icon: <img src={growthImg} alt="Growth" className="w-12 h-12" />
    },
    {
      title: "Expert Services",
      description: "We provide expert services like seller account management, product listing optimization, and targeted advertising to elevate your presence and performance on ecommerce platforms, driving growth and visibility.",
      icon: <img src={askExpert} alt="Expert" className="w-12 h-12" />
    },
    {
      title: "Tailored Solutions",
      description: "Our approach is meticulously tailored to align with your specific needs and goals, ensuring the implementation of efficient and effective strategies that not only drive success but also maximize your potential in the competitive ecommerce landscape.",
      icon: <img src={tailoredSolutions} alt="Tailored Solutions" className="w-12 h-12" />
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our strategies enhance visibility, conversions, and account efficiency, fueling growth and success. Solution.
          </p>
          <div className="w-16 h-1 bg-orange-400 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#fcf7f2] border border-orange-200 rounded-lg p-8 text-center hover:shadow-lg hover:scale-103 hover:bg-white transition-transform duration-300 ease-in-out ">
              <div className="w-24 h-24 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    captcha: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [captchaText, setCaptchaText] = useState('A1s');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '', captcha: '' });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
  <section id="start-selling-now" className="py-20" style={{ background: 'linear-gradient(135deg, #f5deb3 0%, #deb887 100%)' }}>
      <div className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Start Selling Now</h2>
            <p className="text-gray-600 text-sm">Thank You for Enquiry Us, we will Touch with you as soon as possible</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 placeholder-gray-500"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Id*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 placeholder-gray-500"
              />
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value="91"
                readOnly
                className="w-16 px-3 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 text-center"
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 placeholder-gray-500"
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Enter Your Message*"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 placeholder-gray-500 resize-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">

              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          {submitMessage && (
            <div className="mt-4 p-4 rounded-lg bg-green-100 text-green-800 text-center">
              {submitMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">eCom</span>
              <span className="text-2xl font-bold text-green-500 ml-1">Account</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for eCommerce account management and growth solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Account Management</a></li>
              <li><a href="#" className="hover:text-white">Product Listing</a></li>
              <li><a href="#" className="hover:text-white">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-white">Advertising</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Courses</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="text-gray-400">
              <p className="mb-2">📧 eme835091@gmail.com</p>
              <p className="mb-2">📱 +91 70687 43705</p>
              <p>📍 Lucknow, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 eCom Account. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [services, setServices] = useState(null);
  const [pricing, setPricing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, pricingRes] = await Promise.all([
          fetch('/api/services').then(res => res.ok ? res.json() : null).catch(() => null),
          fetch('/api/pricing').then(res => res.ok ? res.json() : null).catch(() => null)
        ]);

        setServices(servicesRes);
        setPricing(pricingRes);
      } catch (error) {
        console.log('Using default data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <WhyChooseUs />
              <PricingPlans pricingData={pricing} />
              <AddOnPackages />
              <HowWeWork />
              <ContactForm />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;