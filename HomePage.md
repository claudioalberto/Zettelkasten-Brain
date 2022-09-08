

## Devocionais
```dataview
LIST FROM #type/devotional 
```

## Anotações Bíblicas
```dataview
LIST FROM #bible-note
```

## To-Do Pending
```dataview
TASK FROM "Notes" WHERE !completed GROUP BY file.folder
```
