import React, { useEffect } from 'react';
import { Compass, Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = '404 - Safari Trail Not Found | Mswahili Tours';
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mx-auto text-gold">
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '10s' }} />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold block">
          Error 404
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy">
          Off the Safari Track
        </h1>

        <p className="text-sm sm:text-base text-navy/70 leading-relaxed">
          The plains of Tanzania are vast and wild, but the page you are looking for has wandered beyond our map. Let’s guide you safely back to camp.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/" variant="primary" size="md" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Button>
          <Button to="/destinations" variant="outline" size="md" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Explore Destinations</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
