import InteractiveFace from "@/components/InteractiveFace";
import Name from "@/components/Name/Name";

export default function Home() {
  return (
    <div className="relative max-h-screen">
      <Name />
      <p className="text-center text-xl">A Fullstack developer.</p>
      <div className="mt-20">
        <InteractiveFace />
      </div>
    </div>
  );
}
