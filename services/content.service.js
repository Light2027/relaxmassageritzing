export const germanKey = "de";
export const hungarianKey = "hu";

export function GetCommonContent(){
    const title = "Relax Massage Ritzing";
    return {
        "de":{
            title: title,
        },
        "hu":{
            title: title,
        },
    };
}

export function GetNavbarContent(){
    return {
        "de":{
            about: "Über mich",
            services: "Dienstleistungen",
            gallery: "Galerie",
            contact: "Kontaktdaten",
        },
        "hu":{
            about: "Rólam",
            services: "Kezelések",
            gallery: "Galéria",
            contact: "Elérhetőségek",
        },
    };
}

export function GetLandingContent(){
    return {
        "de":{
            backgroundAlt: "Eine Frau, die eine Rückenmassage kriegt.",
            logoAlt: "Mein Logo.",
        },
        "hu":{
            backgroundAlt: "Egy nö akinek a hàtat maszirozzak.",
            logoAlt: "A Logom.",
        },
    };
}

export function GetAboutContent(){
        return {
        "de":{
            header: "Hello, mein Name ist Tommy.",
            aboutMe: "Etwas Über mich.",
            pfpAlt: "Mein Profilbild.",
        },
        "hu":{
            header: "Hello, a nevem Tommy.",
            aboutMe: "Valami rolam.",
            pfpAlt: "A Profil képem.",
        },
    };
}

export function GetServiceContent(){
    const navbarContent = GetNavbarContent();
        return {
        "de":{
            title: navbarContent[germanKey].services,
            minutePostfix: "Minuten",
            countryOfCurrency: "de-DE",
            currencyType: "EUR",    
        },
        "hu":{
            title: navbarContent[hungarianKey].services,
            minutePostfix: "Perc",
            countryOfCurrency: "hu-HU",
            currencyType: "HUF",
        },
    };
}

export function GetServicesContent(){
    return {
        "de":{
            services: [
                {
                    name: "Rückenmassage",
                    category:"Relax",
                    duration: 30,
                    price: 20,
                },
                {
                    name: "Bein- und Rückenmassage",
                    category:"Relax",
                    duration: 60,
                    price: 30,
                },
                {
                    name: "Muskelentspannende Rücken- und Hüftmassage",
                    category:"Intensive",
                    duration: 30,
                    price: 20,
                },
            ],
        },
        "hu":{
            services: [
                {
                    name: "Teljes hát masszázs",
                    category:"Relax",
                    duration: 30,
                    price: 7000,
                },
                {
                    name: "Teljes hát és láb masszázs",
                    category:"Relax",
                    duration: 60,
                    price: 10500,
                },
                {
                    name: "Izomlazító hát és csípő masszázs",
                    category:"Intenzív",
                    duration: 30,
                    price: 7000,
                },
        ],
        },
    };
}

export function GetGalleryContent(){
    const navbarContent = GetNavbarContent();
        return {
        "de":{
            title: navbarContent[germanKey].gallery,
        },
        "hu":{
            title: navbarContent[hungarianKey].gallery,
        },
    };
}

export function GetContactContent(){
    const tel = "+43 650 6611011";
    const email = "massagetommy0315@gmail.com";
    const address = "7323, Gemeinde Ritzing, Hofstattgasse 36.";

    const navbarContent = GetNavbarContent();
        return {
        "de":{
            title: navbarContent[germanKey].contact,
            encouragment: "Deutsch",
            tel: tel,
            email: email,
            address: address,
        },
        "hu":{
            title: navbarContent[hungarianKey].contact,
            encouragment: "Magyar",
            tel: tel,
            email: email,
            address: address,
        },
    };
}