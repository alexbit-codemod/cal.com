#!/usr/bin/env tsx

/**
 * Standalone script to create a PBAC-enabled organization with custom roles
 * Run with: npx tsx packages/prisma/seed-pbac-only.ts
 */
import { createPBACOrganization } from "./seed-pbac-organization";

async function main() {
  // Replaced console logging with logger
  logger.log("🚀 Starting PBAC organization seed...");

  try {
    const result = await createPBACOrganization();

    // Replaced console logging with logger
  logger.log("\n🎉 PBAC Organization created successfully!");
    // Replaced console logging with logger
  logger.log("\n📋 Summary:");
    // Replaced console logging with logger
  logger.log(`Organization: ${result.organization.name} (${result.organization.slug})`);
    // Replaced console logging with logger
  logger.log(`Custom Roles: ${Object.keys(result.customRoles).length}`);
    // Replaced console logging with logger
  logger.log(`Users: ${result.users.length}`);
    // Replaced console logging with logger
  logger.log(`Team: ${result.team?.name || "None"} (${result.team?.slug || "N/A"})`);

    // Replaced console logging with logger
  logger.log("\n🔐 Login Credentials:");
    result.users.forEach(({ user, role, customRole }) => {
      const roleText = customRole ? `${role} + ${customRole}` : role;
      // Replaced console logging with logger
  logger.log(`  - ${user.name}: ${user.email} / password (${roleText})`);
    });

    // Replaced console logging with logger
  logger.log(`\n🌐 Access URLs:`);
    // Replaced console logging with logger
  logger.log(`Organization: ${process.env.NEXT_PUBLIC_WEBAPP_URL}/org/${result.organization.slug}`);
    if (result.team) {
      // Replaced console logging with logger
  logger.log(`Team: ${process.env.NEXT_PUBLIC_WEBAPP_URL}/team/${result.team.slug}`);
    }
  } catch (error) {
    console.error("❌ Error creating PBAC organization:", error);
    process.exit(1);
  }
}

main()
  .then(() => {
    // Replaced console logging with logger
  logger.log("\n✅ Seed completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  });
