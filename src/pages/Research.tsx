
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { researchAreas } from "@/data/researchData";
import { principalInvestigators, allTeamMembers } from "@/data/teamData";

const Research = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Research
          </motion.h1>
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl text-foreground/80">
              Our research focuses on understanding the complex interactions between environmental factors, genetics, and neurological development and disorders.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Research Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Research Focus Areas"
            subtitle="Our lab investigates the intersection of environmental factors, genetics, and neurological disorders"
          />

          <div className="mt-12 space-y-20">
            {researchAreas.map((area, index) => {
              // Find researchers for this area
              const researchers = allTeamMembers.filter(member =>
                area.researcherIds.includes(member.id)
              ).slice(0, 3); // Limit to 3 researchers per area

              return (
                <motion.div
                  key={area.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={area.imageUrl}
                      alt={area.title}
                      className="rounded-lg shadow-md w-full aspect-video object-cover"
                    />

                    <div className="mt-8">
                      <h3 className="text-lg font-bold text-foreground mb-2">Key Researchers</h3>
                      <div className="flex items-center space-x-4">
                        {researchers.map(researcher => (
                          <div key={researcher.id} className="flex flex-col items-center">
                            <img
                              src={researcher.image}
                              alt={researcher.name}
                              className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                            />
                            <span className="text-sm mt-1 text-center">{researcher.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{area.title}</h3>
                    <p className="text-lg font-medium text-accent mb-4">Led by {area.leadResearcher}</p>

                    <div className="prose prose-lg max-w-none text-foreground/80">
                      <p className="mb-6">
                        {area.description}
                      </p>

                      <h4 className="text-xl font-bold text-primary mt-8 mb-4">Current Projects</h4>
                      <ul className="space-y-4 list-disc pl-5">
                        {area.id === 1 && (
                          <>
                            <li>
                              <span className="font-medium">Gene-Environment Interactions in Autism</span>
                              <p className="mt-1">Understanding gene-environment interactions between mutations in autism risks genes and neurodevelopmental sequelae of metals exposures.</p>
                            </li>
                            <li>
                              <span className="font-medium">Molecular Mechanisms</span>
                              <p className="mt-1">Investigating the molecular pathways affected by environmental toxins in autism spectrum disorders.</p>
                            </li>
                            <li>
                              <span className="font-medium">Biomarker Development</span>
                              <p className="mt-1">Identifying potential biomarkers for early detection and intervention in autism.</p>
                            </li>
                          </>
                        )}
                        {area.id === 2 && (
                          <>
                            <li>
                              <span className="font-medium">Gut Microbiome in Neurodegeneration</span>
                              <p className="mt-1">Elucidating multifactorial interactions of gut microbiome, genes, and environment in neurodegenerative diseases.</p>
                            </li>
                            <li>
                              <span className="font-medium">Microbiota-Gut-Brain Axis</span>
                              <p className="mt-1">Studying the communication pathways between gut microbiota and the central nervous system.</p>
                            </li>
                            <li>
                              <span className="font-medium">Therapeutic Interventions</span>
                              <p className="mt-1">Developing potential probiotic and dietary interventions for neurodegenerative conditions.</p>
                            </li>
                          </>
                        )}
                        {area.id === 3 && (
                          <>
                            <li>
                              <span className="font-medium">Iron Overload and Autism</span>
                              <p className="mt-1">Unravelling the role of iron overload on the neurexin-neuroligin complex – Implication for autism spectrum disorder.</p>
                            </li>
                            <li>
                              <span className="font-medium">Synaptic Function</span>
                              <p className="mt-1">Investigating how iron dysregulation affects synaptic formation and function in autism models.</p>
                            </li>
                            <li>
                              <span className="font-medium">Iron Chelation Therapies</span>
                              <p className="mt-1">Exploring potential therapeutic approaches targeting iron homeostasis in autism.</p>
                            </li>
                          </>
                        )}
                        {area.id === 4 && (
                          <>
                            <li>
                              <span className="font-medium">Methylmercury Neurotoxicity</span>
                              <p className="mt-1">Investigating Synaptic Dynamics in Methylmercury Neurotoxicity: Potential Involvement of Sexual Dimorphic Patterns.</p>
                            </li>
                            <li>
                              <span className="font-medium">Sex-Specific Effects</span>
                              <p className="mt-1">Examining gender differences in susceptibility to methylmercury neurotoxicity.</p>
                            </li>
                            <li>
                              <span className="font-medium">Neuroprotective Strategies</span>
                              <p className="mt-1">Developing approaches to mitigate methylmercury-induced neuronal damage.</p>
                            </li>
                          </>
                        )}
                        {area.id === 5 && (
                          <>
                            <li>
                              <span className="font-medium">Stress and Environmental Factors</span>
                              <p className="mt-1">Understanding the impact of chronic stress and environmental factors events on mental health.</p>
                            </li>
                            <li>
                              <span className="font-medium">Stress Biomarkers</span>
                              <p className="mt-1">Identifying biological markers of stress response and resilience.</p>
                            </li>
                            <li>
                              <span className="font-medium">Intervention Development</span>
                              <p className="mt-1">Creating evidence-based interventions to reduce the impact of environmental stressors on mental health.</p>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Research Methodology"
            subtitle="How we investigate environmental factors in neurological disorders through rigorous scientific approaches"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-primary rounded-full text-white flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Problem Identification</h3>
              <p className="text-foreground/80">
                We identify significant scientific challenges through literature review, stakeholder engagement, and continuous monitoring of emerging research questions in our fields.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-primary rounded-full text-white flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Hypothesis Development</h3>
              <p className="text-foreground/80">
                Through interdisciplinary collaboration, we formulate testable hypotheses and develop theoretical frameworks to guide our research investigations.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-primary rounded-full text-white flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Experimental Design</h3>
              <p className="text-foreground/80">
                We design rigorous experiments with appropriate controls, sample sizes, and methodologies to test our hypotheses and ensure reproducibility.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-primary rounded-full text-white flex items-center justify-center font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Data Collection</h3>
              <p className="text-foreground/80">
                Using state-of-the-art equipment and techniques, we collect high-quality data while maintaining detailed documentation and following ethical guidelines.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-primary rounded-full text-white flex items-center justify-center font-bold text-xl mb-4">
                5
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Analysis & Interpretation</h3>
              <p className="text-foreground/80">
                We analyze data using advanced statistical methods and computational tools, interpreting results in the context of existing knowledge and theoretical frameworks.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-12 h-12 bg-primary rounded-full text-white flex items-center justify-center font-bold text-xl mb-4">
                6
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Dissemination & Application</h3>
              <p className="text-foreground/80">
                We share findings through peer-reviewed publications, conferences, and public engagement, while exploring practical applications and forming industry partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Infrastructure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Research Infrastructure"
            subtitle="Our specialized facilities and equipment enable cutting-edge neuroscience and environmental toxicology research"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Neuroscience and Toxicology Lab</h3>
                <p className="text-foreground/80 mb-4">
                  Our specialized neuroscience laboratory is equipped with state-of-the-art tools for investigating neurological development, function, and the impact of environmental toxins.
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Confocal and fluorescence microscopy systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Electrophysiology equipment for neural recording</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Behavioral testing apparatus for animal models</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Genomics & Computational Biology Center</h3>
                <p className="text-foreground/80 mb-4">
                  Our genomics center is equipped with next-generation sequencing technologies and high-performance computing resources for biological data analysis.
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Illumina NovaSeq 6000 system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Oxford Nanopore sequencing platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Single-cell sequencing equipment</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Environmental Toxicology Analysis Lab</h3>
                <p className="text-foreground/80 mb-4">
                  Our specialized facility for analyzing environmental toxins and their biological impacts features advanced analytical equipment for detecting trace amounts of metals and other toxicants.
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Inductively Coupled Plasma Mass Spectrometry (ICP-MS)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>High-Performance Liquid Chromatography (HPLC)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Gas Chromatography-Mass Spectrometry (GC-MS)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Molecular Biology and Cell Culture Facility</h3>
                <p className="text-foreground/80 mb-4">
                  Our molecular biology lab supports research on cellular and molecular mechanisms of neurodevelopment and neurotoxicity with specialized equipment for cell and tissue culture.
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Flow cytometry and cell sorting systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Real-time PCR and gene expression analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Primary neuronal and glial cell culture facilities</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
