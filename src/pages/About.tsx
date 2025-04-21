
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import { principalInvestigators, researchers, graduate, alumni } from "@/data/teamData";
import { researchAreas } from "@/data/researchData";
import { collaborators, funders } from "@/data/collaboratorsData";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div
        className="py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://i.postimg.cc/J438vgZV/C-elegans-stained.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Our Lab
          </motion.h1>
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl text-white/90 mb-8">
              The Laboratory for Experimental and Translational Neurobiology (LETNeu) is a research-intensive group at the University of Medical Sciences, Ondo (UNIMED), dedicated to understanding the complex interplay between genetic and environmental factors in brain disorders.
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Us */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">About Our Lab</h2>
              <p className="text-foreground/80 mb-4">
                The Laboratory for Experimental and Translational Neurobiology (LETNeu) is a research-intensive group at the University of Medical Sciences, Ondo (UNIMED). We study metal neurotoxicity, developmental neurotoxicity; mechanisms of neurodegeneration; gene-environment interactions and gut microbiome modulation in brain disorder; and environmental toxicology.
              </p>
              <p className="text-foreground/80 mb-4">
                Our research aims to understand how the brain is affected by an interplay of genetic and environmental factors that trigger neuronal perturbations and/or neuronal death at critical stages of development and across the lifespan.
              </p>
              <p className="text-foreground/80">
                Specifically, we focus on the role of metals as environmental toxicants interacting with genetic mutations in the pathogenesis of brain disorders including autism, Parkinson's, and Alzheimer's.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Our Research Approach</h2>
              <p className="text-foreground/80 mb-4">
                Our research investigates how these factors influence pathophysiological pathways such as neuro-inflammatory, oxidative redox imbalance, and mitochondrial dysfunctions. Furthermore, given the emerging evidence of gut microbiome in various neurological disorders, our lab also investigates the multifactorial interactions of the environment, genes, and gut microbiome in brain diseases.
              </p>
              <p className="text-foreground/80 mb-4">
                Understanding these complex interactions could be key to identifying better disease biomarkers and new drug targets and developing multifactorial therapeutic interventions.
              </p>
              <p className="text-foreground/80">
                Our research leverages various experimental models particularly rodents and the innovative C. elegans via a combination of multiple approaches that include behavioural phenotypic studies, microscopic imaging, immunoassays, spectrophotometric and spectrometric analysis, gene expression, and transcriptomics analysis.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training & Education */}
      <section className="py-16 bg-secondary/30 dark:bg-gray-800/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Training & Education"
            subtitle="Advancing neuroscience research and training in the region"
            align="left"
          />

          <div className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-border dark:border-gray-700 mb-8"
            >
              <p className="text-foreground/80 mb-4">
                We equally provide training to graduate students, early-career researchers, and established investigators from other institutions to gain advanced skills including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>Immunohistochemistry and immunofluorescence</li>
                <li>Microscopy and imaging analysis</li>
                <li>Biomedical visualizations</li>
                <li>Basic handling of the C. elegans model</li>
              </ul>
              <p className="text-foreground/80">
                These training opportunities serve as a way of advancing neuroscience research and training in the region.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lab Members */}
      <section className="py-16 bg-secondary/30 dark:bg-gray-800/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Lab Members"
            subtitle="Meet our dedicated team of researchers"
          />

          <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Group Leader and Principal Investigator</h3>
          <div className="grid grid-cols-1 gap-8 mb-12">
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
                detailedBio={member.detailedBio}
                delay={index}
              />
            ))}
          </div>

          <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Research Fellows</h3>
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
      </section>

      {/* Collaborators & Funders */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Collaborators & Funders"
            subtitle="Our research is supported by collaborations and funding from prestigious institutions worldwide"
          />

          <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Collaborators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {collaborators.map((collaborator, index) => (
              <motion.div
                key={collaborator.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-border dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={collaborator.imageUrl}
                      alt={collaborator.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{collaborator.name}</h4>
                    <p className="text-sm text-foreground/70">{collaborator.institution}</p>
                    <p className="text-xs text-foreground/60">{collaborator.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Funders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funders.map((funder, index) => (
              <motion.div
                key={funder.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-border dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="font-bold text-primary mb-2">{funder.name}</h4>
                <p className="text-foreground/80">{funder.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
