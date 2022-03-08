const toShort = (desc) => {
    if (desc.length >= 50)
      return desc.substring(0, 50) + '...';
    else
      return desc.substring(0, 50)
  }


  
const Helper = {
    toShort

}

export default Helper