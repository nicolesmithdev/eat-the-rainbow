import React from 'react';

export default ({ input, label, children, meta, meta: { error, touched } }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    function renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    function renderField(inputType) {
        switch (inputType) {
            case 'select':
                return (
                    <select {...input} multiple>
                        {children.map((value, i) => {
                            return (
                                <option key={i} value={value}>
                                    {value}
                                </option>
                            );
                        })}
                    </select>
                );
            default:
                return <input {...input} />;
        }
    }

    return (
        <div className="form-group">
            <div className={className}>
                <label>{label}</label>
                <div>
                    {renderField(input.type)}
                    {renderError(meta)}
                </div>
            </div>
        </div>
    );
};
