var moment = require("moment");

exports.getPromoCode = function getPromoCode () {
      var data = {
        "promocodeDateRanges": [{
                "start": "2018/08/22",
                "end": "2018/08/29",
                "promoCode": "A58TY"
            },
            {
                "start": "2018/08/30",
                "end": "2018/09/6",
                "promoCode": "A59TY"
            },
            {
                "start": "2018/09/6",
                "end": "2018/09/13",
                "promoCode": "A58CR"
            }
        ]
    }
    
    function isInRange(obj) {
        if(obj.start && obj.end && moment(obj.start, 'MM/DD/YYYY') < moment()
        && (moment(obj.end, 'MM/DD/YYYY') > moment()
        || moment(obj.end, 'MM/DD/YYYY').isSame(moment(), 'day') ) ) {
          return true;
      } else {
          return false;
      }
   }
   //filter will test the promo code date ranges and return the promo code value
     return data.promoCodeDateRanges.filter(isInRange)[0];
 }

