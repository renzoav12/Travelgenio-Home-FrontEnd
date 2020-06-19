import moment from 'moment';

const dateStart = moment().add(15, 'days').format("YYYY-MM-DD")
const dateEnd = moment().add(19, 'days').format("YYYY-MM-DD")
const hostname = window.location.hostname;

const Data = [
    {
      urlImage: "/static/images/image1.png",
      litleImage: "/static/images/mini_image1.png",
      description: 'Lisboa',
      link: 'https://' + hostname + '/hotels/search/METROPOLITAN_AREA/178278/' + dateStart + '/' + dateEnd + '/2'
    },
    {
     urlImage: "/static/images/image2.png",
     litleImage: "/static/images/mini_image2.png",
     description: 'Palma de Mallorca',
     link: 'https://' + hostname + '/hotels/search/CITY/2829/' + dateStart + '/' + dateEnd + '/2'
    },
    {
    urlImage: "/static/images/image3.png",
    litleImage: "/static/images/mini_image3.png",
    description: 'Barcelona',
    link: 'https://' + hostname + '/hotels/search/METROPOLITAN_AREA/179992/' + dateStart + '/' + dateEnd + '/2' 
    },
    {
    urlImage: "/static/images/image4.png",
    litleImage: "/static/images/mini_image4.png",
    description: 'Amsterdam',
    link: 'https://' + hostname + '/hotels/search/METROPOLITAN_AREA/178229/' + dateStart + '/' + dateEnd + '/2'
    }
  ];

  export default Data;