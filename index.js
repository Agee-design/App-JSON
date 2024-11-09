import express from "express";
import bodyParser from "body-parser";

const app= express();
const port= 3000;

const recipeJSON =
        '[{"id":"001","type":"Accessory","name":"Thermal","Details":{"season1":{"WH_OnH":"4000","STR_OnH":"1000","TOT_STK":"3000","TOT_SAL":"79","TOT_AMUT":"457894","YEAR":"2023"},"season2":{"WH_OnH":"4000","STR_OnH":"1000","TOT_STK":"3000","TOT_SAL":"79","TOT_AMUT":"457894","YEAR":"2022"}}},{"id":"002","type":"cloth","name":"Jacket","Details":{"season1":{"WH_OnH":"4000","STR_OnH":"1000","TOT_STK":"3000","TOT_SAL":"79","TOT_AMUT":"457894","YEAR":"2024"},"season2":{"WH_OnH":"4000","STR_OnH":"1000","TOT_STK":"3000","TOT_SAL":"79","TOT_AMUT":"457894","YEAR":"2023"}}},{"id":"003","type":"cloth","name":"Overcoat","Details":{"season1":{"WH_OnH":"4000","STR_OnH":"1000","TOT_STK":"3000","TOT_SAL":"79","TOT_AMUT":"457894","YEAR":"2024"},"season2":{"WH_OnH":"6000","STR_OnH":"3000","TOT_STK":"7000","TOT_SAL":"79","TOT_AMUT":"857894","YEAR":"2023"}}},{"id":"004","type":"cloth","name":"Vest","Details":{"season1":{"WH_OnH":"3000","STR_OnH":"2000","TOT_STK":"5000","TOT_SAL":"79","TOT_AMUT":"757894","YEAR":"2024"},"season2":{"WH_OnH":"9000","STR_OnH":"6500","TOT_STK":"11000","TOT_SAL":"79","TOT_AMUT":"577894","YEAR":"2023"}}},{"id":"005","type":"cloth","name":"Cardican","Details":{"season1":{"WH_OnH":"5000","STR_OnH":"3500","TOT_STK":"3000","TOT_SAL":"400","TOT_AMUT":"677894","YEAR":"2024"},"season2":{"WH_OnH":"4500","STR_OnH":"4200","TOT_STK":"3000","TOT_SAL":"654","TOT_AMUT":"357894","YEAR":"2023"}}},{"id":"006","type":"cloth","name":"Pullover","Details":{"season1":{"WH_OnH":"7000","STR_OnH":"2000","TOT_STK":"1000","TOT_SAL":"550","TOT_AMUT":"447894","YEAR":"2024"},"season2":{"WH_OnH":"3000","STR_OnH":"2000","TOT_STK":"3000","TOT_SAL":"79","TOT_AMUT":"337894","YEAR":"2023"}}},{"id":"007","type":"cloth","name":"Blazer","Details":{"season1":{"WH_OnH":"4000","STR_OnH":"1000","TOT_STK":"3000","TOT_SAL":"79","TOT_AMUT":"457894","YEAR":"2024"},"season2":{"WH_OnH":"4000","STR_OnH":"1000","TOT_STK":"3000","TOT_SAL":"660","TOT_AMUT":"227894","YEAR":"2023"}}},{"id":"008","type":"cloth","name":"SwitShirt","Details":{"season1":{"WH_OnH":"4000","STR_OnH":"1000","TOT_STK":"3000","TOT_SAL":"79","TOT_AMUT":"457894","YEAR":"2024"},"season2":{"WH_OnH":"4000","STR_OnH":"1000","TOT_STK":"3000","TOT_SAL":"660","TOT_AMUT":"227894","YEAR":"2023"}}}]';
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;

app.get("/", (req, res) => {
    res.render("index.ejs", { recipe: data });
});

app.post("/recipe", (req, res) => {
    switch (req.body.choice) {
        case "Thermal":
            data = JSON.parse(recipeJSON)[0];
            break;
        case "Jacket":
            data = JSON.parse(recipeJSON)[1];
            break;
        case "Overcoat":
            data = JSON.parse(recipeJSON)[2];
            break;
        case "Vest":
            data = JSON.parse(recipeJSON)[3];
            break;
        case "Cardican":
            data = JSON.parse(recipeJSON)[4];
            break;
        case "Pullover":
            data = JSON.parse(recipeJSON)[5];
            break;
        case "Blazer":
            data = JSON.parse(recipeJSON)[6];
            break;
        case "SwitShirt":
            data = JSON.parse(recipeJSON)[7];
            break;
        default:
            break;
    }
        res.redirect("/");
    
});

app.listen(port, () => {
    console.log(`Server Running on port ${port}.`);
});