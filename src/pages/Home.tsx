
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin, Brain, Microscope, TestTube, Dna, Atom, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import PublicationCard from "@/components/cards/PublicationCard";
import EventCard from "@/components/cards/EventCard";
import SponsorBanner from "@/components/sections/SponsorBanner";


import { administration, faculty } from "@/data/teamData";
import { recentPublications } from "@/data/publicationsData";
import { researchAreas } from "@/data/researchData";
import { collaborators, funders } from "@/data/collaboratorsData";
import { allEvents } from "@/data/eventsData";

const Home = () => {
  const featuredEvents = allEvents.slice(0, 3); // Show only the first 3 events on the homepage
  // Function to get icon based on research area ID
  const getResearchIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Brain className="text-accent" size={24} />;
      case 2:
        return <Microscope className="text-highlight" size={24} />;
      case 3:
        return <Atom className="text-accent" size={24} />;
      case 4:
        return <TestTube className="text-highlight" size={24} />;
      case 5:
        return <Leaf className="text-extra" size={24} />;
      default:
        return <Dna className="text-primary" size={24} />;
    }
  };

  // Sponsor logos
  const sponsorImages = [
    "https://i.postimg.cc/TYys8RQS/sponsors4.png",
    "https://i.postimg.cc/X7Tz4Tzv/sponsors3.png",
    "https://i.postimg.cc/h4ZY3J8T/sponsors2.png",
    "https://i.postimg.cc/HnNPJKWB/sponsors1.png",
    "https://i.postimg.cc/jSPk5Zp4/sponsors5.png",
    "https://i.postimg.cc/XvW1y93S/sponsors6.png",
    "https://i.postimg.cc/Gpj7P9hB/sponsors7.png"
  ];

  return (
    <Layout>
      <HeroSection
      title="Laboratory for Experimental and Translational Neurobiology"
      subtitle="A research-intensive group at the University of Medical Sciences, Ondo (UNIMED), studying neurotoxicity, mechanisms of neurodegeneration, and brain disorders."
      media={[
      { type: 'image', url: '/hero-media/SNV_6490.jpg' },
      { type: 'video', url: '/hero-media/elegans-1.mp4' },
      { type: 'image', url: 'https://i.postimg.cc/L8Np61xx/elegans-landing.jpg' },
      { type: 'image', url: '/hero-media/SNV_6483.jpg' },
      { type: 'video', url: '/hero-media/glovehand-video2.mp4' }
      ]}/>

      {/* Sponsors Banner */}
      <SponsorBanner sponsors={sponsorImages} />

      {/* About Preview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="About Us"
            subtitle="Understanding the interplay of genetic and environmental factors that affect the brain across the lifespan."
          />

          <div className="mt-8 mb-12">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-foreground/80 mb-4">
                The Laboratory for Experimental and Translational Neurobiology (LETNeu) is a research-intensive group at the University of Medical Sciences, Ondo (UNIMED). We study neurotoxicity; mechanisms of neurodegeneration; gene-environment interactions and gut microbiome modulation in brain disorders (autism, Parkinson's, and Alzheimer's); and environmental neurotoxicology.
              </p>
              <p className="text-foreground/80 mb-4">
                Our research aims to understand how the brain is affected by an interplay of genetic and environmental factors that trigger neuronal perturbations and/or neuronal death at critical stages of development and across the lifespan. Specifically, we focus on the role of metals as environmental toxicants interacting with genetic mutations in the pathogenesis of brain disorders including autism, Parkinson's, and Alzheimer's.
              </p>
              <p className="text-foreground/80">
                Our research leverages various experimental models particularly rodents and the innovative C. elegans via a combination of multiple approaches that include behavioural phenotypic studies, microscopic imaging, immunoassays, spectrophotometric and spectrometric analysis, gene expression, and transcriptomics analysis.
              </p>
            </motion.div>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">Research Focus</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-border dark:border-gray-700 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >

                <div className="p-8 h-full flex flex-col items-center justify-center text-center gap-4">
                  <div className="flex items-center justify-center mb-3 rounded-full bg-secondary/30 dark:bg-gray-700/40 p-5">
                    {getResearchIcon(area.id)}
                  </div>
                  <h3 className="text-xl font-bold text-primary">{area.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-primary  dark:bg-black dark:text-white bg-white text-black  font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              <span>Our Ongoing Research</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

            {/* Featured Events Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured News & Events"
            subtitle="Explore our upcoming and past conferences, workshops, and seminars."
          />

          {/* Grid Layout: 3 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {featuredEvents.map((event, index) => {
              // Safely extract the string snippet for the card view
              const previewDescription = Array.isArray(event.description)
                ? event.description[0]?.body || ""
                : event.description;

              return (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={previewDescription} // Passing the cleaned string
                  imageUrl={event.imageUrl}
                  registrationUrl={event.registrationUrl}
                  delay={index}
                  isPast={event.isPast}
                />
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold rounded-md hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              <span>View All Events</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Publications Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Selected Publications"
            subtitle="Explore our contributions to neuroscience and toxicology research."
          />

          <div className="space-y-6 mt-12">
            {recentPublications.map((publication, index) => (
              <PublicationCard
                key={publication.id}
                title={publication.title}
                authors={publication.authors}
                journal={publication.journal}
                year={publication.year}
                abstract={publication.abstract}
                doi={publication.doi}
                pdfUrl={publication.pdfUrl}
                delay={index}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/publications"
              className="inline-flex items-center px-6 py-3  dark:bg-black dark:text-white bg-white text-black  font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              <span>View All Publications</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Collaborators & Funders Preview */}
      <section className="py-20 bg-secondary/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Collaborators & Funders"
            subtitle="Our research is supported by collaborations and funding from prestigious institutions worldwide."
          />

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Key Collaborators</h3>
            <div className="scroll-marquee scroll-right py-2">
              <div className="scroll-track">
                {[...collaborators, ...collaborators].map((collaborator, index) => (
                  <div
                    key={`collab-${index}`}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center dark:border dark:border-gray-700 min-w-[240px]"
                  >
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                      <img
                        src={collaborator.imageUrl}
                        alt={collaborator.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-medium text-primary">{collaborator.name}</h4>
                    <p className="text-sm text-foreground/70">{collaborator.institution}</p>
                    <p className="text-xs text-foreground/60">{collaborator.country}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Our Funders</h3>
            <div className="scroll-marquee scroll-left py-2">
              <div className="scroll-track">
                {[...funders, ...funders].map((funder, index) => (
                  <div
                    key={`funder-${index}`}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 dark:border dark:border-gray-700 min-w-[240px]"
                  >
                    <div className="w-40 h-20 mx-auto mb-3 overflow-hidden">
                      <img
                        src={funder.imageUrl}
                        alt={funder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-medium text-primary mb-2">{funder.name}</h4>
                    <a href={funder.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500">{funder.website}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
