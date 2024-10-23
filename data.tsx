import { Mail, Github, BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/davidmg512",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/david-m%C3%A9ndez-garcia-7b7522211/",
    },
    {
        id: 3,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:davidmgaspe@gmail.com"
    }
];

export const knowntec = [
    {
        id: 1,
        title: "Angular",
        image: "/angularLogo.png"
    },
    {
        id: 2,
        title: "HTML",
        image: "/htmlLogo.png"
    },
    {
        id: 3,
        title: "CSS",
        image: "/cssLogo.png"
    },
    {
        id: 5,
        title: "Typescript",
        image: "/typescriptLogo.png"
    },
    {
        id: 6,
        title: "Ionic",
        image: "/ionicLogo.png"
    },
    {
        id: 6,
        title: "Github",
        image: "/githubLogo.png"
    },
    {
        id: 4,
        title: "Git",
        image: "/gitLogo.png"
    }
    
]

export const usedtec = [
    {
        id: 2,
        title: "Selenium",
        image: "/seleniumLogo.png"
    },
    {
        id: 2,
        title: ".NET",
        image: "/netLogo.png"
    },
    {
        id: 2,
        title: "MongoDB",
        image: "/mongodbLogo.png"
    },
    {
        id: 2,
        title: "Nodejs",
        image: "/nodejsLogo.png"
    },
]

export const learningtec = [
    {
        id: 2,
        title: "React",
        image: "/reactLogo.png"
    },
    {
        id: 2,
        title: "Nextjs",
        image: "/nextjsLogo.png"
    },
    {
        id: 2,
        title: "Tailwind CSS",
        image: "/tailwindLogo.png"
    },
]


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#000000" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#000000" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#000000" strokeWidth={1} />,
        link: "/skills",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#000000" strokeWidth={1} />,
        link: "/portfolio",
    },
    /*
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#000000" strokeWidth={1} />,
        link: "/testimonials",
    },*/
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Máster en Desarrollo de Servicios y Aplicaciones Web",
        subtitle: "Universidad de Alicante",
        date: "2023 - 2024",
    },
    {
        id: 2,
        title: "Grado en Ingeniería Informática",
        subtitle: "Universidad de Alicante",
        description: "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
        date: "2018 - 2023",
    },
    {
        id: 3,
        title: "Bachillerato científico",
        subtitle: "IES La NIA",
        date: "2016 - 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "SuShop",
        subtitle: "Tienda online",
        image: "/sushop.png",
        descripcion: "Una tienda online completa donde el usuario puede explorar el catalogo de productos y hacer compras asociadas a direcciones guardadas. Cuenta con un algoritmo de recomendaciones, asi como un historial de pedidos y direcciones guardadas.",
        urlGithub: "https://github.com/davidmg512/ProyectoTienda",
        urlDemo: "https://sushopfrontend.vercel.app/",
        tec: ["Angular", "Nodejs", "Firebase", "MongoDB", "Angular Material", "Vercel", "Render"]
    },
    {
        id: 2,
        title: "The Ancient Gate",
        subtitle: "Pagina web del videojuego",
        image: "/theancientgate.png",
        descripcion: "Una pagina donde el usuario puede descargar el juego The Ancient Gate o informarse sobre el mismo. En la pagina encontramos información sobre el juego, el contenido, o incluso una galería de imagenes y varios videos.",
        urlGithub: "https://github.com/davidmg512/The-Ancient-Gate",
        urlDemo: "https://the-ancient-gate.vercel.app/",
        tec: ["Angular", "Tailwind", "Vercel"]
    },
    {
        id: 3,
        title: "Autoescuela Méndez",
        subtitle: "Pagina de test de autoescuela",
        image: "/autoescuela.png",
        descripcion: "Una pagina donde el usuario puede prepararse para el examen de conducir mediante test con preguntas aleatorias extraidas de una bateria de 1300 preguntas. El usuario puede ver el historial de test y sus resultados asi como graficas del progreso.",
        urlGithub: "https://github.com/davidmg512/AutoescuelasMendez",
        urlDemo: "https://autoescuela-mendez.vercel.app/",
        tec: ["Angular", "Chartjs", "Angular Material", "Vercel"]
    },
];

