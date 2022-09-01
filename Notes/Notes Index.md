---

database-plugin: basic

---

<%%
name: Notes
description: All Notes about Bible Anotations
columns:
  tags:
    input: text
    accessorKey: tags
    label: tags
    key: tags
    position: 0
    skipPersist: false
    isHidden: false
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  uuid:
    input: text
    accessorKey: uuid
    label: uuid
    key: uuid
    position: 1
    skipPersist: false
    isHidden: false
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  alias:
    input: text
    accessorKey: alias
    label: alias
    key: alias
    position: 2
    skipPersist: false
    isHidden: true
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  date_created:
    input: text
    accessorKey: date_created
    label: date_created
    key: date_created
    position: 3
    skipPersist: false
    isHidden: false
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  date:
    input: text
    accessorKey: date
    label: date
    key: date
    position: 4
    skipPersist: false
    isHidden: true
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  tag:
    input: text
    accessorKey: tag
    label: tag
    key: tag
    position: 5
    skipPersist: false
    isHidden: false
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  created_date:
    input: text
    accessorKey: created_date
    label: created_date
    key: created_date
    position: 6
    skipPersist: false
    isHidden: false
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  __file__:
    key: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    isHidden: false
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: true
      source_data: current_folder
      task_hide_completed: true
  __created__:
    key: __created__
    input: calendar_time
    label: Created
    accessorKey: __created__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: true
    isHidden: false
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  __modified__:
    key: __modified__
    input: calendar_time
    label: Modified
    accessorKey: __modified__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: true
    isHidden: false
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
config:
  enable_show_state: "false"
  remove_field_when_delete_column: "false"
  cell_size: "wide"
  sticky_first_column: "false"
  group_folder_column: ""
  show_metadata_created: "true"
  show_metadata_modified: "true"
  show_metadata_tasks: "false"
  source_data: "current_folder"
  source_form_result: "root"
  frontmatter_quote_wrap: "false"
  row_templates_folder: "/"
  current_row_template: "Templates/Base Note.md"
filters:
  enabled: true
  conditions:
%%>