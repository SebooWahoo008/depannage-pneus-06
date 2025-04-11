import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 to-dark-800">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl text-white mb-6">Page non trouvée</h2>
        <p className="text-gray-400 mb-8">
          Désolé, la page que vous recherchez n&apos;existe pas.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
} 