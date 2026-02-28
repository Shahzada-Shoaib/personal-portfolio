import React, { useState, useEffect, useRef } from "react";
import { X, Download, Play, Pause } from "lucide-react";

const VideoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      // Check if modal has been shown before (using localStorage)
      // Only check localStorage if it's available (client-side)
      if (typeof window !== "undefined" && window.localStorage) {
        // For now, always show the modal (remove localStorage check for testing)
        // To enable localStorage check, uncomment the if statement below
        // if (!hasSeenModal) {
        setIsOpen(true);
        setHasShown(true);
        // }
      } else {
        // If localStorage is not available, show the modal anyway
        setIsOpen(true);
        setHasShown(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Try to play video with audio when modal opens
    if (isOpen && videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          // If autoplay with sound is blocked, user will need to interact
          console.log("Autoplay with sound was blocked:", error);
          setIsPlaying(false);
        });
    }
  }, [isOpen]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Error playing video:", error);
          });
      }
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Remember that user has seen the modal
    localStorage.setItem("hasSeenVideoModal", "true");
  };

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/SeniorFrontendEngineer.pdf";
    link.download = "SeniorFrontendEngineer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md overflow-hidden border shadow-2xl bg-slate-900 rounded-2xl border-slate-700">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute z-10 p-2 transition-colors duration-200 rounded-full top-4 right-4 bg-slate-800/90 hover:bg-slate-700"
          aria-label="Close modal"
        >
          <X size={20} className="text-white" />
        </button>

        {/* Video Container */}
        <div className="relative flex items-center justify-center w-full bg-black">
          <video
            ref={videoRef}
            className="w-full h-auto max-h-[70vh] object-contain"
            autoPlay
            loop
            playsInline
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          >
            <source src="/intro-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause Button Overlay */}
          <button
            onClick={handlePlayPause}
            className="absolute z-10 p-4 transition-all duration-200 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg top-1/2 left-1/2 bg-slate-800/90 hover:bg-slate-700 hover:scale-110"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause size={32} className="text-white" />
            ) : (
                <Play size={32} className="ml-1 text-white" />
            )}
          </button>
        </div>

        {/* CTA Section */}
        <div className="p-6 bg-slate-800/50">
          <button
            onClick={handleDownloadResume}
            className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold transition-colors duration-200 rounded-lg bg-cyan-400 hover:bg-cyan-500 text-slate-900"
          >
            <Download size={20} />
            Download My Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
