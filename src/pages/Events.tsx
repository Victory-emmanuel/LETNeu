
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/cards/EventCard";
import { upcomingEvents, pastEvents } from "@/data/eventsData";

const Events = () => {
  const [activeView, setActiveView] = useState<'upcoming' | 'past'>('upcoming');

  // Filter events based on active view
  const filteredEvents = () => {
    return activeView === 'upcoming' ? upcomingEvents : pastEvents;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: ` url('/hero-media/ISN-30.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 z-0"></div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Events & Updates
          </motion.h1>
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl text-white/90">
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
              <label className="block text-sm font-medium text-foreground/70 mb-3">
                Event Type
              </label>
              <div className="flex rounded-md overflow-hidden border border-border dark:border-gray-700 w-fit">
                <button
                  type="button"
                  className={`px-6 py-2 ${
                    activeView === 'upcoming'
                      ? 'bg-primary text-white dark:bg-secondary dark:text-white'
                      : 'bg-white dark:bg-gray-700 text-foreground dark:text-gray-100 hover:bg-secondary/50 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => setActiveView('upcoming')}
                >
                  Upcoming
                </button>
                <button
                  type="button"
                  className={`px-6 py-2 ${
                    activeView === 'past'
                      ? 'bg-primary text-white dark:bg-secondary dark:text-white'
                      : 'bg-white dark:bg-gray-700 text-foreground dark:text-gray-200 hover:bg-secondary/50 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => setActiveView('past')}
                >
                  Past
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 text-foreground/70">
              Showing {filteredEvents().length} {activeView} events
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
                {filteredEvents().map((event, index) => {
                  // Extract the preview string from our new structured data
                  const previewDescription = Array.isArray(event.description)
                    ? event.description[0]?.body || ""
                    : event.description; // Fallback string protection

                  return (
                    <EventCard
                      key={event.id}
                      id={event.id}
                      title={event.title}
                      date={event.date}
                      time={event.time}
                      location={event.location}
                      description={previewDescription} // Now passing a pure string snippet
                      imageUrl={event.imageUrl}
                      registrationUrl={!event.isPast ? event.registrationUrl : undefined}
                      delay={index % 4}
                      isPast={event.isPast}
                    />
                  );
                })}
                {filteredEvents().length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <p className="text-lg text-foreground/70">No events match your criteria.</p>
                    <button
                      type="button"
                      className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
                      onClick={() => setActiveView('upcoming')}
                    >
                      Reset View
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
