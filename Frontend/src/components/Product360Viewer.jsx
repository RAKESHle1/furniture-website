import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react';

const Product360Viewer = ({ images, autoRotate = false, simulate3D = false }) => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const viewerRef = useRef(null);
    const totalFrames = images.length;

    // Handle auto-rotation
    useEffect(() => {
        let interval;
        if (autoRotate && !isDragging) {
            interval = setInterval(() => {
                setCurrentFrame((prev) => (prev + 1) % totalFrames);
            }, 100);
        }
        return () => clearInterval(interval);
    }, [autoRotate, isDragging, totalFrames]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleMove = (clientX) => {
        if (!isDragging) return;
        const diff = clientX - startX;
        const sensitivity = 10; // Pixels per frame
        if (Math.abs(diff) > sensitivity) {
            const framesToMove = Math.floor(diff / sensitivity);
            // Calculate new frame index (handling negative wrapping)
            let newFrame = (currentFrame - framesToMove) % totalFrames;
            if (newFrame < 0) newFrame += totalFrames;

            setCurrentFrame(newFrame);
            setStartX(clientX);
        }
    };

    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

    const handleEnd = () => setIsDragging(false);

    const nextFrame = () => {
        setCurrentFrame((prev) => (prev + 1) % totalFrames);
    };

    const prevFrame = () => {
        setCurrentFrame((prev) => (prev - 1 + totalFrames) % totalFrames);
    };

    return (
        <div className="product-360-viewer" style={{
            maxWidth: '600px',
            margin: '0 auto',
            position: 'relative',
            userSelect: 'none'
        }}>
            <div
                ref={viewerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleEnd}
                style={{
                    cursor: isDragging ? 'grabbing' : 'grab',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.12)', // Enhanced shadow
                    aspectRatio: '4/3',
                    backgroundColor: '#fff',
                    border: '1px solid rgba(0,0,0,0.05)'
                }}
            >
                {/* Image Display */}
                <img
                    src={images[currentFrame]}
                    alt={`Product View ${currentFrame + 1}`}
                    draggable="false"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        pointerEvents: 'none',
                        // Smooth transition if not dragging, and for the transform
                        transition: isDragging ? 'none' : 'transform 0.1s',
                        // CSS 3D Rotation Simulation
                        transform: simulate3D
                            ? `perspective(1000px) rotateY(${(currentFrame / totalFrames) * 360}deg)`
                            : 'none'
                    }}
                />

                {/* Overlay Hint */}
                <div style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(4px)',
                    color: '#333',
                    padding: '8px 20px',
                    borderRadius: '30px',
                    fontSize: '14px',
                    fontWeight: '500',
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}>
                    <MoveHorizontal size={16} color="#EA580C" /> {/* Accent color */}
                    <span>Drag to Rotate</span>
                </div>
            </div>

            {/* Manual Controls */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '24px',
                marginTop: '24px'
            }}>
                <button
                    onClick={prevFrame}
                    aria-label="Rotate Left"
                    style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        border: 'none',
                        background: 'white',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        color: '#444'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)';
                        e.currentTarget.style.color = '#EA580C';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                        e.currentTarget.style.color = '#444';
                    }}
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Frame Indicator */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <span style={{
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        color: '#888',
                        fontWeight: '600'
                    }}>View Angle</span>
                    <span style={{
                        fontFamily: 'monospace',
                        color: '#333',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }}>
                        {String(currentFrame + 1).padStart(2, '0')} <span style={{ color: '#ccc' }}>/</span> {String(totalFrames).padStart(2, '0')}
                    </span>
                </div>

                <button
                    onClick={nextFrame}
                    aria-label="Rotate Right"
                    style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        border: 'none',
                        background: 'white',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        color: '#444'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)';
                        e.currentTarget.style.color = '#EA580C';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                        e.currentTarget.style.color = '#444';
                    }}
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default Product360Viewer;
