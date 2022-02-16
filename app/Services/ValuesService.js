import { ProxyState } from "../AppState.js";
import { ArmoredArachasae } from "../Models/ArmoredArachasae.js";
import { Bruxa } from "../Models/Bruxa";
import { Chort } from "../Models/Chort";
import { Drowner } from "../Models/Drowner";
import { Ekimmara } from "../Models/Ekimmara";
import { Foglet } from "../Models/Foglet";
import { Godling } from "../Models/Godling";
import { Hag } from "../Models/Hag";
import { IceGiant } from "../Models/IceGiant";
import { Jenny } from "../Models/JennyOfTheWoods.js";
import { Katakan } from "../Models/Katakan.js";
import { Leshen } from "../Models/Leshen.js";
import { Morvudd } from "../Models/Morvudd.js";
import { Noonwraith } from "../Models/Noonwraith.js";
import { Ogrid } from "../Models/Ogrid.js";
import { Pixie } from "../Models/Pixie.js";
import { Qualupalik } from "../Models/Qualupalik.js";
import { RockTroll } from "../Models/RockTroll.js";
import { SilverBasalisk } from "../Models/SilverBasalisk.js";
import { Tatsu } from "../Models/Tatsu.js";
import { Umbra } from "../Models/Umbra.js";
import { VenomousArachasae } from "../Models/VenomousArachasae.js";
import { Werewolves } from "../Models/Werewolves.js";
import { Xana } from "../Models/Xana.js";
import { Yeti } from "../Models/Yeti.js";
import { Zilant } from "../Models/Zilant.js";


let monster1 = new ArmoredArachasae('insectoid', 'Charlotte', 'place', false, false);
let monster2 = new Bruxa('vampire', 'Brittany', 'place', false, true);
let monster3 = new Chort('relict', 'Charlie', 'place', false, false);
let monster4 = new Drowner('necrophage', 'Davie', 'place', false, true);
let monster5 = new Ekimmara('vampire', 'Ernie', 'place', false, false);
let monster6 = new Foglet('necrophage', 'Fergison', 'place', false, false);
let monster7 = new Godling('relicts', 'Gerald', 'place', true, true);
let monster8 = new Hag('necrophage', 'Helen', 'place', true, true);
let monster9 = new IceGiant('ogrid', 'Ivan', 'place', false, true);
let monster10 = new Jenny('specter', 'Jennifer', 'place', true, true);
let monster11 = new Katakan('vampire', 'Kerry', 'place', false, false);
let monster12 = new Leshen('relict', 'Lorem', 'place', true, false);
let monster13 = new Morvudd('relict', 'Marty', 'place', false, false);
let monster14 = new Noonwraith('specter', 'Nora', 'place', true, true);
let monster15 = new Ogrid('ogrid', 'Olive', 'place', false, true);
let monster16 = new Pixie('elementa', 'Penny', 'place', true, true);
let monster17 = new Qualupalik('ogrid', 'Qira', 'place', false, false);
let monster18 = new RockTroll('ogrid', 'Rory', 'place', false, false);
let monster19 = new SilverBasalisk('draconid', 'Silvester', 'place', false, false);
let monster20 = new Tatsu('dracinoid', 'name', 'Titan', true, false);
let monster21 = new Umbra('specter', 'name', 'Ursula', false, true);
let monster22 = new VenomousArachasae('insectoid', 'Vanessa', 'place', false, false);
let monster23 = new Werewolves('cursed', 'Walter', 'place', false, true);
let monster24 = new Xana('specter', 'Xena', 'place', true, true);
let monster25 = new Yeti('ogrid', 'Yosef', 'place', false, false);
let monster26 = new Zilant('dracinoid', 'Zane', 'place', false, false);

// let monsters = [new monster(name = "",)]
//Note TEMP EXAMPLE THIS WILL MOVE TO THE PROXYSTATE AT A LATER DATE

let allMonsters = [monster1, monster2, monster3, monster4, monster5, monster6, monster7, monster8, monster9, monster10, monster11, monster12, monster13, monster14, monster15, monster16, monster17, monster18, monster19, monster20, monster21, monster22, monster23, monster24, monster25, monster26]
class ValuesService {

  //Dont DO THIS OTHER THAN TODAY, 2/14/2022
  sayHelloToAnimals() {
    allAnimals.forEach(a => console.log(a))
    allAnimals.forEach(a => a.hello){

    });
  }
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }
}

export const valuesService = new ValuesService();

