import { FaCalendarAlt, FaClock, FaUser, FaArrowRight, FaTag } from 'react-icons/fa';
import { Link } from 'react-router';
import { blogPosts } from '../data/blogPosts';

function BlogSection() {
  // Get the first 3 blog posts for preview
  const featuredPosts = blogPosts.slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="relative bg-inherit overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-32 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ispirati con i Nostri
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Racconti di Viaggio
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Scopri le esperienze dei nostri esperti di viaggio, consigli pratici e storie autentiche 
            dalle destinazioni più belle di Sud America e Asia.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <article 
              key={post.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    post.category === 'Sud America' 
                      ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                  }`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                    >
                      <FaTag className="w-2 h-2 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <FaUser className="w-3 h-3 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="w-3 h-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="w-3 h-3 mr-1" />
                    <span>{formatDate(post.publishDate)}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group/link"
                >
                  Leggi l'articolo
                  <FaArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blog Posts Button */}
        <div className="text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
          >
            Vedi Tutti gli Articoli
            <FaArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
