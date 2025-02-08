-- CreateTable
CREATE TABLE `activities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `team_id` INTEGER NOT NULL,
    `date` DATE NOT NULL,
    `day_name` VARCHAR(15) NOT NULL DEFAULT '0',
    `fajr` INTEGER NOT NULL DEFAULT 0,
    `dhuhr` INTEGER NOT NULL DEFAULT 0,
    `asr` INTEGER NOT NULL DEFAULT 0,
    `maghrib` INTEGER NOT NULL DEFAULT 0,
    `isha` INTEGER NOT NULL DEFAULT 0,
    `sura_mulk` INTEGER NOT NULL DEFAULT 0,
    `exercise` INTEGER NOT NULL DEFAULT 0,
    `deen_lecture` INTEGER NOT NULL DEFAULT 0,
    `motivational_lecture` INTEGER NOT NULL DEFAULT 0,
    `intensive_dhikr_night` INTEGER NOT NULL DEFAULT 0,
    `call_parents` INTEGER NOT NULL DEFAULT 0,
    `quran` INTEGER NOT NULL DEFAULT 0,
    `tasbeeh` INTEGER NOT NULL DEFAULT 0,
    `miswak` INTEGER NOT NULL DEFAULT 0,
    `dua` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `mobile` VARCHAR(15) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `parent` TEXT NOT NULL,
    `present_address` VARCHAR(300) NOT NULL DEFAULT '',
    `permanent_address` VARCHAR(300) NOT NULL DEFAULT '',
    `password` VARCHAR(250) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `created_at` DATETIME(0) NOT NULL,
    `created_by` INTEGER NOT NULL DEFAULT 0,
    `updated_at` DATETIME(0) NULL,
    `updated_by` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `mobile`(`mobile`),
    UNIQUE INDEX `email`(`email`),
    INDEX `status`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `mobile` VARCHAR(15) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `present_address` VARCHAR(300) NOT NULL DEFAULT '',
    `permanent_address` VARCHAR(300) NOT NULL DEFAULT '',
    `password` VARCHAR(250) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `created_at` DATETIME(0) NOT NULL,
    `created_by` INTEGER NOT NULL DEFAULT 0,
    `updated_at` DATETIME(0) NULL,
    `updated_by` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `mobile`(`mobile`),
    UNIQUE INDEX `email`(`email`),
    INDEX `status`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
