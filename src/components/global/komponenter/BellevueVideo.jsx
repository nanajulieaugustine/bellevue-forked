"use client";

export default function BellevueVideo() {
  return (
    <div className="w-full">
      <video
        className="w-full h-auto rounded-2xl"
        // src="/videos/bellevuevideo.mp4"
        src="https://video.wixstatic.com/video/f2ebb6_f5736271d1b746c995b0f0b6cf64000a/1080p/mp4/file.mp4"
        controls
        onError={(e) => {
          console.error("Video failed to load");
          console.error("Error details:", e.target.error);
        }}
        onLoadStart={() => console.log("Video started loading")}
        onCanPlay={() => console.log("Video can play")}
      />
    </div>
  );
}
