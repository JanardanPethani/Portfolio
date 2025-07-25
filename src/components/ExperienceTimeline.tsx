"use client";
import { motion } from "framer-motion";
import { experiences } from "@/lib/experience-data";
import { ExperienceCard } from "./ExperienceCard";
import { SquareArrowOutUpRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const ExperienceTimeline = () => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <Tabs defaultValue={experiences[0]?.name || ""} className="w-full">
        <TabsList className="flex w-full flex-wrap gap-2 mb-12 bg-gray-50 dark:bg-gray-900/50 p-2">
          {experiences.map((company) => (
            <TabsTrigger
              key={company.name}
              value={company.name}
              className="text-sm font-medium data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:shadow-sm flex-1 min-w-0 px-4 py-2 whitespace-nowrap overflow-hidden text-ellipsis"
            >
              <span className="truncate">{company.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {experiences.map((company) => (
          <TabsContent
            key={company.name}
            value={company.name}
            className="space-y-8"
          >
            {/* Company Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {company.name}
                </h2>
                <a
                  target="_blank"
                  href={company.linkedInLink}
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <SquareArrowOutUpRight className="h-4 w-4" />
                </a>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {company.period}
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {company.projects.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {company.projects.map((project, index) => (
                    <ExperienceCard key={index} project={project} />
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Coming Soon
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Projects are being added. Stay tuned!
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
