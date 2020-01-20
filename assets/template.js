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
                background-color: ${dataInfo.color};
                z-index: 1;
    
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
                    Current a Trilogy Education Student
                </h3>
    
    
            </div>
    
    
            <div class="footer"></div>
    
        </div>
    
    </body>
    
    </html>

    `
}

module.exports = generatedHtml 