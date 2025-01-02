import cults_logo from "../src/assets/icons/cults_logo.png";
import creality_cloud_logo from "../src/assets/icons/creality_cloud_logo.jpg";
import thingiverse_logo from "../src/assets/icons/thingiverse_logo.png";
import myminifactory_logo from "../src/assets/icons/myminifactory_logo.jpg";


interface WebsiteContent {
    title: string;
    logo: string;
    link: string;
}

const websites: WebsiteContent[] = [
    {
        title: "Thingiverse",
        logo: thingiverse_logo,
        link: "https://www.thingiverse.com/"
    },
    {
        title: "Cults",
        logo: cults_logo,
        link: "https://cults3d.com/"
    },
    {
        title: "Creality Cloud",
        logo: creality_cloud_logo,
        link: "https://www.crealitycloud.com/"
    },
    {
        title: "MyMiniFactory",
        logo: myminifactory_logo,
        link: "https://www.myminifactory.com/"
    }
];

export default websites;