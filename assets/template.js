function generatedHtml(dataInfo) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .container {
            margin-left: auto;
            margin-right: auto;
            width: 980px;
            position: relative;
        }

        .jumbotron {
            width: 100%;
            height: 20vh;
            border-radius: 10px;
            background-color: lightgray;
            position: absolute;
            z-index: 2;
            margin-top: 20px;
        }

        h2,
        h3 {
            text-align: center;
        }

        .footer {
            width: 100%;
            height: 20vh;
            border-radius: 10px;
            left: 0;
            bottom: 0;
            position: fixed;
            text-align: center;
            background-color:  ${dataInfo.color};
        }

        .header {
            width: 100%;
            height: 20vh;
            border-radius: 10px;
            left: 0;
            top: 0;
            position: fixed;
            text-align: center;
            background-color:  ${dataInfo.color};
            z-index: 1;
        }

        .column {
            float: left;
            width: 25%;
            padding: 20px;
            margin-bottom: 20px;
        }

        /* Remove extra left and right margins, due to padding */
        .row {
            float: right;
            margin: 125px;
        }


        /* Clear floats after the columns */
        .row:after {
            content: "";
            display: table;
            clear: both;
            margin: 20px;
        }

        /* Responsive columns */
        @media screen and (max-width: 100px) {
            .column {
                width: 100%;
                display: block;
                margin-bottom: 20px;
            }
        }

        /* Style the counter cards */
        .card {
            margin: 80ppx;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            text-align: center;
            background-color: #f1f1f1;
        }
    
    </style>
</head>

<body>

    <div class="container">
        <div class="header">

        </div>
        <div class="jumbotron">
            <h2>
                ${dataInfo.name}
            </h2>
            <h3>
               ${dataInfo.location}    Learning Full Stack Developement
            </h3>


        </div>
        <br>
        
        <div class="img">
        <img src="${dataInfo.image}" alt="profile pic">
        </div>
    

        <div class="row">
            <div class="column">
                <div class="card">
                    <h3>Public Repos</h3>
                    <p>${dataInfo.publicRepos}</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <h3>Followers</h3>
                    <p>${dataInfo.followers}</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <h3>Following</h3>
                    <p>${dataInfo.following}</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <h3>Stars</h3>
                    <p>${dataInfo.stars}</p>
                </div>
            </div>
        </div>
  




        <div class="footer"></div>

    </div>

    
    </body>
    
    </html>

    `
}

module.exports = generatedHtml 