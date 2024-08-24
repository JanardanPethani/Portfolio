import { Shell } from "lucide-react";

export default function Loading() {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center backdrop-blur-[1px] z-10">
      <Shell size={28} className="animate-spin" />
    </div>
  );
}
