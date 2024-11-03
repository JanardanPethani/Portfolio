// components/ExperienceCard.tsx
import { motion } from "framer-motion";
import { Project } from "@/lib/experience-data";
import { SquareArrowOutUpRight } from "lucide-react";

export const ExperienceCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className="relative h-full">
        {/* Background Gradient Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg animate-gradient" />

        {/* Card Content */}
        <motion.div
          className="relative p-6 rounded-lg border bg-card/50 backdrop-blur-sm hover:bg-card/80 
                     text-card-foreground shadow-lg transition-all duration-300 h-full
                     hover:shadow-primary/10 hover:shadow-xl"
        >
          {/* Project Header */}
          <div className="mb-4">
            <div className="flex gap-2">
              <h3 className="text-2xl font-bold font-akshar">{project.name}</h3>
              {project.link && (
                <a target="_blank" href={project.link}>
                  <SquareArrowOutUpRight className="h-[1rem] w-[1rem] rotate-0 scale-100 mt-2" />
                </a>
              )}
            </div>

            <p className="text-md text-muted-foreground">{project.role}</p>
            <p className="text-sm text-muted-foreground/80">{project.period}</p>
          </div>

          {/* Description */}
          <ul className="list-disc list-inside mb-4 space-y-2">
            {project.description.map((desc, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {desc}
              </motion.li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary 
                         hover:bg-primary/20 transition-colors duration-300"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
