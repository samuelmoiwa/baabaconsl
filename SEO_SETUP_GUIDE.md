# SEO Setup Guide for Baaba Construction & Services

## 📋 Overview

This guide explains the SEO files and components that have been added to optimize your website for search engines like Google.

---

## 📁 SEO Files Created

### 1. **index.html** (Updated)
Contains essential meta tags for:
- Page title and description
- Keywords for search engines
- Open Graph tags (for social media sharing)
- Twitter card information
- Canonical URL
- Mobile optimization

### 2. **public/robots.txt**
Tells search engines which pages to crawl and which to ignore:
- Allows Google and Bing crawlers
- Excludes admin, build, and dev directories
- Sets crawl delay for server performance
- References the sitemap location

### 3. **public/sitemap.xml**
XML file listing all important pages on your website:
- Helps Google discover all pages
- Includes priority levels for pages
- Shows last modification dates
- Specifies update frequency

### 4. **public/humans.txt**
A text file with information about the website and team:
- Company information
- Technical stack details
- Acknowledgments

### 5. **seo.config.js**
Central configuration file for SEO metadata:
```javascript
// Contains:
- Site name and URL
- Page-specific metadata (title, description, keywords)
- Primary keywords list
- Organization schema
- Local business schema
```

### 6. **src/utils/SEOHead.jsx**
React component and hook for managing meta tags dynamically:
```javascript
// Usage example:
import { useSEO } from './utils/SEOHead';

export function HomePage() {
  useSEO({
    title: 'Home - Baaba Construction',
    description: 'Welcome to Baaba Construction...',
    keywords: 'construction, engineering, services',
    image: '/og-image.jpg',
  });

  return <div>Your content</div>;
}
```

### 7. **src/utils/seoUtils.js**
Utility functions for SEO operations:
- `getSEOData(pageName)` - Get metadata for a page
- `generateSchema(type)` - Create structured data
- `updateMetaTags(data)` - Update meta tags dynamically
- `addStructuredData(schema)` - Add JSON-LD schema

---

## 🚀 How to Use

### Option 1: Using the useSEO Hook (Recommended)

Add this to the top of each page component:

```javascript
import { useSEO } from '../utils/SEOHead';
import { getSEOData, addStructuredData, generateSchema } from '../utils/seoUtils';

export function HomePage() {
  const seoData = getSEOData('home');

  useSEO({
    ...seoData,
    canonicalUrl: 'https://baabaconsl.com/',
    structuredData: generateSchema('organization'),
  });

  return (
    <div>
      {/* Your page content */}
    </div>
  );
}
```

### Option 2: Using the SEOHead Component

```javascript
import SEOHead from '../utils/SEOHead';
import { generateSchema } from '../utils/seoUtils';

export function HomePage() {
  return (
    <>
      <SEOHead
        title="Baaba Construction & Services - Home"
        description="Professional construction and manufacturing solutions"
        keywords="construction, machinery, rentals"
        canonicalUrl="https://baabaconsl.com/"
        structuredData={generateSchema('organization')}
      />
      {/* Your page content */}
    </>
  );
}
```

### Option 3: Manual Meta Tag Updates

```javascript
import { updateMetaTags } from '../utils/seoUtils';

export function ServicesPage() {
  useEffect(() => {
    updateMetaTags({
      title: 'Our Services - Baaba Construction',
      description: 'Explore our construction and machinery rental services',
      keywords: 'services, construction, machinery rental',
    });
  }, []);

  return <div>Your content</div>;
}
```

---

## 🔑 Key Keywords for Your Business

Update **seo.config.js** with your specific keywords:

```javascript
primaryKeywords: [
  'construction services',
  'machinery rentals',
  'manufacturing solutions',
  'equipment rental',
  'industrial construction',
  'project management',
  // Add more relevant keywords for your region
]
```

---

## 🔗 Important Setup Steps

### 1. **Update Configuration**
Edit `seo.config.js` with your actual information:
```javascript
organizationSchema: {
  name: 'Baaba Construction & Services',
  url: 'https://youractualurl.com',  // Change this
  email: 'contact@youractualurl.com', // Change this
  telephone: '+1-XXX-XXX-XXXX',       // Change this
  address: {
    streetAddress: 'Your Street Address',
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    postalCode: 'Your Postal Code',
    addressCountry: 'Your Country',
  },
},
```

### 2. **Update Sitemap**
Edit `public/sitemap.xml` with your domain:
```xml
<loc>https://youractualurl.com/</loc>
```

### 3. **Add Robots.txt to Vite Config**
The robots.txt file is automatically served from the public folder.

### 4. **Create OG Image**
Add images to the public folder:
- `/public/og-image.jpg` - Used for social media sharing
- `/public/twitter-image.jpg` - Used for Twitter sharing

### 5. **Submit to Google Search Console**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your domain
3. Upload or reference your sitemap (robots.txt)
4. Verify ownership

### 6. **Submit to Bing Webmaster Tools**
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Submit your sitemap

---

## 📊 SEO Best Practices

### ✅ Do's
- Use descriptive, keyword-rich titles (50-60 characters)
- Write compelling meta descriptions (150-160 characters)
- Use header tags (H1, H2, H3) properly
- Include alt text for all images
- Use semantic HTML5 elements
- Create unique content for each page
- Update sitemap when adding new pages
- Ensure fast page loading
- Use HTTPS
- Optimize images

### ❌ Don'ts
- Don't keyword stuff
- Don't use duplicate content across pages
- Don't hide text or links
- Don't use too many keywords in meta tags
- Don't create doorway pages
- Don't use outdated SEO techniques

---

## 🎯 Page-Specific SEO Setup

### Homepage
- Focus on branded keywords
- Include company mission/value proposition
- Include structured data for Organization

### About Page
- Use keywords like "about us", "company", "team"
- Tell your company story
- Include team member information

### Services Page
- Use service-specific keywords
- Create content for each service
- Use H2/H3 tags for service categories

### Projects Page
- Use "portfolio", "case studies", "projects"
- Include project descriptions
- Add images with alt text

### Contact Page
- Include location information
- Use "contact", "get in touch"
- Ensure contact form is functional

---

## 🔍 Monitoring & Analytics

### Google Search Console
- Monitor search queries
- Check indexing status
- Fix crawl errors
- Monitor backlinks

### Google Analytics
- Track page views
- Monitor user behavior
- Analyze conversion rates
- Track organic traffic

### Bing Webmaster Tools
- Similar to Google Search Console
- Additional insights for Bing traffic

---

## 📝 Maintenance Checklist

- [ ] Update robots.txt as you add/remove pages
- [ ] Update sitemap.xml monthly
- [ ] Review meta descriptions quarterly
- [ ] Check Google Search Console for errors
- [ ] Monitor keyword rankings
- [ ] Update content regularly
- [ ] Check for broken links
- [ ] Optimize images for web
- [ ] Monitor page speed
- [ ] Review and update schema markup

---

## 🎓 Additional Resources

- [Google Search Essentials](https://developers.google.com/search)
- [Bing SEO Guide](https://www.bing.com/webmasters/help)
- [Schema.org](https://schema.org/)
- [Web.dev SEO Guide](https://web.dev/lighthouse-seo/)

---

## ❓ Questions?

For more information on SEO, consult the Google Search Central documentation or use SEO tools like:
- SEMrush
- Ahrefs
- Moz
- Screaming Frog

---

**Last Updated:** May 27, 2026
