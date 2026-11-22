-- Preserve incomplete pre-milestone review shells without listing them as projects.
UPDATE workspace_records SET state='Archived'
WHERE kind='project' AND state='Draft' AND created_at < '2026-11-22T00:00:00.000Z'
AND COALESCE(json_extract(payload,'$.acceptedReference'),'')=''
AND COALESCE(json_extract(payload,'$.customer'),'')=''
AND COALESCE(json_extract(payload,'$.site'),'')='';
