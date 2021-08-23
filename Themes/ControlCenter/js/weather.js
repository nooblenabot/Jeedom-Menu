function mia_meteo(_valeur){
    // Initialisation des variables.
    var valeur = _valeur.split(',');
    const cond_pluie = ["312", "500", "501", "531", "615", "616"];
    const cond_averse = ["313", "314", "502", "503", "504", "520", "521", "522", "620"];
    const cond_crachin = ["300", "301", "302", "310", "311", "321"];
    const cond_neige = ["600", "601", "602", "621", "622"];
    const cond_neige_fondue = ["611", "612", "613"];
    const cond_pluie_vergla = "511";
    const cond_orage = ["200", "201", "202", "210", "211", "212", "221", "230", "231", "232"];
    const cond_brouillard = ["701", "721", "741"];
    const cond_partiel_soleil = "803";
    const cond_plutot_soleil = ["801", "802"];
    const cond_soleil = 800;
    const cond_nuageux = 804;
    const jour = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const cadre_now = document.getElementById('mia-meteo-cadre-now');
    const now_icone = document.getElementById('mia-meteo-now-icone');
    const now_temperature = document.getElementById('mia-meteo-now-temperature');
    const now_temps = document.getElementById('mia-meteo-now-temps');
    const lever_soleil = document.getElementById('mia-meteo-lever-soleil');
    const coucher_soleil = document.getElementById('mia-meteo-coucher-soleil');
    const now_temperature_mini = document.getElementById('mia-meteo-now-temperature-mini');
    const now_temperature_maxi = document.getElementById('mia-meteo-now-temperature-maxi');
    const now_vent_icone = document.getElementById('mia-meteo-now-vent-icone');
    const now_vent = document.getElementById('mia-meteo-now-vent');
    const now_pluie = document.getElementById('mia-meteo-now-pluie');
    const jour1_nom = document.getElementById('mia-meteo-jour1-nom');
    const jour1_icone = document.getElementById('mia-meteo-jour1-icone');
    const jour1_temperature = document.getElementById('mia-meteo-jour1-temperature');
    const jour2_nom = document.getElementById('mia-meteo-jour2-nom');
    const jour2_icone = document.getElementById('mia-meteo-jour2-icone');
    const jour2_temperature = document.getElementById('mia-meteo-jour2-temperature');
    const jour3_nom = document.getElementById('mia-meteo-jour3-nom');
    const jour3_icone = document.getElementById('mia-meteo-jour3-icone');
    const jour3_temperature = document.getElementById('mia-meteo-jour3-temperature');
    var nuit = new Boolean(false);
    var now = new Date();
  	var jour_numero = now.getDay();
    var heure = now.getHours().toString() + now.getMinutes().toString().padStart(2, '0');


    // Détermination si c'est le jour ou la nuit.
    if (Number(heure) > Number(valeur[3]) && Number(heure) < Number(valeur[4])) {
        nuit = false;
    } else {
        nuit = true;
    }


    // ******************** //
    // Cadre météo now      //
    // ******************** //

    // Icone et background.
    if (cond_pluie.includes(valeur[0]) === true) {

        if (nuit === true) {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuit';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-night wu-rain';
        } else {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuageux';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-day wu-rain';
        }

        now_temperature.className = 'mia-meteo-now-temperature mia-meteo-now-color-white';
        now_temps.className = 'mia-meteo-now-temps mia-meteo-now-color-white';

    } else if (cond_averse.includes(valeur[0]) === true) {

        if (nuit === true) {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuit';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-night wu-chancerain';
        } else {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-pluie';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-day wu-chancerain';
        }

        now_temperature.className = 'mia-meteo-now-temperature mia-meteo-now-color-white';
        now_temps.className = 'mia-meteo-now-temps mia-meteo-now-color-white';

    } else if (cond_crachin.includes(valeur[0]) === true) {

        if (nuit === true) {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuit';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-night wu-flurries';
        } else {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuageux';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-day wu-flurries';
        }

        now_temperature.className = 'mia-meteo-now-temperature mia-meteo-now-color-white';
        now_temps.className = 'mia-meteo-now-temps mia-meteo-now-color-white';

    } else if (cond_neige_fondue.includes(valeur[0]) === true) {

        if (nuit === true) {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuit';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-night wu-chancesleet';
        } else {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuageux';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-day wu-chancesleet';
        }

        now_temperature.className = 'mia-meteo-now-temperature mia-meteo-now-color-white';
        now_temps.className = 'mia-meteo-now-temps mia-meteo-now-color-white';

    } else if (cond_pluie_vergla.includes(valeur[0]) === true) {

        if (nuit === true) {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuit';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-night wu-sleet';
        } else {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuageux';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-day wu-sleet';
        }

        now_temperature.className = 'mia-meteo-now-temperature mia-meteo-now-color-white';
        now_temps.className = 'mia-meteo-now-temps mia-meteo-now-color-white';

    } else if (cond_neige.includes(valeur[0]) === true) {

        if (nuit === true) {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuit';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-night wu-snow';
        } else {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-neige';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-black wu-day wu-snow';
        }

        now_temperature.className = 'mia-meteo-now-temperature mia-meteo-now-color-blue';
        now_temps.className = 'mia-meteo-now-temps mia-meteo-now-color-blue';

    } else if (cond_orage.includes(valeur[0]) === true) {

        if (nuit === true) {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuit';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-night wu-chancetstorms';
        } else {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-orage';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-day wu-chancetstorms';
        }

        now_temperature.className = 'mia-meteo-now-temperature mia-meteo-now-color-white';
        now_temps.className = 'mia-meteo-now-temps mia-meteo-now-color-white';

    } else if (cond_partiel_soleil.includes(valeur[0]) === true) {

        if (nuit === true) {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuit';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-night wu-partlysunny';
        } else {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuageux';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-day wu-partlysunny';
        }

        now_temperature.className = 'mia-meteo-now-temperature mia-meteo-now-color-white';
        now_temps.className = 'mia-meteo-now-temps mia-meteo-now-color-white';

    } else if (cond_plutot_soleil.includes(valeur[0]) === true) {

        if (nuit === true) {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuit';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-night wu-mostlysunny';
        } else {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-soleil';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-day wu-mostlysunny';
        }

        now_temperature.className = 'mia-meteo-now-temperature mia-meteo-now-color-white';
        now_temps.className = 'mia-meteo-now-temps mia-meteo-now-color-white';

    } else if (cond_brouillard.includes(valeur[0]) === true) {

        if (nuit === true) {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuit';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-night wu-fog';
        } else {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuageux';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-day wu-fog';
        }

        now_temperature.className = 'mia-meteo-now-temperature mia-meteo-now-color-white';
        now_temps.className = 'mia-meteo-now-temps mia-meteo-now-color-white';

    } else if (valeur[0] == cond_soleil) {

        if (nuit === true) {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuit';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-night wu-sunny';
        } else {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-soleil';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-day wu-sunny';
        }

        now_temperature.className = 'mia-meteo-now-temperature mia-meteo-now-color-white';
        now_temps.className = 'mia-meteo-now-temps mia-meteo-now-color-white';

    } else if (valeur[0] == cond_nuageux) {

        if (nuit === true) {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuit';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-night wu-cloudy';
        } else {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuageux';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-day wu-cloudy';
        }

        now_temperature.className = 'mia-meteo-now-temperature mia-meteo-now-color-white';
        now_temps.className = 'mia-meteo-now-temps mia-meteo-now-color-white';

    } else {

        if (nuit === true) {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuit';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-night wu-unknown';
        } else {
            cadre_now.className = 'mia-meteo-cadre-now mia-meteo-now-nuageux';
            now_icone.className = 'mia-meteo-now-icone wu wu-128 wu-white wu-day wu-unknown';
        }

        now_temperature.className = 'mia-meteo-now-temperature mia-meteo-now-color-white';
        now_temps.className = 'mia-meteo-now-temps mia-meteo-now-color-white';
    }


    // ******************** //
    // Cadre météo détail   //
    // ******************** //

    // Température et libellé condition.
    now_temperature.innerHTML = Math.round(valeur[2]) + '°';
    now_temps.innerHTML = valeur[1];

    // Lever et coucher du soleil.
    lever_soleil.innerHTML = '<i class="wi wi-sunrise"></i>&nbsp;' + (valeur[3].length == 3 ? valeur[3].substring(0, 1) + ':' + valeur[3].substring(1) : valeur[3].substring(0, 2) + ':' + valeur[3].substring(2));
    coucher_soleil.innerHTML = '<i class="wi wi-sunset"></i>&nbsp;' + (valeur[4].length == 3 ? valeur[4].substring(0, 1) + ':' + valeur[4].substring(1) : valeur[4].substring(0, 2) + ':' + valeur[4].substring(2));

    // Température mini et maxi.
    now_temperature_mini.innerHTML = '<i class="wi wi-thermometer-exterior"></i>&nbsp;' + valeur[5] + '°';
    now_temperature_maxi.innerHTML = '<i class="wi wi-thermometer"></i>&nbsp;' + valeur[6] + '°';

    // Vent et rafale.
    now_vent_icone.innerHTML = '<i class="mia-meteo-detail-icone-vent wi wi wi-wind from-' + valeur[7] + '-deg"></i>';
    now_vent.innerHTML = '&nbsp; <sup>' + valeur[8] + '</sup> / <sub>' + valeur[9];

    // Pluie actuelle et comulée journée.
    now_pluie.innerHTML = '&nbsp; <sup>' + valeur[10] + '</sup> / <sub>' + valeur[11];


    // ******************** //
    // Cadre prévision      //
    // ******************** //

    // Prévisions + 1.
    ((jour_numero + 1) > 7) ? jour1_nom.innerHTML = jour[jour_numero + 1 - 7] : jour1_nom.innerHTML = jour[jour_numero + 1];
    jour1_icone.className = Prevision_Icone(valeur[12]);
    jour1_temperature.innerHTML = Math.round(valeur[13]) + '° &ensp; ' + Math.round(valeur[14]) + '°';

    // Prévision + 2.
    ((jour_numero + 2) > 7) ? jour2_nom.innerHTML = jour[jour_numero + 2 - 7] : jour2_nom.innerHTML = jour[jour_numero + 2];
    jour2_icone.className = Prevision_Icone(valeur[15]);
    jour2_temperature.innerHTML = Math.round(valeur[16]) + '° &ensp; ' + Math.round(valeur[17]) + '°';

    // Prévision +3.
    ((jour_numero + 3) > 7) ? jour3_nom.innerHTML = jour[jour_numero + 3 - 7] : jour3_nom.innerHTML = jour[jour_numero + 3];
    jour3_icone.className = Prevision_Icone(valeur[18]);
    jour3_temperature.innerHTML = Math.round(valeur[19]) + '° &ensp; ' + Math.round(valeur[20]) + '°';

    // Fonction permettant de retourner l'icône en fonction du n° de condition pour les prévisions.
    function Prevision_Icone(meteo_condition) {

        if (cond_pluie.includes(meteo_condition) === true) {

            return 'wu wu-64 wu-white wu-day wu-rain';

        } else if (cond_averse.includes(meteo_condition) === true) {

            return 'wu wu-64 wu-white wu-day wu-chancerain';

        } else if (cond_crachin.includes(meteo_condition) === true) {

            return 'wu wu-64 wu-white wu-day wu-flurries';

        } else if (cond_neige_fondue.includes(meteo_condition) === true) {

            return 'wu wu-64 wu-white wu-day wu-chancesleet';

        } else if (cond_pluie_vergla.includes(meteo_condition) === true) {

            return 'wu wu-64 wu-white wu-day wu-sleet';

        } else if (cond_neige.includes(meteo_condition) === true) {

            return 'wu wu-64 wu-black wu-day wu-snow';

        } else if (cond_orage.includes(meteo_condition) === true) {

            return 'wu wu-64 wu-white wu-day wu-chancetstorms';

        } else if (cond_partiel_soleil.includes(meteo_condition) === true) {

            return 'wu wu-64 wu-white wu-day wu-partlysunny';

        } else if (cond_plutot_soleil.includes(meteo_condition) === true) {

            return 'wu wu-64 wu-white wu-day wu-mostlysunny';

        } else if (cond_brouillard.includes(meteo_condition) === true) {

            return 'wu wu-64 wu-white wu-day wu-fog';

        } else if (meteo_condition == cond_soleil) {

            return 'wu wu-64 wu-white wu-day wu-sunny';

        } else if (meteo_condition == cond_nuageux) {

            return 'wu wu-64 wu-white wu-day wu-cloudy';

        } else {

            return 'wu wu-64 wu-white wu-day wu-unknown';

        }
    }
}