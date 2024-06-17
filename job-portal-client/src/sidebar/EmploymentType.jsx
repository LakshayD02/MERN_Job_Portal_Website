import React from 'react'
import InputField from '../components/InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
        <h4 className="text-lg font-medium mb-2">Job Type</h4>

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
                <span className="checkmark"></span>All Type
            </label>

            <InputField handleChange={handleChange} value="Temporary" title="Contractual" name="test" />
            <InputField handleChange={handleChange} value="Part-Time" title="Part Time" name="test" />
            <InputField handleChange={handleChange} value="Full-Time" title="Full Time" name="test" />
        </div>
    </div>
  )
}

export default EmploymentType