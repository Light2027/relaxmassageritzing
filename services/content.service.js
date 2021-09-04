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
            about: "Rolam",
            services: "Szolgaltatasaim",
            gallery: "Galeria",
            contact: "Kontakt Info",
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
            backgroundAlt: "Egy nö akinek a hatat maszirozzak.",
            logoAlt: "A Logom.",
        },
    };
}

export function GetAboutContent(){
        return {
        "de":{
            header: "Hello, mein Name ist Thomas.",
            aboutMe: "Etwas Über mich.",
            pfpAlt: "Mein Profilbild.",
        },
        "hu":{
            header: "Hello, a nevem Thomas.",
            aboutMe: "Valami rolam.",
            pfpAlt: "A Profil kèpem.",
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
                    name: "1",
                    category:"1",
                    duration: 0,
                    price: 0,
                },
                {
                    name: "2",
                    category:"1",
                    duration: 0,
                    price: 0,
                },
                {
                    name: "3",
                    category:"1",
                    duration: 0,
                    price: 0,
                },
            ],
        },
        "hu":{
            services: [
            {
                name: "1",
                category:"1",
                duration: 0,
                price: 0,
            },
            {
                name: "2",
                category:"1",
                duration: 0,
                price: 0,
            },
            {
                name: "3",
                category:"1",
                duration: 0,
                price: 0,
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
    const tel = "+43 660 1234567";
    const email = "massagetommy0315@gmail.com";
    const address = "7323, Gemeinde Ritzing, Hofstattgasse 38.";

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