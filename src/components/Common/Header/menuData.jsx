const menuData = [
    {
      id: 1,
      title: "Home",
      newTab: true,
      path: "/",
    },
    {
      id: 2,
      title: "About Us",
      newTab: true,
      submenu: [  
        {
          id: 21,
          title: "Chairman Desk",
          newTab: false,
          path: "/Aboutus/chairmendesk"
        },
        {
          id: 22,
          title: "Director's Message",
          newTab: false,
          path:"/Aboutus/director"
        },
      ],
    },
    {
      id: 3,
      title: "Manageme Team",
      newTab: false,
      path: "/management",
    },
    {
      id: 4,
      title: "Products",
      newTab: false,
      path: "/product",
    },
    {
      id: 5,
      title: "Therapy",
      newTab: true,
      submenu: [  
        {
          id: 51,
          title: "Diabetology",
          newTab: false,
          path:"/therapy/diabetology"
        },
        {
          id: 52,
          title: "Cardiology",
          newTab: false,
          path:"/therapy/cardiology"
        },
        {
          id: 53,
          title: "Dyslipidemia",
          newTab: false,
          path:"/therapy/dyslipidemia"

        },
        {
          id: 54,
          title: "Anticoagulants",
          newTab: false,
          path:"/therapy/anticoagulants"

        },
      ],
    },
    
    {
      id: 6,
      title: "Carrers",
      newTab: true,
      submenu: [  
        {
          id: 61,
          title: "Join Our Team",
          newTab: false,
          path: "/carrers/join_our_team"
        },
      ],
    },
    {
      id: 6,
      title: "Contact",
      newTab: false,
      path: "/contact",
    },
  ];
  export default menuData;
  