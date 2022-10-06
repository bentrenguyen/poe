var substring_json = {"players cannot regenerate life, mana or energy shield": "reg", "cannot leech from monsters": "eec", "players are cursed with temporal chains": "emp", "monsters are hexproof": "hex", "players have x% reduced effect of non-curse auras from skills": "non", "players are cursed with enfeeble": "enf", "monsters deal x% extra physical damage as cold": "col", "monsters deal x% extra physical damage as lightning": "htn", "area has patches of shocked ground which increase damage taken by x%": "sho", "all monster damage from hits always ignites": "all", "monsters cannot be stunned": "stu", "x% increased monster movement speed x% increased monster attack speed x% increased monster cast speed": "mov", "monsters have a x% chance to cause elemental ailments on hit": "cau", "monsters' action speed cannot be modified to below base value monsters cannot be taunted": "ied", "area has patches of consecrated ground": "nse", "players cannot inflict exposure": "fli", "+x% monster physical damage reduction": "uct", "+x% monster chaos resistance +x% monster elemental resistance": "hao", "players have x% reduced chance to block players have x% less armour": "loc", "players have -x% to amount of suppressed spell damage prevented monsters have x% increased accuracy rating": "rev", "monsters take x% reduced extra damage from critical strikes": "kes", "buffs on players expire x% faster": "buf", "players gain x% reduced flask charges": "fla", "players have x% less cooldown recovery rate": "coo", "players are cursed with vulnerability": "vul", "players are cursed with elemental weakness": "wea", "monsters' skills chain 2 additional times": "tim", "monsters fire 2 additional projectiles": "roj", "monsters have a x% chance to avoid poison, impale, and bleeding": "on,", "monsters maim on hit with attacks": "mai", "monsters hinder on hit with spells": "hin", "monsters steal power, frenzy and endurance charges on hit": "tea", "area has patches of burning ground": "bur", "area has patches of chilled ground": "chi", "area has patches of desecrated ground": "des", "area is inhabited by abominations": "abo", "area is inhabited by animals": "ani", "area is inhabited by demons": "dem", "area is inhabited by ghosts": "gho", "area is inhabited by goatmen": "goa", "area is inhabited by humanoids": "hum", "area is inhabited by cultists of kitava": "cul", "area is inhabited by lunaris fanatics": "lun", "area is inhabited by ranged monsters": "ang", "area is inhabited by skeletons": "ske", "area is inhabited by solaris fanatics": "sol", "area is inhabited by sea witches and their spawn": "sea", "area is inhabited by undead": "ead", "area has increased monster variety": "var", "area contains many totems": "any", "rare monsters each have a nemesis mod x% more rare monsters": "rar", "area contains two unique bosses": "two", "magic monster packs each have a bloodline mod x% more magic monsters": "agi", "slaying enemies close together has a x% chance to attract monsters from beyond": "sla", "map boss is surrounded by tormented spirits": "urr", "map has a vaal side area": "sid", "does not consume sextant uses": "doe", "map has an additional random modifier from kirac's crafting bench": "ndo", "delirium reward type: players in area are 20% delirious": "del", "area contains an additional smuggler's cache": "smu", "areas contain ritual altars": "itu", "area contains 3 additional harbingers": "arb", "area contains an additional legion encounter": "leg", "area is haunted by 5 additional tormented spirits": "hau", "area contains the sacred grove": "sac", "area contains 2 additional abysses": "aby", "area contains 3 additional breaches": "bre", "area contains 3 additional essences": "sen", "area contains 4 additional strongboxes": "tro", "area contains metamorph monsters": "met", "contains an additional expedition encounter": "xpe", "area contains 10 additional guarded vaal vessels": "gua", "area contains 5 additional shrines": "shr", "area is influenced by the shaper": "sha", "area is influenced by the elder": "lde", "monsters reflect x% of elemental damage": "f el", "monsters reflect x% of physical damage": "of p", "-x% maximum player resistances": "% ma", "players have x% less recovery rate of life and energy shield": "ss r", "unique bosses are possessed": "re p", "monsters have x% increased critical strike chance": "d cr", "unique boss deals x% increased damage": "ss d", "monsters poison on hit": "rs p", "monsters have x% chance to impale with attacks": "to i", "monsters gain x% of maximum life as extra maximum energy shield": "of m", "unique boss has x% increased life unique boss has x% increased area of effect": "ss h", "x% more monster life": "er l", "x% less effect of curses on monsters": "ss e", "monsters have +x% chance to suppress spell damage": "ve +", "monsters have x% chance to avoid elemental ailments": "id e", "players have x% less accuracy rating": "s ac", "monsters gain an endurance charge on hit": "n an", "monsters gain a frenzy charge on hit": " a f", "monsters gain a power charge on hit": " a p", "monsters blind on hit": "rs b", "area is inhabited by 2 additional rogue exiles": "by 2", "area contains a blight encounter": "blig", "area is inhabited by 10 additional rogue exiles": "by 1", "monsters deal x% extra physical damage as fire": " as f", "players have x% less area of effect": "ss are", "x% increased monster damage": "d monster d", "monsters have x% increased area of effect": "e \\d+% increased ar"};

var curr_display = "mapmod";

function change_display(new_display) {
  var to_display = document.getElementById(new_display);
  var to_hide = document.getElementById(curr_display)
  to_hide.style.display = 'none';
  to_display.style.display = 'block';
  curr_display = new_display;
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('.mapmods');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    substring = substring_json[ev.target.textContent.toLowerCase()]
    var substringbox = "substringbox" + curr_display;
    if (document.getElementById(substringbox).textContent == '') {
      document.getElementById(substringbox).textContent = '"!' + substring + '"';
    }
    else if (ev.target.classList.contains('checked')) {
      if (document.getElementById(substringbox).textContent.includes('|'+substring)) {
        document.getElementById(substringbox).textContent = document.getElementById(substringbox).textContent.replace('|' + substring, '');
      }
      else if (document.getElementById(substringbox).textContent.includes(substring+'|')) {
        document.getElementById(substringbox).textContent = document.getElementById(substringbox).textContent.replace(substring+ '|', '');
      }
      else {
        document.getElementById(substringbox).textContent = '';
      }
    } else {
      document.getElementById(substringbox).textContent = document.getElementById(substringbox).textContent.slice(0, -1)+ '|' + substring + '"';
    }
    ev.target.classList.toggle('checked');
    document.getElementById(substringbox).classList.remove("copied");
    document.getElementById("copybutton").textContent = "Copy"
    update_length();
  }
}, false);

function reset() {
  // applies to all
  var substringbox = "substringbox" + curr_display;
  var copybutton = "copybutton" + curr_display;

  document.getElementById(substringbox).textContent = '';
  document.getElementById(substringbox).classList.remove("copied");
  document.getElementById(copybutton).textContent = "Copy";
  update_length(curr_display);
  
  // only mapmod
  if (curr_display == "mapmod") {
    document.getElementById("quantselect").value = "Select";
    document.getElementById("packsizeselect").value = "Select";

    document.querySelectorAll('.mapmod').forEach(function(element) {
      element.classList.remove('checked');
    })
  }

  // TODO: only flasks


  
}

function copy() {
  var substringbox = "substringbox" + curr_display;
  var copybutton = "copybutton" + curr_display;

  var copyText = document.getElementById(substringbox).textContent;
  document.getElementById(substringbox).classList.add("copied");
  document.getElementById(copybutton).textContent = "Copied!"
  navigator.clipboard.writeText(copyText);
}

function searchbox() {
  var searchbox = "searchbox" + curr_display;
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById(searchbox);
  filter = input.value.toUpperCase();
  ul = document.getElementById("mapmod_ul");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i]
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function select_dropdown(select_type) {
  var substringbox = "substringbox" + curr_display;
  var copybutton = "copybutton" + curr_display;

  var select_list, regex, selected_value;
  if (select_type == "quant") {
    select_list = document.getElementById("quantselect");
    regex = {
      60: "Q.*([6-9]\\d|\\d{3})",
      70: "Q.*([7-9]\\d|\\d{3})",
      80: "Q.*([89]\\d|\\d{3})",
      90: "Q.*(9\\d|\\d{3})",
      100: "Q.*(\\d{3})",
      "Select": ""
    }
  } else if (select_type == "packsize") {
    select_list = document.getElementById("packsizeselect");
    regex = {
      20: "S.*([2-9]\\d)", 
      30: "S.*([3-9]\\d)", 
      40: "S.*([4-9]\\d)", 
      50: "S.*([5-9]\\d)", 
      60: "S.*([6-9]\\d)",
      "Select": ""
    }
  }
  selected_value = select_list.options[select_list.selectedIndex].text;
  
  for (var key in regex) {
    var elem = regex[key]
    if (key == "Select") {
      break;
    }
    var to_break = false;
    if (document.getElementById(substringbox).textContent.indexOf("|"+elem) !== -1) {
      document.getElementById(substringbox).textContent = document.getElementById(substringbox).textContent.replace('|'+elem, '');
      to_break = true;
    } else if (document.getElementById(substringbox).textContent.indexOf(elem+"|") !== -1) {
      document.getElementById(substringbox).textContent = document.getElementById(substringbox).textContent.replace(elem+"|", '');
      to_break = true;
    } else if (document.getElementById(substringbox).textContent.indexOf(elem) !== -1) {
      document.getElementById(substringbox).textContent = document.getElementById(substringbox).textContent.replace(elem, '');
      to_break = true;
    }
    if (document.getElementById(substringbox).textContent == '""') {
      document.getElementById(substringbox).textContent = '';
    }
    if (to_break) {
      break;
    }
  }
  if (selected_value != "Select") {
    if (document.getElementById(substringbox).textContent == "") {
      document.getElementById(substringbox).textContent += '"' + regex[selected_value] + '"'
    } else {
      document.getElementById(substringbox).textContent = document.getElementById(substringbox).textContent.slice(0, -1) +'|' + regex[selected_value] + '"'
    }
  }
  document.getElementById(substringbox).classList.remove("copied");
  document.getElementById(copybutton).textContent = "Copy"
  update_length();
}

/* TODO: length tracker + error on 50+ */
function update_length() {
  var substringbox = "substringbox" + curr_display;
  var lengthtracker = "lengthtracker" + curr_display;
  var lengthbox =   "lengthbox" + curr_display;
  var lengthtrackererror = "lengthtrackererror" + curr_display;

  var substring_length = document.getElementById(substringbox).textContent.length;
  document.getElementById(lengthtracker).textContent = substring_length;
  if (substring_length > 50) {
    document.getElementById(lengthbox).classList.add("length_error");
    document.getElementById(lengthtrackererror).textContent = " - Error: string is too long";
  } else {
    document.getElementById(lengthbox).classList.remove("length_error");
    document.getElementById(lengthtrackererror).textContent = "";
  }
}


// GEMS START

var className;
var gems = [];

/* TODO:  */
function decode() {
  var b64Data = document.getElementById('test').value;
  var strData = atob(b64Data);
  var charData = Array.from(strData, x => x.charCodeAt(0));
  var binData = new Uint8Array(charData);
  var data = pako.inflate(binData);
  var decoded_text = String.fromCharCode.apply(null, new Uint16Array(data));

  parser = new DOMParser();
  xml = parser.parseFromString(decoded_text, "text/xml");
  if (xml.getElementsByTagName("Build")[0] == null) {
    document.getElementById("gemerror").textContent = "Error: input is not a PoB code";
    return;
  } else {
    document.getElementById("gemerror").textContent = "";
  }
  className = xml.getElementsByTagName("Build")[0].getAttribute("className");
  var xml_gems = xml.getElementsByTagName("Gem");
  for (i = 0; i < xml_gems.length; i++) {
    gem_name = xml_gems[i].getAttribute("nameSpec");
    var skillId = xml_gems[i].getAttribute("skillId");
    if (skillId.includes('Support')) {
      gem_name += ' support'
    }
    gems.push(gem_name.toLowerCase().replace('awakened ', '').replace('vaal ', ''));

  }
  document.getElementById('allgems').classList.toggle('hide_allgems');
  document.getElementById('className').textContent = className;
  var red_gems = [], blue_gems = [], green_gems = [];
  for (i = 0; i <gems.length; i++) {
    gem = gems[i]
    new_gem = document.createElement('div');
    new_gem.className = "gemitem";
    if (gem in red_gems_json) {
      red_gems.push(gem);
    } else if (gem in green_gems_json) {
      green_gems.push(gem);
    } else if (gem in blue_gems_json) {
      blue_gems.push(gem);
    }
  }

  document.getElementById('redgemnames').textContent = red_gems;
  document.getElementById('greengemnames').textContent = green_gems;
  document.getElementById('bluegemnames').textContent = blue_gems;
  
  gem_to_substring(red_gems, red_gems_json, "redgemssubstring");
  gem_to_substring(green_gems, green_gems_json, "greengemssubstring");
  gem_to_substring(blue_gems, blue_gems_json, "bluegemssubstring");
  
}

function gem_to_substring(color, color_json, id) {
  document.getElementById(id).textContent = '"';
  for (gem of color) {
    document.getElementById(id).textContent += color_json[gem] + "|";
  }
  document.getElementById(id).textContent = document.getElementById(id).textContent.slice(0, -1) + '"';
}

function copygem(color) {
  var colors = ['red', 'green', 'blue']
  var colorgemssubstring = color + "gemssubstring";
  var copygembutton = color + "copygem";
  var copyText = document.getElementById(colorgemssubstring).textContent;
  document.getElementById(colorgemssubstring).classList.add("copiedgem");
  document.getElementById(copygembutton).textContent = "Copied!"
  for (listcolor of colors) {
    if (listcolor != color) {
      var listcolorgemssubstring = listcolor + "gemssubstring";
      var listcopygembutton = listcolor + "copygem";

      document.getElementById(listcolorgemssubstring).classList.remove("copiedgem");
      document.getElementById(listcopygembutton).textContent = "Copy";
    
    }
  }
  navigator.clipboard.writeText(copyText);
}


function decode2() {
  var b64Data = document.getElementById('gemcampaignb64').value;
  var strData = atob(b64Data);
  var charData = Array.from(strData, x => x.charCodeAt(0));
  var binData = new Uint8Array(charData);
  var data = pako.inflate(binData);
  var decoded_text = String.fromCharCode.apply(null, new Uint16Array(data));

  parser = new DOMParser();
  xml = parser.parseFromString(decoded_text, "text/xml");
  className = xml.getElementsByTagName("Build")[0].getAttribute("className");
  var xml_gems = xml.getElementsByTagName("Gem");
  for (i = 0; i < xml_gems.length; i++) {
    gem_name = xml_gems[i].getAttribute("nameSpec");
    var skillId = xml_gems[i].getAttribute("skillId");
    if (skillId.includes('Support')) {
      gem_name += ' support'
    }
    gems.push(gem_name.toLowerCase().replace('awakened ', '').replace('vaal ', ''));

  }
  document.getElementById('className').textContent = className;
  for (i = 0; i <gems.length-1; i++) {
    gem = gems[i]
    new_gem = document.createElement('div');
    new_gem.className = "gemitem";
    if (gem_to_quest[gem][0] == "none") {
      /*gem_classes_act = "none";*/
      new_gem.textContent = gem;
      document.getElementById("No Act").appendChild(new_gem);
    } else if (gem_to_quest[gem][0]['classes'].includes(className) || gem_to_quest[gem][0]['classes'].includes('All, Classes')) {
      new_gem.textContent = gem;
      document.getElementById(gem_to_quest[gem][0]['act']).appendChild(new_gem);
    } else if (document.getElementById("siosa_check").classList.contains("siosa_checked") && siosa_gems.includes(gem)) {
      new_gem.textContent = gem + "*";
      document.getElementById('Act 3').appendChild(new_gem);
    } else {
      new_gem.textContent = gem;
      document.getElementById("No Act").appendChild(new_gem);
      /*gem_classes_act = gem_to_quest[gem][0]['classes'] + gem_to_quest[gem][0]['act']*/
    }
    /*
    new_gem.textContent = gem + " - " + gem_classes_act;
    document.getElementById("gemquestlocation").appendChild(new_gem);
    */
  }
}

function siosa_checked() {
  document.getElementById("siosa_check").classList.toggle("siosa_checked");
}

function gemsearchbox() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("gemsearchbox");
  filter = input.value.toUpperCase();
  ul = document.getElementById("gemboxgems");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i]
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
/*
import gemJson from "../Projects/PoEgems_Sentinel_2022-07-18.json" assert {type:'json'};
var gemDict = {};
gemJson.forEach(gemJsonExtract);
function gemJsonExtract(gem) {
  gemDict[gem.name] = [gem.level, gem.quests];
}


var gemlist = document.querySelector('.gembox');
gemlist.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    gemInfo = gem_to_quest[ev.target.textContent.toLowerCase()]
    if (document.getElementById("substringbox").textContent == '') {
      document.getElementById("substringbox").textContent = '"!' + substring + '"';
    }
    else if (ev.target.classList.contains('checked')) {
      if (document.getElementById("substringbox").textContent.includes('|'+substring)) {
        document.getElementById("substringbox").textContent = document.getElementById("substringbox").textContent.replace('|' + substring, '');
      }
      else if (document.getElementById("substringbox").textContent.includes(substring+'|')) {
        document.getElementById("substringbox").textContent = document.getElementById("substringbox").textContent.replace(substring+ '|', '');
      }
      else {
        document.getElementById("substringbox").textContent = '';
      }
    } else {
      document.getElementById("substringbox").textContent = document.getElementById("substringbox").textContent.slice(0, -1)+ '|' + substring + '"';
    }
    ev.target.classList.toggle('checked');
    document.getElementById("substringbox").classList.remove("copied");
    document.getElementById("copybutton").textContent = "Copy"
    update_length();
  }
}, false);
*/


/*
*/
var siosa_gems = ['absolution',
'added cold damage support',
'added fire damage support',
'added lightning damage support',
'additional accuracy support',
'advanced traps support',
'ancestral call support',
'ancestral cry',
'ancestral protector',
'ancestral warchief',
'anger',
'animate guardian',
'animate weapon',
'arc',
'arcane cloak',
'arcane surge support',
'archmage support',
'arctic armour',
'armageddon brand',
'arrogance support',
'arrow nova support',
'artillery ballista',
'assassins mark',
'ball lightning',
'ballista totem support',
'bane',
'barrage',
'battlemages cry',
'bear trap',
'blade blast',
'blade flurry',
'blade trap',
'blade vortex',
'bladefall',
'bladestorm',
'blasphemy support',
'blast rain',
'blastchain mine support',
'blazing salvo',
'blight',
'blind support',
'blink arrow',
'blood and sand',
'blood rage',
'bloodlust support',
'bloodthirst support',
'bodyswap',
'bone offering',
'boneshatter',
'brand recall',
'burning arrow',
'burning damage support',
'caustic arrow',
'chain hook',
'chance to bleed support',
'chance to flee support',
'chance to poison support',
'charged dash',
'charged mines support',
'charged traps support',
'clarity',
'cleave',
'close combat support',
'cobra lash',
'cold penetration support',
'cold snap',
'cold to fire support',
'combustion support',
'concentrated effect support',
'conductivity',
'consecrated path',
'contagion',
'controlled destruction support',
'conversion trap',
'convocation',
'corrupting fever',
'crackling lance',
'creeping frost',
'cremation',
'critical strike affliction support',
'cruelty support',
'culling strike support',
'cyclone',
'damage on full life support',
'dark pact',
'dash',
'deadly ailments support',
'decoy totem',
'defiance banner',
'desecrate',
'despair',
'determination',
'detonate dead',
'devouring totem',
'discharge',
'discipline',
'divine ire',
'dominating blow',
'double strike',
'dread banner',
'dual strike',
'earthbreaker support',
'earthquake',
'earthshatter',
'efficacy support',
'elemental army support',
'elemental damage with attacks support',
'elemental focus support',
'elemental hit',
'elemental proliferation support',
'endurance charge on melee stun support',
'enduring cry',
'energy blade',
'energy leech support',
'ensnaring arrow',
'essence drain',
'ethereal knives',
'explosive arrow',
'explosive concoction',
'explosive trap',
'exsanguinate',
'eye of winter',
'faster attacks support',
'faster casting support',
'faster projectiles support',
'feeding frenzy support',
'fire penetration support',
'fire trap',
'fireball',
'firestorm',
'flame dash',
'flame surge',
'flame wall',
'flameblast',
'flamethrower trap',
'flammability',
'flesh and stone',
'flesh offering',
'flicker strike',
'focused ballista support',
'forbidden rite',
'fork support',
'fortify support',
'freezing pulse',
'frenzy',
'frost blades',
'frost bomb',
'frost wall',
'frostbite',
'frostblink',
'frostbolt',
'galvanic arrow',
'generals cry',
'generosity support',
'glacial cascade',
'glacial hammer',
'grace',
'ground slam',
'haste',
'hatred',
'heavy strike',
'herald of agony',
'herald of ash',
'herald of ice',
'herald of purity',
'herald of thunder',
'hexblast',
'high-impact mine support',
'holy flame totem',
'hypothermia support',
'ice bite support',
'ice crash',
'ice nova',
'ice shot',
'ice spear',
'ice trap',
'icicle mine',
'impale support',
'impending doom support',
'incinerate',
'increased critical damage support',
'increased critical strikes support',
'increased duration support',
'infernal blow',
'infernal cry',
'infernal legion support',
'infused channelling support',
'innervate support',
'inspiration support',
'intensify support',
'intimidating cry',
'iron grip support',
'iron will support',
'item rarity support',
'kinetic blast',
'kinetic bolt',
'knockback support',
'lacerate',
'lancing steel',
'leap slam',
'less duration support',
'lesser multiple projectiles support',
'life gain on hit support',
'life leech support',
'lifetap support',
'lightning arrow',
'lightning penetration support',
'lightning spire trap',
'lightning strike',
'lightning tendrils',
'lightning trap',
'lightning warp',
'maim support',
'malevolence',
'mana leech support',
'manabond',
'meat shield support',
'melee physical damage support',
'melee splash support',
'minion damage support',
'minion life support',
'minion speed support',
'mirage archer support',
'molten shell',
'molten strike',
'multiple traps support',
'nightblade support',
'onslaught support',
'orb of storms',
'penance brand',
'perforate',
'pestilent strike',
'petrified blood',
'physical to lightning support',
'pierce support',
'pinpoint support',
'plague bearer',
'poachers mark',
'point blank support',
'poisonous concoction',
'power charge on critical support',
'power siphon',
'precision',
'predator support',
'pride',
'pulverise support',
'puncture',
'punishment',
'purifying flame',
'purity of elements',
'purity of fire',
'purity of ice',
'purity of lightning',
'pyroclast mine',
'rage support',
'rage vortex',
'rain of arrows',
'raise spectre',
'raise zombie',
'rallying cry',
'reap',
'reave',
'reckoning',
'rejuvenation totem',
'righteous fire',
'riposte',
'ruthless support',
'scorching ray',
'scourge arrow',
'searing bond',
'second wind support',
'seismic cry',
'seismic trap',
'shattering steel',
'shield charge',
'shield crush',
'shock nova',
'shockwave support',
'shockwave totem',
'shrapnel ballista',
'siege ballista',
'siphoning trap',
'slower projectiles support',
'smite',
'smoke mine',
'snipers mark',
'soulrend',
'spark',
'spectral helix',
'spectral throw',
'spell cascade support',
'spell totem support',
'spellslinger',
'spirit offering',
'split arrow',
'splitting steel',
'static strike',
'steelskin',
'storm brand',
'storm burst',
'storm call',
'storm rain',
'stormbind',
'stormblast mine',
'stun support',
'summon holy relic',
'summon phantasm support',
'summon raging spirit',
'summon reaper',
'summon skeletons',
'summon skitterbots',
'sunder',
'sweep',
'swift affliction support',
'swift assembly support',
'swiftbrand support',
'tectonic slam',
'tempest shield',
'tornado shot',
'toxic rain',
'trap and mine damage support',
'trap support',
'trinity support',
'unbound ailments support',
'unearth',
'urgent orders support',
'vengeance',
'venom gyre',
'vicious projectiles support',
'vigilant strike',
'viper strike',
'vitality',
'void manipulation support',
'volatile dead',
'volley support',
'voltaxic burst',
'vortex',
'vulnerability',
'war banner',
'warlords mark',
'wave of conviction',
'whirling blades',
'wild strike',
'winter orb',
'wintertide brand',
'wither',
'withering step',
'wrath',
'zealotry']
var gem_to_quest = {'absolution': [{'classes': 'Marauder, Scion, Templar, Witch',
'act': 'Act 1'}],
'added chaos damage support': ['none'],
'added cold damage support': [{'classes': 'Ranger, Scion, Shadow, Witch',
'act': 'Act 1'}],
'added fire damage support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Templar',
'act': 'Act 1'}],
'added lightning damage support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'additional accuracy support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Templar',
'act': 'Act 1'}],
'advanced traps support': [{'classes': 'Ranger, Scion, Shadow, Witch',
'act': 'Act 3'}],
'ambush': [{'classes': 'Duelist, Ranger, Scion, Shadow', 'act': 'Act 4'}],
'ancestral call support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Templar',
'act': 'Act 1'}],
'ancestral cry': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 2'}],
'ancestral protector': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 1'}],
'ancestral warchief': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'anger': [{'classes': 'Duelist, Marauder, Ranger, Scion, Templar',
'act': 'Act 3'}],
'animate guardian': [{'classes': 'All, Classes', 'act': 'Act 3'}],
'animate weapon': [{'classes': 'Scion, Shadow, Witch', 'act': 'Act 1'}],
'arc': [{'classes': 'Shadow, Templar, Witch', 'act': 'Act 1'}],
'arcane cloak': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 2'}],
'arcane surge support': [{'classes': 'Witch', 'act': 'Act 1'}],
'arcanist brand': [{'classes': 'Scion, Shadow, Templar', 'act': 'Act 4'}],
'archmage support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'arctic armour': [{'classes': 'Duelist, Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 2'}],
'armageddon brand': [{'classes': 'Scion, Templar', 'act': 'Act 3'}],
'arrogance support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'arrow nova support': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'artillery ballista': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow',
'act': 'Act 3'}],
'assassins mark': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 3'}],
'ball lightning': [{'classes': 'Shadow, Templar, Witch', 'act': 'Act 3'}],
'ballista totem support': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'bane': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 3'}],
'barrage': [{'classes': 'Duelist, Ranger, Scion, Shadow', 'act': 'Act 1'}],
'barrage support': [{'classes': 'All, Classes, Duelist, Ranger, Scion, Shadow',
'act': 'Act 4'}],
'battlemages cry': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'bear trap': [{'classes': 'Marauder, Ranger, Scion, Shadow', 'act': 'Act 1'}],
'behead support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 4'}],
'berserk': [{'classes': 'Duelist, Marauder, Scion, Templar', 'act': 'Act 4'}],
'blade blast': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 2'}],
'blade flurry': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 3'}],
'blade trap': [{'classes': 'Ranger, Scion, Shadow', 'act': 'Act 1'}],
'blade vortex': [{'classes': 'Ranger, Scion, Shadow, Witch', 'act': 'Act 1'}],
'bladefall': [{'classes': 'Ranger, Scion, Shadow, Witch', 'act': 'Act 3'}],
'bladestorm': [{'classes': 'Duelist, Marauder, Scion', 'act': 'Act 3'}],
'blasphemy support': [{'classes': 'All, Classes, Templar, Witch',
'act': 'Act 3'}],
'blast rain': [{'classes': 'Duelist, Ranger, Scion', 'act': 'Act 3'}],
'blastchain mine support': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'blazing salvo': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'blight': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 1'}],
'blind support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'blink arrow': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'blood and sand': [{'classes': 'Duelist, Marauder, Ranger, Scion',
'act': 'Act 1'}],
'blood rage': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow',
'act': 'Act 2'}],
'bloodlust support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Templar',
'act': 'Act 2'}],
'bloodthirst support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'bodyswap': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'bone offering': [{'classes': 'Scion, Templar, Witch', 'act': 'Act 1'}],
'bonechill support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 4'}],
'boneshatter': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'brand recall': [{'classes': 'Marauder, Scion, Templar, Witch',
'act': 'Act 2'}],
'brutality support': [{'classes': 'Duelist, Marauder, Scion',
'act': 'Act 4'}],
'burning arrow': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'burning damage support': [{'classes': 'Marauder, Scion, Templar, Witch',
'act': 'Act 3'}],
'cast on critical strike support': [{'classes': 'All, Classes',
'act': 'Act 4'}],
'cast on death support': [{'classes': 'All, Classes', 'act': 'Act 4'}],
'cast on melee kill support': [{'classes': 'All, Classes', 'act': 'Act 4'}],
'cast when damage taken support': [{'classes': 'All, Classes',
'act': 'Act 4'}],
'cast when stunned support': [{'classes': 'All, Classes', 'act': 'Act 4'}],
'cast while channelling support': [{'classes': 'All, Classes',
'act': 'Act 4'}],
'caustic arrow': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'chain hook': [{'classes': 'Duelist, Marauder, Scion', 'act': 'Act 1'}],
'chain support': [{'classes': 'All, Classes', 'act': 'Act 4'}],
'chance to bleed support': [{'classes': 'Duelist', 'act': 'Act 1'}],
'chance to flee support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'chance to poison support': [{'classes': 'Duelist, Ranger, Scion, Shadow, Witch',
'act': 'Act 1'}],
'charged dash': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Templar',
'act': 'Act 3'}],
'charged mines support': [{'classes': 'Scion, Shadow, Witch',
'act': 'Act 3'}],
'charged traps support': [{'classes': 'Scion, Shadow, Witch',
'act': 'Act 3'}],
'clarity': [{'classes': 'All, Classes, Shadow, Templar, Witch',
'act': 'Act 1'}],
'cleave': [{'classes': 'Duelist, Marauder, Ranger, Scion', 'act': 'Act 1'}],
'close combat support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Templar',
'act': 'Act 2'}],
'cluster traps support': [{'classes': 'Ranger, Scion, Shadow, Witch',
'act': 'Act 4'}],
'cobra lash': [{'classes': 'Ranger, Scion, Shadow', 'act': 'Act 1'}],
'cold penetration support': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'cold snap': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 2'}],
'cold to fire support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 2'}],
'combustion support': [{'classes': 'Marauder, Shadow, Templar, Witch',
'act': 'Act 1'}],
'concentrated effect support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 2'}],
'conductivity': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'consecrated path': [{'classes': 'Marauder, Scion, Templar', 'act': 'Act 3'}],
'contagion': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 1'}],
'controlled destruction support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 2'}],
'conversion trap': [{'classes': 'Ranger, Scion, Shadow, Witch',
'act': 'Act 1'}],
'convocation': [{'classes': 'Scion, Templar, Witch', 'act': 'Act 3'}],
'corrupting fever': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 2'}],
'crackling lance': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'creeping frost': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'cremation': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'critical strike affliction support': [{'classes': 'Ranger, Scion, Shadow',
'act': 'Act 3'}],
'cruelty support': [{'classes': 'Duelist, Marauder, Scion, Templar, Witch',
'act': 'Act 2'}],
'culling strike support': [{'classes': 'All, Classes', 'act': 'Act 2'}],
'cyclone': [{'classes': 'Duelist, Marauder, Ranger, Scion, Templar',
'act': 'Act 3'}],
'damage on full life support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 2'}],
'dark pact': [{'classes': 'Scion, Shadow', 'act': 'Act 3'}],
'dash': [{'classes': 'All, Classes, Duelist, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'deadly ailments support': [{'classes': 'Duelist, Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 2'}],
'decay support': [{'classes': 'Scion, Shadow, Witch', 'act': 'Act 4'}],
'decoy totem': [{'classes': 'Duelist, Marauder, Ranger, Scion, Templar',
'act': 'Act 1'}],
'defiance banner': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 2'}],
'desecrate': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 2'}],
'despair': [{'classes': 'Ranger, Scion, Shadow, Witch', 'act': 'Act 3'}],
'destructive link': [{'classes': 'Scion, Shadow, Witch', 'act': 'Act 4'}],
'determination': [{'classes': 'Duelist, Marauder, Templar', 'act': 'Act 3'}],
'detonate dead': [{'classes': 'Ranger, Shadow, Witch', 'act': 'Act 1'}],
'devouring totem': [{'classes': 'Duelist, Marauder, Ranger, Scion, Templar, Witch',
'act': 'Act 1'}],
'discharge': [{'classes': 'All, Classes', 'act': 'Act 3'}],
'discipline': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 3'}],
'divine blessing support': ['none'],
'divine ire': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 3'}],
'dominating blow': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'double strike': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'dread banner': [{'classes': 'Duelist, Marauder, Ranger, Scion, Templar',
'act': 'Act 3'}],
'dual strike': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'earthbreaker support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 1'}],
'earthquake': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'earthshatter': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 1'}],
'efficacy support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'elemental army support': [{'classes': 'Scion, Templar, Witch',
'act': 'Act 3'}],
'elemental damage with attacks support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Templar',
'act': 'Act 2'}],
'elemental focus support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 2'}],
'elemental hit': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'elemental proliferation support': [{'classes': 'Templar', 'act': 'Act 1'}],
'elemental weakness': ['none'],
'endurance charge on melee stun support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 2'}],
'enduring cry': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 1'}],
'energy blade': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'energy leech support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'enfeeble': ['none'],
'ensnaring arrow': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 2'}],
'essence drain': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'eternal blessing support': [{'classes': 'All, Classes, Marauder',
'act': 'Act 4'}],
'ethereal knives': [{'classes': 'Marauder, Shadow, Witch', 'act': 'Act 1'}],
'explosive arrow': [{'classes': 'Duelist, Marauder, Ranger', 'act': 'Act 3'}],
'explosive concoction': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 3'}],
'explosive trap': [{'classes': 'Ranger, Scion, Shadow, Witch',
'act': 'Act 1'}],
'exsanguinate': [{'classes': 'Marauder, Scion, Templar, Witch',
'act': 'Act 1'}],
'eye of winter': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'faster attacks support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Templar',
'act': 'Act 2'}],
'faster casting support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 2'}],
'faster projectiles support': [{'classes': 'Ranger, Scion, Shadow, Witch',
'act': 'Act 3'}],
'feeding frenzy support': [{'classes': 'Scion, Templar, Witch',
'act': 'Act 3'}],
'fire penetration support': [{'classes': 'Marauder, Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'fire trap': [{'classes': 'Ranger, Scion, Shadow, Witch', 'act': 'Act 1'}],
'fireball': [{'classes': 'Marauder, Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'firestorm': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 1'}],
'fist of war support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 4'}],
'flame dash': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 1'}],
'flame link': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 4'}],
'flame surge': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 1'}],
'flame wall': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 1'}],
'flameblast': [{'classes': 'Marauder, Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'flamethrower trap': [{'classes': 'Scion, Shadow, Witch', 'act': 'Act 3'}],
'flammability': [{'classes': 'Marauder, Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'flesh and stone': [{'classes': 'Duelist, Marauder, Scion', 'act': 'Act 2'}],
'flesh offering': [{'classes': 'Scion, Templar, Witch', 'act': 'Act 1'}],
'flicker strike': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'focused ballista support': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 3'}],
'forbidden rite': [{'classes': 'Scion, Shadow, Witch', 'act': 'Act 2'}],
'fork support': [{'classes': 'Duelist, Ranger, Scion, Shadow, Witch',
'act': 'Act 3'}],
'fortify support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Templar',
'act': 'Act 3'}],
'freezing pulse': [{'classes': 'Shadow, Templar, Witch', 'act': 'Act 1'}],
'frenzy': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow',
'act': 'Act 2'}],
'frost blades': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'frost bomb': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 1'}],
'frost shield': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 4'}],
'frost wall': [{'classes': 'Duelist, Templar, Witch', 'act': 'Act 1'}],
'frostbite': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'frostblink': [{'classes': 'All, Classes, Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'frostbolt': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 1'}],
'galvanic arrow': [{'classes': 'Duelist, Ranger, Scion', 'act': 'Act 1'}],
'generals cry': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'generosity support': [{'classes': 'Marauder, Scion, Templar, Witch',
'act': 'Act 3'}],
'glacial cascade': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'glacial hammer': [{'classes': 'Duelist, Marauder, Templar', 'act': 'Act 1'}],
'grace': [{'classes': 'Duelist, Ranger, Shadow', 'act': 'Act 3'}],
'greater multiple projectiles support': [{'classes': 'All, Classes',
'act': 'Act 4'}],
'greater volley support': [{'classes': 'All, Classes, Duelist, Ranger, Scion, Shadow',
'act': 'Act 4'}],
'ground slam': [{'classes': 'Duelist, Marauder, Templar', 'act': 'Act 1'}],
'haste': [{'classes': 'Duelist, Ranger, Scion, Shadow', 'act': 'Act 3'}],
'hatred': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Witch',
'act': 'Act 3'}],
'heavy strike': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 1'}],
'herald of agony': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 2'}],
'herald of ash': [{'classes': 'All, Classes', 'act': 'Act 2'}],
'herald of ice': [{'classes': 'All, Classes', 'act': 'Act 2'}],
'herald of purity': [{'classes': 'Duelist, Marauder, Scion, Templar, Witch',
'act': 'Act 2'}],
'herald of thunder': [{'classes': 'All, Classes', 'act': 'Act 2'}],
'hexblast': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 3'}],
'hextouch support': [{'classes': 'All, Classes', 'act': 'Act 4'}],
'high-impact mine support': [{'classes': 'Scion, Shadow, Witch',
'act': 'Act 3'}],
'holy flame totem': [{'classes': 'Marauder, Templar, Witch', 'act': 'Act 1'}],
'hydrosphere': [{'classes': 'Scion, Templar, Witch', 'act': 'Act 4'}],
'hypothermia support': [{'classes': 'Duelist, Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'ice bite support': [{'classes': 'Duelist, Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'ice crash': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Templar',
'act': 'Act 3'}],
'ice nova': [{'classes': 'Scion, Templar, Witch', 'act': 'Act 1'}],
'ice shot': [{'classes': 'Duelist, Ranger, Scion', 'act': 'Act 1'}],
'ice spear': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 1'}],
'ice trap': [{'classes': 'Scion, Shadow, Witch', 'act': 'Act 3'}],
'icicle mine': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 1'}],
'ignite proliferation support': [{'classes': 'Scion, Templar, Witch',
'act': 'Act 4'}],
'immolate support': [{'classes': 'Marauder, Scion, Templar, Witch',
'act': 'Act 4'}],
'immortal call': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 4'}],
'impale support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow',
'act': 'Act 3'}],
'impending doom support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'incinerate': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 1'}],
'increased area of effect support': [{'classes': 'All, Classes',
'act': 'Act 4'}],
'increased critical damage support': [{'classes': 'Ranger, Scion, Shadow, Witch',
'act': 'Act 2'}],
'increased critical strikes support': [{'classes': 'Ranger, Scion, Shadow, Witch',
'act': 'Act 1'}],
'increased duration support': [{'classes': 'Duelist, Marauder, Templar',
'act': 'Act 3'}],
'infernal blow': [{'classes': 'Duelist, Marauder, Ranger, Scion, Templar',
'act': 'Act 1'}],
'infernal cry': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'infernal legion support': [{'classes': 'Templar, Witch', 'act': 'Act 1'}],
'infused channelling support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'innervate support': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'inspiration support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'intensify support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'intimidating cry': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 1'}],
'intuitive link': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 4'}],
'iron grip support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Templar',
'act': 'Act 2'}],
'iron will support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 2'}],
'item rarity support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'kinetic blast': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'kinetic bolt': [{'classes': 'Ranger, Scion, Shadow, Witch', 'act': 'Act 1'}],
'knockback support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 1'}],
'lacerate': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Templar',
'act': 'Act 1'}],
'lancing steel': [{'classes': 'Duelist, Ranger, Scion', 'act': 'Act 3'}],
'leap slam': [{'classes': 'Duelist, Marauder, Ranger, Scion, Templar',
'act': 'Act 1'}],
'less duration support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'lesser multiple projectiles support': [{'classes': 'Duelist, Ranger, Scion, Shadow, Witch',
'act': 'Act 1'}],
'life gain on hit support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 1'}],
'life leech support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Templar',
'act': 'Act 3'}],
'lifetap support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 1'}],
'lightning arrow': [{'classes': 'Duelist, Ranger, Shadow', 'act': 'Act 1'}],
'lightning penetration support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'lightning spire trap': [{'classes': 'Scion, Shadow, Witch', 'act': 'Act 3'}],
'lightning strike': [{'classes': 'Duelist, Ranger, Scion, Shadow, Templar',
'act': 'Act 1'}],
'lightning tendrils': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'lightning trap': [{'classes': 'Ranger, Scion, Shadow, Witch',
'act': 'Act 1'}],
'lightning warp': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'maim support': [{'classes': 'Duelist, Marauder, Ranger, Scion',
'act': 'Act 1'}],
'malevolence': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 3'}],
'mana leech support': [{'classes': 'Duelist, Ranger, Scion, Shadow, Witch',
'act': 'Act 3'}],
'manabond': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 1'}],
'mark on hit support': [{'classes': 'All, Classes', 'act': 'Act 4'}],
'meat shield support': [{'classes': 'Scion, Templar, Witch', 'act': 'Act 3'}],
'melee physical damage support': [{'classes': 'All, Classes, Duelist, Marauder, Scion, Shadow, Templar',
'act': 'Act 2'}],
'melee splash support': [{'classes': 'All, Classes, Duelist, Marauder, Ranger, Scion, Templar',
'act': 'Act 1'}],
'minefield support': [{'classes': 'Scion, Shadow, Witch', 'act': 'Act 4'}],
'minion damage support': [{'classes': 'Scion, Templar, Witch',
'act': 'Act 1'}],
'minion life support': [{'classes': 'Scion, Templar, Witch', 'act': 'Act 2'}],
'minion speed support': [{'classes': 'Scion, Templar, Witch',
'act': 'Act 2'}],
'mirage archer support': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'molten shell': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 1'}],
'molten strike': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 1'}],
'multiple totems support': [{'classes': 'All, Classes, Marauder, Templar, Witch',
'act': 'Act 4'}],
'multiple traps support': [{'classes': 'Ranger, Scion, Shadow, Witch',
'act': 'Act 1'}],
'multistrike support': [{'classes': 'All, Classes', 'act': 'Act 4'}],
'nightblade support': [{'classes': 'Ranger, Scion, Shadow', 'act': 'Act 2'}],
'onslaught support': [{'classes': 'Duelist, Marauder, Ranger, Shadow, Templar',
'act': 'Act 1'}],
'orb of storms': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'penance brand': [{'classes': 'Scion, Templar', 'act': 'Act 3'}],
'perforate': [{'classes': 'Duelist, Marauder, Ranger, Scion',
'act': 'Act 1'}],
'pestilent strike': [{'classes': 'Ranger, Scion, Shadow', 'act': 'Act 3'}],
'petrified blood': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'phase run': [{'classes': 'Duelist, Ranger, Scion, Shadow', 'act': 'Act 4'}],
'physical to lightning support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Templar',
'act': 'Act 2'}],
'pierce support': [{'classes': 'Ranger', 'act': 'Act 1'}],
'pinpoint support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'plague bearer': [{'classes': 'Duelist', 'act': 'Act 2'}],
'poachers mark': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 3'}],
'point blank support': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 2'}],
'poisonous concoction': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'power charge on critical support': [{'classes': 'Ranger, Scion, Shadow, Witch',
'act': 'Act 2'}],
'power siphon': [{'classes': 'Scion, Shadow, Witch', 'act': 'Act 1'}],
'precision': [{'classes': 'All, Classes, Duelist, Ranger, Shadow',
'act': 'Act 1'}],
'predator support': [{'classes': 'Scion, Templar, Witch', 'act': 'Act 2'}],
'pride': [{'classes': 'All, Classes, Duelist, Marauder', 'act': 'Act 3'}],
'protective link': [{'classes': 'Marauder, Scion, Templar', 'act': 'Act 4'}],
'pulverise support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Templar, Witch',
'act': 'Act 3'}],
'puncture': [{'classes': 'Duelist, Ranger, Shadow', 'act': 'Act 1'}],
'punishment': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'purifying flame': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'purity of elements': [{'classes': 'All, Classes, Witch', 'act': 'Act 3'}],
'purity of fire': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'purity of ice': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 3'}],
'purity of lightning': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'pyroclast mine': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'rage support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Templar',
'act': 'Act 2'}],
'rage vortex': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'rain of arrows': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'raise spectre': [{'classes': 'Scion, Templar, Witch', 'act': 'Act 3'}],
'raise zombie': [{'classes': 'Scion, Templar, Witch', 'act': 'Act 1'}],
'rallying cry': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'reap': [{'classes': 'Marauder, Scion, Templar, Witch', 'act': 'Act 3'}],
'reave': [{'classes': 'Duelist, Ranger, Shadow', 'act': 'Act 1'}],
'reckoning': [{'classes': 'Duelist, Marauder, Templar', 'act': 'Act 1'}],
'rejuvenation totem': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 1'}],
'righteous fire': [{'classes': 'Marauder, Scion, Templar, Witch',
'act': 'Act 2'}],
'riposte': [{'classes': 'Duelist, Marauder, Ranger, Shadow', 'act': 'Act 1'}],
'rolling magma': ['none'],
'ruthless support': [{'classes': 'Marauder', 'act': 'Act 1'}],
'scorching ray': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'scourge arrow': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 3'}],
'searing bond': [{'classes': 'Marauder, Templar, Witch', 'act': 'Act 1'}],
'second wind support': [{'classes': 'Duelist, Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'seismic cry': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 2'}],
'seismic trap': [{'classes': 'Scion, Shadow, Witch', 'act': 'Act 3'}],
'shattering steel': [{'classes': 'Duelist, Ranger, Scion', 'act': 'Act 1'}],
'shield charge': [{'classes': 'Duelist, Marauder, Templar', 'act': 'Act 1'}],
'shield crush': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 1'}],
'shock nova': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 3'}],
'shockwave support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 2'}],
'shockwave totem': [{'classes': 'Marauder, Templar, Witch', 'act': 'Act 3'}],
'shrapnel ballista': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'siege ballista': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'sigil of power': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 4'}],
'siphoning trap': [{'classes': 'Scion, Shadow, Witch', 'act': 'Act 1'}],
'slower projectiles support': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 3'}],
'smite': [{'classes': 'Marauder, Scion, Templar', 'act': 'Act 1'}],
'smoke mine': [{'classes': 'Duelist, Marauder, Ranger, Shadow, Witch',
'act': 'Act 1'}],
'snipers mark': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 3'}],
'soul link': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 4'}],
'soulrend': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 3'}],
'spark': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 1'}],
'spectral helix': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Templar',
'act': 'Act 1'}],
'spectral shield throw': ['none'],
'spectral throw': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Templar',
'act': 'Act 1'}],
'spell cascade support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'spell echo support': [{'classes': 'All, Classes', 'act': 'Act 4'}],
'spell totem support': [{'classes': 'Marauder, Scion, Templar, Witch',
'act': 'Act 1'}],
'spellslinger': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'spirit offering': [{'classes': 'Scion, Templar, Witch', 'act': 'Act 1'}],
'split arrow': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'splitting steel': [{'classes': 'Duelist, Ranger, Scion', 'act': 'Act 1'}],
'static strike': [{'classes': 'Duelist, Marauder, Ranger, Scion, Templar',
'act': 'Act 1'}],
'steelskin': [{'classes': 'All, Classes, Duelist, Marauder, Scion, Templar',
'act': 'Act 1'}],
'storm brand': [{'classes': 'Scion, Templar', 'act': 'Act 1'}],
'storm burst': [{'classes': 'Scion, Shadow, Templar', 'act': 'Act 1'}],
'storm call': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 1'}],
'storm rain': [{'classes': 'Duelist, Ranger, Scion, Shadow', 'act': 'Act 3'}],
'stormbind': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 3'}],
'stormblast mine': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'stun support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 1'}],
'summon carrion golem': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 4'}],
'summon chaos golem': [{'classes': 'All, Classes', 'act': 'Act 4'}],
'summon flame golem': [{'classes': 'All, Classes', 'act': 'Act 4'}],
'summon holy relic': [{'classes': 'Templar, Witch', 'act': 'Act 1'}],
'summon ice golem': [{'classes': 'All, Classes', 'act': 'Act 4'}],
'summon lightning golem': [{'classes': 'All, Classes', 'act': 'Act 4'}],
'summon phantasm support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'summon raging spirit': [{'classes': 'Scion, Templar, Witch',
'act': 'Act 1'}],
'summon reaper': [{'classes': 'Scion, Templar, Witch', 'act': 'Act 3'}],
'summon skeletons': [{'classes': 'Scion, Templar, Witch', 'act': 'Act 1'}],
'summon skitterbots': [{'classes': 'Ranger, Scion, Shadow, Witch',
'act': 'Act 2'}],
'summon stone golem': [{'classes': 'All, Classes', 'act': 'Act 4'}],
'sunder': [{'classes': 'Duelist, Marauder, Scion, Templar', 'act': 'Act 1'}],
'sweep': [{'classes': 'Duelist, Marauder, Templar', 'act': 'Act 1'}],
'swift affliction support': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'swift assembly support': [{'classes': 'Duelist, Ranger, Scion, Shadow, Witch',
'act': 'Act 1'}],
'swiftbrand support': [{'classes': 'Scion, Shadow, Templar', 'act': 'Act 3'}],
'tectonic slam': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'tempest shield': [{'classes': 'Duelist, Marauder, Scion, Shadow, Templar, Witch',
'act': 'Act 2'}],
'temporal chains': ['none'],
'temporal rift': [{'classes': 'Ranger, Scion, Shadow, Witch',
'act': 'Act 4'}],
'tornado': [{'classes': 'Ranger, Scion, Shadow', 'act': 'Act 4'}],
'tornado shot': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 3'}],
'toxic rain': [{'classes': 'Duelist, Ranger, Scion, Shadow', 'act': 'Act 1'}],
'trap and mine damage support': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 2'}],
'trap support': [{'classes': 'Duelist, Ranger, Scion, Shadow, Witch',
'act': 'Act 1'}],
'trinity support': [{'classes': 'Duelist, Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 2'}],
'unbound ailments support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'unearth': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'unleash support': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 4'}],
'urgent orders support': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'vampiric link': [{'classes': 'Duelist, Ranger, Scion', 'act': 'Act 4'}],
'vengeance': [{'classes': 'Duelist, Marauder, Templar', 'act': 'Act 3'}],
'venom gyre': [{'classes': 'Ranger, Scion, Shadow', 'act': 'Act 1'}],
'vicious projectiles support': [{'classes': 'Duelist, Ranger, Scion',
'act': 'Act 2'}],
'vigilant strike': [{'classes': 'Duelist, Marauder, Ranger, Scion, Templar',
'act': 'Act 1'}],
'vile toxins support': [{'classes': 'Ranger, Scion, Shadow', 'act': 'Act 4'}],
'viper strike': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 1'}],
'vitality': [{'classes': 'All, Classes, Duelist, Marauder, Templar',
'act': 'Act 1'}],
'void manipulation support': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'void sphere': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 4'}],
'volatile dead': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 1'}],
'volley support': [{'classes': 'Duelist, Marauder, Ranger, Scion, Shadow, Witch',
'act': 'Act 1'}],
'voltaxic burst': [{'classes': 'Scion, Shadow, Witch', 'act': 'Act 1'}],
'vortex': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 3'}],
'vulnerability': [{'classes': 'Duelist, Marauder, Scion, Templar',
'act': 'Act 3'}],
'war banner': [{'classes': 'Duelist, Marauder, Ranger, Scion, Templar',
'act': 'Act 1'}],
'warlords mark': [{'classes': 'Duelist, Marauder, Ranger, Scion',
'act': 'Act 3'}],
'wave of conviction': [{'classes': 'Scion, Shadow, Templar, Witch',
'act': 'Act 2'}],
'whirling blades': [{'classes': 'Duelist, Ranger, Shadow', 'act': 'Act 1'}],
'wild strike': [{'classes': 'Ranger, Scion, Shadow', 'act': 'Act 3'}],
'winter orb': [{'classes': 'Scion, Shadow, Templar', 'act': 'Act 3'}],
'wintertide brand': [{'classes': 'Scion, Shadow, Templar', 'act': 'Act 1'}],
'wither': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 1'}],
'withering step': [{'classes': 'Duelist, Ranger, Scion, Shadow, Witch',
'act': 'Act 1'}],
'withering touch support': [{'classes': 'Duelist, Ranger, Scion, Shadow',
'act': 'Act 4'}],
'wrath': [{'classes': 'Ranger, Scion, Shadow, Templar, Witch',
'act': 'Act 3'}],
'zealotry': [{'classes': 'Scion, Shadow, Templar, Witch', 'act': 'Act 3'}]}
var red_gems_json = {'absolution': 'abs',
'ancestral warchief': 'arc',
'anger': 'ger',
'animate guardian': 'ani',
'battlemages cry': 'bat',
'berserk': 'ber',
'bladestorm': 'bla',
'boneshatter': 'nes',
'chain hook': 'hai',
'cleave': 'cle',
'consecrated path': 'con',
'corrupting fever': 'cor',
'decoy totem': 'dec',
'defiance banner': 'def',
'determination': 'det',
'devouring totem': 'dev',
'dominating blow': 'dom',
'dread banner': 'dre',
'earthquake': 'thq',
'earthshatter': 'ths',
'exsanguinate': 'exs',
'flesh and stone': 'fle',
'generals cry': 'als',
'glacial hammer': 'gla',
'ground slam': 'gro',
'heavy strike': 'avy',
'holy flame totem': 'hol',
'ice crash': 'ice',
'immortal call': 'imm',
'intimidating cry': 'int',
'molten shell': 'she',
'perforate': 'per',
'petrified blood': 'pet',
'pride': 'pri',
'protective link': 'cti',
'punishment': 'pun',
'rage vortex': 'vor',
'rallying cry': 'lly',
'reckoning': 'rec',
'rejuvenation totem': 'rej',
'searing bond': 'sea',
'seismic cry': 'sei',
'shield crush': 'rus',
'smite': 'mit',
'static strike': 'tat',
'steelskin': 'ste',
'sunder': 'sun',
'sweep': 'swe',
'tectonic slam': 'nic',
'vengeance': 'eng',
'vigilant strike': 'vig',
'vitality': 'vit',
'vulnerability': 'vul',
'warlords mark': 'arl',
'added fire damage support': 'add',
'arrogance support': 'arr',
'ballista totem support': 'bal',
'behead support': 'beh',
'bloodlust support': 'odl',
'bloodthirst support': 'odt',
'brutality support': 'bru',
'burning damage support': 'bur',
'cast on melee kill support': 'kil',
'cast when damage taken support': 'whe',
'chance to bleed support': 'han',
'cold to fire support': 'col',
'cruelty support': 'rue',
'damage on full life support': 'ful',
'divine blessing support': 'div',
'earthbreaker support': 'thb',
'elemental damage with attacks support': 'eme',
'empower support': 'emp',
'endurance charge on melee stun support': 'ran',
'fire penetration support': 'pen',
'fist of war support': 'fis',
'generosity support': 'ero',
'increased duration support': 'inc',
'inspiration support': 'ins',
'iron grip support': 'gri',
'iron will support': 'wil',
'knockback support': 'kno',
'life gain on hit support': 'gai',
'life leech support': 'eec',
'lifetap support': 'fet',
'maim support': 'mai',
'melee physical damage support': 'phy',
'melee splash support': 'spl',
'multiple totems support': 'tip',
'multistrike support': 'tis',
'pulverise support': 'pul',
'ruthless support': 'uth',
'spell totem support': 'spe',
'urgent orders support': 'urg',
'ancestral protector': 'al p',
'blood and sand': 'ood ',
'enduring cry': 'duri',
'flame link': 'me l',
'herald of ash': 'of a',
'herald of purity': 'of p',
'leap slam': 'leap',
'purity of fire': 'ty o',
'reap': 'reap',
'shield charge': 'd ch',
'shockwave totem': 've t',
'summon flame golem': 'n fl',
'summon stone golem': 'one ',
'war banner': 'ar b',
'ancestral call support': 'all ',
'eternal blessing support': 'tern',
'fortify support': 'fort',
'less duration support': 'ss d',
'shockwave support': 've s',
'infernal blow': 'l blo',
'infernal cry': 'nal c',
'molten strike': 'en st',
'ancestral cry': 'ral cr',
'rage support': 'rage s',
'stun support': '^stun'} ;
var green_gems_json = {'ambush': 'amb',
'animate weapon': 'nim',
'arctic armour': 'rct',
'artillery ballista': 'rti',
'blade flurry': 'flu',
'blade vortex': 'vor',
'bladefall': 'def',
'blood rage': 'loo',
'burning arrow': 'bur',
'caustic arrow': 'cau',
'cobra lash': 'cob',
'cremation': 'cre',
'cyclone': 'cyc',
'desecrate': 'ese',
'detonate dead': 'det',
'double strike': 'dou',
'dual strike': 'dua',
'elemental hit': 'ele',
'ensnaring arrow': 'ens',
'ethereal knives': 'ere',
'fire trap': 'fir',
'flamethrower trap': 'fla',
'flicker strike': 'ick',
'frenzy': 'fre',
'frost blades': 'fro',
'galvanic arrow': 'gal',
'grace': 'gra',
'hatred': 'atr',
'herald of agony': 'ago',
'intuitive link': 'ntu',
'lacerate': 'lac',
'lancing steel': 'nci',
'mirror arrow': 'irr',
'pestilent strike': 'pes',
'phase run': 'pha',
'plague bearer': 'pla',
'poachers mark': 'poa',
'poisonous concoction': 'ono',
'precision': 'pre',
'puncture': 'pun',
'purity of ice': 'pur',
'rain of arrows': 'ows',
'reave': 'eav',
'riposte': 'rip',
'scourge arrow': 'sco',
'seismic trap': 'sei',
'shattering steel': 'sha',
'shrapnel ballista': 'shr',
'siege ballista': 'sie',
'smoke mine': 'smo',
'snipers mark': 'sni',
'spectral helix': 'hel',
'spectral shield throw': 'shi',
'splitting steel': 'itt',
'storm rain': 'sto',
'summon ice golem': 'sum',
'temporal rift': 'rif',
'toxic rain': 'xic',
'unearth': 'une',
'vampiric link': 'vam',
'venom gyre': 'ven',
'viper strike': 'vip',
'volatile dead': 'ola',
'whirling blades': 'whi',
'wild strike': 'wil',
'withering step': 'tep',
'added cold damage support': 'dde',
'additional accuracy support': 'ddi',
'advanced traps support': 'adv',
'arrow nova support': 'nov',
'block chance reduction support': 'loc',
'cast on death support': 'ath',
'chance to flee support': 'fle',
'close combat support': 'ose',
'cluster traps support': 'clu',
'cold penetration support': 'pen',
'culling strike support': 'cul',
'deadly ailments support': 'adl',
'enhance support': 'enh',
'faster attacks support': 'tta',
'focused ballista support': 'foc',
'fork support': 'for',
'hypothermia support': 'hyp',
'ice bite support': 'bit',
'impale support': 'imp',
'lesser multiple projectiles support': 'ess',
'mana leech support': 'ana',
'mirage archer support': 'ira',
'nightblade support': 'nig',
'onslaught support': 'ons',
'pierce support': 'pie',
'point blank support': 'oin',
'second wind support': 'eco',
'slower projectiles support': 'slo',
'swift assembly support': 'ass',
'trap and mine damage support': 'and',
'vicious projectiles support': 'vic',
'vile toxins support': 'vil',
'void manipulation support': 'voi',
'withering touch support': 'tou',
'bear trap': 'ear ',
'blade blast': 'de b',
'blade trap': 'de t',
'blast rain': 'st r',
'blink arrow': 'ink ',
'charged dash': 'ed d',
'explosive arrow': 've a',
'explosive concoction': 've c',
'explosive trap': 've t',
'haste': 'hast',
'ice shot': 'e sh',
'spectral throw': 'al t',
'split arrow': 'lit ',
'temporal chains': 'al c',
'tornado shot': 'ado ',
'blind support': 'lind',
'cast on critical strike support': 'on c',
'chain support': 'in s',
'chance to poison support': 'to p',
'critical strike affliction support': 'ke a',
'greater volley support': 'er v',
'mark on hit support': 'ark ',
'swift affliction support': 't af',
'trap support': 'ap s',
'ice trap': 'ice t',
'charged traps support': 'ged t',
'faster projectiles support': 'ter p',
'greater multiple projectiles support': 'ter m',
'multiple traps support': 'ple t',
'herald of ice': 'd of i',
'lightning strike': 'ning s',
'barrage support': 'rrage ',
'lightning arrow': 'tning a',
'barrage': 'barrage',
'tornado': 'tornado',
'dash': '^dash',
'volley support': '^vol'} ;
var blue_gems_json = {'arcane cloak': 'clo',
'arcanist brand': 'ani',
'armageddon brand': 'rma',
'assassins mark': 'ass',
'bane': 'ban',
'blazing salvo': 'laz',
'bodyswap': 'bod',
'brand recall': 'rec',
'clarity': 'lar',
'cold snap': 'col',
'conductivity': 'ndu',
'contagion': 'tag',
'conversion trap': 'nve',
'convocation': 'nvo',
'crackling lance': 'cra',
'creeping frost': 'eep',
'dark pact': 'dar',
'despair': 'esp',
'destructive link': 'ive',
'discharge': 'sch',
'discipline': 'sci',
'divine ire': 'div',
'elemental weakness': 'wea',
'energy blade': 'lad',
'enfeeble': 'enf',
'essence drain': 'sse',
'eye of winter': 'eye',
'fireball': 'reb',
'firestorm': 'res',
'flame dash': 'das',
'flameblast': 'meb',
'flammability': 'amm',
'flesh offering': 'fle',
'forbidden rite': 'for',
'freezing pulse': 'eez',
'frost bomb': 'bom',
'frostbite': 'tbi',
'frostblink': 'tbl',
'frostbolt': 'tbo',
'glacial cascade': 'gla',
'herald of thunder': 'ral',
'hexblast': 'exb',
'hydrosphere': 'hyd',
'ice spear': 'pea',
'icicle mine': 'ici',
'incinerate': 'nci',
'lightning tendrils': 'ndr',
'lightning warp': 'war',
'malevolence': 'mal',
'manabond': 'man',
'orb of storms': 'rms',
'penance brand': 'ena',
'purifying flame': 'rif',
'pyroclast mine': 'pyr',
'raise spectre': 'pec',
'raise zombie': 'zom',
'righteous fire': 'rig',
'rolling magma': 'agm',
'scorching ray': 'sco',
'shock nova': 'sho',
'sigil of power': 'sig',
'siphoning trap': 'oni',
'soulrend': 'ulr',
'spark': 'par',
'spellslinger': 'lls',
'stormbind': 'bin',
'stormblast mine': 'mbl',
'summon carrion golem': 'car',
'summon holy relic': 'hol',
'summon raging spirit': 'rag',
'summon reaper': 'eap',
'summon skeletons': 'ske',
'summon skitterbots': 'ski',
'tempest shield': 'emp',
'void sphere': 'voi',
'voltaxic burst': 'lta',
'vortex': '^vor',
'wave of conviction': 'wav',
'wintertide brand': 'ert',
'wither': 'wither$',
'wrath': 'wra',
'zealotry': 'zea',
'archmage support': 'chm',
'blasphemy support': 'asp',
'blastchain mine support': 'stc',
'bonechill support': 'nec',
'cast when stunned support': 'whe',
'cast while channelling support': 'whi',
'combustion support': 'com',
'concentrated effect support': 'onc',
'controlled destruction support': 'tro',
'decay support': 'dec',
'efficacy support': 'ffi',
'elemental army support': 'rmy',
'elemental focus support': 'foc',
'energy leech support': 'lee',
'enlighten support': 'enl',
'faster casting support': 'fas',
'feeding frenzy support': 'edi',
'hextouch support': 'ext',
'high-impact mine support': 'hig',
'ignite proliferation support': 'ign',
'immolate support': 'imm',
'impending doom support': 'ndi',
'increased area of effect support': 'are',
'increased critical strikes support': 'rik',
'infernal legion support': 'ern',
'infused channelling support': 'nfu',
'innervate support': 'inn',
'intensify support': 'ens',
'item rarity support': 'rar',
'meat shield support': 'mea',
'minefield support': 'nef',
'minion speed support': 'pee',
'physical to lightning support': 'phy',
'pinpoint support': 'inp',
'predator support': 'pre',
'spell echo support': 'cho',
'summon phantasm support': 'pha',
'swiftbrand support': 'swi',
'unbound ailments support': 'unb',
'unleash support': 'unl',
'arc': 'arc$',
'ball lightning': 'all ',
'blight': 'blig',
'bone offering': 'one ',
'flame surge': 'me s',
'flame wall': 'me w',
'frost wall': 't wa',
'ice nova': 'ce n',
'kinetic blast': 'c bl',
'kinetic bolt': 'c bo',
'lightning spire trap': 'pire',
'power siphon': 'er s',
'purity of elements': 'f el',
'purity of lightning': 'of l',
'soul link': 'oul ',
'spirit offering': 'rit ',
'storm brand': 'm br',
'storm burst': 'm bu',
'storm call': 'rm c',
'summon chaos golem': 'n ch',
'summon lightning golem': 'ng g',
'winter orb': 'er o',
'added chaos damage support': 'os d',
'added lightning damage support': 'ed l',
'charged mines support': 'rged',
'elemental penetration support': 'l pe',
'elemental proliferation support': 'l pr',
'increased critical damage support': 'al d',
'lightning penetration support': 'g pe',
'minion damage support': 'on d',
'minion life support': ' lif',
'power charge on critical support': 'r ch',
'spell cascade support': 'll c',
'trinity support': 'trin'};