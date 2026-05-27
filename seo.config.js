/**
 * SEO Configuration File
 * Define SEO metadata for different pages and keywords
 */

export const seoConfig = {
  siteName: 'Baaba Construction & Services',
  siteUrl: 'https://baabaconsl.com',
  defaultLanguage: 'en',

  // Default SEO metadata
  defaultSeo: {
    title: 'Baaba Construction & Services - Engineering Solutions',
    description: 'Professional construction, machinery rentals, and manufacturing solutions with expert engineering services.',
    keywords: 'construction, machinery rentals, manufacturing, engineering services, industrial solutions, project management',
    image: '/og-image.jpg',
    type: 'website',
  },

  // Page-specific SEO metadata
  pages: {
    home: {
      title: 'Baaba Construction & Services - Home',
      description: 'Welcome to Baaba Construction & Services. Expert engineering solutions for construction, machinery rentals, and manufacturing projects.',
      keywords: 'construction services, machinery rentals, manufacturing, engineering solutions',
      path: '/',
    },
    about: {
      title: 'About Us - Baaba Construction & Services',
      description: 'Learn about our company story, mission, values, team, and commitment to excellence in construction and engineering services.',
      keywords: 'about us, company history, mission, values, team, construction company',
      path: '/about',
    },
    services: {
      title: 'Our Services - Baaba Construction & Services',
      description: 'Explore our comprehensive range of services including construction, machinery rentals, manufacturing, and engineering solutions.',
      keywords: 'construction services, machinery rentals, manufacturing services, equipment rental, engineering',
      path: '/services',
    },
    projects: {
      title: 'Our Projects - Baaba Construction & Services',
      description: 'View our portfolio of successful construction and engineering projects completed for satisfied clients.',
      keywords: 'construction projects, portfolio, case studies, completed projects, engineering projects',
      path: '/projects',
    },
    contact: {
      title: 'Contact Us - Baaba Construction & Services',
      description: 'Get in touch with our team. We are ready to discuss your construction and engineering needs.',
      keywords: 'contact us, get in touch, inquiry, support, construction consultation',
      path: '/contact',
    },
  },

  // Primary Keywords (focus areas)
  primaryKeywords: [
    'construction services',
    'machinery rentals',
    'manufacturing solutions',
    'engineering services',
    'industrial construction',
    'equipment rental',
    'project management',
    'construction company',
  ],

  // Organization schema for structured data
  organizationSchema: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Baaba Construction & Services',
    url: 'https://baabaconsl.com',
    logo: 'https://baabaconsl.com/logo.png',
    description: 'Professional construction, machinery rentals, and manufacturing solutions.',
    sameAs: [
      'https://www.facebook.com/baabaconsl',
      'https://www.linkedin.com/company/baabaconsl',
      'https://twitter.com/baabaconsl',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'General',
      email: 'contact@baabaconsl.com',
      telephone: '+1-XXX-XXX-XXXX',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Your City',
      addressRegion: 'Your State',
      postalCode: 'Your Postal Code',
      addressCountry: 'Your Country',
    },
  },

  // Local Business schema
  localBusinessSchema: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Baaba Construction & Services',
    image: 'https://baabaconsl.com/logo.png',
    url: 'https://baabaconsl.com',
    telephone: '+1-XXX-XXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Your City',
      addressRegion: 'Your State',
      postalCode: 'Your Postal Code',
      addressCountry: 'Your Country',
    },
    priceRange: '$$',
    serviceArea: {
      '@type': 'City',
      name: 'Your Service Area',
    },
  },
};

/**
 * Function to get SEO metadata for a specific page
 * @param {string} pageName - The name of the page
 * @returns {Object} SEO metadata for the page
 */
export const getPageSeo = (pageName) => {
  const pageData = seoConfig.pages[pageName] || seoConfig.defaultSeo;
  return {
    ...seoConfig.defaultSeo,
    ...pageData,
  };
};

/**
 * Function to generate structured data (JSON-LD)
 * @param {string} type - The type of schema (organization, localBusiness, etc.)
 * @returns {Object} Structured data object
 */
export const getStructuredData = (type = 'organization') => {
  switch (type) {
    case 'organization':
      return seoConfig.organizationSchema;
    case 'localBusiness':
      return seoConfig.localBusinessSchema;
    default:
      return seoConfig.organizationSchema;
  }
};
