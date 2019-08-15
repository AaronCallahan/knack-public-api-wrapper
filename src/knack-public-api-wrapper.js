import axios from 'axios'

export default class KnackPublicApiWrapper {

  constructor(settings = {}) {

    this.application_id = settings.application_id || `insert your Application Id here`
    this.api_key = settings.api_key || `insert your API key here`
    this.api_uri = settings.api_uri || `https://api.knack.com/v1/`

    this.headers = {
      'X-Knack-REST-API-Key': this.api_key,
      'X-Knack-Application-Id': this.application_id,
      'Content-Type': `application/json`
    }

    this.axios = axios.create({
      baseURL: this.api_uri
    })
  }

  getFields(objectKey) {

    const options = {
      url: `objects/${objectKey}/fields`,
      method: `GET`,
      headers: this.headers
    }

    return this.axios(options)
  }

  createRecord(objectKey, fieldData) {

    const options = {
      url: `objects/${objectKey}/records`,
      method: `POST`,
      headers: this.headers,
      data: fieldData
    }

    return this.axios(options)
  }

  getRecords(objectKey, filters = {}, search = '', page = 1, rowsPerPage = 25, sortField = '', sortOrder = 'asc') {

    let options = {
      url: `objects/${objectKey}/records?filters=${encodeURIComponent(JSON.stringify(filters))}&search=${encodeURIComponent(search)}&rows_per_page=${rowsPerPage}&page=${page}&image_thumbs=true&format=both`,
      method: `GET`,
      headers: this.headers
    }

    if (sortField) {

      options.url = `${options.url}&sort_field=${sortField}&sort_order=${sortOrder}`
    }

    return this.axios(options)
  }

  updateRecord(recordId, objectKey, fieldData) {

    const options = {
      url: `objects/${objectKey}/records/${recordId}`,
      method: `PUT`,
      headers: this.headers,
      data: fieldData
    }

    return this.axios(options)
  }

  deleteRecord(recordId, objectKey) {

    const options = {
      url: `objects/${objectKey}/records/${recordId}`,
      method: `DELETE`,
      headers: this.headers
    }

    return this.axios(options)
  }

  deleteBatchRecordsById (recordIds, objectKey) {

    const data = {
      ids: recordIds
    }

    const options = {
      url: `objects/${objectKey}/records/delete`,
      method: `POST`,
      headers: this.headers,
      data,
    }

    return this.axios(options)
  }
}
