
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { researchAreas } from "@/data/researchData";
import { allTeamMembers } from "@/data/teamData";

// Import the video file
import elegansVideo from "@/assets/elegans.mp4";

const About = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mediaIndices, setMediaIndices] = useState<{ [key: number]: number }>({});

  const heroMedia = {
    imageUrl: "/hero-media/researcher-working.jpeg",
    videoUrl: undefined as string | undefined,
    altText: "Researcher Working in the Lab"
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleError = () => {
      console.error('Video failed to load');
      videoElement.classList.add('error');
    };

    const handleCanPlay = () => {
      console.log('Video can play');
      // Remove error class if it was previously added
      videoElement.classList.remove('error');
    };

    // Add event listeners
    videoElement.addEventListener('error', handleError);
    videoElement.addEventListener('canplay', handleCanPlay);

    // Check if video is already in error state
    if (videoElement.error) {
      handleError();
    }

    // Cleanup
    return () => {
      videoElement.removeEventListener('error', handleError);
      videoElement.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  // Auto-switch media (images every 3s, videos every 5s)
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    researchAreas.forEach((area) => {
      const hasMultipleImages = area.imageUrls && area.imageUrls.length > 1;
      const hasMultipleVideos = area.videoUrls && area.videoUrls.length > 1;

      if (hasMultipleImages || hasMultipleVideos) {
        const interval = setInterval(() => {
          setMediaIndices((prev) => {
            const currentIndex = prev[area.id] || 0;
            const itemsArray = hasMultipleVideos ? area.videoUrls : area.imageUrls;
            const nextIndex = (currentIndex + 1) % (itemsArray?.length || 1);
            return { ...prev, [area.id]: nextIndex };
          });
        }, hasMultipleVideos ? 5000 : 3000); // 5s for videos, 3s for images

        intervals.push(interval);
      }
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroMedia.videoUrl ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              src={heroMedia.videoUrl}
            />
          ) : (
            <img
              className="h-full w-full object-cover"
              src={heroMedia.imageUrl}
              alt={heroMedia.altText}
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Research
          </motion.h1>
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl  text-white/90 mb-8">
              Our research focuses on understanding the complex interactions between environmental factors, genetics, and neurological development and disorders.
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Us */}
      {/* <section className="py-16 bg-white dark:bg-gray-900">
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
      </section> */}

      {/* Research Focus Areas */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Current Research"
            subtitle="Our lab investigates the intersection of environmental factors, genetics, and neurological disorders"
          />

          <div className="mt-12 space-y-20">
            {researchAreas.map((area, index) => {
              const researchers = allTeamMembers.filter(member =>
                area.researcherIds.includes(member.id)
              ).slice(0, 3);

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
                    {/* Determine which media to display */}
                    {(() => {
                      const currentIndex = mediaIndices[area.id] || 0;
                      const hasMultipleVideos = area.videoUrls && area.videoUrls.length > 1;
                      const hasMultipleImages = area.imageUrls && area.imageUrls.length > 1;
                      const currentVideo = hasMultipleVideos ? area.videoUrls?.[currentIndex] : area.videoUrl;
                      const currentImage = hasMultipleImages ? area.imageUrls?.[currentIndex] : area.imageUrl;

                      return (
                        <div>
                          {currentVideo ? (
                            <video
                              className="rounded-lg shadow-md w-full aspect-video object-cover"
                              controls
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="auto"
                              src={currentVideo}
                            />
                          ) : (
                            <img
                              src={currentImage}
                              alt={area.title}
                              className="rounded-lg shadow-md w-full aspect-video object-cover"
                            />
                          )}
                          {/* Carousel indicators */}
                          {(hasMultipleVideos || hasMultipleImages) && (
                            <div className="flex justify-center gap-2 mt-4">
                              {(hasMultipleVideos ? area.videoUrls : area.imageUrls)?.map((_, idx) => (
                                <div
                                  key={idx}
                                  className={`h-2 w-2 rounded-full transition-colors ${
                                    idx === currentIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{area.title}</h3>

                    <div className="prose prose-lg max-w-none text-foreground/80">
                      <p className="mb-6">{area.description}</p>

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
                              <span className="font-medium">Gut Microbiome in Brain Disorders</span>
                              <p className="mt-1">Elucidating multifactorial interactions of gut microbiome, genes, and environment in brain disorders.</p>
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

      {/* Training & Education */}
      <section className="py-16 bg-secondary/30 dark:bg-gray-800/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Training & Education"
            subtitle="Advancing neuroscience research and training in the region"
            align="center"
          />

          <div className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-border dark:border-gray-700 mb-8"
            >
              <p className="text-foreground/80 mb-4 ">
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
    </Layout>
  );
};

export default About;
