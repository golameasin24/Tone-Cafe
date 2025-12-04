import React, { useState, useEffect, useRef } from "react";

const IMAGES = [
  { src: "/img/pijja1.png", alt: "pizza 1" },
  { src: "/img/pijja2.png", alt: "pizza 2" },
  { src: "/img/pijja4.png", alt: "pizza 3" },
];

function GalarySection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Keyboard Navigation
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % IMAGES.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Click outside (mouse)
  function onBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (modalRef.current && e.target === modalRef.current) setOpen(false);
  }

  // Click outside (touch)
  function onBackdropTouch(e: React.TouchEvent<HTMLDivElement>) {
    if (modalRef.current && e.target === modalRef.current) setOpen(false);
  }

  // Swipe support
  const touchStartX = useRef<number | null>(null);

  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;

    const dx = e.changedTouches[0].clientX - touchStartX.current;

    if (dx > 50) setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
    else if (dx < -50) setIndex((i) => (i + 1) % IMAGES.length);

    touchStartX.current = null;
  }

  return (
    <div
      className="p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/img/bg-black.avif')" }}
    >
      <h4 className="text-4xl md:text-5xl font-custom text-center text-primary py-6">
        Our Gallery
      </h4>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {IMAGES.map((img, i) => (
          <button
            key={img.src}
            onMouseOver={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="relative group rounded-full focus:outline-none"
          >
            <img
              className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[330px] lg:h-[330px] rounded-full object-cover shadow-md"
              src={img.src}
              alt={img.alt}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-60 transition-all duration-300 rounded-full pointer-events-none"></div>
          </button>
        ))}
      </div>

      {/* Modal / Carousel */}
      {open && (
        <div
          ref={modalRef}
          onMouseDown={onBackdropClick}
          onTouchStart={onBackdropTouch}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <div
            className="relative w-full max-w-5xl mx-4 md:mx-8"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Close */}
            <button
              onMouseDown={() => setOpen(false)}
              className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onMouseOver={() => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-3"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onMouseOver={() => setIndex((i) => (i + 1) % IMAGES.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-3"
            >
              ›
            </button>

            {/* Image */}
            <div className="rounded-lg overflow-hidden">
              <div className="w-full h-[60vh] md:h-[75vh] flex items-center justify-center backdrop-blur-sm brightness-50">
                <img
                  src={IMAGES[index].src}
                  alt={IMAGES[index].alt}
                  className="max-h-full max-w-full object-contain transition-all duration-300"
                />
              </div>

              {/* Caption */}
              <div className="flex items-center justify-between px-4 py-3 backdrop-blur-sm">
                <div className="text-sm text-gray-700">
                  {index + 1} / {IMAGES.length}
                </div>

                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex gap-2 items-center">
                    {IMAGES.map((img, i) => (
                      <button
                        key={img.src}
                        onMouseOver={() => setIndex(i)}
                        className={`w-12 h-12 rounded-md overflow-hidden border-2 ${
                          i === index ? "border-primary" : "border-transparent"
                        }`}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  <a
                    href={IMAGES[index].src}
                    download
                    className="hidden sm:inline-block text-sm px-3 py-1 rounded bg-primary text-white"
                  >
                    Download
                  </a>
                </div>
              </div>

              {/* Mobile indicators */}
              <div className="sm:hidden flex justify-center gap-2 py-2 bg-white/90">
                {IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onMouseOver={() => setIndex(i)}
                    className={`w-2 h-2 rounded-full ${
                      i === index ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalarySection;
