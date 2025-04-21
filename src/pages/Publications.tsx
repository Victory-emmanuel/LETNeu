
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import PublicationCard from "@/components/cards/PublicationCard";
import { publications, publicationsByYear, publicationCategories, Publication } from "@/data/publicationsData";

const Publications = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'category' | 'year'>('year');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter publications based on active category and search query
  const filteredPublications = () => {
    let filtered = [...publications];

    // Apply category filter if not viewing all
    if (activeCategory !== 'all') {
      filtered = filtered.filter(pub => pub.category === activeCategory);
    }

    // Apply search filter if there's a query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(pub =>
        pub.title.toLowerCase().includes(query) ||
        (pub.authors && pub.authors.some(author => author.toLowerCase().includes(query))) ||
        pub.journal.toLowerCase().includes(query) ||
        (pub.abstract && pub.abstract.toLowerCase().includes(query))
      );
    }

    return filtered;
  };

  // Organize publications by year from the filtered list
  const getPublicationsByYear = () => {
    const filtered = filteredPublications();
    return filtered.reduce((acc, publication) => {
      const year = publication.year.toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(publication);
      return acc;
    }, {} as Record<string, Publication[]>);
  };

  // Get sorted years for year view
  const getSortedYears = () => {
    const years = Object.keys(getPublicationsByYear());
    return years.sort((a, b) => parseInt(b) - parseInt(a)); // Sort in descending order
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-secondary/30 dark:bg-gray-800/30 py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Publications
          </motion.h1>
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl text-foreground/80">
              Browse our research publications, organized by research area and year.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Publications Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            {/* Search and Filter Controls */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-border dark:border-gray-700 mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-grow">
                  <label htmlFor="search" className="block text-sm font-medium text-foreground/70 mb-1">
                    Search Publications
                  </label>
                  <input
                    type="text"
                    id="search"
                    placeholder="Search by title, author, or keyword..."
                    className="w-full px-4 py-2 rounded-md border border-border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1">
                    View Mode
                  </label>
                  <div className="flex rounded-md overflow-hidden border border-border dark:border-gray-700">
                    <button
                      type="button"
                      className={`px-4 py-2 ${
                        viewMode === 'category'
                          ? 'bg-secondary text-white'
                          : 'bg-white dark:bg-gray-700 text-foreground dark:text-gray-200 hover:bg-primary/10 dark:hover:bg-gray-600'
                      }`}
                      onClick={() => setViewMode('category')}
                    >
                      By Category
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 ${
                        viewMode === 'year'
                          ? 'bg-secondary text-white'
                          : 'bg-white dark:bg-gray-700 text-foreground dark:text-gray-200 hover:bg-primary/10 dark:hover:bg-gray-600'
                      }`}
                      onClick={() => setViewMode('year')}
                    >
                      By Year
                    </button>
                  </div>
                </div>
              </div>

              {viewMode === 'category' && (
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    Filter by Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {publicationCategories.map((category) => (
                      <button
                        type="button"
                        key={category.value}
                        className={`px-3 py-1.5 rounded-full text-sm ${
                          activeCategory === category.value
                            ? 'bg-secondary text-white'
                            : 'bg-secondary/50 dark:bg-gray-700 text-primary dark:text-gray-200 hover:bg-primary/10 dark:hover:bg-primary/20'
                        } transition-colors`}
                        onClick={() => setActiveCategory(category.value)}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="mb-6 text-foreground/70">
              Showing {filteredPublications().length} publications
              {activeCategory !== 'all' && viewMode === 'category' && (
                <> in {publicationCategories.find(cat => cat.value === activeCategory)?.label}</>
              )}
              {searchQuery && (
                <> matching "{searchQuery}"</>
              )}
            </div>

            {/* Publications List */}
            <AnimatePresence mode="wait">
              {viewMode === 'category' ? (
                <motion.div
                  key="category-view"
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {filteredPublications().map((publication, index) => (
                    <PublicationCard
                      key={publication.id}
                      title={publication.title}
                      authors={publication.authors}
                      journal={publication.journal}
                      year={publication.year}
                      abstract={publication.abstract}
                      description={publication.description}
                      doi={publication.doi}
                      pdfUrl={publication.pdfUrl}
                      link={publication.link}
                      delay={index % 5}
                    />
                  ))}

                  {filteredPublications().length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-lg text-foreground/70">No publications match your search criteria.</p>
                      <button
                        type="button"
                        className="mt-4 px-4 py-2 bg-secondary text-white rounded-md"
                        onClick={() => {
                          setActiveCategory('all');
                          setSearchQuery('');
                        }}
                      >
                        Reset Filters
                      </button>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="year-view"
                  className="space-y-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {getSortedYears().map((year) => (
                    <div key={year} className="bg-white dark:bg-gray-800 rounded-lg">
                      <h3 className="text-2xl font-bold text-primary mb-6 border-b pb-2">
                        {year}
                      </h3>
                      <div className="space-y-6 pl-4">
                        {getPublicationsByYear()[year].map((publication, index) => (
                          <PublicationCard
                            key={publication.id}
                            title={publication.title}
                            authors={publication.authors}
                            journal={publication.journal}
                            year={publication.year}
                            abstract={publication.abstract}
                            description={publication.description}
                            doi={publication.doi}
                            pdfUrl={publication.pdfUrl}
                            link={publication.link}
                            delay={index % 5}
                          />
                        ))}
                      </div>
                    </div>
                  ))}

                  {getSortedYears().length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-lg text-foreground/70">No publications match your search criteria.</p>
                      <button
                        type="button"
                        className="mt-4 px-4 py-2 bg-secondary text-white rounded-md"
                        onClick={() => {
                          setActiveCategory('all');
                          setSearchQuery('');
                        }}
                      >
                        Reset Filters
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Citation Information */}
      {/* <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Citation Information"
            subtitle="How to cite our research in your academic work"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">Citation Guidelines</h3>
              <p className="text-foreground/80 mb-4">
                When citing our work, please follow standard academic citation guidelines for the relevant field. For most publications, we recommend the following format:
              </p>
              <div className="bg-secondary/50 p-4 rounded-md font-mono text-sm text-foreground/80 whitespace-pre-wrap">
                Author(s) (Year). Title. Journal, Volume(Issue), Pages. DOI.
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">Access to Papers</h3>
              <p className="text-foreground/80 mb-4">
                We are committed to open science and making our research accessible to the broader scientific community. Many of our papers are available through:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Open access journals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Preprint servers (arXiv, bioRxiv, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Institutional repositories</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Direct requests to the corresponding author</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Publications;
