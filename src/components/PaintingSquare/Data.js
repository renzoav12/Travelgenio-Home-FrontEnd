import moment from 'moment';
import Root from '../Root/root';

const dateStart = moment().add(15, 'days').format("YYYY-MM-DD")
const dateEnd = moment().add(19, 'days').format("YYYY-MM-DD")
const hostname = window.location.hostname;
const locale = hostname.split(".")[0];

const Data = [
    {
      urlImage: "/static/images/image1.png",
      litleImage: "/static/images/mini_image1.png",
      title: locale === 'us' ? 'From 76.43 EUR per night.' :'Desde 76.43 EUR por noche.',
      description: 'Lisboa',
      link: 'https://' + hostname + '/hotels/search/METROPOLITAN_AREA/178278/' + dateStart + '/' + dateEnd + '/2/es'
    },
    {
     urlImage: "/static/images/image2.png",
     litleImage: "/static/images/mini_image2.png",
     title: locale === 'us' ? 'From 109.88 EUR per night.': 'Desde 109.88 EUR por noche.',
     description: 'Palma de Mallorca',
     link: 'https://' + hostname + '/hotels/search/CITY/2829/' + dateStart + '/' + dateEnd + '/2/es'
    },
    {
    urlImage: "/static/images/image3.png",
    litleImage: "/static/images/mini_image3.png",
    title: locale === 'us'? 'From 87.39 EUR per night.' : "Desde 87.39 EUR por noche.",
    description: 'Barcelona',
    link: 'https://' + hostname + '/hotels/search/METROPOLITAN_AREA/179992/' + dateStart + '/' + dateEnd + '/2/es' 
    },
    {
    urlImage: "/static/images/image4.png",
    litleImage: "/static/images/mini_image4.png",
    title: locale === 'us'? 'From 200 EUR per night.' : 'Desde 200 EUR por noche.',
    description: 'Amsterdam',
    link: 'https://' + hostname + '/hotels/search/METROPOLITAN_AREA/178229/' + dateStart + '/' + dateEnd + '/2/es'
    }
  ];

  export default Data;