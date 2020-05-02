import React from 'react';
import './SearchForm.scss'

const SearchForm = (props) => {
    return (
        <div>
            <form onSubmit={props.submitForm}>
                <div>
                    <input
                        className="input-form"
                        placeholder='Search Users'
                        name='name'
                        value={props.inputValue}
                        onChange={props.changedValue}
                        type="text"

                    />
                    <button className={props.disabledButton ? "input-button-dis" : "input-button"} type="submit" disabled={props.disabledButton}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;