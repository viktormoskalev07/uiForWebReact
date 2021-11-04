import React from 'react';
import details from '../images/main_details.png';
import management from '../images/management.png';
import file from '../images/file_export.png';
import CreateInput from "./UI/createinput/CreateInput";
const CreateScreen = () => {
    const inputList = [
        {text: 'Associated to', type: 'text', optional: false},
        {text: 'Building Name', type: 'text', optional: false},
        {text: 'Additional Apt. Desc.', type: 'text', optional: true},
        {text: 'No. Of Apartments', type: 'number', optional: true},
        {text: 'Country', type: 'select', optional: false},
        {text: 'City Name', type: 'text', optional: true},
    ]
    const inputList2 = [
        {text: 'Street Name', type: 'text', optional: true},
        {text: 'Building Number', type: 'text', optional: true},
        {text: 'State', type: 'text', optional: true},
        {text: 'Province', type: 'text', optional: true},
    ]
    return (
        <form className={'create_screen'}>
            <div className={'create_item'}>
                <h2><img src={details} alt="icon"/>Main Details</h2>
                <div className={'input_create_wrapper'}>
                    <div className={'create_input_parent'}>
                        <CreateInput params={inputList}/>
                    </div>
                    <div className={'create_input_parent'}>
                        <CreateInput params={inputList2}/>
                    </div>
                </div>
            </div>
            <div>
                <h2><img src={management} alt="icon"/>Managers</h2>
                <div>

                </div>
            </div>
            <div>
                <h2><img src={file} alt="icon"/>Import from Excell</h2>
                <div>

                </div>
            </div>
            <div>

            </div>
        </form>
    );
};

export default CreateScreen;