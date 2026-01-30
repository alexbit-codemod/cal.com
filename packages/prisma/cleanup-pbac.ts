#!/usr/bin/env tsx

/**
 * Cleanup script to remove PBAC demo organization and related data
 * Run with: npx tsx packages/prisma/cleanup-pbac.ts
 */
import prisma from ".";

async function cleanupPBACOrganization() {
  // Replaced console logging with logger
  logger.log("🧹 Cleaning up PBAC Demo Organization...");

  try {
    // Find the organization
    const organization = await prisma.team.findFirst({
      where: {
        slug: "pbac-demo-org",
        isOrganization: true,
      },
      include: {
        members: true,
        roles: true,
        children: true, // teams within the organization
      },
    });

    if (!organization) {
      // Replaced console logging with logger
  logger.log("ℹ️  PBAC Demo Organization not found, nothing to clean up");
      return;
    }

    // Replaced console logging with logger
  logger.log(`Found organization: ${organization.name} (ID: ${organization.id})`);

    // Delete users created for PBAC demo
    const pbacUserEmails = [
      "owner@pbac-demo.com",
      "events@pbac-demo.com",
      "analytics@pbac-demo.com",
      "coordinator@pbac-demo.com",
      "support@pbac-demo.com",
    ];

    const pbacUsers = await prisma.user.findMany({
      where: {
        email: { in: pbacUserEmails },
      },
    });

    // Replaced console logging with logger
  logger.log(`Found ${pbacUsers.length} PBAC users to delete`);

    // Delete users (this will cascade delete memberships, profiles, etc.)
    for (const user of pbacUsers) {
      await prisma.user.delete({
        where: { id: user.id },
      });
      // Replaced console logging with logger
  logger.log(`  ✅ Deleted user: ${user.email}`);
    }

    // Delete custom roles (this will cascade delete permissions)
    for (const role of organization.roles) {
      await prisma.role.delete({
        where: { id: role.id },
      });
      // Replaced console logging with logger
  logger.log(`  ✅ Deleted role: ${role.name}`);
    }

    // Delete child teams
    for (const team of organization.children) {
      await prisma.team.delete({
        where: { id: team.id },
      });
      // Replaced console logging with logger
  logger.log(`  ✅ Deleted team: ${team.name}`);
    }

    // Delete the organization (this will cascade delete organization settings)
    await prisma.team.delete({
      where: { id: organization.id },
    });

    // Replaced console logging with logger
  logger.log(`  ✅ Deleted organization: ${organization.name}`);

    // Clean up any temp org redirects
    await prisma.tempOrgRedirect.deleteMany({
      where: {
        OR: [
          { from: { in: ["owner", "events", "analytics", "coordinator", "support"] } },
          { toUrl: { contains: "pbac-demo-org" } },
        ],
      },
    });

    // Replaced console logging with logger
  logger.log("  ✅ Cleaned up temp org redirects");

    // Replaced console logging with logger
  logger.log("\n🎉 PBAC Demo Organization cleanup completed successfully!");
  } catch (error) {
    console.error("❌ Error during cleanup:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

cleanupPBACOrganization()
  .then(() => {
    // Replaced console logging with logger
  logger.log("✅ Cleanup completed!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Cleanup failed:", error);
    process.exit(1);
  });
