CREATE SCHEMA IF NOT EXISTS "hub";

CREATE TABLE "hub"."application" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"name" text NOT NULL,
	"description" text NOT NULL,
	"url" text NOT NULL
);
