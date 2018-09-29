import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate, resetForm } from '../actions';
import { Card, CardSection, Button, Spinner } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    componentWillMount() {
        this.props.resetForm();
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Create
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift, loading } = state.employeeForm;

    return { name, phone, shift, loading };
};

export default connect(mapStateToProps, { employeeCreate, resetForm })(EmployeeCreate);
