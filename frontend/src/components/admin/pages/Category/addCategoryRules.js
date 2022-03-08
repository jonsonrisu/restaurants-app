export default function validate(values,fileData) {
    let errors = {};
    if (!values.name) {
      errors.name = 'Name is required.';
    }  else if (values.name.length < 3) {
      errors.name = 'Name must be 3 characters.';
    }
    if (!values.keywords) {
        errors.keywords = 'Keywords is required.';
    }
    if (!values.status) {
        errors.status = 'Status is required.';
    }
    if(!fileData){
        errors.image = "Image is required.";
    }
     else if (!fileData.name.match(/\.(jpg|jpeg|png|PNG|gif)$/)) {
        errors.image ='Please select valid image.';
    }
    return errors;
  };