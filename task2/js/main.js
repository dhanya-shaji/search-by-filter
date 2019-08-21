$(document).ready(function () {


    $("#txtSearchText").blur(function () {
        console.log("haiii");
        $.get("https://api.github.com/users", function (response) {
            var html = " ";
            var searchText = $("#txtSearchText").val();
            var user = filterItems(response, searchText)

            console.log("Text", searchText);
            user.map(function (obj) {


                html = html + '<div class="col-md-3"><div class="card mb-2"><img src=' + obj.avatar_url + ' class="common" alt="...">'
                html = html + '<div class="card-body"> <h5 class="card-title">' + obj.login + '</h5></div></div></div>'
                console.log(obj.login)



            }

            )
            $('#maindiv').html(html);
        }

        )

    }

    )
}

)

function filterItems(arr, query) {
    return arr.filter(function (el) {
       return el.login.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
}