## Tech Stack

Frontend: Next.js, React, Tailwind CSS

AI Integration: Gemini AI API

Authentication: Clerk 

Payments: Stripe

Backend: Inngest

Database: Neon(PostgreSQL)

## Getting Started

1. Clone the Repository

      git clone https://github.com/krishnaanshgoel/Studyhelp.git
      cd Studyhelp

 2. Install Dependencies

      npm install

3. Create a .env File

      In the root of your project, create a .env file:

      DATABASE_URL=postgresql://your-username:your-password@your-neon-host/your-db-name?sslmode=require
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key
      CLERK_SECRET_KEY=your-secret-key
      NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
      NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
      NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
      NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
      NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key
      STRIPE_SECRET_KEY=your-stripe-secret-key
      NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY=your-stripe-price-id
      STRIPE_WEB_HOOK_KEY=your-stripe-webhook-key
      HOST_URL='http://localhost:3000/'

4. Setup and run the Inngest server

      npm install -g inngest-cli
      npx inngest-cli@latest dev

5. Run the Dev Server

    npm run dev

6. Your app should now be running at http://localhost:3000 !

