import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin, Users, FileText, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const FBMSConference = () => {
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
            FBMS International Conference and Symposiums
          </motion.h1>
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl text-foreground/80 mb-6">
              <span className="font-semibold">Theme:</span> Innovating Biomedical Research for Transformative National Policies
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center">
                <Calendar className="text-primary mr-2" size={20} />
                <span>June 4-6, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-primary mr-2" size={20} />
                <span>10:00 AM daily</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary mr-2" size={20} />
                <span>TETfund Building, UNIMED Laje Campus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 border border-border mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-primary mb-4">About the Conference</h2>
                <p className="text-foreground/80 mb-6">
                  The Faculty of Basic Medical Sciences (FBMS) and the Laboratory for Experimental and Translational Neurobiology (LETNeu) at the University of Medical Sciences, Ondo, Nigeria are pleased to announce the FBMS International Conference and Symposiums. This event brings together researchers, clinicians, and policymakers to discuss innovative approaches in biomedical research and their implications for national health policies.
                </p>

                <h3 className="text-xl font-bold text-primary mb-3">Subthemes</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-foreground/80">
                  <li>Advances in molecular biomedicine</li>
                  <li>Neuroscience and neuro-technologies</li>
                  <li>Innovative approaches in phytomedicine</li>
                  <li>Endocrinology and reproductive physiology</li>
                  <li>Anatomical bioanthropology</li>
                  <li>Computational biology and bioinformatics</li>
                  <li>Artificial intelligence in biomedical research</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-md p-6 border border-border mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-primary mb-4">Plenary Speakers</h2>

                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4">
                      <div className="aspect-square rounded-lg bg-secondary/50 flex items-center justify-center">
                        <Users size={64} className="text-primary/50" />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-lg font-bold text-primary">Olumide A.T. Ogundahunsi, PhD</h3>
                      <p className="text-accent mb-2">Global Health Policy Consultant, Lagos, Nigeria</p>
                      <p className="text-sm text-foreground/70">
                        Professor of Pharmacology and Therapeutics, UNIMED (Retired)<br />
                        Senior Diplomatic Staff, World Health Organization, Geneva (Retired)
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4">
                      <div className="aspect-square rounded-lg bg-secondary/50 flex items-center justify-center">
                        <Users size={64} className="text-primary/50" />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-lg font-bold text-primary">Samuel O. Oluwafemi, PhD</h3>
                      <p className="text-accent mb-2">Professor of Nanotechnology</p>
                      <p className="text-sm text-foreground/70">
                        Leader, Nanotechnology for Biological, Energy, and Water (CHEM-NANOBEW) Group<br />
                        University of Johannesburg, South Africa
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-md p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-primary mb-4">Program of Activities</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-3">Day 1</h3>
                    <div className="space-y-3">
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">15:00 – 17:00</span>
                        <span className="text-foreground/80">Arrivals and registration</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">17:00 – 18:00</span>
                        <span className="text-foreground/80">Meet and greet/welcome cocktail</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">18:00 – 20:00</span>
                        <span className="text-foreground/80">Dinner</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-primary mb-3">Day 2</h3>
                    <div className="space-y-3">
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">09:00 – 10:00</span>
                        <span className="text-foreground/80">Registration and networking</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">10:00 – 10:25</span>
                        <span className="text-foreground/80">Opening Ceremony: Introduction and welcome address</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">10:25 – 10:45</span>
                        <span className="text-foreground/80">Vice-Chancellor's Speech – VC, UNIMED</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">10:50 – 12:30</span>
                        <span className="text-foreground/80">Plenary 1: Innovating Biomedical Research for Transformative National Policies– Prof Olumide A.T. Ogundahunsi</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">12:30 – 13:30</span>
                        <span className="text-foreground/80">Lunch Break</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">13:30 – 15:00</span>
                        <span className="text-foreground/80">Symposium Session 1: 3 – 5 oral presentations of talks focusing on any of the meeting subthemes</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">15:00 – 15:30</span>
                        <span className="text-foreground/80">Short Break</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">15:30 – 16:30</span>
                        <span className="text-foreground/80">Poster Session 1</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">16:30 – 17:00</span>
                        <span className="text-foreground/80">Closing and networking</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-primary mb-3">Day 3</h3>
                    <div className="space-y-3">
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">10:00 – 10:30</span>
                        <span className="text-foreground/80">Opening formalities and networking</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">10:30 – 12:00</span>
                        <span className="text-foreground/80">Plenary 2: Dynamism in biomedical research: Navigating unstable government policies – Prof Samuel O. Oluwafemi (Virtual)</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">12:30 – 13:30</span>
                        <span className="text-foreground/80">Lunch Break</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">13:30 – 15:00</span>
                        <span className="text-foreground/80">Symposium Session 1: 3 – 5 oral presentations of talks focusing on any of the meeting subthemes</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">15:00 – 15:30</span>
                        <span className="text-foreground/80">Short Break</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">15:30 – 16:30</span>
                        <span className="text-foreground/80">Poster Session 1</span>
                      </div>
                      <div className="flex">
                        <span className="text-primary font-medium w-32 flex-shrink-0">16:30 – 17:00</span>
                        <span className="text-foreground/80">Closing and networking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 border border-border mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <DollarSign size={20} className="mr-2" />
                  Registration Fees
                </h2>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex justify-between">
                    <span>Early bird registration (till 30 April, 2025)</span>
                    <span className="font-medium">25,000 NGN</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Standard registration</span>
                    <span className="font-medium">30,000 NGN</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Virtual Participation</span>
                    <span className="font-medium">20,000 NGN</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Student registration</span>
                    <span className="font-medium">20,000 NGN</span>
                  </li>
                  <li className="flex justify-between">
                    <span>International participants</span>
                    <span className="font-medium">100 USD (or NGN equivalent)</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://forms.gle/byvJ45Z1MFWvi11E9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <span>Register Now</span>
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-md p-6 border border-border mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <FileText size={20} className="mr-2" />
                  Abstract Submission
                </h2>
                <div className="text-foreground/80 space-y-3">
                  <p>Submission Guidelines:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Abstract submissions should include a title, list of authors and affiliations, and the email address of the presenting and/or corresponding author</li>
                    <li>Abstracts should not exceed 300 words</li>
                    <li>Typed in Arial font size 10-11 (single spacing)</li>
                    <li>To be uploaded as a one-page MS Word document</li>
                  </ul>
                  <p className="mt-4">Submit abstract to <a href="mailto:ana@unimed.edu.ng" className="text-accent hover:underline">ana@unimed.edu.ng</a> with proof of registration fee.</p>
                  <p className="font-medium">The deadline is 30 April 2024.</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-md p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl font-bold text-primary mb-4">Organisers</h2>
                <div className="mb-4 text-foreground/80">
                  <p>The Faculty of Basic Medical Sciences (FBMS) and the Laboratory for Experimental and Translational Neurobiology (LETNeu), University of Medical Sciences, Ondo, Nigeria</p>
                </div>

                <h3 className="text-lg font-bold text-primary mb-3">Contacts</h3>
                <div className="space-y-4 text-foreground/80">
                  <div>
                    <h3 className="font-medium">Prof Isaac Adewale</h3>
                    <p className="text-sm">Dean, FBMS, UNIMED</p>
                    <a href="mailto:iadewale@unimed.edu.ng" className="text-accent hover:underline text-sm">iadewale@unimed.edu.ng</a>
                  </div>
                  <div>
                    <h3 className="font-medium">Dr Omamuyovwi M. Ijomone</h3>
                    <p className="text-sm">Chair, Local Organizing Committee & Group Leader, LETNeu, UNIMED</p>
                    <a href="mailto:omijomone@unimed.edu.ng" className="text-accent hover:underline text-sm">omijomone@unimed.edu.ng</a>
                  </div>
                  <div>
                    <h3 className="font-medium">Dr Olorunsola I. Adeyomoye</h3>
                    <p className="text-sm">Chair, Scientific Sub-Committee (Applicant to CoB Meeting Grant***)</p>
                    <a href="mailto:oadeyomoye@unimed.edu.ng" className="text-accent hover:underline text-sm">oadeyomoye@unimed.edu.ng</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FBMSConference;
