# UPLIFTAI - AI-Powered Career Coaching Platform

An AI-powered career development platform designed to help job seekers excel in their career transitions. UPLIFTAI combines intelligent resume building, AI-generated cover letters, mock interviews, and personalized career insights to accelerate your job search success.

## 🌟 Features

- **Resume Builder** - Create professional, ATS-optimized resumes with real-time feedback
- **AI Cover Letter Generator** - Generate tailored cover letters using Google Generative AI
- **Mock Interviews** - Practice with AI-powered interview assessments and get detailed performance analytics
- **Career Insights** - Access industry-specific salary data, market trends, and in-demand skills
- **Dashboard** - Centralized view of your career progression and application history
- **User Authentication** - Secure sign-up and login powered by Clerk
- **Responsive Design** - Beautiful, modern UI built with Tailwind CSS and Radix UI components

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS 4
- **Backend**: Next.js API routes, Inngest (background jobs)
- **Database**: PostgreSQL with Prisma ORM
- **AI/ML**: Google Generative AI
- **Authentication**: Clerk
- **UI Components**: Radix UI, Recharts (analytics), Sonner (notifications)
- **Document Generation**: jsPDF, html2canvas
- **Forms**: React Hook Form, Zod validation

## 🎬 Live Demo

Check out the live deployment of UPLIFTAI:

- **Live App**: [https://upliftai.vercel.app]
- **Demo Account**: Use your email to sign up or sign in with existing credentials
- **Test Features**: Try the resume builder, cover letter generator, and mock interviews

## 📋 Prerequisites

- Node.js 18+ and npm (or yarn/pnpm/bun)
- PostgreSQL database
- Google Generative AI API key
- Clerk authentication credentials

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <https://github.com/vaibhav21devlpr/upliftai>
cd UPLIFTAI
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:
```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/upliftai

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Google Generative AI
GOOGLE_API_KEY=your_google_generative_ai_key

# Inngest (optional, for background jobs)
INNGEST_SIGNING_KEY=your_inngest_signing_key
INNGEST_EVENT_KEY=your_inngest_event_key
```

### 4. Set Up Database

```bash
# Run Prisma migrations
npx prisma migrate dev

# Generate Prisma Client
npx prisma generate
```

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
UPLIFTAI/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes (sign-in, sign-up)
│   ├── (main)/            # Main application routes
│   │   ├── dashboard/     # User dashboard
│   │   ├── resume/        # Resume builder
│   │   ├── ai-cover-letter/ # Cover letter generator
│   │   └── interview/     # Mock interviews & assessments
│   ├── api/               # API routes
│   └── lib/               # Shared utilities
├── components/            # Reusable React components
│   └── ui/               # Radix UI components
├── actions/              # Server actions for data mutations
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and Prisma client
├── prisma/               # Database schema and migrations
├── public/               # Static assets
└── data/                 # Static data files (FAQs, features, etc.)
```

## 🔑 Key Features Breakdown

### Resume Builder (`app/(main)/resume`)
- Drag-and-drop interface for creating resume sections
- Real-time ATS score calculation
- Export to PDF functionality
- AI-powered feedback and suggestions

### AI Cover Letter Generator (`app/(main)/ai-cover-letter`)
- Generate tailored cover letters based on job descriptions
- Template-based generation with Google Generative AI
- Version history and preview
- Export to PDF

### Mock Interviews (`app/(main)/interview`)
- Technical and behavioral assessment quizzes
- Performance analytics with charts
- Question categorization by difficulty
- Detailed improvement suggestions

### Career Dashboard (`app/(main)/dashboard`)
- Overview of user's career progress
- Quick stats on assessments and applications
- Industry insights and salary data
- Personalized recommendations

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start           # Start production server

# Database
npx prisma migrate dev    # Create and run migrations
npx prisma studio        # Open Prisma Studio to view data
npx prisma generate      # Generate Prisma Client

# Linting
npm run lint        # Run ESLint
```

## 🗄️ Database Schema

The application uses PostgreSQL with the following main models:

- **User** - User profiles with credentials, skills, and industry information
- **Resume** - User resumes with ATS scores and feedback
- **CoverLetter** - Generated cover letters with job details
- **Assessment** - Interview assessment results and scores
- **IndustryInsight** - Industry-specific data (salaries, trends, skills)

See [prisma/schema.prisma](prisma/schema.prisma) for the complete schema.

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/sign-up` - User registration
- `POST /api/auth/sign-in` - User login

### Core Features
- `GET /api/user/profile` - Get user profile
- `POST /api/resume` - Create/update resume
- `POST /api/cover-letter` - Generate cover letter
- `POST /api/assessment` - Submit assessment
- `GET /api/industry-insights` - Get industry data

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure:
- Code follows the existing style
- All features have corresponding tests
- Documentation is updated accordingly

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support

For questions or issues, please:
- Open an issue on GitHub
- Contact the development team
- Check the [documentation](docs) for more information

## 🎯 Roadmap

- [ ] Browser-based video interview practice
- [ ] LinkedIn profile optimization
- [ ] Job matching recommendations
- [ ] Team collaboration features
- [ ] Advanced analytics dashboard
- [ ] Mobile app

---

