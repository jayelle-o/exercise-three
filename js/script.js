$(document).ready(function(){
    
    getData();
});


function getData() {
    $.getJSON("js/columbia.json", function(schoolsData) {
    console.log(schoolsData);

    loopThroughData(schoolsData);
    })

}

function loopThroughData(s) {
    
    for (i=0; i<s.length; i++) {

        var schoolName = s[i]["SCHOOL_NAME"];
        var year = s[i]["YEAR"];
        var gradPct = s[i]["GRADUATES_PCT"];

        //if graduation percent is less than 50%...
        if (gradPct < 50 && gradPct > 0) {
        console.log(year, schoolName, gradPct);
    }
        

            var barWidth = gradPct * 10;

            if (schoolName === "FREDERICK DOUGLASS HIGH"){
                $(".chart").append(
                "<div class='bar' style='width: "+barWidth+"px'></div>");

    }


}
}