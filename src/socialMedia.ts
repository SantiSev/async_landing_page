import instagram_logo from './assets/instagram_icon.svg';
import facebook_logo from './assets/facebook_icon.svg';
import youtube_logo from './assets/youtube_icon.svg';

interface socialMediaContent {
    title: string;
    logo: string;
    link: string;
}

const socialMedias: socialMediaContent[] = [
    {
        title: "Instagram",
        logo: instagram_logo,
        link: "https://www.instagram.com/"
    },
    {
        title: "Facebook",
        logo: facebook_logo,
        link: "https://www.facebook.com/"
    },
    {
        title: "Youtube",
        logo: youtube_logo,
        link: "https://www.youtube.com/"
    }
];

export default socialMedias;