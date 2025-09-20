-- CreateEnum
CREATE TYPE "public"."Platform" AS ENUM ('Spotify', 'YouTube', 'Instagram', 'Other');

-- CreateTable
CREATE TABLE "public"."profile_link" (
    "id" SERIAL NOT NULL,
    "platform" "public"."Platform" NOT NULL,
    "url" TEXT NOT NULL,
    "followers" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "profile_link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."portfolio_item" (
    "id" TEXT NOT NULL,
    "platform" "public"."Platform" NOT NULL,
    "url" TEXT NOT NULL,
    "image" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "portfolio_item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."profile_link" ADD CONSTRAINT "profile_link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."portfolio_item" ADD CONSTRAINT "portfolio_item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
