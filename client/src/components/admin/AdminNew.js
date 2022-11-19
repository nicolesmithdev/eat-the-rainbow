import React from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import { createRecipe } from '../../actions';
import FormField from './FormField';

const containers = [
    { color: 'Green', count: '0' },
    { color: 'Purple', count: '0' },
    { color: 'Red', count: '0' },
    { color: 'Yellow', count: '0' },
    { color: 'Blue', count: '0' },
    { color: 'Orange', count: '0' },
    { color: 'Teaspoon', count: '0' },
];
class AdminNew extends React.Component {
    renderFields() {
        return (
            <div className="form-container">
                {this.props.formFields.map(
                    ({ label, slug, type, children, value }) => (
                        <Field
                            key={slug}
                            component={FormField}
                            type={type}
                            label={label}
                            name={slug}
                            children={children}
                            defaultValue={value}
                        />
                    )
                )}
            </div>
        );
    }

    validate = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Required field';
        }
        return errors;
    };

    onSubmit = (formValues) => {
        /**
         * Filter out the `0` containers
         */
        const filteredFormObject = Object.fromEntries(
            Object.entries(formValues).map(([key, value]) => {
                if (key === 'container') {
                    const containers = value.filter((el) => el.count != '0');
                    return [key, containers];
                }
                return [key, value];
            })
        );
        this.props.createRecipe(filteredFormObject);
    };

    render() {
        return (
            <div className="container wrap">
                <h1>Add New Recipe</h1>
                {<Form
                    onSubmit={this.onSubmit}
                    mutators={{ ...arrayMutators }}
                    validate={this.validate}
                    render={({ handleSubmit, form: { mutators: { push, pop }}}) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                {this.renderFields()}
                                <div className="form-group">
                                    <div className="field">
                                        <label>Containers</label>
                                        <div className="containers">
                                            <FieldArray name="container" initialValue={containers}>
                                                {({ fields }) => fields.map((name, i) => {
                                                    let label = containers[i].color;
                                                    return (
                                                        <div key={name}>
                                                            <label className={label.toLowerCase()} />
                                                            <Field
                                                                name={`${name}.color`}
                                                                component="input"
                                                                type="hidden"
                                                                value={`${name}.color`}
                                                            />
                                                            <Field
                                                                name={`${name}.count`}
                                                                component="input"
                                                                value={`${name}.count`}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </FieldArray>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit">Submit</button>
                                <button type="reset">Reset</button>
                            </form>
                        );
                    }}
                />}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        formFields: state.formFields,
    };
};

export default connect(mapStateToProps, { createRecipe })(AdminNew);
