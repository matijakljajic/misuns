CREATE TABLE `package_status` (
	`package_id` integer PRIMARY KEY NOT NULL,
	`status` text NOT NULL,
	FOREIGN KEY (`package_id`) REFERENCES `package`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `package` (
	`id` integer PRIMARY KEY NOT NULL,
	`sender_id` integer NOT NULL,
	`receiver_id` integer NOT NULL,
	`cost` real NOT NULL,
	`mass` real NOT NULL,
	`note` text,
	FOREIGN KEY (`sender_id`) REFERENCES `person`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`receiver_id`) REFERENCES `person`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `address` (
	`id` integer PRIMARY KEY NOT NULL,
	`street` text NOT NULL,
	`num` integer NOT NULL,
	`city` text NOT NULL,
	`country` text NOT NULL,
	`zip` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `employee` (
	`person_id` integer PRIMARY KEY NOT NULL,
	`position` text NOT NULL,
	FOREIGN KEY (`person_id`) REFERENCES `person`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `person` (
	`id` integer PRIMARY KEY NOT NULL,
	`fname` text NOT NULL,
	`lname` text NOT NULL,
	`address_id` integer,
	`email` text NOT NULL,
	`password` text NOT NULL,
	FOREIGN KEY (`address_id`) REFERENCES `address`(`id`) ON UPDATE no action ON DELETE no action
);
