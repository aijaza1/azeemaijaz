module.exports = {
    images: {
      unoptimized: true
    },
    async generateStaticPaths() {
      return [
        { params: { slug: 'main' }, locale: 'en' },
        { params: { slug: 'about' }, locale: 'en' },
        { params: { slug: 'layout' }, locale: 'en' },
        { params: { slug: 'page' }, locale: 'en' },
        { params: { slug: 'contact' }, locale: 'en' },
        { params: { slug: 'Navbar' }, locale: 'en' },
        { params: { slug: 'ProjectItem' }, locale: 'en' },
        { params: { slug: 'projects' }, locale: 'en' },
        { params: { slug: 'skills' }, locale: 'en' },
        
        // Add more static paths as needed
      ];
    },
  };