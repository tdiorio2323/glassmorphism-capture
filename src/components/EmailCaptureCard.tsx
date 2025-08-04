import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const EmailCaptureCard = () => {
  // Video state management
  const [videoError, setVideoError] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [debugInfo, setDebugInfo] = useState('');
  const [useImageFallback, setUseImageFallback] = useState(false);
  const videoRef = useRef(null);

  // Video URLs to try (HTTPS first, then HTTP)
  const videoUrls = [
    'https://tdstudiosny.com/reelz/reel-slideshow.mp4',
    'http://tdstudiosny.com/reelz/reel-slideshow.mp4'
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Fallback images (same as before)
  const images = [
    "/lovable-uploads/3273d74f-d063-4b96-b731-90c645b2ca87.png",
    "/lovable-uploads/5d4be55a-4a44-4494-8f43-17b706d2e668.png",
    "/lovable-uploads/624ab187-eba8-4c79-97ee-8179bdfc60ce.png",
    "/lovable-uploads/7a5ed7d7-e637-49c3-8040-aeb953a07608.png",
    "/lovable-uploads/7d1b869c-3d48-4658-b6d9-8ec465fda625.png",
    "/lovable-uploads/88ebf753-494e-4d4d-808a-7115b62f1c3f.png",
    "/lovable-uploads/be7010db-b090-46da-8f96-be7b7ac4399b.png",
    "/lovable-uploads/eac43ff5-aed9-4e0a-a991-025e052eadd8.png",
    "/lovable-uploads/ec0df8f3-0f51-40a2-b6e5-c4c89ba1c6cf.png",
    "/lovable-uploads/faed02fe-70be-4025-b9c7-d0c65669e600.png"
  ];
  const duplicatedImages = [...images, ...images];

  // Video event handlers
  const handleVideoLoadStart = () => {
    console.log('🎬 Video load started');
    setVideoLoading(true);
    setDebugInfo('Loading video...');
    
    // Add timeout to prevent infinite loading
    setTimeout(() => {
      if (videoLoading && !videoLoaded) {
        console.log('⏰ Video loading timeout');
        handleVideoError({ target: { error: { code: 2 } } });
      }
    }, 8000); // 8 second timeout
  };

  const handleVideoCanPlay = () => {
    console.log('✅ Video can play');
    setVideoLoading(false);
    setVideoLoaded(true);
    setVideoError(false);
    setDebugInfo('Video loaded successfully!');
    setTimeout(() => setDebugInfo(''), 3000);
  };

  const handleVideoError = (e) => {
    console.error('❌ Video error:', e);
    const error = e.target.error;
    let errorMessage = 'Video failed to load';
    
    if (error) {
      switch (error.code) {
        case 1: errorMessage = 'Video loading aborted'; break;
        case 2: errorMessage = 'Network error'; break;
        case 3: errorMessage = 'Video decode error'; break;
        case 4: errorMessage = 'Video format not supported'; break;
        default: errorMessage = `Unknown error (${error.code})`;
      }
    }

    setDebugInfo(`${errorMessage} - URL: ${videoUrls[currentVideoIndex]}`);
    
    // Try next video URL
    if (currentVideoIndex < videoUrls.length - 1) {
      console.log('🔄 Trying next video URL...');
      setCurrentVideoIndex(currentVideoIndex + 1);
      setVideoError(false);
    } else {
      console.log('🖼️ All video URLs failed, using image fallback');
      setVideoError(true);
      setVideoLoading(false);
      setUseImageFallback(true);
      setDebugInfo('Video unavailable - using image slideshow');
    }
  };

  const handleOrderNow = () => {
    console.log("Order Now clicked");
    // Add your order logic here
    window.open('https://bagmanpack.com', '_blank');
  };

  // Force fallback toggle for testing
  const toggleFallback = () => {
    setUseImageFallback(!useImageFallback);
    setDebugInfo(useImageFallback ? 'Switched to video' : 'Switched to image fallback');
  };

  return (
    <>
      <style>{`
        @keyframes breathing {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes conveyor-belt {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-breathing {
          animation: breathing 4s ease-in-out infinite;
        }
        
        .animate-conveyor-belt {
          animation: conveyor-belt 16s linear infinite;
        }
      `}</style>
      
      <div className="w-[330px] h-[550px] max-w-[390px] mx-auto">
        {/* Glass Morphism Card */}
        <div className="h-full relative backdrop-blur-glass bg-white/10 border border-white/20 rounded-2xl shadow-glass shadow-card-glow p-6 flex flex-col animate-breathing drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)]">
          
          {/* Logo Section */}
          <div className="flex justify-center items-center pt-4 pb-4">
            <img 
              src="/lovable-uploads/c954f561-d572-4e24-ac9a-63fd1d23bbed.png" 
              alt="Bag Man NY Logo" 
              className="w-32 h-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          {/* Headline Text */}
          <div className="text-center mb-1">
            <h2 className="text-white font-bebas text-xl leading-tight tracking-wide">
              OVER 100+ ORIGINAL<br />DESIGNS TO CHOOSE FROM
            </h2>
          </div>

          {/* Debug Info */}
          {debugInfo && (
            <div className="text-center mb-2 text-xs text-yellow-300 bg-black/20 rounded px-2 py-1">
              {debugInfo}
            </div>
          )}

          {/* Video/Animation Content Area */}
          <div className="flex-1 flex items-center justify-center px-4">
            <div 
              className="w-full max-w-[280px] rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 relative" 
              style={{ height: '207px' }}
            >
              {/* Video Element (when not using fallback) */}
              {!useImageFallback && (
                <video
                  ref={videoRef}
                  key={currentVideoIndex} // Force re-render when URL changes
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onLoadStart={handleVideoLoadStart}
                  onCanPlay={handleVideoCanPlay}
                  onError={handleVideoError}
                  style={{ display: videoError ? 'none' : 'block' }}
                >
                  <source src={videoUrls[currentVideoIndex]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              {/* Loading Indicator */}
              {videoLoading && !useImageFallback && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                  <div className="text-white text-sm">Loading video...</div>
                </div>
              )}

              {/* Image Fallback */}
              {(videoError || useImageFallback) && (
                <div className="absolute inset-0 flex animate-conveyor-belt" style={{ width: '200%' }}>
                  {duplicatedImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-[150px] h-full flex-shrink-0 flex items-center justify-center p-2"
                    >
                      <img
                        src={image}
                        alt={`Product ${(index % images.length) + 1}`}
                        className="max-w-full max-h-full object-contain rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzMzMyIgcng9IjgiLz48dGV4dCB4PSI1MCIgeT0iNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UHJvZHVjdDwvdGV4dD48L3N2Zz4=';
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Debug Toggle Button (remove in production) */}
              <button
                onClick={toggleFallback}
                className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded"
                style={{ fontSize: '10px' }}
              >
                {useImageFallback ? 'Try Video' : 'Use Images'}
              </button>
            </div>
          </div>

          {/* Order Now Button */}
          <div className="mt-4 mb-4">
            <Button
              onClick={handleOrderNow}
              className="w-full bg-gradient-to-b from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-bold py-3 rounded-full shadow-lg border border-green-600 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 font-bebas text-lg tracking-wide">ORDER NOW</span>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/40 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailCaptureCard;