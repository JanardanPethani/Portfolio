// components/ExperienceCard.tsx
import { motion } from "framer-motion";
import { Project } from "@/lib/experience-data";
import { SquareArrowOutUpRight } from "lucide-react";

export const ExperienceCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div className="relative h-full p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-200 overflow-hidden">
        {/* Project Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-semibold text-card-foreground leading-tight break-words flex-1 min-w-0">
              {project.name}
            </h3>
            {project.link && (
              <a
                target="_blank"
                href={project.link}
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0 mt-0.5"
              >
                <SquareArrowOutUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <span className="font-medium break-words">{project.role}</span>
            <span className="hidden md:inline-block mx-1">|</span>
            <span className="break-words">{project.period}</span>
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2 mb-4">
          {project.description.map((desc, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="break-words hyphens-auto">{desc}</span>
            </motion.li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
