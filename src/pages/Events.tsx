
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/cards/EventCard";
import { upcomingEvents, pastEvents, eventCategories } from "@/data/eventsData";

const Events = () => {
  const [activeView, setActiveView] = useState<'upcoming' | 'past'>('upcoming');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter events based on active category
  const filteredEvents = () => {
    const eventsToFilter = activeView === 'upcoming' ? upcomingEvents : pastEvents;

    if (activeCategory === 'all') {
      return eventsToFilter;
    }

    return eventsToFilter.filter(event => event.category === activeCategory);
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
            Events & Seminars
          </motion.h1>
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl text-foreground/80">
              Join us for upcoming events, workshops, seminars, and conferences to learn about our latest research.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Events Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            {/* Event Filter Controls */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-border dark:border-gray-700 mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="md:w-1/4">
                  <label className="block text-sm font-medium text-foreground/70 mb-1">
                    Event Type
                  </label>
                  <div className="flex rounded-md overflow-hidden border border-border dark:border-gray-700">
                    <button
                      type="button"
                      className={`flex-1 px-4 py-2 ${
                        activeView === 'upcoming'
                          ? 'bg-primary text-white'
                          : 'bg-white dark:bg-gray-700 text-foreground dark:text-gray-200 hover:bg-secondary/50 dark:hover:bg-gray-600'
                      }`}
                      onClick={() => setActiveView('upcoming')}
                    >
                      Upcoming
                    </button>
                    <button
                      type="button"
                      className={`flex-1 px-4 py-2 ${
                        activeView === 'past'
                          ? 'bg-primary text-white'
                          : 'bg-white dark:bg-gray-700 text-foreground dark:text-gray-200 hover:bg-secondary/50 dark:hover:bg-gray-600'
                      }`}
                      onClick={() => setActiveView('past')}
                    >
                      Past
                    </button>
                  </div>
                </div>

                <div className="flex-grow">
                  <label className="block text-sm font-medium text-foreground/70 mb-1">
                    Filter by Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {eventCategories.map((category) => (
                      <button
                        type="button"
                        key={category.value}
                        className={`px-3 py-1.5 rounded-full text-sm ${
                          activeCategory === category.value
                            ? 'bg-primary text-white'
                            : 'bg-secondary dark:bg-gray-700 text-primary dark:text-gray-200 hover:bg-primary/10 dark:hover:bg-primary/20'
                        } transition-colors`}
                        onClick={() => setActiveCategory(category.value)}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 text-foreground/70">
              Showing {filteredEvents().length} {activeView} events
              {activeCategory !== 'all' && (
                <> in {eventCategories.find(cat => cat.value === activeCategory)?.label}</>
              )}
            </div>

            {/* Events List */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredEvents().map((event, index) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    description={event.description}
                    imageUrl={event.imageUrl}
                    registrationUrl={!event.isPast ? event.registrationUrl : undefined}
                    delay={index % 4}
                  />
                ))}

                {filteredEvents().length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <p className="text-lg text-foreground/70">No events match your criteria.</p>
                    <button
                      type="button"
                      className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
                      onClick={() => setActiveCategory('all')}
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>




    </Layout>
  );
};

export default Events;
