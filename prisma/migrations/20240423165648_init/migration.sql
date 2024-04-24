-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "community";

-- CreateTable
CREATE TABLE "community"."comments" (
    "comment_id" BIGSERIAL NOT NULL,
    "post_id" BIGINT,
    "content" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "parent_comment_id" BIGINT,
    "author_id" BIGINT,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("comment_id")
);

-- CreateTable
CREATE TABLE "community"."community" (
    "community_id" BIGSERIAL NOT NULL,
    "name" VARCHAR DEFAULT '',
    "description" TEXT DEFAULT '',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "community_pkey" PRIMARY KEY ("community_id")
);

-- CreateTable
CREATE TABLE "community"."community_members" (
    "membership_id" BIGSERIAL NOT NULL,
    "community_id" BIGINT,
    "role" VARCHAR DEFAULT '',
    "joined_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "profile_id" BIGINT,

    CONSTRAINT "community_members_pkey" PRIMARY KEY ("membership_id")
);

-- CreateTable
CREATE TABLE "community"."likes" (
    "like_id" BIGSERIAL NOT NULL,
    "likeable_id" BIGINT,
    "likable_type" VARCHAR DEFAULT '',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "profile_id" BIGINT,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("like_id")
);

-- CreateTable
CREATE TABLE "community"."posts" (
    "posts_id" BIGSERIAL NOT NULL,
    "community_id" BIGINT,
    "author_id" BIGINT,
    "content" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "posts_pkey" PRIMARY KEY ("posts_id")
);

-- CreateTable
CREATE TABLE "community"."profiles" (
    "first_name" TEXT DEFAULT '',
    "last_name" TEXT DEFAULT '',
    "id" BIGSERIAL NOT NULL,
    "u_id" UUID,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "community"."comments" ADD CONSTRAINT "community_comments_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "community"."profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "community"."comments" ADD CONSTRAINT "community_comments_parent_comment_id_fkey" FOREIGN KEY ("parent_comment_id") REFERENCES "community"."comments"("comment_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "community"."comments" ADD CONSTRAINT "community_comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "community"."posts"("posts_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "community"."community_members" ADD CONSTRAINT "community_community_members_community_id_fkey" FOREIGN KEY ("community_id") REFERENCES "community"."community"("community_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "community"."community_members" ADD CONSTRAINT "community_community_members_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "community"."profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "community"."likes" ADD CONSTRAINT "community_likes_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "community"."profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "community"."posts" ADD CONSTRAINT "community_posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "community"."profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "community"."posts" ADD CONSTRAINT "community_posts_community_id_fkey" FOREIGN KEY ("community_id") REFERENCES "community"."community"("community_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
