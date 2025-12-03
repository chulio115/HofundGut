import { Link } from 'react-router-dom';

export default function Hotel() {
  return (
    <div className="min-h-screen bg-hof-cream pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <span className="inline-block text-hof-bordeaux text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Hotel
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-hof-charcoal mb-6">
          Unser Hotelbereich entsteht gerade
        </h1>
        <p className="text-lg text-hof-charcoal/70 leading-relaxed mb-6">
          Wir bauen diesen Bereich aktuell um. Bald finden Sie hier alle Informationen zu unseren Zimmern,
          Arrangements und Frühstück auf dem Hof.
        </p>
        <p className="text-base text-hof-charcoal/60 mb-10">
          Bis dahin reservieren wir Ihnen gerne einen Tisch im Restaurant oder beantworten Ihre Fragen rund um
          Ihren Aufenthalt persönlich.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-hof-forest text-hof-cream font-semibold hover:bg-hof-forest-light transition-colors"
          >
            Kontakt aufnehmen
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-hof-charcoal/10 text-hof-charcoal hover:bg-hof-cream/60 transition-colors"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
