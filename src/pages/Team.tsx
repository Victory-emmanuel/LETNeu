
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import type { TeamMember } from "@/data/teamData";
import { administration, faculty, researchAssociatesAndGraduateTrainees } from "@/data/teamData";

const Team = () => {
  const [activeFilter, setActiveFilter] = useState<'administration' | 'faculty' | 'research'>('administration');

  const filteredMembers = () => {
    switch (activeFilter) {
      case 'administration':
        return administration;
      case 'faculty':
        return faculty;
      case 'research':
        return researchAssociatesAndGraduateTrainees;
      default:
        return administration;
    }
  };

  const researchMemberIds = new Set<number>([
    ...faculty,
    ...researchAssociatesAndGraduateTrainees,
  ].map((member) => member.id));

  const isBioMember = (member: TeamMember) =>
    researchMemberIds.has(member.id) && Boolean(member.detailedBio);

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
            <Tabs value={activeFilter} onValueChange={(value) => setActiveFilter(value as 'administration' | 'faculty' | 'research')}>
              <TabsList className="flex flex-wrap justify-center gap-6 mt-8 bg-transparent p-0 rounded-none">
                <TabsTrigger
                  value="administration"
                  className="py-3 px-4 text-sm font-semibold transition whitespace-normal text-center border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:text-red-600 text-gray-600 dark:text-gray-300 hover:text-red-600"
                >
                  Administration
                </TabsTrigger>
                <TabsTrigger
                  value="faculty"
                  className="py-3 px-4 text-sm font-semibold transition whitespace-normal text-center border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:text-red-600 text-gray-600 dark:text-gray-300 hover:text-red-600"
                >
                  Faculty
                </TabsTrigger>
                <TabsTrigger
                  value="research"
                  className="py-3 px-4 text-sm font-semibold transition whitespace-normal text-center border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:text-red-600 text-gray-600 dark:text-gray-300 hover:text-red-600 max-w-[11rem] sm:max-w-none break-words"
                >
                  Research Associates & Graduate Trainees
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </SectionHeading>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
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
                facebook={member.facebook}
                twitter={member.twitter}
                instagram={member.instagram}
                position={member.position}
                detailedBio={member.detailedBio}
                showBio={isBioMember(member)}
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
