import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setUserPreferences, getUserPreferences } from '../../store/action'

const Preferences = () => {

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSource, setSelectedSource] = useState('')
  const { preferences, loading } = useSelector((state) => state.preferences.preferences)

  const dispatch = useDispatch()

  useEffect(async () => {

    await dispatch(getUserPreferences());
  }, [dispatch]);

  useEffect(() => {
    if (preferences === undefined) {
    } else {
      setSelectedCategory(preferences['category'])
      setSelectedSource(preferences['source']);
    }
  }, [preferences]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const handleSourceChange = (event) => {
    setSelectedSource(event.target.value)
  }

  const handleApplyPreferences = () => {
    dispatch(setUserPreferences(selectedCategory, selectedSource));
  };

  return (
    <div>
      <div id="mvp-main-body-wrap" className="left relative" style={{ transform: "none", marginTop: "0px" }}>
        <div className="mvp-main-blog-wrap left relative" style={{ transform: "none" }}>
          <div className="mvp-main-box" style={{ transform: "none" }}>
            <div className="mvp-main-blog-cont left relative" style={{ transform: "none" }}>
              <div className="mvp-widget-home-head">
                <h4 className="mvp-widget-home-title">
                  <span className="mvp-widget-home-title">Preferences & Settings</span>
                </h4>
              </div>
              <div className="mvp-main-blog-out left relative" style={{ transform: "none" }}>

                <section id="mvp_tabber_widget-5" className="mvp-side-widget mvp_tabber_widget">
                  <div className="h-100 d-flex flex-column justify-content-between">
                    <div>
                      <b htmlFor="category">Select your interested category:</b>
                      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">Select Category</option>
                        <option value="business">Business</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="general">General</option>
                        <option value="health">Health</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                      </select>
                      <br />
                      <br />
                      <b htmlFor="source">Select your interested source:</b>
                      <select id="source" value={selectedSource} onChange={handleSourceChange}>
                        <option value="">Select Source</option>
                        <option value="The New York Times">The New York Times</option>
                        <option value="G API">G API</option>
                        <option value="News API">News API</option>
                      </select>
                      <br />
                      <br />
                      <button type="button" className="btn btn-sm btn-secondary" onClick={handleApplyPreferences}>Apply Preferences</button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preferences
