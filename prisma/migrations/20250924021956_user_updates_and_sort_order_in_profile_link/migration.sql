-- AlterTable
ALTER TABLE "public"."portfolio_item" ADD COLUMN     "sortOrder" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "profession" TEXT;
