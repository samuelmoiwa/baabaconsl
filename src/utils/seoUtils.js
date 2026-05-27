/**
 * SEO Utilities
 * Helper functions for SEO optimization
 */

import { seoConfig, getPageSeo, getStructuredData } from '../../seo.config.js';

/**
 * Generate schema.org structured data
 * @param {string} type - Type of schema
 * @returns {Object} Schema object
 */
export const generateSchema = (type = 'organization') => {
  return getStructuredData(type);
};

/**
 * Get SEO metadata for a specific page
 * @param {string} pageName - Page identifier
 * @returns {Object} SEO metadata
 */
export const getSEOData = (pageName) => {
  return getPageSeo(pageName);
};

/**
 * Update meta tags dynamically
 * @param {Object} data - Meta data object
 */
export const updateMetaTags = (data) => {
  const { title, description, keywords, image, canonicalUrl, ogType } = data;

  // Update title
  if (title) {
    document.title = title;
    updateMetaTag('og:title', title, true);
    updateMetaTag('twitter:title', title);
  }

  // Update description
  if (description) {
    updateMetaTag('description', description);
    updateMetaTag('og:description', description, true);
    updateMetaTag('twitter:description', description);
  }

  // Update keywords
  if (keywords) {
    updateMetaTag('keywords', keywords);
  }

  // Update image
  if (image) {
    updateMetaTag('og:image', image, true);
    updateMetaTag('twitter:image', image);
  }

  // Update og:type
  if (ogType) {
    updateMetaTag('og:type', ogType, true);
  }

  // Update canonical URL
  if (canonicalUrl) {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
  }
};

/**
 * Helper to update a meta tag
 * @param {string} name - Meta tag name or property
 * @param {string} content - Meta tag content
 * @param {boolean} isProperty - Whether to use property attribute instead of name
 */
const updateMetaTag = (name, content, isProperty = false) => {
  const attribute = isProperty ? 'property' : 'name';
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.content = content;
};

/**
 * Add JSON-LD structured data
 * @param {Object} schema - Schema object
 */
export const addStructuredData = (schema) => {
  let scriptTag = document.querySelector('script[type="application/ld+json"]');

  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    document.head.appendChild(scriptTag);
  }

  scriptTag.innerHTML = JSON.stringify(schema);
};

export default {
  generateSchema,
  getSEOData,
  updateMetaTags,
  addStructuredData,
};
