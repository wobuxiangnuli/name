export const updateClassName = (genList, fields, className, updateType) => {
  for (let i = 0; i < genList.length; i++) {
    if (genList[i].type === 'grid') {
      genList[i].columns.forEach(item => {
        updateClassName(item.list, fields, className, updateType)
      })
    } else if (genList[i].type === 'tabs') {
      genList[i].tabs.forEach(item => {
        updateClassName(item.list, fields, className, updateType)
      })
    } else if (genList[i].type === 'collapse') {
      genList[i].tabs.forEach(item => {
        updateClassName(item.list, fields, className, updateType)
      })
    } else if (genList[i].type === 'report') {
      genList[i].rows.forEach(row => {
        row.columns.forEach(column => {
          updateClassName(column.list, fields, className, updateType)
        })
      })
    } else if (genList[i].type === 'inline') {
      updateClassName(genList[i].list, fields, className, updateType)
    } else if (genList[i].type === 'card') {
      updateClassName(genList[i].list, fields, className, updateType)
    }
    if (fields.indexOf(genList[i].model) >= 0) {

      if (updateType == 'add' && !genList[i].options.customClass.split(' ').includes(className)) {
        
        genList[i].options.customClass = [...genList[i].options.customClass.split(' '), className].join(' ')
      }

      if (updateType == 'remove' && genList[i].options.customClass.split(' ').includes(className)) {
        let originArray = genList[i].options.customClass.split(' ')
        originArray.splice(originArray.findIndex(item => item == className), 1)
        genList[i].options.customClass = originArray.join(' ')
      }
    }
  }
}