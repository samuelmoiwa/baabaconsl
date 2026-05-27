/**
 * SEO Meta Tags Component
 * Dynamically manage meta tags for each page
 * Usage: <SEOHead title="..." description="..." keywords="..." />
 */

export const SEOHead = ({
  title,
  description,
  keywords,
  image,
  canonicalUrl,
  ogType = 'website',
  structuredData = null
}) => {
  // Update document title
  if (title) {
    document.title = title;
  }

  // Update/add meta tags
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

  // Set description
  if (description) {
    updateMetaTag('description', description);
  }

  // Set keywords
  if (keywords) {
    updateMetaTag('keywords', keywords);
  }

  // Set Open Graph tags
  if (title) {
    updateMetaTag('og:title', title, true);
  }

  if (description) {
    updateMetaTag('og:description', description, true);
  }

  if (image) {
    updateMetaTag('og:image', image, true);
  }

  if (ogType) {
    updateMetaTag('og:type', ogType, true);
  }

  // Set canonical URL
  if (canonicalUrl) {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
  }

  // Add structured data (JSON-LD)
  if (structuredData) {
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.innerHTML = JSON.stringify(structuredData);
  }

  return null;
};

/**
 * Hook to update SEO tags for a page
 * Usage: useSEO({ title: "...", description: "...", ... })
 */
export const useSEO = (seoData) => {
  React.useEffect(() => {
    const {
      title,
      description,
      keywords,
      image,
      canonicalUrl,
      ogType,
      structuredData,
    } = seoData;

    // Update document title
    if (title) {
      document.title = title;
      const updateMeta = (name, content, isProperty = false) => {
        const attribute = isProperty ? 'property' : 'name';
        let tag = document.querySelector(`meta[${attribute}="${name}"]`);

        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute(attribute, name);
          document.head.appendChild(tag);
        }

        tag.content = content;
      };

      updateMeta('og:title', title, true);
    }

    if (description) {
      const updateMeta = (name, content, isProperty = false) => {
        const attribute = isProperty ? 'property' : 'name';
        let tag = document.querySelector(`meta[${attribute}="${name}"]`);

        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute(attribute, name);
          document.head.appendChild(tag);
        }

        tag.content = content;
      };

      updateMeta('description', description);
      updateMeta('og:description', description, true);
    }

    if (keywords) {
      const updateMeta = (name, content, isProperty = false) => {
        const attribute = isProperty ? 'property' : 'name';
        let tag = document.querySelector(`meta[${attribute}="${name}"]`);

        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute(attribute, name);
          document.head.appendChild(tag);
        }

        tag.content = content;
      };

      updateMeta('keywords', keywords);
    }

    if (image) {
      const updateMeta = (name, content, isProperty = false) => {
        const attribute = isProperty ? 'property' : 'name';
        let tag = document.querySelector(`meta[${attribute}="${name}"]`);

        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute(attribute, name);
          document.head.appendChild(tag);
        }

        tag.content = content;
      };

      updateMeta('og:image', image, true);
    }

    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonicalUrl;
    }

    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.innerHTML = JSON.stringify(structuredData);
    }
  }, [seoData]);
};

export default SEOHead;
