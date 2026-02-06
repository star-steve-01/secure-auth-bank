-- CreateTable
CREATE TABLE "user_role" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(32) NOT NULL,

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_account" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(32) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "display_name" VARCHAR(32) NOT NULL,
    "password" CHAR(60) NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "user_account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_account_username_key" ON "user_account"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_account_username_email_key" ON "user_account"("username", "email");

-- AddForeignKey
ALTER TABLE "user_account" ADD CONSTRAINT "user_account_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "user_role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
