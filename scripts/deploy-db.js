const { execSync } = require('child_process');

async function deployDatabase() {
  try {
    console.log('🚀 Starting database deployment...');

    // Generate Prisma Client
    console.log('📦 Generating Prisma Client...');
    execSync('npx prisma generate --no-engine', { stdio: 'inherit' });

    // Push database changes
    console.log('🔄 Pushing database changes...');
    execSync('npx prisma db push', { stdio: 'inherit' });

    console.log('✅ Database deployment completed successfully!');
  } catch (error) {
    console.error('❌ Database deployment failed:', error);
    process.exit(1);
  }
}

deployDatabase(); 