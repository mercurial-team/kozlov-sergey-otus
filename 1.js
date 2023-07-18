
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
                let root = tree.find(item=>item.node === product && item.parentId === 1)
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
                        level: productIndex + 1
                    }
                    idIndex += 1
                    tree.push(branch)
                }
                if(last){
                    last.index += 1
                }
            }

            console.log(productIndex, product)
        }
    }
    console.log('tree ', tree)

    return true
}

//let purchases = [["a", "b"], ["a", "c"], ["d", "e"]]
let purchases = [["a", "b"], ["a", "c"], ['c', 'd'], ["d", "e"]]
maxItemAssociation(purchases)