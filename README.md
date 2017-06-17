# httpeace API (Ans 1)
-----------
sample json
-----------
```
{
    "message": "Order found",
    "orderInfo": {
        "_id": "5944d30759a7a51603377145",
        "orderNo": "0-1607-00023",
        "currency": "HKD",
        "totAmount": 1033.3,
        "orderStatus": 0,
        "paymentStatus": 1,
        "__v": 0,
        "address": {
            "consignee": "Pahak Rai",
            "country": "HK",
            "address": "17th Floor, Flat D, Wai Ching St, Kowloon"
        },
        "details": [
            {
                "detailStatus": 1,
                "price": 133.3,
                "_id": "5791ef91cc25811d1bdcd5a7",
                "completeDate": "1970-01-18T08:01:22.695Z",
                "product": {
                    "_id": "57724827eb930c6005b4fa80",
                    "options": {
                        "quantity": "120",
                        "page": "8pp",
                        "size": "A4"
                    }
                }
            },
            {
                "detailStatus": 1,
                "price": 133.3,
                "_id": "5791ef91cc25811d1bdcd5a8",
                "completeDate": "1970-01-18T08:01:22.695Z",
                "product": {
                    "_id": "57724827eb930c6005b4fa80",
                    "options": {
                        "quantity": "100",
                        "page": "8pp",
                        "size": "A4"
                    }
                }
            }
        ],
        "orderDate": "2017-06-17T06:58:15.312Z"
    }
}
```

# javascript function

```
function(test){
  retrun test;
}
```
