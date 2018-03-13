module.exports = {
  services: [
    {
      id: 1,
      name: 'nails',
      price: 30
    },
    {
      id: 2,
      name: 'hair',
      price: 40
    },
    {
      id: 3,
      name: 'makeup',
      price: 50
    },
  ],
  appointments: [
    {
      id: 1,
      time: 13*60,//daytime
      services: [
        {
          id: 1//30
        },
        {
          id: 2//40
        },
      ]
    },
    {
      id: 3,
      time: 11*60,//daytime
      services: [
        {
          id: 1//30
        }
      ]
    },
    {
      id: 4,
      time: 10*60,//daytime
      services: [
        {
          id: 1//30
        }
      ]
    },
    {
      id: 2,
      time: 19*60,//evening
      services: [
        {
          id: 1//30
        },
        {
          id: 3//50
        }
      ]
    },
    {
      id: 22,
      time: 18*60,//evening
      services: [
        {
          id: 1//30
        },
        {
          id: 2//40
        }
      ]
    }
  ]
};

//daytime up to and including 5pm
//evening anything after 5pm
//
//evening average = 70 + 80 = 150/2 = 75
//daytime average = 30 + 30 + 70 = 130/3 = 43?
