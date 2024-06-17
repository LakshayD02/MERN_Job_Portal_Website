import React from 'react'
import InputField from '../components/InputField'

const WorkExperience = ({handleChange}) => {
  return (
    <div>
        <h4 className="text-lg font-medium mb-2">Work Experience</h4>

        <div className="">
            <label className='sidebar-label-container'>
                <input
                    type="radio"
                    id="test"
                    name="test"
                    // placeholder="placeholder"
                    value=""
                    onChange={handleChange}
                />
                <span className="checkmark"></span>Any Experience
            </label>

            <InputField handleChange={handleChange} value="Internship" title="Internship" name="test" />
            <InputField handleChange={handleChange} value="Work Remotely" title="Remote Work" name="test" />
        </div>
    </div>
  )
}

export default WorkExperience