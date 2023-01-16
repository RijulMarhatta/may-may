$(document).ready(function() {

    fetch('https://www.balldontlie.io/api/v1/teams')
    .then(response => response.json())
    .then((out) => {
        var data = (JSON.stringify(out));
      
       var parsedData = JSON.parse(data);
// defining variables for each components //
       var newdataid = (JSON.stringify(parsedData.data,['id']));
       var newdatacity = (JSON.stringify(parsedData.data,['city']));
       var newdataabbreviation = (JSON.stringify(parsedData.data,['abbreviation']));
       var newdataconference = (JSON.stringify(parsedData.data,['conference']));
       var newdatadivision =(JSON.stringify(parsedData.data,['division']));
       var newdatafull_name = (JSON.stringify(parsedData.data,['full_name']));
       var newdataname = (JSON.stringify(parsedData.data,['name']));
// defining variables for each components //

// $(".appendhere").append("<table class = table><tr class = tablerow ><td class = tablecontent1>"+newdataid+"</td><td class = tablecontent2>"+newdatacity+"</td><td class = tablecontent3>"+newdataabbreviation+"</td><td class = tablecontent4>"+newdataconference+"</td><td class = tablecontent5>"+newdatadivision+"</td><td class = tablecontent6>"+newdatafull_name+"</td><td>"+newdataname+"</td></tr></table>")

//clone start //

var offerdata = parsedData.data;
$.each(offerdata, function(index, itemData) {
    if (itemData.RESPONCE1 != 'NO' || itemData.RESPONCE2 != 'NO') {
        

        clonedata = $(".cardwrap .table").clone();
        console.log(itemData.bank);
        clonedata.find(".data1").html(itemData.id);
        clonedata.find(".data2").html(itemData.city);
        clonedata.find(".data3").html(itemData.abbreviation);
        clonedata.find(".data4").html(itemData.conference);
        clonedata.find(".data5").html(itemData.division);
        clonedata.find(".data6").html(itemData.full_name);
        clonedata.find(".data7").html(itemData.name);
        $(".datanewClone .row").append(clonedata);
       

    }

});
//clone ends//

    console.log( parsedData.data['0']);
    console.log(typeof data);
    console.log(typeof parsedData);
    console.log(parsedData.data,['id']);
    console.log('Output: ', out);
    //alert(JSON.stringify(parsedData.data,('id')));


//to see the whole data 
 // $(".mypanel").append("<div>"+data+"</div>");
//to see the whole data  
})
//.catch(err => console.error(err));

});
