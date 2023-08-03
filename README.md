# McMaster Housing Clone (backend) 🏠

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

Backend for McMaster Housing Clone. Stores and retrieves property information.

## Deployment 🚀

https://mcmaster-housing-clone-api.vercel.app/

## API Reference 🧩

#### Get all properties

```http
  GET /property
```

#### Get all properties with a certain email

```http
  GET /user-property
```

| Parameter | Type     | Description                                                  |
| :-------- | :------- | :----------------------------------------------------------- |
| `email`   | `string` | **Required**. Email that returned properties are listed with |

#### Create a property

```http
  POST /newProperty
```

| Parameter            | Type       | Description                                                     |
| :------------------- | :--------- | :-------------------------------------------------------------- |
| `landlord_email`     | `string`   | **Required**. Email to be listed with the property              |
| `location`           | `string`   | **Required**. Location of the property                          |
| `description`        | `string`   | **Required**. Description of the property                       |
| `cost_per_month`     | `number`   | **Required**. Cost per month of the property                    |
| `distance`           | `number`   | **Required**. Distance (KM) property is to McMaster university  |
| `rental_term`        | `string`   | **Required**. Rental term of the property                       |
| `available_bedrooms` | `number`   | **Required**. Number of available bedrooms in the property      |
| `date_available`     | `date`     | **Required**. Date that property is available                   |
| `image`              | `[string]` | **Required**. Array of base64 strings of images of the property |

#### Delete a property

```http
  GET /delete-property
```

| Parameter  | Type     | Description                                                                                 |
| :--------- | :------- | :------------------------------------------------------------------------------------------ |
| `email`    | `string` | **Required**. Email that the property that you want to delete is listed with                |
| `location` | `string` | **Required**. Location (street name) of the property that you want to delete is listed with |

## Related

- [McMaster Housing Clone Frontend](https://github.com/ClearlyyConfused/mcmaster-housing-clone)
