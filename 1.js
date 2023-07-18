
function maxItemAssociation(purchases){

    let tree = [
        {
            node: 'root',
            index: 0,
            id: 1,
            parentId: null,
            level: 0,
        }
    ]
    let idIndex = 2
    for(let purchase of purchases){
        console.log('purchase ', purchase)


        for (const [productIndex, product] of purchase.entries()) {
            if(productIndex === 0){
                let root = tree.find(item=>item.node === product)
                if(!root){
                    let branch = {
                        node: product,
                        index: 1,
                        id: idIndex,
                        parentId: 1,
                        level: 1
                    }
                    idIndex += 1
                    tree.push(branch)
                }
                if(root){
                    root.index += 1
                }
            }
            if(productIndex !== 0){
                let last = tree.find(item=>item.node === product && productIndex + 1 === item.level)
                let parent = tree.find(item=>item.node === purchase[productIndex - 1])
                if(!last){
                    let branch = {
                        node: product,
                        index: 1,
                        id: idIndex,
                        parentId: parent.id,
                        level: parent.level + 1
                    }
                    idIndex += 1
                    tree.push(branch)
                }
                if(last){
                    last.index += 1
                }
            }

            //console.log(productIndex, product)
        }
    }
    tree.sort((a,b)=>{
        return a.level - b.level
    })
    console.log('tree ', tree)

    let groups = []

    for (let item of tree){
        if(item.level === 1){
            let group = [item]
            groups.push(group)
        }
        if(item.level !== 1){
            for(let group of groups){
                let isParent = group.find(groupItem=>groupItem.id === item.parentId)
                if(isParent){
                    group.push(item)
                }
            }
        }
    }
    console.log('groups ', groups)

    let groupsResult = []

    for(let group of groups){
        let result = group.map(item => item.node);
        groupsResult.push(result)
    }
    groupsResult.sort((a,b)=>{
        b.length - a.length
    })
    console.log('groupsResult', groupsResult[0])

    return groupsResult[0]
}

let purchases = [["a", "b"], ["a", "c"], ["d", "e"]]
// let purchases = [
//     ["q", "w", 'a'],
//     ["a", "b"],
//     ["a", "c"],
//     ["q", "e"],
//     ["q", "r"],
// ]

maxItemAssociation(purchases)