import { getCookie, setCookie } from "./helpers";

const database = {
  storages: {
    cookie: {
      getItem: (item) => getCookie(item),
      removeItem: (item) => (document.cookie = item + "=; Max-Age=-7776000;"),
      setItem: (key, value) => setCookie(key, value),
    },
    sessionStorage: {
      getItem: (item) => window.sessionStorage.getItem(item),
      removeItem: (item) => window.sessionStorage.removeItem(item),
      setItem: (key, value) => window.sessionStorage.setItem(key, value),
    },
    localStorage: {
      getItem: (item) => window.localStorage.getItem(item),
      removeItem: (item) => window.localStorage.removeItem(item),
      setItem: (key, value) => window.localStorage.setItem(key, value),
    },
  },
  products: {
    1: {
      id: 1,
      title: "Scout-M",
      color: "primary",
      textClassName: "text-primary-700",
      fillClassName: "fill-current text-primary-400",
      price: 28500,
      gallery: [
        {
          src: "scoutFrontRed.png",
          aspectRatio: "0.55764075067",
          zoomSizes: `desktop-big=1872,0.55764075067`,
          zoomLevel: 0.6,
        },
        {
          src: "scoutRedBack.png",
          aspectRatio: "0.541",
          zoomSizes: `desktop-big=1762,0.541`,
        },
        {
          src: "scoutRedStretched.png",
          aspectRatio: "1.812",
          zoomSizes: `desktop-big=3278,1.812`,
          imgClass: "max-w-full mx-auto rounded-r-xl w-full",
        },
        {
          src: "scoutRedBottomView.png",
          aspectRatio: "0.813",
          zoomSizes: `desktop-big=2916,0.813`,
        },
        {
          src: "scoutRedLumbar.png",
          aspectRatio: "1.243",
          zoomSizes: `desktop-big=4975,1.243`,
          zoomLevel: 0.5,
        },
        {
          src: "scoutRedSide.png",
          aspectRatio: "0.558",
          zoomSizes: `desktop-big=3349,0.558`,
          zoomLevel: 0.7,
        },
        {
          src: "scoutRedTop.png",
          aspectRatio: "1.028",
          zoomSizes: `desktop-big=3601,1.028`,
          zoomLevel: 0.5,
        },
      ],
      features: [
        "Komoditet dhe teper e rehatshme",
        "Shtrihet deir 180 deg",
        "Lekure cilesore",
        "Per persona deri ne 120kg",
        "Doreza 4D mundeson qendrimin qe deshironi",
        "Mbeshtetese per mesin dhe koken",
        "Logo me qepje deri ne detaj",
      ],
    },
    2: {
      id: 2,
      title: "Scout-M",
      color: "tertiary",
      textClassName: "text-tertiary-700",
      fillClassName: "fill-current text-tertiary-400",
      price: 28500,
      gallery: [
        {
          src: "scoutFrontGreen.png",
          aspectRatio: "0.55764075067",
          zoomSizes: `desktop-big=1872,0.55764075067`,
          zoomLevel: 0.6,
        },
        {
          src: "scoutGreenBack.png",
          aspectRatio: "0.542",
          zoomSizes: `desktop-big=1851,0.542`,
        },
        {
          src: "scoutGreenStretched.png",
          aspectRatio: "1.808",
          zoomSizes: `desktop-big=3468,1.808`,
          imgClass: "max-w-full mx-auto rounded-r-xl w-full",
        },
        {
          src: "scoutGreenBottomView.png",
          aspectRatio: "0.863",
          zoomSizes: `desktop-big=3009,0.863`,
        },
        {
          src: "scoutGreenLumbar.png",
          aspectRatio: "1.239",
          zoomSizes: `desktop-big=3009,1.239`,
          zoomLevel: 0.5,
        },
        {
          src: "scoutGreenSide.png",
          aspectRatio: "0.5895",
          zoomSizes: `desktop-big=3537,0.5895`,
        },
        {
          src: "scoutGreenTop.png",
          aspectRatio: "1.136",
          zoomSizes: `desktop-big=4098,1.136`,
          zoomLevel: 0.6,
        },
      ],
      features: [
        "Komoditet dhe teper e rehatshme",
        "Shtrihet deir 180 deg",
        "Lekure cilesore",
        "Per persona deri ne 120kg",
        "Doreza 4D mundeson qendrimin qe deshironi",
        "Mbeshtetese per mesin dhe koken",
        "Logo me qepje deri ne detaj",
      ],
    },
    3: {
      id: 3,
      title: "Martial-M",
      price: 42000,
      color: "orange",
      textClassName: "text-orange-700",
      fillClassName: "fill-current text-orange-400",
      gallery: [
        {
          src: "martial45deg.png",
          aspectRatio: "0.57044980637",
          zoomSizes: `desktop-big=1915,0.57044980637`,
          zoomLevel: 0.6,
        },
        {
          src: "martialBack.png",
          aspectRatio: "0.51805555555",
          zoomSizes: `desktop-big=1119,0.51805555555`,
        },
        {
          src: "martialStretched.png",
          aspectRatio: "1.84037015616",
          imgClass: "max-w-full mx-auto rounded-r-xl w-full",
          zoomSizes: `desktop-big=3182,1.84037015616`,
          zoomLevel: 0.6,
        },
        {
          src: "martialBottomView.png",
          aspectRatio: "0.87881263616",
          zoomSizes: `desktop-big=3227,0.87881263616`,
          zoomLevel: 0.4,
        },
        {
          src: "martialLumbar.png",
          aspectRatio: "1.47959183673",
          zoomSizes: `desktop-big=4495,1.47959183673`,
          zoomLevel: 0.4,
        },
        {
          src: "martialSide.png",
          aspectRatio: "0.77306182531",
          zoomSizes: `desktop-big=3151,0.77306182531`,
          zoomLevel: 0.4,
        },
        {
          src: "martialTop.png",
          aspectRatio: "1.02857142857",
          zoomSizes: `desktop-big=3276,1.02857142857`,
          zoomLevel: 0.4,
        },
      ],
      features: [
        "Komoditet per qendrim te tej-zgjatur",
        "Shtrihet deir 180 deg",
        "Lekure cilesore me trashesi perfekte",
        "Per persona deri ne 136kg",
        "Doreza 4D mundeson qendrimin qe deshironi",
        "Mbeshtetese per mesin dhe koken",
        "Pershtatet me formen e trupit",
        "Logo me qepje deri ne detaj",
      ],
    },
  },
  baseURL: "http://api.menaxhimbiznesi.com/api/",
  roles: {
    Admin: 1,
    User: 2,
    AffiliateSeller: 3,
    WholeSale: 4,
  },
};

export default database;