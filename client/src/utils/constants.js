export const cardTypes = Object.freeze({
    summary: Symbol('SUMMARY'),
    feed: Symbol('FEED'),
    superApp: Symbol('SUPERAPP'),
    area: Symbol('AREA'),
    map: Symbol('MAP'),
    donut: Symbol('DONUT'),
  });

  export const cardSubTypes = Object.freeze({
    newVisits: Symbol('NEWVISITS'),
    purchases: Symbol('PURCHASES'),
    activeUsers: Symbol('ACTIVEUSERS'),
    returned: Symbol('RETURNED')
  });


export const cards=[
    {
        name:"New Visits",
        type:cardTypes.summary,
        columnSize:1,
        data:{
            subType:cardSubTypes.newVisits,
            count:"57,820",
            percentage:88
        },
        
    },
    {
        name:"Purchases",
        type:cardTypes.summary,
        columnSize:1,
        data:{
            subType:cardSubTypes.purchases,
            count:"57,820",
            percentage:78
        },
        
    },
    {
        name:"Active users",
        type:cardTypes.summary,
        columnSize:1,
        data:{
            subType:cardSubTypes.activeUsers,
            count:"57,820",
            percentage:66
        },
        
    },
    {
        name:"Returned",
        type:cardTypes.summary,
        columnSize:1,
        data:{
            subType:cardSubTypes.returned,
            count:"57,820",
            percentage:80
        },
        
    },
    {
        name:"Acquisition channels",
        type:cardTypes.donut,
        columnSize:2,
        data:{
                labels: ['Other Campaigns', 'Other', 'Direct Trafic',
                         'Refferal Traffic', 'Search Engines'],
                datasets: [
                  {
                    label: 'Rainfall',
                    backgroundColor: [
                      '#9AF4A4',
                      '#00C6B8',
                      '#005564',
                      '#008173',
                      '#27BA8A'
                    ],
                    hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                    ],
                    data: [65, 59, 80, 81, 56]
                  }
                ]
        }
        
    },
    {
        name:"Users by country",
        type:cardTypes.map,
        columnSize:2,
        data:{
            labels: ['Other Campaigns', 'Other', 'Direct Trafic',
                     'Refferal Traffic', 'Search Engines'],
            datasets: [
              {
                label: 'Rainfall',
                backgroundColor: [
                  '#9AF4A4',
                  '#00C6B8',
                  '#005564',
                  '#008173',
                  '#27BA8A'
                ],
                hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
                ],
                data: [65, 59, 80, 81, 56]
              }
            ]
        }
    },
    {
        name:"Revnue",
        type:cardTypes.area,
        columnSize:2,
        data:{
            labels: ['Jan', 'Feb', 'March','April', 'May','June','July','Aug','sep','oct'],
            datasets: [
              {
                label: 'Rainfall',
                backgroundColor: '#005564',
                hoverBackgroundColor: '#003350',
                data: [665, 659, 680, 681, 666,665, 659, 680, 681, 656]
              },
              {
                label: 'Rainfall',
                backgroundColor:'#27BA8A',
                hoverBackgroundColor:'#501800',
                data: [655, 664, 655, 678,675, 684, 677, 675, 686,679]
              }
            ]
    }
    },
    {
        name:"Super App",
        type:cardTypes.superApp,
        columnSize:1,
        data:{
        }
    },
    {
        name:"Feed",
        type:cardTypes.feed,
        columnSize:1,
        data:{
        }
    }

]


