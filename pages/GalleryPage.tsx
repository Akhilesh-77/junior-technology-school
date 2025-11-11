
import React, { useState } from 'react';
import { MOCK_GALLERY_IMAGES } from '../constants';
import type { GalleryImage } from '../types';
import Modal from '../components/Modal';

const PageHeader: React.FC<{title:string}> = ({title}) => (
    <div className="bg-school-light-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-school-blue text-center">{title}</h1>
        </div>
    </div>
);

const GalleryPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const openModal = (image: GalleryImage) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <PageHeader title="Our Gallery" />
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {MOCK_GALLERY_IMAGES.map((image, index) => {
                        // Some logic to create a more dynamic masonry layout
                        const spanClasses = [
                            'col-span-1 md:col-span-2', 'col-span-1 row-span-2', 'col-span-2 md:col-span-2 md:row-span-2', 'col-span-1', 'col-span-1'
                        ];
                        const spanClass = spanClasses[index % spanClasses.length];

                        return (
                            <div key={image.id} className={`${spanClass} group cursor-pointer overflow-hidden rounded-lg`} onClick={() => openModal(image)}>
                                <img 
                                    src={image.src} 
                                    alt={image.alt} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <Modal isOpen={!!selectedImage} onClose={closeModal} title={selectedImage?.alt}>
                {selectedImage && (
                    <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto rounded-lg"/>
                )}
            </Modal>
        </div>
    );
};

export default GalleryPage;
