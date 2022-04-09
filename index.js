
    var Alldata;

    // fetch data from filltext API
        api = () => {
            return fetch('http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[%22category1%22,%22category2%22,%22category3%22]&pretty=true')
            .then(respo => respo.json())
            .then(data => { 
                const filltextData = data;
                return filltextData;
            }).catch(error => {
                console.error(error)
            }) ; 
        }
        
        api().then(res => {    
            Alldata = res;
            Showdata(Alldata)
        })

    // embody the data to the DOM 
        Showdata = (data) => {
            var str = '<ul>'
            data.forEach(function(slide) {
            str +=  '<li><a>' +
            '<div id="circleName">'+ slide.fname.charAt(0).toUpperCase() + slide.lname.charAt(0).toUpperCase() +'</div>' +
            '<h1>'+ slide.fname + ' ' + slide.lname + '</h1>' +
            '<p>' + slide.category + '</p>' +
            '</a></li>';
        }); 
    
    str += '</ul>';
    document.getElementById("listFilltext").innerHTML = str;
    }

    
    // button data filter
    callCategory1 = (categoryType) => {
        if(categoryType != ""){
            let newdata =  Alldata.filter((element) => element.category == categoryType);
            Showdata(newdata)
        }else {
            Showdata(Alldata)
        }
        
    }