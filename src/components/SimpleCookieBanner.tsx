import { useState, useEffect } from 'react';

const SimpleCookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Vérifier le localStorage uniquement côté client
    useEffect(() => {
        const cookieChoice = localStorage.getItem('cookies-accepted');
        
        if (!cookieChoice) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        setIsVisible(false);
        localStorage.setItem('cookies-accepted', 'true');
    };

    const handleDecline = () => {
        setIsVisible(false);
        localStorage.setItem('cookies-accepted', 'false');
    };

    if (!isVisible) {
        return null;
    }

    return (
        <>
            {/* Version mobile améliorée: design professionnel avec SVG */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm text-white z-50 border-t border-blue-500/30 shadow-lg">
                <div className="container mx-auto py-4 px-4">
                    <div className="flex items-center gap-3 mb-3">
                        {/* SVG Cookie */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="8" cy="9" r="1"></circle>
                                <circle cx="15" cy="9" r="1"></circle>
                                <circle cx="9" cy="15" r="1"></circle>
                                <circle cx="14" cy="14" r="1"></circle>
                                <path d="M7 8a4 4 0 0 1 5-4"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white">Confidentialité</h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">
                        Nous utilisons des cookies pour améliorer votre expérience sur notre site et personnaliser nos services.
                    </p>
                    
                    <div className="flex gap-3 w-full">
                        <button
                            onClick={handleAccept}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors text-sm font-medium shadow-lg"
                        >
                            Accepter
                        </button>
                        <button
                            onClick={handleDecline}
                            className="w-full bg-gray-700 hover:bg-gray-800 text-white px-4 py-2.5 rounded-lg transition-colors text-sm font-medium border border-gray-600"
                        >
                            Refuser
                        </button>
                    </div>
                </div>
            </div>

            {/* Version desktop: modal */}
            <div className="hidden lg:flex fixed inset-0 bg-black/50 backdrop-blur-sm z-50 items-center justify-center">
                <div className="bg-gray-900 max-w-lg mx-auto rounded-xl shadow-2xl overflow-hidden border border-blue-500/20">
                    <div className="p-6">
                        <h2 className="text-xl text-white font-bold mb-4">Vos préférences de cookies</h2>
                        <p className="text-gray-300 mb-6">
                            Nous utilisons des cookies pour améliorer votre expérience sur notre site.
                            Ces cookies nous aident à comprendre comment vous interagissez avec notre site
                            et à l&apos;améliorer en fonction de vos besoins.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-end">
                            <button
                                onClick={handleDecline}
                                className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg font-medium"
                            >
                                Refuser
                            </button>
                            <button
                                onClick={handleAccept}
                                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-medium shadow-lg"
                            >
                                Accepter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SimpleCookieBanner; 