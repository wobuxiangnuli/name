export const getModels = (list) => {
  let currentNode = []

  for (let i = 0; i < list.length; i++) {
    if (list[i].type === 'grid') {
      list[i].columns.forEach(item => {
        currentNode = currentNode.concat(getModels(item.list)) 
      })
    } else if (list[i].type === 'tabs') {
      list[i].tabs.forEach(item => {
        currentNode = currentNode.concat(getModels(item.list))
      })
    } else if (list[i].type === 'collapse') {
      list[i].tabs.forEach(item => {
        currentNode = currentNode.concat(getModels(item.list))
      })
    } else if (list[i].type === 'report') {
      list[i].rows.forEach(row => {
        row.columns.forEach(column => {
          currentNode = currentNode.concat(getModels(column.list))
        })
      })
    } else if (list[i].type === 'inline') {
      currentNode = currentNode.concat(getModels(list[i].list))
    } else if (list[i].type === 'card') {
      currentNode = currentNode.concat(getModels(list[i].list))
    } else {

      if (list[i].options.dataBind) {
        let children = []

        if (list[i].type === 'table') {
          children = getModels(list[i].tableColumns)
        }
        if (list[i].type === 'subform') {
          children = getModels(list[i].list)
        }
        if (list[i].type === 'dialog') {
          children = getModels(list[i].list)
        }
        if (list[i].type === 'group') {
          children = getModels(list[i].list)
        }

        currentNode.push({
          id: list[i].model,
          name: list[i].name,
          type: list[i].type,
          children: children
        })
      }
    }
  }

  return currentNode
}

export default getModels