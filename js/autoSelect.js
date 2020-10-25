          /****** Creation du script js permettant le chois automatique au niveau du formulaire. *******/
    
    //declaration des variables et constante
    const activeCycle = document.getElementById("activeCycle")
    const activeLevel = document.getElementById("activeLevel")
    const activeClass = document.getElementById("activeClass")
    const classes = document.getElementById("classes")
    let formation
    let cycle
    let level

    /**
     * ensemble de données utiliser pour indiquer le niveau, le cycle, la classe... au niveau du DOM  
     */
    const data = {
        Licence : [
            "Niveau 1",
            "Niveau 2",
            "Niveau 3",
        ],
        Master : [
            "Niveau 4",
            "Niveau 5",
        ],
        classe : {
            "ingenieur": {
                "niveau1": [
                    "ITT1A",
                    "ITT1B",
                    "ITT1-Alternance"
                ],
                "niveau2": [
                    "ITT2A",
                    "ITT2B", 
                    "ITT2-Alternance"
                ],
                "niveau3": [
                    "ITT3-IR",
                    "ITT3-RT",
                    "ITT3-RC",
                    "ITT3-IR-Alternance",
                    "ITT3-RT-Alternance",
                    "ITT3-RC-Alternance"
                ],
                "niveau4": [
                    "IT1-SERES", 
                    "IT1-SRM"
                ],
                "niveau5": [
                    "IT2-SERES", 
                    "IT2-SRM"
                ],
            },
            "inspecteur": {
                "niveau1": [
                    "IPT1",
                    "IPT1-Alternance"
                ],
                "niveau2": [
                    "IPT2", 
                    "IPT2-Alternance"
                ],
                "niveau3": [
                    "IPT3-CD",
                    "IPT3-MGT",
                    "IPT3-TL",
                    "IPT3-CF",
                    "IPT3-TEP",
                    "IPT3-CD-Alternance",
                    "IPT3-MGT-Alternance",
                    "IPT3-TL-Alternance",
                    "IPT3-CF-Alternance",
                    "IPT3-TEP-Alternance",
                ],
                "niveau4": [
                    "ADM1",
                ],
                "niveau5": [
                    "ADM2-LT", 
                    "ADM2-MR"
                ],
            },
        }
    }


    /**
     * Cette fonction permet de changer les options au niveau des classes
     * 
     * @param {String} formation 
     * @param {string} level 
     */
    function changeClasse(formation, level) {
        if (formation === "Ingenieur" && level === "Niveau 1") {
            sendToDOM(data.classe.ingenieur.niveau1,classes,"Votre classe")
        }
        else if (formation === "Ingenieur" && level === "Niveau 2") {
            sendToDOM(data.classe.ingenieur.niveau2,classes,"Votre classe")
        }
        else if (formation === "Ingenieur" && level === "Niveau 3") {
            sendToDOM(data.classe.ingenieur.niveau3,classes,"Votre classe")
        }
        else if (formation === "Ingenieur" && level === "Niveau 4") {
            sendToDOM(data.classe.ingenieur.niveau4,classes,"Votre classe")
        }
        else if (formation === "Ingenieur" && level === "Niveau 5") {
            sendToDOM(data.classe.ingenieur.niveau5,classes,"Votre classe")
        }
        else if (formation === "Inspecteur" && level === "Niveau 1") {
            sendToDOM(data.classe.inspecteur.niveau1,classes,"Votre classe")
        }
        else if (formation === "Inspecteur" && level === "Niveau 2") {
            sendToDOM(data.classe.inspecteur.niveau2,classes,"Votre classe")
        }
        else if (formation === "Inspecteur" && level === "Niveau 3") {
            sendToDOM(data.classe.inspecteur.niveau3,classes,"Votre classe")
        }
        else if (formation === "Inspecteur" && level === "Niveau 4") {
            sendToDOM(data.classe.inspecteur.niveau4,classes,"Votre classe")
        }
        else if (formation === "Inspecteur" && level === "Niveau 5") {
            sendToDOM(data.classe.inspecteur.niveau5,classes,"Votre classe")
        }
        else{
            alert('Erreur dans vos choix')
        }
    }


    /**
     * Cette fonction permet d'envoyer les données sous forme de noeud html au niveau du Document Object Model (DOM)
     * 
     * @param {Array} element Tableau contenant le type de données a envoyer
     * @param {Node} DOM_Node Noeud ou seront inserées les données
     * @param {String} label label
     * @param {boolean} levelSelected [facultative] permet d'indique si le label sera selectioné sur la page html ou non 
     */
    function sendToDOM(element, DOM_Node,label,levelSelected = false) {
        if (!levelSelected) {
            html = '<option value="" disabled >'+label+'</option>'
            element.forEach(element => {
                html += '<option '+(element[0] ===element?'selected':'')+' value="' + element + '">' + element + '</option>'
            });
            DOM_Node.innerHTML = html
        } else {
            html = '<option value="" selected disabled >'+label+'</option>'
            element.forEach(element => {
                html += '<option value="' + element + '">' + element + '</option>'
            });
            DOM_Node.innerHTML = html
        }
    }

    // Creation des evenements

    //******************************************************************************
    activeCycle.addEventListener("change", function (e) {
        choix = e.target.selectedIndex;
        formation = e.target.options[choix].value;
        activeLevel.disabled = false

        if (classes.disabled == false) {
            changeClasse(formation,level)
        }

    })


    //**********************************************************************************
    activeLevel.addEventListener("change", function (e) {
        choix = e.target.selectedIndex;
        cycle = e.target.options[choix].value;
        

        if ((formation === "Ingenieur" || formation === "Inspecteur") && cycle === "Licence") {
            if (activeClass.disabled == true) {
                sendToDOM(data.Licence,activeClass,"Votre Niveau",true)
            } else {
                sendToDOM(data.Licence,activeClass,"Votre Niveau")
            }
        }
        
        if ((formation === "Ingenieur" || formation === "Inspecteur") && cycle === "Master") {
            if (activeClass.disabled == true) {
                sendToDOM(data.Master,activeClass,"Votre Niveau",true)
            } else {
                sendToDOM(data.Master,activeClass,"Votre Niveau")
            }
        }
        if (classes.disabled == false) {
            choix = activeClass.selectedIndex;
            level = activeClass.options[choix].value;
            console.log(level);
            changeClasse(formation,level)
        }
        activeClass.disabled = false
    })


    /********************************************************************************/
    activeClass.addEventListener("change",function (e) { 
        choix = e.target.selectedIndex;
        level = e.target.options[choix].value;
        classes.disabled = false

        changeClasse(formation,level)

    })