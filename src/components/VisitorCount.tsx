import { useEffect, useState } from "react";
import { getUniqueVisitors } from "@/utils/analytics";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const count = await getUniqueVisitors();
        setVisitorCount(count);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitors();
    // Refresh count every 1 minute (60000ms)
    const interval = setInterval(fetchVisitors, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground sm:text-base fixed bottom-4 right-4 z-100 backdrop-blur-sm rounded-full shadow-sm border border-white/20 overflow-hidden">
      <Users className="h-4 w-4" />

      {loading ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          key="loading"
        >
          <span>Loading...</span>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>{visitorCount.toLocaleString()} visitors</span>
        </motion.div>
      )}
    </div>
  );
}
