

## Devocionais
```dataview
LIST FROM #type/devocional 
```


## Anotações Bíblicas
```dataview
LIST FROM #bible-note
```

## To-Do Pending
```dataview
TASK FROM "Notes" WHERE !completed GROUP BY file.folder
```
