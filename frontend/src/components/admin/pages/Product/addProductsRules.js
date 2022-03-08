export default function validate(values,fileData) {
    let errors = {};
    if (!values.name) {
      errors.name = 'Name is required.';
    }  else if (values.name.length < 3) {
      errors.name = 'Name must be 3 characters.';
    }
    if (!values.description) {
        errors.description = 'Description is required.';
    }
    else if (values.description.length < 30) {
        errors.description = 'Description must be 30 or more characters.';
      }
    if(!values.icon){
        errors.icon = "Icon is required.";
    }
    return errors;
  };