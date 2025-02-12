// src/components/LightboxComponent.tsx
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

interface LightboxComponentProps {
    imageUrl: string;
    thumbnailUrl: string;
    alt?: string;
}

const GLightbox = dynamic(
    () => import('glightbox').then((module) => module.default),
    { ssr: false } // Disable server-side rendering for this component
);

const LightboxComponent: React.FC<LightboxComponentProps> = ({ imageUrl, thumbnailUrl, alt }) => {
    const lightboxRef = useRef(null);

    useEffect(() => {
        let lightboxInstance: any = null; // Type as any for now

        const initializeLightbox = async () => {
            if (typeof window !== 'undefined') {
                const GLightboxModule = await import('glightbox');
                const GLightbox = GLightboxModule.default;

                lightboxInstance = GLightbox({
                    selector: '.glightbox',
                });
            }
        };

        initializeLightbox();

        return () => {
            if (lightboxInstance) {
                lightboxInstance.destroy();
            }
        };
    }, []);

    return (
        <div>
            <a href={imageUrl} className="glightbox" ref={lightboxRef}>
                <img src={thumbnailUrl} alt={alt} />
            </a>
        </div>
    );
};

export default LightboxComponent;
