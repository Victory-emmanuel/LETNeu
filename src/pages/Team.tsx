
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import { principalInvestigators, researchers, graduate, alumni, allTeamMembers } from "@/data/teamData";

const Team = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pi' | 'researchers' | 'students' | 'alumni'>('all');

  // Filter team members based on active filter
  const filteredMembers = () => {
    switch (activeFilter) {
      case 'pi':
        return principalInvestigators;
      case 'researchers':
        return researchers;
      case 'students':
        return graduate;
      case 'alumni':
        return alumni;
      default:
        return allTeamMembers;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i.postimg.cc/7Yh4SwmZ/Untitled-design-3.png')`,
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
            Our Team
          </motion.h1>
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl text-white/90">
              Meet the dedicated researchers, scientists, and students who make our work possible.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Team"
            subtitle="A diverse group of scientists working at the forefront of research"
          >
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              <button
                type="button"
                className={`px-4 py-2 rounded-full ${
                  activeFilter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-secondary dark:bg-gray-700 text-primary dark:text-gray-200 hover:bg-primary/10 dark:hover:bg-primary/20'
                } transition-colors`}
                onClick={() => setActiveFilter('all')}
              >
                All Members
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-full ${
                  activeFilter === 'pi'
                    ? 'bg-primary text-white'
                    : 'bg-secondary dark:bg-gray-700 text-primary dark:text-gray-200 hover:bg-primary/10 dark:hover:bg-primary/20'
                } transition-colors`}
                onClick={() => setActiveFilter('pi')}
              >
                Principal Investigators
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-full ${
                  activeFilter === 'researchers'
                    ? 'bg-primary text-white'
                    : 'bg-secondary dark:bg-gray-700 text-primary dark:text-gray-200 hover:bg-primary/10 dark:hover:bg-primary/20'
                } transition-colors`}
                onClick={() => setActiveFilter('researchers')}
              >
                Researchers
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-full ${
                  activeFilter === 'students'
                    ? 'bg-primary text-white'
                    : 'bg-secondary dark:bg-gray-700 text-primary dark:text-gray-200 hover:bg-primary/10 dark:hover:bg-primary/20'
                } transition-colors`}
                onClick={() => setActiveFilter('students')}
              >
                Graduate Students
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-full ${
                  activeFilter === 'alumni'
                    ? 'bg-primary text-white'
                    : 'bg-secondary dark:bg-gray-700 text-primary dark:text-gray-200 hover:bg-primary/10 dark:hover:bg-primary/20'
                } transition-colors`}
                onClick={() => setActiveFilter('alumni')}
              >
                Alumni & Interns
              </button>
            </div>
          </SectionHeading>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
            transition={{ duration: 0.5, type: "spring" }}
          >
            {filteredMembers().map((member, index) => (
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
                delay={index % 3}
              />
            ))}
          </motion.div>
        </div>
      </section>


    </Layout>
  );
};

export default Team;
