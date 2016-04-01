var p =
{
     "firstName": "John",
     "lastName" : "Smith",
     "age"      : 25,
     "address"  :
     {
         "streetAddress": "21 2nd Street",
         "city"         : "Portland",
         "state"        : "OR",
         "postalCode"   : "90021"
     },
     "phoneNumber":
     [
         {
           "type"  : "home",
           "number": "212.555.1234"
         },
         {
           "type"  : "fax",
           "number": "646.555.4567"
         },
         {
           "type"  : "work",
           "number": "541.502.1212"
         },
        {
           "type"  : "mobile",
           "number": "541.406.8765"
         }
     ]
 };


// part a
function getAddress(p) {
    return p.address.streetAddress + ", " + p.address.city + ", " + p.address.state + " " + p.address.postalCode;
}


// part b
function getTelNums(p) {
    var result = "";
    for (var i = 0; i < p.phoneNumber.length; i++) {
    result = result + p.phoneNumber[i].number + ", ";
    }
    return result;
}