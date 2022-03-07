import { useState, useEffect, } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [imgErrors, setImgErrors] = useState({});

  const [file, setFile] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values,file));
    setIsSubmitting(true);
  };


  const handleChange = (event) => { 
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };



  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  return {
    handleChange,
    handleSubmit,
    handleUpload,
    values,
    errors,
    file,
    imgErrors
  }
};

export default useForm;