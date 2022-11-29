$.ajax({
    type:'get',
    url : 'https://api.covid19api.com/summary',
    success: function(responce)
    {
        console.log(responce.countries)
         for(var i=0; i<responce.countries.length; i++ )    
         {
            var totalactive = responce.countries[i].totalconfirmed - responce.countries[i].totalrecovered
           var tablerow = '<tr> <td>${responce.countries[i].country'}</td> <td>${responce.countries[i].totalconfirmed} <td>${totalactive}</td></tr>
         },
    },
    error: function(error)
    {
        console.log(error)
    }
})
