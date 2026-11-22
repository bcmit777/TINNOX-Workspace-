CREATE TABLE `workspace_attachments` (
	`id` text PRIMARY KEY NOT NULL,
	`record_id` text NOT NULL,
	`object_key` text NOT NULL,
	`name` text NOT NULL,
	`mime` text NOT NULL,
	`size` integer NOT NULL,
	`uploaded_by` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `workspace_attachments_object_key_unique` ON `workspace_attachments` (`object_key`);--> statement-breakpoint
CREATE INDEX `attachment_record_idx` ON `workspace_attachments` (`record_id`);--> statement-breakpoint
CREATE TABLE `workspace_audit` (
	`id` text PRIMARY KEY NOT NULL,
	`record_id` text,
	`module` text NOT NULL,
	`action` text NOT NULL,
	`actor_id` text NOT NULL,
	`actor_name` text NOT NULL,
	`detail` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `workspace_counters` (
	`kind` text PRIMARY KEY NOT NULL,
	`value` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `workspace_documents` (
	`id` text PRIMARY KEY NOT NULL,
	`record_id` text NOT NULL,
	`source_revision` integer NOT NULL,
	`number` text NOT NULL,
	`title` text NOT NULL,
	`project_id` text,
	`inf_ids` text NOT NULL,
	`audience` text NOT NULL,
	`template_edition` text NOT NULL,
	`snapshot` text NOT NULL,
	`digest` text NOT NULL,
	`issued_by` text NOT NULL,
	`issued_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `workspace_documents_number_unique` ON `workspace_documents` (`number`);--> statement-breakpoint
CREATE UNIQUE INDEX `document_record_revision_idx` ON `workspace_documents` (`record_id`,`source_revision`);--> statement-breakpoint
CREATE TABLE `workspace_members` (
	`id` text PRIMARY KEY NOT NULL,
	`identity_id` text,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`kind` text NOT NULL,
	`modules` text NOT NULL,
	`approval_modules` text NOT NULL,
	`project_ids` text NOT NULL,
	`organisation_id` text,
	`active` integer NOT NULL,
	`revision` integer NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `workspace_members_identity_id_unique` ON `workspace_members` (`identity_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `workspace_members_email_unique` ON `workspace_members` (`email`);--> statement-breakpoint
CREATE TABLE `workspace_records` (
	`id` text PRIMARY KEY NOT NULL,
	`kind` text NOT NULL,
	`module` text NOT NULL,
	`number` text NOT NULL,
	`title` text NOT NULL,
	`project_id` text,
	`organisation_id` text,
	`inf_ids` text NOT NULL,
	`state` text NOT NULL,
	`audience` text NOT NULL,
	`payload` text NOT NULL,
	`assigned_to` text,
	`due_at` text,
	`original_due_at` text,
	`forecast_at` text,
	`actual_at` text,
	`source_key` text,
	`source_id` text,
	`revision` integer NOT NULL,
	`created_by` text NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	`submitted_at` text,
	`approved_at` text,
	`approved_by` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `workspace_records_number_unique` ON `workspace_records` (`number`);--> statement-breakpoint
CREATE UNIQUE INDEX `workspace_records_source_key_unique` ON `workspace_records` (`source_key`);--> statement-breakpoint
CREATE INDEX `work_project_idx` ON `workspace_records` (`project_id`);--> statement-breakpoint
CREATE INDEX `work_module_state_idx` ON `workspace_records` (`module`,`state`);