# Listility
| Made By |||
|---|---|---|
|

---
---
## API
---
### Users
```
/api/1/users
```
#### GET
GET Reqrest:
| Key | Value | requried | Notes|
|-----|-------|----------|------|
| id  | String|    ✔️   |      |

Reply: 200
| Key | Value        | Notes|
|----------|---------|------|
| id       | String  |      |
| username | String  |      |
| settings | JSON    |      |

Reply: 400
| Key      | Value   | Notes|
|----------|---------|------|
| reason   | String  |      |

Reply: 401
| Key      | Value   | Notes|
|----------|---------|------|
| reason   | String  |      |

Reply: 404
| Key      | Value   | Notes|
|----------|---------|------|
| reason   | String  |      |

Reply: 408  
| Key      | Value   | Notes|
|----------|---------|------|
| reason   | String  |      |

Reply: 410  
| Key      | Value   | Notes|
|----------|---------|------|
| reason   | String  |      |

### POST
POST Reqrest
| Key       | Value  | requried | Notes|
|-----------|--------|----------|------|
| username  | String | ✔️      |      |
| password  | String | ✔️      |      |

Reply: 201
| Key | Value        | Notes|
|----------|---------|------|
| id       | String  |      |
| username | String  |      |
| settings | JSON    |      |

Reply: 408  
| Key      | Value   | Notes|
|----------|---------|------|
| reason   | String  |      |

Reply: 409 
| Key      | Value   | Notes|
|----------|---------|------|
| reason   | String  |      |

#### PUT
| Key       | Value  | requried | Notes|
|-----------|--------|----------|------|
| id        | String | ✔️      |      |
| password  | String | ❌      |      |
| settings  | JSON   | ❌      |      |

Reply: 200
| Key | Value        | Notes|
|----------|---------|------|
| id       | String  |      |
| username | String  |      |
| settings | JSON    |      |

Reply: 401
| Key      | Value   | Notes|
|----------|---------|------|
| reason   | String  |      |

Reply: 404
| Key      | Value   | Notes|
|----------|---------|------|
| reason   | String  |      |

Reply: 408  
| Key      | Value   | Notes|
|----------|---------|------|
| reason   | String  |      |

Reply: 409 
| Key      | Value   | Notes|
|----------|---------|------|
| reason   | String  |      |

#### DELETE
DELETE reqrest
| Key       | Value  | requried | Notes|
|-----------|--------|----------|------|
| id        | String | ✔️      |      |

Reply: 204

empty Reply

---
### Lists
#### GET
Get Reqrest: Get Lists list
| Key       | Value  | requried | Notes            |
|-----------|--------|----------|------------------|
| ownerID   | String | ✔️*     | Or collabID       |
| collabID  | String | ✔️*     | Or ownerID        |
| startDate | Date   | ❌      |                   |
| endDate   | Date   | ❌      |                   |

Reply: 200
| Key          | Value    | Notes|
|--------------|----------|------|
| id           | String   |      |
| header       | String   |      |
| date_created | Date     |      |
| date_modifyed| Date     |      |
| header_color | String   |      |

---
Get Reqrest: Per List
| Key       | Value  | requried | Notes            |
|-----------|--------|----------|------------------|
| id        | String | ✔️      |                  |

Reply: 200
| Key          | Value    | Notes |
|--------------|----------|-------|
| id           | String   |       |
| header       | String   |       |
| content      | String   |       |
| date_created | Date     |       |
| date_modifyed| Date     |       |
| header_color | String   |       |
| task         | JSON     |       |

#### POST

#### PUT

#### DELETE

---
### Task