# Viken Bad - نظام إدارة المشاريع

A project management and time tracking system built with Next.js, Prisma, and TypeScript.

## Features

- User Authentication
- Project Management
- Time Tracking
- Admin Dashboard
- User Dashboard
- Reports Generation

## Prerequisites

- Node.js 18+ 
- PostgreSQL Database
- npm or yarn

## Local Development

1. Clone the repository:
```bash
git clone [repository-url]
cd viken-bad
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Copy `.env.example` to `.env`
- Update the variables with your values:
  - `DATABASE_URL`: Your PostgreSQL database URL
  - `NEXTAUTH_URL`: For local development, use `http://localhost:3000`
  - `NEXTAUTH_SECRET`: Generate a random secret using `openssl rand -base64 32`

4. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

## Deployment

1. Build the application:
```bash
npm run build
```

2. Set up environment variables on your hosting platform:
- `DATABASE_URL`: Your production database URL
- `NEXTAUTH_URL`: Your production URL (e.g., https://your-domain.com)
- `NEXTAUTH_SECRET`: Your production secret key

3. Deploy using one of these platforms:
- [Vercel](https://vercel.com) (Recommended)
- [Railway](https://railway.app)
- [Netlify](https://netlify.com)

## Production Deployment Steps

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy

### Railway

1. Create a new project on Railway
2. Connect your GitHub repository
3. Add PostgreSQL plugin
4. Set up environment variables
5. Deploy

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License. 