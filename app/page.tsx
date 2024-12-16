import Image from "next/image";

export default function Home() {
  return (
   <div>
     <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/launching soon.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   </div>
  );
}
