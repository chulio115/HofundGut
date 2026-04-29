import { useState } from 'react'
import { X } from 'lucide-react'

export default function PreviewNotice() {
  const [isVisible, setIsVisible] = useState(() => {
    // Check if user has already seen the notice
    const hasSeenNotice = localStorage.getItem('previewNoticeSeen')
    return !hasSeenNotice
  })

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('previewNoticeSeen', 'true')
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative max-w-md w-full bg-hof-cream rounded-lg shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-hof-bordeaux hover:text-hof-forest transition-colors"
          aria-label="Schließen"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-1 bg-hof-bordeaux/10 text-hof-bordeaux text-sm font-medium rounded-full">
              Preview-Version
            </span>
          </div>

          <h3 className="text-2xl font-bold text-hof-forest mb-4 font-serif">
            Wichtiger Hinweis
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Diese Website ist eine <strong>Preview-Version</strong> und steht nicht in 
            Verbindung mit dem echten Hof & Gut Jesteburg Restaurant.
          </p>

          <div className="bg-hof-sage/30 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">
              Die offizielle Website erreichen Sie unter:
            </p>
            <a
              href="https://hof-und-gut-jesteburg.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hof-bordeaux font-semibold hover:underline break-all"
            >
              hof-und-gut-jesteburg.com
            </a>
          </div>

          <button
            onClick={handleClose}
            className="w-full py-3 px-6 bg-hof-bordeaux text-white font-medium rounded-lg hover:bg-hof-forest transition-colors"
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  )
}
