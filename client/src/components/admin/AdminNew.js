import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import { createRecipe } from '../../actions';

class AdminNew extends React.Component {
    renderFilters() {
        const filters = Object.values(this.props.filters);

        return filters.map(({ label, values }, x) => {
            let filter = label.toLowerCase();
            if (filter != 'container') {
                return (
                    <div className="form-group" key={x}>
                        <div className="field">
                            <label>{label}</label>
                            <Field
                                label={label}
                                name={filter}
                                component="select"
                                multiple
                            >
                                {values.map((value, i) => {
                                    return <option key={i} value={value}>{value}</option>;
                                })}
                            </Field>
                        </div>
                    </div>
                );
            }
        });
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <div>
                    <input {...input} autoComplete="off" />
                    {this.renderError(meta)}
                </div>
            </div>
        );
    };

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
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
        const containers = [
            { color: 'Green', count: '0' },
            { color: 'Purple', count: '0' },
            { color: 'Red', count: '0' },
            { color: 'Yellow', count: '0' },
            { color: 'Blue', count: '0' },
            { color: 'Orange', count: '0' },
            { color: 'Teaspoon', count: '0' },
        ];
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
                                <div className="form-group">
                                    <Field
                                        name="title"
                                        component={this.renderInput}
                                        label="Recipe Title"
                                    />
                                </div>
                                {this.renderFilters()}
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
    };
};

export default connect(mapStateToProps, { createRecipe })(AdminNew);
