# Listility
| Made By |||
|---|---|---|
| Aviv Yunker ||
| Boris Sholkov||
| Natanel Adler ||

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
```
empty Reply
```

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
| date_created | Date     |       |
| date_modifyed| Date     |       |
| header_color | String   |       |
| list_color   | String   |       |
| task         | JSON     |       |

#### POST
| Key       | Value  | requried | Notes            |
|-----------|--------|----------|------------------|
| header    | String | ✔️      |                  |

Reply: 201
| Key       | Value  | Notes            |
|-----------|--------|------------------|
| id        | String |                  |
| header    | String |                  |

#### PUT
| Key       | Value  | requried | Notes                    |
|--------------|-----------|------------|------------------|
| id           | String    | ✔️         |                  |
| header       | String    | ❌         |                  |
| header_color | String    | ❌         |                  |
| list_color | String      | ❌         |                  |

Reply: 200
| Key          | Value    | Notes |
|--------------|----------|-------|
| id           | String   |       |
| header       | String   |       |
| date_created | Date     |       |
| date_modifyed| Date     |       |
| header_color | String   |       |
| list_color   | String   |       |
| task         | JSON     |       |

#### DELETE
| Key       | Value  | requried | Notes                    |
|--------------|-----------|------------|------------------|
| id           | String    | ✔️         |                 |

Reply: 204

```
empty Reply
```


---
### Task
```
/api/1/list/<list id>/
```
#### GET
```
Empty Reqrest
```
Reply: 200

Body:
```
JSON with Task Objects
```
Task:
| Key          | Value    | Notes |
|--------------|----------|-------|
| id           | String   |       |
| task_name    | String   |       |
| sub_task     | JSON     |       |
| is_checked   | Boolen   |       |


#### POST
| Key          | Value    |requried | Notes |
|--------------|----------|------|----------|
| task_name    | String   | ✔️   |         |
| is_checked   | Boolen   | ✔️   |         |

#### PUT
| Key          | Value    |requried | Notes |
|--------------|----------|-----|--------|
| id           | String   | ✔️  |       |
| task_name    | String   | ❌  |       |
| is_checked   | Boolen   | ❌  |       |

#### DELETE
| Key          | Value    |requried | Notes |
|--------------|----------|-----|--------|
| id           | String   | ✔️  |       |

Reply: 204
```
Empty Body
```

### Sub-Task
```
/api/1/list/<list id>/<task id>/
```
#### GET
```
Empty Reqrest
```
Reply: 200

Body:
```
JSON with Sub_Task Objects
```
Sub_Task:
| Key              | Value    | Notes |
|------------------|----------|-------|
| id               | String   |       |
| Sub_task_name    | String   |       |
| is_checked       | Boolen   |       |

#### POST
| Key              | Value    |requried | Notes |
|------------------|----------|------|----------|
| sub_task_name    | String   | ✔️  |          |
| is_checked       | Boolen   | ✔️  |          |

#### PUT
| Key              | Value    |requried | Notes |
|------------------|----------|---------|-------|
| id               | String   | ✔️     |       |
| Sub_task_name    | String   | ❌     |       |
| is_checked       | Boolen   | ❌     |       |

#### DELETE
| Key          | Value    |requried | Notes |
|--------------|----------|-----|--------|
| id           | String   | ✔️  |       |

Reply: 204
```
Empty Body
```