import { getData } from "./service.mjs";
import Cauldron from "./Cauldron.mjs"
import Ingredients from "./Ingredients.mjs";

const execute = async () => {
    try
    {
        const data = await getData();

        //creamos los ingredientes
        const ingredients = Ingredients.load(data);

        const cauldron = new Cauldron(ingredients);

        //Creamos pociones
        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        showPotion(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        showPotion(potion2);

        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        showPotion(potion3);

        const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");
        showPotion(potion4);
    }
    catch (error){
        console.error("Error in execute:", error.message);
    }

};


function showPotion(potion) {
    console.log(`${potion.name}`);

    console.log(`Value: ${potion.value}`);
    console.log(`Weight: ${potion.weight}`);

    console.log(`Time: ${potion.time}`);
    console.log("--------------");
}



execute();

///SHOWINGREDIENTS() TAREAAAAAAAAA