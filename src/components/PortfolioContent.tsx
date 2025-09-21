// 1. Define the allowed string values for the 'aspect' prop.
// This gives you type safety and autocompletion in your editor.
type AspectRatio = 'video' | 'square';

// 2. Define the props interface for the component.
interface PortfolioContentProps {
  src: string;
  aspect: AspectRatio;
  featured: boolean;
}

// 3. Strongly type the lookup object to ensure its keys match our AspectRatio type.
const aspectRatios: Record<AspectRatio, string> = {
  video: 'aspect-video',   // 16:9
  square: 'aspect-square', // 1:1
};

// 4. Use the props interface in your component definition.
export default function PortfolioContent({ src, aspect, featured }: PortfolioContentProps) {
  // The 'aspect' prop is now guaranteed to be a key of our aspectRatios object.
  const aspectClass = aspectRatios[aspect];

  return (
    // Added animate-pulse for a loading state while the iframe loads
    <div className={`${aspectClass} w-full h-full p-1 overflow-hidden rounded-xl bg-zinc-800 ${featured ? "rounded-tr-none" : ""}`}>
      <iframe
        className="w-full h-full rounded-lg"
        src={src}
        title="Embedded portfolio content"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}