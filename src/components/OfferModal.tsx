export function OfferModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl sm:rounded-3xl border border-primary/40 bg-card p-5 sm:p-8 shadow-[var(--shadow-glow)] animate-scale-in my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 h-8 w-8 grid place-items-center rounded-full bg-background/60 text-foreground hover:bg-primary hover:text-primary-foreground"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Summer Special
          </span>
          <h3 className="mt-2 font-display text-2xl sm:text-4xl">
            Burn Calories, <br /> Not Money.
          </h3>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-foreground/75">
            Limited offer with free goodies & expert guidance.
          </p>
        </div>
        <ul className="mt-4 sm:mt-6 space-y-1.5 text-xs sm:text-sm text-foreground/85">
          <li>🎉 Free Gym T-Shirt</li>
          <li>❄️ Membership Freezing</li>
          <li>🎁 Exclusive Goodies</li>
          <li>🆓 FREE Trial</li>
        </ul>
        <form
          className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <input
            required
            placeholder="Name"
            className="w-full rounded-lg bg-input border border-border px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <input
              required
              placeholder="Phone"
              className="w-full rounded-lg bg-input border border-border px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full rounded-lg bg-input border border-border px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="w-full rounded-lg bg-primary text-primary-foreground py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[var(--shadow-glow)] hover:scale-[1.02] transition">
            Claim Free Trial
          </button>
        </form>
      </div>
    </div>
  );
}
