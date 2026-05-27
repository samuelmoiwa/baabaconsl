/**
 * SEO Implementation Examples
 * Copy and adapt these examples to your page components
 */

// ============================================
// EXAMPLE 1: HomePage with useSEO Hook
// ============================================

import React from 'react';
import { useSEO } from '../utils/SEOHead';
import { getSEOData, addStructuredData, generateSchema } from '../utils/seoUtils';

export function HomePageExample() {
  const seoData = getSEOData('home');

  useSEO({
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    image: seoData.image || '/og-image.jpg',
    canonicalUrl: 'https://baabaconsl.com/',
    structuredData: generateSchema('organization'),
  });

  return (
    <main>
      <h1>Welcome to Baaba Construction & Services</h1>
      {/* Your homepage content */}
    </main>
  );
}

// ============================================
// EXAMPLE 2: AboutPage with useSEO Hook
// ============================================

export function AboutPageExample() {
  const seoData = getSEOData('about');

  useSEO({
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    image: '/og-image.jpg',
    canonicalUrl: 'https://baabaconsl.com/about',
  });

  return (
    <main>
      <h1>About Baaba Construction & Services</h1>
      {/* Your about page content */}
    </main>
  );
}

// ============================================
// EXAMPLE 3: ServicesPage with useSEO Hook
// ============================================

export function ServicesPageExample() {
  const seoData = getSEOData('services');

  useSEO({
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    image: '/services-og-image.jpg',
    canonicalUrl: 'https://baabaconsl.com/services',
    ogType: 'business.business',
  });

  return (
    <main>
      <h1>Our Services</h1>
      <section>
        <h2>Construction Services</h2>
        {/* Service details */}
      </section>
      <section>
        <h2>Machinery Rentals</h2>
        {/* Service details */}
      </section>
      <section>
        <h2>Manufacturing Solutions</h2>
        {/* Service details */}
      </section>
    </main>
  );
}

// ============================================
// EXAMPLE 4: ProjectsPage with useSEO Hook
// ============================================

export function ProjectsPageExample() {
  const seoData = getSEOData('projects');

  useSEO({
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    image: '/projects-og-image.jpg',
    canonicalUrl: 'https://baabaconsl.com/projects',
  });

  return (
    <main>
      <h1>Our Projects</h1>
      <div className="projects-grid">
        {/* Your project cards here */}
      </div>
    </main>
  );
}

// ============================================
// EXAMPLE 5: ContactPage with useSEO Hook
// ============================================

export function ContactPageExample() {
  const seoData = getSEOData('contact');

  useSEO({
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    image: '/contact-og-image.jpg',
    canonicalUrl: 'https://baabaconsl.com/contact',
  });

  return (
    <main>
      <h1>Contact Us</h1>
      {/* Contact form and information */}
    </main>
  );
}

// ============================================
// EXAMPLE 6: Using updateMetaTags for Dynamic Pages
// ============================================

import { updateMetaTags } from '../utils/seoUtils';
import { useEffect } from 'react';

export function DynamicProjectPage({ projectId }) {
  useEffect(() => {
    // This could come from an API call
    const projectData = {
      title: 'Amazing Construction Project',
      description: 'See how we completed this amazing project...',
      keywords: 'project, construction, case study',
      image: `/projects/${projectId}-cover.jpg`,
    };

    updateMetaTags({
      title: `${projectData.title} - Baaba Construction & Services`,
      description: projectData.description,
      keywords: projectData.keywords,
      image: projectData.image,
    });
  }, [projectId]);

  return (
    <main>
      <h1>Project Details</h1>
      {/* Project content */}
    </main>
  );
}

// ============================================
// EXAMPLE 7: Adding Custom Structured Data
// ============================================

import { addStructuredData } from '../utils/seoUtils';

export function ProductPageExample() {
  useEffect(() => {
    const productSchema = {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: 'Machinery Rental Service',
      description: 'Professional machinery rental services',
      brand: {
        '@type': 'Brand',
        name: 'Baaba Construction & Services',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '99.99',
        availability: 'https://schema.org/InStock',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '25',
      },
    };

    addStructuredData(productSchema);
  }, []);

  return (
    <main>
      <h1>Machinery Rental</h1>
      {/* Product details */}
    </main>
  );
}

// ============================================
// BEST PRACTICES SUMMARY
// ============================================

/**
 * BEST PRACTICES:
 *
 * 1. Always set SEO data on component mount (using useEffect or useSEO hook)
 * 2. Use unique titles and descriptions for each page
 * 3. Keep titles between 50-60 characters
 * 4. Keep descriptions between 150-160 characters
 * 5. Include target keywords naturally
 * 6. Use semantic HTML (H1, H2, H3 tags)
 * 7. Add alt text to all images
 * 8. Include structured data (schema) when relevant
 * 9. Update sitemap.xml when adding new pages
 * 10. Monitor performance with Google Search Console
 */
