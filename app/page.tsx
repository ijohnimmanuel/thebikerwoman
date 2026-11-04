"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  { src: "/images/front-wheelie.jpeg", title: "Front-on wheelie", type: "Stunts" },
  { src: "/images/orange-bike-wheelie.jpeg", title: "Orange machine / wheelie", type: "Stunts" },
  { src: "/images/live-stunt-performance.jpeg", title: "Live stunt performance", type: "Events" },
  { src: "/images/rider-with-motorcycle.jpeg", title: "The rider", type: "Portraits" },
  { src: "/images/artist-portrait.jpeg", title: "Off-track portrait", type: "Portraits" },
  { src: "/images/national-stunt-award.jpeg", title: "National championship recognition", type: "Awards" },
  { src: "/images/auto-carnival-award.jpeg", title: "Auto Carnival recognition", type: "Awards" },
  { src: "/images/award-ceremony-team.jpeg", title: "On the awards stage", type: "Awards" },
];

const filters = ["All", "Stunts", "Events", "Portraits", "Awards"];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const visiblePhotos = filter === "All" ? photos : photos.filter((photo) => photo.type === filter);

  return (
    <main>
      <div className="announcement">
        <span>THE OFFICIAL ARTIST PORTFOLIO</span>
        <span className="announcement-right">INDIA · AVAILABLE FOR SELECT PROJECTS</span>
      </div>

      <header className="nav-wrap">
        <a className="wordmark" href="#home" aria-label="The Biker Woman home">
          <span className="wordmark-mark">TBW</span>
          <span>THE BIKER WOMAN<small>RIDER · PERFORMER · TRAINER</small></span>
        </a>
        <nav>
          <a href="#about">ABOUT</a>
          <a href="#stunts">STUNTS</a>
          <a href="#credits">CREDITS</a>
          <a href="#training">TRAINING</a>
          <a href="#contact" className="nav-cta">BOOK / COLLABORATE ↗</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image">
          <Image src="/images/live-stunt-performance.jpeg" alt="The Biker Woman performing a motorcycle stunt at a live event" fill priority sizes="100vw" />
        </div>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span className="eyebrow-line" /> BUILT ON COURAGE. DEFINED BY CONTROL.</p>
          <h1>BEYOND<br /><em>THE ORDINARY.</em></h1>
          <p className="hero-subtitle">Motorcycle Stunt Performer <i>·</i> Screen Artist <i>·</i> Riding & Stunt Trainer</p>
          <p className="hero-copy">A fearless pursuit of movement, precision and performance — on the bike, on set and beyond.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#stunts">EXPLORE THE PORTFOLIO <span>↗</span></a>
            <a className="text-link" href="#contact">PROFESSIONAL ENQUIRIES <span>↗</span></a>
          </div>
        </div>
        <div className="hero-bottom">
          <span>01 / 04 — ACTION</span>
          <span>SCROLL TO DISCOVER ↓</span>
        </div>
        <div className="hero-vertical">THE BIKER WOMAN · OFFICIAL PROFILE</div>
      </section>

      <section className="intro section-shell" id="about">
        <div className="section-kicker">01 — THE ARTIST</div>
        <div className="intro-grid">
          <div className="intro-photo">
            <Image src="/images/rider-with-motorcycle.jpeg" alt="The Biker Woman standing with her motorcycle" fill sizes="(max-width: 800px) 100vw, 42vw" />
            <span className="photo-caption">THE RIDER. THE WOMAN. THE DRIVE.</span>
          </div>
          <div className="intro-copy">
            <p className="eyebrow dark-eyebrow">A LIFE IN MOTION</p>
            <h2>Not made to<br /><em>stay in one lane.</em></h2>
            <p className="lead">An independent motorcycle stunt performer, riding trainer and screen artist whose work brings together action, discipline and creative expression.</p>
            <p>From high-control motorcycle performances to mentoring women riders, her journey is shaped by persistence, preparation and the belief that skill has no gender.</p>
            <div className="language-block">
              <span className="micro-label">LANGUAGES</span>
              <p>Hindi <b>·</b> Tamil <b>·</b> Malayalam <b>·</b> Telugu <b>·</b> Kannada <b>·</b> Nepali</p>
            </div>
            <a className="inline-link" href="#contact">WORK WITH HER <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="achievement-band">
        <div className="achievement-inner">
          <div><span className="stat-number">02</span><span className="stat-label">CONSECUTIVE<br />NATIONAL WINS*</span></div>
          <div className="achievement-divider" />
          <div className="achievement-statement">
            <span className="micro-label">A MILESTONE IN INDIAN STUNT RIDING</span>
            <h2>First Indian woman to win.<br /><em>Two national wins in a row.</em></h2>
            <p>*Achievement details supplied for this profile. Confirm the exact championship title, organiser, years and official records before public launch.</p>
          </div>
          <div className="achievement-photo">
            <Image src="/images/national-stunt-award.jpeg" alt="Award presentation at a national stunt championship" fill sizes="(max-width: 800px) 100vw, 25vw" />
          </div>
        </div>
      </section>

      <section className="stunts section-shell" id="stunts">
        <div className="section-heading">
          <div>
            <div className="section-kicker">02 — THE ACTION PORTFOLIO</div>
            <h2>THE ART OF CONTROL.<br /><em>THE POWER OF PERFORMANCE.</em></h2>
          </div>
          <p>Selected riding moments, stunt performances and milestones. A visual record of precision, practice and presence.</p>
        </div>
        <div className="filter-row" aria-label="Filter gallery">
          {filters.map((item) => (
            <button key={item} className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <div className="gallery-grid">
          {visiblePhotos.map((photo, index) => (
            <button className={`gallery-card gallery-card-${index % 4}`} key={photo.src} onClick={() => setActivePhoto(photo.src)} aria-label={`Open ${photo.title}`}>
              <Image src={photo.src} alt={photo.title} fill sizes="(max-width: 700px) 100vw, 33vw" />
              <span className="gallery-overlay"><small>{photo.type.toUpperCase()}</small><strong>{photo.title}</strong><i>↗</i></span>
            </button>
          ))}
        </div>
      </section>

      <section className="cinema-section" id="credits">
        <div className="cinema-image">
          <Image src="/images/auto-carnival-award.jpeg" alt="Artist at an automotive event and award ceremony" fill sizes="50vw" />
        </div>
        <div className="cinema-copy">
          <div className="section-kicker light-kicker">03 — CINEMA & SCREEN</div>
          <p className="eyebrow">FROM LIVE ACTION TO THE CAMERA FRAME</p>
          <h2>MADE FOR<br /><em>THE MOMENT.</em></h2>
          <p className="cinema-intro">A screen and performance profile spanning advertising, film and live automotive events.</p>
          <div className="credit">
            <span className="credit-type">ADVERTISING · STUNT DOUBLE</span>
            <h3>Medimix Advertisement</h3>
            <p>Reported stunt-double performance for Katrina Kaif. Campaign details and supporting production credit to be confirmed.</p>
          </div>
          <div className="credit">
            <span className="credit-type">FILM · ACTING</span>
            <h3>Feature Film – Title to be added</h3>
            <p>Screen acting credit in a film associated with the Hotstar platform. Exact title, production and role to be confirmed.</p>
          </div>
          <p className="credit-note">Credits are presented from information supplied for this portfolio and should be checked against production records before public launch.</p>
        </div>
      </section>

      <section className="training section-shell" id="training">
        <div className="section-kicker">04 — TRAINING & MENTORSHIP</div>
        <div className="training-grid">
          <div>
            <p className="eyebrow dark-eyebrow">SKILL. CONFIDENCE. INDEPENDENCE.</p>
            <h2>EMPOWERING WOMEN.<br /><em>ONE RIDE AT A TIME.</em></h2>
            <p className="lead">Sharing riding knowledge, building confidence and helping women take up space in the world of motorcycles.</p>
            <p>For riding workshops, stunt-training enquiries, demonstrations and event collaborations, get in touch to discuss the right format and experience level.</p>
            <a className="button button-dark" href="#contact">ENQUIRE ABOUT TRAINING <span>↗</span></a>
          </div>
          <div className="training-photo">
            <Image src="/images/front-wheelie.jpeg" alt="Motorcycle stunt practice" fill sizes="(max-width: 800px) 100vw, 45vw" />
            <span className="photo-caption">PRACTICE. PRECISION. PROGRESSION.</span>
          </div>
        </div>
      </section>

      <section className="showreel">
        <div className="showreel-bg" />
        <div className="showreel-content">
          <div className="section-kicker light-kicker">05 — WATCH THE SHOWREEL</div>
          <h2>THE WORK<br /><em>SPEAKS.</em></h2>
          <p>Watch the featured video and explore more riding and performance content.</p>
          <a className="button button-light" href="https://www.youtube.com/watch?v=Mp82w5OPUXQ" target="_blank" rel="noreferrer">WATCH ON YOUTUBE ↗</a>
        </div>
        <div className="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/Mp82w5OPUXQ"
            title="The Biker Woman — featured showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section className="social section-shell">
        <div className="social-top">
          <div>
            <div className="section-kicker">06 — DIGITAL PRESENCE</div>
            <h2>FOLLOW THE<br /><em>JOURNEY.</em></h2>
          </div>
          <div className="social-copy">
            <span className="social-number">40K<span>+</span></span>
            <p>Instagram community<br /><small>Approximate figure supplied for this profile; update with current count.</small></p>
            <a className="inline-link" href="https://www.instagram.com/the.bikerwoman/" target="_blank" rel="noreferrer">@THE.BIKERWOMAN ↗</a>
          </div>
        </div>
        <div className="social-strip">
          <a href="https://www.instagram.com/the.bikerwoman/" target="_blank" rel="noreferrer">INSTAGRAM <span>↗</span></a>
          <a href="https://www.youtube.com/watch?v=Mp82w5OPUXQ" target="_blank" rel="noreferrer">YOUTUBE <span>↗</span></a>
          <a href="#contact">COLLABORATIONS <span>↗</span></a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-backdrop">
          <Image src="/images/artist-portrait.jpeg" alt="" fill sizes="100vw" />
        </div>
        <div className="contact-overlay" />
        <div className="contact-content">
          <div className="section-kicker light-kicker">07 — PROFESSIONAL ENQUIRIES</div>
          <h2>LET'S CREATE<br /><em>SOMETHING UNFORGETTABLE.</em></h2>
          <p>For film and advertising, stunt performance, acting and casting, riding workshops, events, brand partnerships and sponsorships.</p>
          <div className="contact-actions">
            <a className="button button-light" href="https://www.instagram.com/the.bikerwoman/" target="_blank" rel="noreferrer">CONTACT VIA INSTAGRAM ↗</a>
            <a className="text-link light-text-link" href="https://www.youtube.com/watch?v=Mp82w5OPUXQ" target="_blank" rel="noreferrer">WATCH SHOWREEL ↗</a>
          </div>
          <span className="contact-note">Professional email and booking contact can be added here.</span>
        </div>
      </section>

      <footer className="footer">
        <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark">TBW</span><span>THE BIKER WOMAN<small>RIDER · PERFORMER · TRAINER</small></span></a>
        <p>© {new Date().getFullYear()} THE BIKER WOMAN. ALL RIGHTS RESERVED.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>

      {activePhoto && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setActivePhoto(null)}>
          <button className="lightbox-close" onClick={() => setActivePhoto(null)} aria-label="Close photo">×</button>
          <div className="lightbox-image" onClick={(event) => event.stopPropagation()}>
            <Image src={activePhoto} alt="Selected portfolio photograph" fill sizes="90vw" />
          </div>
        </div>
      )}
    </main>
  );
}
