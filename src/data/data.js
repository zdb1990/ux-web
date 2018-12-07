window.Data = [{
        id: 1,
        name: 'ux',
        level: 1,
        children: [
            { id: 11, name: '云计算', level: 2 },
            { id: 12, name: '研发部', level: 2 }
        ]
    },
    {
        id: 2,
        name: '中软',
        level: 1,
        children: [{
                id: 21,
                name: '财务部',
                level: 2,
                children: [{
                        id: 211,
                        name: '部门一',
                        level: 3,
                        children: [
                            { id: 2111, name: '子部门一', level: 4 },
                            { id: 2112, name: '子部门二', level: 4 }
                        ]
                    },
                    { id: 212, name: '部门二', level: 3 }
                ]
            },
            { id: 22, name: '采购部', level: 2 }
        ]
    }
]