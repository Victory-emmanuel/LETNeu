
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your backend
    console.log("Form submitted:", formData);
    // Simulate successful submission
    setFormStatus("success");
    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
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
            Contact Us
          </motion.h1>
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl text-foreground/80">
              Get in touch with the Laboratory for Experimental and Translational Neurobiology (LETNeu) for inquiries, collaborations, or to learn more about our research and training opportunities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-border dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>

              {formStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </div>
              )}

              {formStatus === "error" && (
                <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-md">
                  There was an error sending your message. Please try again later.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-md border border-border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-md border border-border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 rounded-md border border-border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Neuroscience Research Inquiry">Neuroscience Research Inquiry</option>
                    <option value="Collaboration Proposal">Collaboration Proposal</option>
                    <option value="Training Opportunity">Training Opportunity</option>
                    <option value="Student Application">Student Application</option>
                    <option value="C. elegans Model Inquiry">C. elegans Model Inquiry</option>
                    <option value="General Question">General Question</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded-md border border-border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-highlight text-white font-medium rounded-md hover:bg-highlight/90 transition-colors flex items-center"
                >
                  <Send size={18} className="mr-2" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-border dark:border-gray-700 mb-8"
              >
                <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-accent/20 dark:bg-accent/30 p-3 rounded-full mr-4">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Address</h3>
                      <p className="text-foreground/70">
                      Multidisciplinary Laboratory Building, UNIMED, Ondo<br />
                      Medical Village, Laje Road,<br />
                      Ondo 351101, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-highlight/20 dark:bg-highlight/30 p-3 rounded-full mr-4">
                      <Mail className="text-highlight" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <p className="text-foreground/70">
                        <a href="mailto:omijomone@unimed.edu.ng" className="hover:text-primary">
                        theneurolab2019@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-extra/20 dark:bg-extra/30 p-3 rounded-full mr-4">
                      <Phone className="text-extra" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Phone</h3>
                      <p className="text-foreground/70">
                      +2347075423888
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-accent/20 dark:bg-accent/30 p-3 rounded-full mr-4">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Hours</h3>
                      <p className="text-foreground/70">
                        Monday - Friday: 8:00 AM - 4:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative h-80 rounded-lg shadow-md overflow-hidden">
                  <iframe
                    title="Lab Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1723227026384!2d4.8033391!3d7.1114693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047a1b5b8b2b0c3%3A0x6c6a0a14c5c0e2e9!2sUniversity%20of%20Medical%20Sciences%2C%20Ondo!5e0!3m2!1sen!2sng!4v1687487054415!5m2!1sen!2sng"
                    className="w-full h-full border-0"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Opportunities */}
      <section className="py-16 bg-secondary/30 dark:bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Training Opportunities</h2>
              <p className="text-foreground/80 mb-4">
                We provide training to graduate students, early-career researchers, and established investigators from other institutions to gain advanced skills in neuroscience research.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm border border-border dark:border-gray-700 mb-6">
                <h3 className="font-bold text-foreground mb-2">Training Areas</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Immunohistochemistry and immunofluorescence</li>
                  <li>Microscopy and imaging analysis</li>
                  <li>Biomedical visualizations</li>
                  <li>Basic handling of the C. elegans model</li>
                </ul>
              </div>
              <p className="text-foreground/80">
                These training opportunities serve as a way of advancing neuroscience research and training in the region. Contact us to learn more about upcoming training sessions and how to participate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-border dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">Interested in Collaborating?</h2>
              <p className="text-foreground/80 mb-6">
                We're always looking for new collaborators and partners to advance our research in neurobiology and toxicology. If you're interested in working with us, please get in touch.
              </p>
              <div className="space-y-4">
                <div className="bg-secondary/20 dark:bg-gray-700/50 p-4 rounded-md">
                  <h3 className="font-bold text-primary mb-2">Research Collaborations</h3>
                  <p className="text-foreground/80">
                    We welcome collaborations with researchers and institutions interested in metal neurotoxicity, developmental neurotoxicity, neurodegeneration, gene-environment interactions, and gut microbiome research.
                  </p>
                </div>

                <div className="bg-secondary/20 dark:bg-gray-700/50 p-4 rounded-md">
                  <h3 className="font-bold text-primary mb-2">Student Opportunities</h3>
                  <p className="text-foreground/80">
                    We offer opportunities for graduate students interested in pursuing research in neuroscience and toxicology. Contact us to learn about current openings and application procedures.
                  </p>
                </div>

                <div className="mt-6">
                  <a
                    href="mailto:omijomone@unimed.edu.ng"
                    className="inline-flex items-center px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent/90 transition-colors"
                  >
                    <Mail size={18} className="mr-2" />
                    <span>Contact the Principal Investigator</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
