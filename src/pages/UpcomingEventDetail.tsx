import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin, FileText } from "lucide-react";
import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { upcomingEvents } from "@/data/eventsData";

const UpcomingEventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const event = upcomingEvents.find(e => e.id === parseInt(id || "0"));

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <Layout>
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{event.title}</h1>
            {event.theme && (
              <p className="text-xl text-foreground/80 mb-6">{event.theme}</p>
            )}
            <div className="flex flex-col md:flex-row gap-6 text-foreground/70">
              <div className="flex items-center gap-3">
                <Calendar className="text-primary" size={20} />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-primary" size={20} />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" size={20} />
                <span>{event.location}</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block mb-4 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">
                  Upcoming
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">About the Event</h2>
                
                {/* Loop through the structured description array */}
                <div className="space-y-4">
                  {Array.isArray(event.description) ? (
                    event.description.map((section, index) => (
                      <div key={index} className="flex flex-col">
                        {section.subheading && (
                          <h3 className="text-lg font-semibold text-foreground mt-3 mb-1">
                            {section.subheading}
                          </h3>
                        )}
                        <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                          {section.body}
                        </p>
                      </div>
                    ))
                  ) : (
                    // Fallback in case any old events still use a plain string description
                    <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                      {event.description}
                    </p>
                  )}
                </div>
              </motion.div>

              {event.speakers && event.speakers.length > 0 && (
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-primary mb-6">Speakers and Instructors</h2>
                  <div className="space-y-6">
                    {event.speakers.map((speaker, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-20 h-20 md:w-32 md:h-32 rounded-xl bg-secondary/50 dark:bg-gray-700/50 overflow-hidden flex items-center justify-center flex-shrink-0">
                          {speaker.imageUrl ? (
                            <img src={speaker.imageUrl} alt={speaker.name} className="object-cover w-full h-full" />
                          ) : (
                            <div className="text-primary/50">No image</div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-semibold text-primary">{speaker.name}</h3>
                          <p className="text-foreground/80 font-medium">{speaker.position}</p>
                          <p className="text-foreground/80">{speaker.affiliation}</p>
                          <p className="text-accent mb-6">{speaker.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {event.schedule && event.schedule.length > 0 && (
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-primary mb-4">Program Schedule</h2>
                  <div className="space-y-8">
                    {event.schedule.map((day, dayIndex) => (
                      <div key={dayIndex}>
                        <h3 className="text-xl font-semibold text-primary mb-3">{day.day}</h3>
                        <div className="grid grid-cols-12 gap-3 text-foreground/80">
                          {day.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="col-span-12 grid grid-cols-12 gap-3 items-center rounded-lg border border-border p-3 bg-secondary/50 dark:bg-gray-900/30">
                              <div className="col-span-4 text-sm font-medium">{item.time}</div>
                              <div className="col-span-8 text-sm">{item.activity}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <div className="lg:col-span-1 space-y-8">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-primary mb-4">Registration Details</h2>
                <p className="text-foreground/80 mb-4">
                  Register for this upcoming event using the link below. Fees and more details are provided if available.
                </p>
                {event.fees && event.fees.length > 0 && (
                  <ul className="list-disc pl-5 mb-4 text-foreground/80 space-y-2">
                    {event.fees.map((fee, index) => (
                      <li key={index}>{fee}</li>
                    ))}
                  </ul>
                )}
                {event.registrationUrl ? (
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 rounded-md font-medium text-white bg-primary border border-transparent transition-colors hover:bg-transparent hover:text-primary hover:border-primary dark:bg-red-600 dark:text-white dark:hover:bg-white dark:hover:text-red-600"
                  >
                    Register Now
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                ) : (
                  <div className="px-4 py-3 bg-secondary/50 dark:bg-gray-700/50 text-foreground/70 rounded-md text-center">
                    Registration details are not available yet.
                  </div>
                )}
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4 text-primary text-lg font-bold">
                  <FileText size={20} />
                  <span>Abstract Submission</span>
                </div>
                <p className="text-foreground/80 mb-4">
                  Submit abstracts according to the guidelines and deadline listed below.
                </p>
                {event.abstractSubmission ? (
                  <div className="space-y-3 text-foreground/80">
                    {event.abstractSubmission.deadline && (
                      <p><span className="font-medium">Deadline:</span> {event.abstractSubmission.deadline}</p>
                    )}
                    {event.abstractSubmission.guidelines && (
                      <ul className="list-disc pl-5 space-y-2">
                        {event.abstractSubmission.guidelines.map((guideline, index) => (
                          <li key={index}>{guideline}</li>
                        ))}
                      </ul>
                    )}
                    {event.abstractSubmission.email && (
                      <p>
                        Submit to <a href={`mailto:${event.abstractSubmission.email}`} className="text-accent hover:underline">{event.abstractSubmission.email}</a>
                      </p>
                    )}
                    {event.abstractSubmission.note && (
                      <p className="font-medium">{event.abstractSubmission.note}</p>
                    )}
                  </div>
                ) : (
                  <p className="text-foreground/80">Abstract submission details are not available for this event.</p>
                )}
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-xl font-bold text-primary mb-4">Organizers</h2>
                <p className="text-foreground/80 mb-4">
                  {event.organizers ? "Contact the event organizers below." : "Organizer details are not available at the moment."}
                </p>
                <div className="space-y-4 text-foreground/80">
                  {event.organizers && event.organizers.length > 0 ? (
                    event.organizers.map((organizer, index) => (
                      <div key={index}>
                        <p className="font-semibold text-primary">{organizer.name}</p>
                        <p className="text-sm">{organizer.position}</p>
                        <a href={`mailto:${organizer.email}`} className="text-accent hover:underline text-sm">{organizer.email}</a>
                      </div>
                    ))
                  ) : (
                    <p className="text-foreground/70">Please check back later for organizer contact details.</p>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {event.flyerUrl && (
            <motion.div
              className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-4">Event Flyer</h2>
              {/(\.pdf)$/i.test(event.flyerUrl) ? (
                <div className="space-y-4">
                  <iframe
                    src={event.flyerUrl}
                    title="Event Flyer"
                    className="w-full h-[680px] rounded-xl border border-border"
                  />
                  <a
                    href={event.flyerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Open flyer in a new tab
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  <img
                    src={event.flyerUrl}
                    alt={`${event.title} flyer`}
                    className="w-full rounded-xl object-cover"
                  />
                  <a
                    href={event.flyerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    View full flyer
                  </a>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default UpcomingEventDetail;
