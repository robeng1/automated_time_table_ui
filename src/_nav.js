export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Tables',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    /*Lecttures*/
    {
      name: 'Lectures',
      url: '/base/forms',
      icon: 'icon-book-open',
    },
    {
      name: 'Examinations',
      url: '/base/dropdowns',
      icon: 'icon-note',
    },
    {
      name: 'Mid Terms',
      url: '/base/collapses',
      icon: 'icon-pencil',
    },
    {
      name: 'Drafts',
      url: '/base/carousels',
      icon: 'icon-doc',
    },
    {
      name: 'Trash',
      url: '/base/carousels',
      icon: 'icon-trash',
    },
    {
      title: true,
      name: 'Resources',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    /*rOOMS*/
    {
      name: 'Rooms',
      url: '/base/tables',
      icon: 'icon-home',
    },
    /*Lecturers*/ 
    {
      name: 'Lecturers',
      url: '/base/cards',
      icon: 'icon-people',
    },
    /*Courses*/
    {
      name: 'Courses',
      url: '/base/carousels',
      icon: 'icon-layers',
    },
    {
      title: true,
      name: 'Organization',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Colleges',
      url: '/base',
      icon: 'icon-graduation',
    
    },
    {
      name: 'Faculties',
      url: '/buttons',
      icon: 'icon-notebook',
    },
    {
      name: 'Departments',
      url: '/charts',
      icon: 'icon-pie-chart',
    },
    
  ],
};
