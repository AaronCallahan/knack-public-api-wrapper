The library provides a simple way to make requests to the Knack API.

## Getting Started

Add Knack application info

```
    this.application_id = settings.application_id || `{insert-APP-ID-here}`
    this.api_key = settings.api_key || `{insert-API-KEY-here}`
```

Instantiate wrapper
```
const knackApiWrapper = new KnackApiWrapper()
```

## Current Supported Functions 

### Records
getRecords(objectKey, filters =  }, search = '', page = 1, records_per_page = 25, sortField = '', sortOrder = 'asc')  
getRecord(objectKey, recordId, format=`both`)  
createRecord(objectKey, fieldData)  
updateRecord(recordId, objectKey, fieldData)
deleteRecord(recordId, objectKey)
deleteBatchRecordsById (objectKey, recordIds)  

### Fields
getFields(objectKey)  
