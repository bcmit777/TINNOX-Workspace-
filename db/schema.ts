import {sqliteTable,text,integer,index,uniqueIndex} from 'drizzle-orm/sqlite-core';
export const members=sqliteTable('workspace_members',{
 id:text('id').primaryKey(),identityId:text('identity_id').unique(),email:text('email').notNull().unique(),name:text('name').notNull(),kind:text('kind').notNull(),modules:text('modules').notNull(),approvalModules:text('approval_modules').notNull(),projectIds:text('project_ids').notNull(),organisationId:text('organisation_id'),active:integer('active').notNull(),revision:integer('revision').notNull(),createdAt:text('created_at').notNull(),updatedAt:text('updated_at').notNull()
});
export const records=sqliteTable('workspace_records',{
 id:text('id').primaryKey(),kind:text('kind').notNull(),module:text('module').notNull(),number:text('number').notNull().unique(),title:text('title').notNull(),projectId:text('project_id'),organisationId:text('organisation_id'),infIds:text('inf_ids').notNull(),state:text('state').notNull(),audience:text('audience').notNull(),payload:text('payload').notNull(),assignedTo:text('assigned_to'),dueAt:text('due_at'),originalDueAt:text('original_due_at'),forecastAt:text('forecast_at'),actualAt:text('actual_at'),sourceKey:text('source_key').unique(),sourceId:text('source_id'),revision:integer('revision').notNull(),createdBy:text('created_by').notNull(),createdAt:text('created_at').notNull(),updatedAt:text('updated_at').notNull(),submittedAt:text('submitted_at'),approvedAt:text('approved_at'),approvedBy:text('approved_by')
},t=>[index('work_project_idx').on(t.projectId),index('work_module_state_idx').on(t.module,t.state)]);
export const documents=sqliteTable('workspace_documents',{
 id:text('id').primaryKey(),recordId:text('record_id').notNull(),sourceRevision:integer('source_revision').notNull(),number:text('number').notNull().unique(),title:text('title').notNull(),projectId:text('project_id'),infIds:text('inf_ids').notNull(),audience:text('audience').notNull(),templateEdition:text('template_edition').notNull(),snapshot:text('snapshot').notNull(),digest:text('digest').notNull(),issuedBy:text('issued_by').notNull(),issuedAt:text('issued_at').notNull()
},t=>[uniqueIndex('document_record_revision_idx').on(t.recordId,t.sourceRevision)]);
export const attachments=sqliteTable('workspace_attachments',{
 id:text('id').primaryKey(),recordId:text('record_id').notNull(),objectKey:text('object_key').notNull().unique(),name:text('name').notNull(),mime:text('mime').notNull(),size:integer('size').notNull(),uploadedBy:text('uploaded_by').notNull(),createdAt:text('created_at').notNull()
},t=>[index('attachment_record_idx').on(t.recordId)]);
export const audit=sqliteTable('workspace_audit',{
 id:text('id').primaryKey(),recordId:text('record_id'),module:text('module').notNull(),action:text('action').notNull(),actorId:text('actor_id').notNull(),actorName:text('actor_name').notNull(),detail:text('detail').notNull(),createdAt:text('created_at').notNull()
});
export const counters=sqliteTable('workspace_counters',{kind:text('kind').primaryKey(),value:integer('value').notNull()});
