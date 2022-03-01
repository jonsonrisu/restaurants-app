import {React, useEffect, useState} from 'react'

const Spinner = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    // Loading function to load data or 
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 200));
      // Toggle loading state
      setLoading((loading) => !loading);
    };
    loadData();
  }, [])

  return (
       <>
        {loading ? 
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width:"3rem",height:"3rem"}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        : "" }
     </>
  )
}

export default Spinner