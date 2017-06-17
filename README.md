# httpeace

Ans 1.
-----

Note:- Please download the httpeace repository from https://github.com/pahakrai/httpeace to test the api running mongodb on the same machine   

sample json
```
{
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
```

Ans 2.
-----

HTML
---
```
<div id="parent">
  <div class="test">
  </div>
  <div class="test">
  </div>
  <div class="test">
  </div>
  <div class="test">
  </div>
</div>
```

First Design
---
```
#parent {
  width: 270px;
}

#parent .test{
  width: 120px;
  height: 120px;
  background-color: #808080;
  margin: 5px;
}

```

Second Design
---
```
#parent {
  width: 270px;
}

#parent .test{
  float: left;
  width: 120px;
  height: 120px;
  background-color: #808080;
  margin: 5px;
}
```

Ans 3.
-----

```
function getDupCount(string) {
  var string = string.toLowerCase().replace(/ /g,''); // change string to lowercase and remove whitespaces
  var charRepeated = [];
  var finalString = '';
  for (var i = 0; i < string.length; i++) {
      var stringChar = string.charAt(i);

      //check if the characters are not repeated
      if (string.indexOf(stringChar) == i && string.indexOf(stringChar, i + 1) == -1) {
        // Do Anything with Non Repeated Characters
      } else {
      	 if(charRepeated.indexOf(stringChar) == -1) {
            charRepeated.push(stringChar)
            var conj = (finalString == '')? ' ' : 'and';
            finalString += conj + "'" + stringChar + "'";
         }
      }
  }

  return charRepeated.length + '#' + finalString;
};

```

Ans 4.
-----

```
SELECT p.id, p.name as peoplename, COUNT(t.people_id) as toy_count
FROM People as p LEFT JOIN Toys as t
ON p.id = t.people_id
GROUP BY p.name;

```

Ans 5.
-----

```
SELECT id, COALESCE(name, 'product name not found') as name, price,
COALESCE(card_name, 'card name not found') as card_name, card_number, transaction_date
FROM eusales
WHERE NULLIF(price, NULL) > 50
ORDER BY id;

```

Ans 6.
-----

```
var calculate = {
  time: function(principal, interest, tax, desired) {

    // time in years
    var time = 0;

    // creating an infinite loop
    while ( time >= 0 ) {

      //return time on this condition
      if ( principal == desired || principal >=desired ) {
      return this.addString(time);
      }

      var currInterest = interest * principal;
      var currTax = currInterest * tax;

      principal = principal + currInterest - currTax;
      time++;
    }
  },
  addString: function(time){
    return time + " years";
  }
}

var year = calculate.time(1000, 0.05, 0.18, 1100);
console.log(year);
```
