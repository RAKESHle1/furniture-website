import React, { useRef, useState, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

const Video360Scrubber = ({ src, poster }) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startVideoTime, setStartVideoTime] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        if (videoRef.current) {
            setStartVideoTime(videoRef.current.currentTime);
        }
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        if (videoRef.current) {
            setStartVideoTime(videoRef.current.currentTime);
        }
    };

    const handleMove = (clientX) => {
        if (!isDragging || !videoRef.current) return;

        const deltaX = clientX - startX;
        const sensitivity = 0.05; // Seconds per pixel
        const duration = videoRef.current.duration || 1;

        // Calculate new time
        let newTime = startVideoTime - (deltaX * sensitivity);

        // Handle looping logic
        if (newTime < 0) {
            newTime = duration + (newTime % duration);
        } else if (newTime > duration) {
            newTime = newTime % duration;
        }

        videoRef.current.currentTime = newTime;
    };

    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

    const handleEnd = () => {
        setIsDragging(false);
    };

    // Ensure video is loaded enough to scrub
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.pause(); // Ensure it doesn't auto-play
            video.currentTime = 0;
        }
    }, [src]);

    return (
        <div
            ref={containerRef}
            className="video-scrubber-container"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleEnd}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                cursor: isDragging ? 'grabbing' : 'grab',
                userSelect: 'none',
                touchAction: 'none' // Prevent scrolling while scrubbing
            }}
        >
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                playsInline
                muted
                loop
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    pointerEvents: 'none' // Let container handle events
                }}
            />

            {/* Overlay Hint */}
            <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(4px)',
                color: '#333',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                opacity: isDragging ? 0.6 : 1,
                transition: 'opacity 0.2s'
            }}>
                <MoveHorizontal size={14} color="#EA580C" />
                <span>Drag to Rotate</span>
            </div>
        </div>
    );
};

export default Video360Scrubber;
