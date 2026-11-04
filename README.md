# The Biker Woman — Artist Portfolio

A Next.js portfolio starter built with the supplied photographs and public profile links. It is designed for deployment to Vercel.

## Included
- Dark cinematic + luxury editorial design
- Responsive desktop and mobile layout
- Gallery filters and click-to-enlarge lightbox
- YouTube showreel embed (`Mp82w5OPUXQ`)
- Instagram link (`@the.bikerwoman`)
- Languages: Hindi, Tamil, Malayalam, Telugu, Kannada and Nepali
- Stunt, awards, training, cinema, social and contact sections

## Run locally
Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To test a production build:

```bash
npm run build
npm start
```

## Deploy to Vercel
1. Create a GitHub repository and upload the contents of this folder.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Framework preset should be detected as **Next.js**.
5. Keep the build command as `next build` and click **Deploy**.

You can also use Vercel CLI:

```bash
npm install
npx vercel
```

Follow the prompts, then use `npx vercel --prod` for production deployment.

## Before publishing — important content checks
The site uses the supplied brand name **The Biker Woman** because the artist's full professional name was not provided.

Please verify and update:
- Full professional name and preferred public name.
- The claim that she is the first Indian woman to win the national stunt competition and that she won two consecutive editions. Add the exact championship name, organiser, years and official evidence.
- Medimix advertisement credit and exact stunt-double role.
- Exact Hotstar-associated film title, production and acting role.
- Current Instagram follower count (the approximate 40K figure is supplied by the portfolio owner).
- Professional email, phone/WhatsApp and booking location.
- Whether all event, award and production photographs may be published.

The film credits are deliberately labelled as supplied / to be confirmed. Do not present unverified credits as independently verified.

## Update images
Replace files in `public/images/` while keeping the same filenames, or update the paths in `app/page.tsx`.

Current image files:
- `front-wheelie.jpeg`
- `orange-bike-wheelie.jpeg`
- `national-stunt-award.jpeg`
- `auto-carnival-award.jpeg`
- `live-stunt-performance.jpeg`
- `artist-portrait.jpeg`
- `award-ceremony-team.jpeg`
- `rider-with-motorcycle.jpeg`

## Contact form
The current contact section links to Instagram because no public booking email or phone number was supplied. Add a form service (for example, a form endpoint from a provider you choose) only after deciding where enquiries should be delivered.

## Hosting note
Vercel Hobby is intended for personal, non-commercial use. Since this portfolio is intended to attract professional bookings and brand collaborations, check Vercel's current plan terms before publishing it for commercial use. If needed, choose an appropriate paid plan or a host whose free-plan terms permit the intended use.
