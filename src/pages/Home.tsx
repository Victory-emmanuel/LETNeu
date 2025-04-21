
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import PublicationCard from "@/components/cards/PublicationCard";
import SponsorBanner from "@/components/sections/SponsorBanner";


import { principalInvestigators, researchers } from "@/data/teamData";
import { recentPublications } from "@/data/publicationsData";
import { researchAreas } from "@/data/researchData";
import { collaborators, funders } from "@/data/collaboratorsData";
import { upcomingEvents } from "@/data/eventsData";

const Home = () => {
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
        subtitle="A research-intensive group at the University of Medical Sciences, Ondo (UNIMED), studying metal neurotoxicity, developmental neurotoxicity, mechanisms of neurodegeneration, gene-environment interactions, and environmental toxicology."
        backgroundImage="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

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
                The Laboratory for Experimental and Translational Neurobiology (LETNeu) is a research-intensive group at the University of Medical Sciences, Ondo (UNIMED). We study metal neurotoxicity, developmental neurotoxicity; mechanisms of neurodegeneration; gene-environment interactions and gut microbiome modulation in brain disorder; and environmental toxicology.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-border dark:border-gray-700 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={area.imageUrl}
                    alt={area.title}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">{area.title}</h3>
                  <p className="text-sm text-foreground/70 line-clamp-3 mb-4">{area.description}</p>
                 
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-primary  dark:bg-black dark:text-white bg-white text-black  font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              <span>About Our Lab</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 bg-secondary/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Team"
            subtitle="Meet our dedicated researchers and lab members."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {principalInvestigators.map((member, index) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                email={member.email}
                linkedin={member.linkedin}
                position={member.position}
                delay={index}
              />
            ))}

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {researchers.map((member, index) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                email={member.email}
                linkedin={member.linkedin}
                position={member.position}
                detailedBio={member.detailedBio}
                delay={index}
              />
            ))}
          </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              to="/team"
              className="inline-flex items-center px-6 py-3 dark:bg-black dark:text-white bg-white text-black  font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              <span>Meet Our Full Team</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-secondary/30 dark:bg-gray-800/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Join us for our upcoming conferences, workshops, and seminars."
          />

          <div className="mt-12">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-border dark:border-gray-700 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/70">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-foreground/80 mb-6">{event.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        to="/fbms-conference"
                        className="inline-flex items-center px-4 py-2  dark:bg-black dark:text-white bg-white text-black  font-medium rounded-md hover:bg-primary/90 transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                      {event.registrationUrl && (
                        <a
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-secondary text-primary font-medium rounded-md hover:bg-secondary/70 transition-colors"
                        >
                          <span>Register</span>
                          <ArrowRight size={16} className="ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3  dark:bg-black dark:text-white bg-white text-black  font-medium rounded-md hover:bg-primary/90 transition-colors"
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
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {collaborators.map((collaborator, index) => (
                <motion.div
                  key={collaborator.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center dark:border dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Our Funders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {funders.map((funder, index) => (
                <motion.div
                  key={funder.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 dark:border dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >  <div className="w-40 h-20 mx-auto mb-3 overflow-hidden">
                <img
                  src={funder.imageUrl}
                  alt={funder.name}
                  className="w-full h-full object-cover"
                />
              </div>
                  <h4 className="font-medium text-primary mb-2">{funder.name}</h4>
                  <p className="text-sm text-foreground/70">{funder.website}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3  dark:bg-black dark:text-white bg-white text-black  font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              <span>Learn More</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 bg-primary/75 dark:bg-secondary/75 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h2>

          <motion.p
            className="text-xl text-white/90 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We provide training to graduate students, early-career researchers, and established investigators to gain advanced skills in neuroscience research.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4  dark:bg-black dark:text-white bg-white text-black  font-medium rounded-md hover:bg-white/90 transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
