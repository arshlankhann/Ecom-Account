const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// MongoDB connection (optional - will fall back to hardcoded data if not available)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce-guide')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('MongoDB connection failed, using hardcoded data:', err.message);
  });

// Models
const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const pricingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  originalPrice: { type: String, required: true },
  price: { type: String, required: true },
  period: { type: String, required: true },
  isPopular: { type: Boolean, default: false },
  features: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const packageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  originalPrice: { type: String },
  price: { type: String, required: true },
  discountPrice: { type: String },
  period: { type: String, required: true },
  features: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

const Service = mongoose.model('Service', serviceSchema);
const Pricing = mongoose.model('Pricing', pricingSchema);
const Contact = mongoose.model('Contact', contactSchema);
const Package = mongoose.model('Package', packageSchema);

// Hardcoded fallback data
const defaultServices = [
  {
    id: 1,
    title: "PERSONALIZED ACCOUNT MANAGER",
    description: "An account manager will be allotted who will handle the provided e-commerce marketplace",
    icon: "🤝"
  },
  {
    id: 2,
    title: "FREE IMAGE RESIZING",
    description: "Image sizes & resolution will be altered according to the marketplace's requirements",
    icon: "🖼️"
  },
  {
    id: 3,
    title: "SEO-FRIENDLY CATALOG LISTING",
    description: "The listings are SEO optimised, which will eventually helps to improve the product ranking in the long term",
    icon: "🔍"
  },
  {
    id: 4,
    title: "WHATSAPP AND EMAIL SUPPORT",
    description: "A personalised WhatsApp group will be provided for the faster communication among all + Email support",
    icon: "📱"
  }
];

const defaultPricing = [
  {
    id: 1,
    name: "SOLO PLAN",
    originalPrice: "₹2,500",
    price: "₹2,000",
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

// Routes

// Get all services
app.get('/api/services', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const services = await Service.find().sort({ createdAt: -1 });
      res.json(services);
    } else {
      res.json(defaultServices);
    }
  } catch (error) {
    console.log('Database error, returning fallback data:', error.message);
    res.json(defaultServices);
  }
});

// Create a service (for admin)
app.post('/api/services', async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all pricing plans
app.get('/api/pricing', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const pricing = await Pricing.find().sort({ createdAt: -1 });
      res.json(pricing);
    } else {
      res.json(defaultPricing);
    }
  } catch (error) {
    console.log('Database error, returning fallback data:', error.message);
    res.json(defaultPricing);
  }
});

// Create a pricing plan (for admin)
app.post('/api/pricing', async (req, res) => {
  try {
    const pricing = new Pricing(req.body);
    await pricing.save();
    res.status(201).json(pricing);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }
    
    const contact = new Contact({ name, email, phone, message });
    await contact.save();
    
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all contacts (for admin)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all packages
app.get('/api/packages', async (req, res) => {
  try {
    const packages = await Package.find().sort({ createdAt: -1 });
    res.json(packages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a package (for admin)
app.post('/api/packages', async (req, res) => {
  try {
    const package = new Package(req.body);
    await package.save();
    res.status(201).json(package);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Seed data (run once to populate initial data)
app.post('/api/seed', async (req, res) => {
  try {
    // Clear existing data
    await Service.deleteMany({});
    await Pricing.deleteMany({});
    await Package.deleteMany({});

    // Seed services
    const services = [
      {
        title: "PERSONALIZED ACCOUNT MANAGER",
        description: "An account manager will be allotted who will handle the provided e-commerce marketplace",
        icon: "🤝"
      },
      {
        title: "FREE IMAGE RESIZING",
        description: "Image sizes & resolution will be altered according to the marketplace's requirements",
        icon: "🖼️"
      },
      {
        title: "SEO-FRIENDLY CATALOG LISTING",
        description: "The listings are SEO optimised, which will eventually helps to improve the product ranking in the long term",
        icon: "🔍"
      },
      {
        title: "WHATSAPP AND EMAIL SUPPORT",
        description: "A personalised WhatsApp group will be provided for the faster communication among all + Email support",
        icon: "📱"
      }
    ];

    await Service.insertMany(services);

    // Seed pricing
    const pricingPlans = [
      {
        name: "SOLO PLAN",
        originalPrice: "₹2,500",
        price: "₹2,000",
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

    await Pricing.insertMany(pricingPlans);

    // Seed packages
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
        price: "20%",
        discountPrice: "7%",
        period: "OF AD SPENDS",
        features: ["Paid Ads Creation", "Campaign Management"]
      }
    ];

    await Package.insertMany(packages);

    res.json({ message: 'Database seeded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve React app for all other routes (uncomment after building frontend)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});