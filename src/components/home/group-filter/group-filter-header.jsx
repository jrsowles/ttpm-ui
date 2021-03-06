import React, { Component, PropTypes } from 'react';
import GroupFilterActions from './group-filter-actions';
import TextBox from '~/fields/text-box';

require('./group-filter-header.scss');

class GroupFilterHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditMode: false
        };

        this.handleNameSave = this.handleNameSave.bind(this);
        this.setEditMode = this.setEditMode.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isEditMode) {
            document.getElementById(`group-filter-${this.props.taskGroupId}`).focus();
        }
    }

    setEditMode(mode) {
        this.setState({
            isEditMode: mode
        });
    }

    handleNameSave(event) {
        this.setEditMode(false);
        this.props.handleTaskGroupSave(this.props.taskGroupId, {
            Name: event.target.value
        });
    }

    render() {
        return (
            <div className="group-filter-header">
                {
                    this.state.isEditMode
                        ? (
                            <TextBox
                                id={`group-filter-${this.props.taskGroupId}`}
                                value={this.props.taskGroupName}
                                handleBlur={(event) => this.handleNameSave(event)}
                            />
                        )
                        : (
                            <span
                                className="group-filter-name"
                                onClick={() => this.props.handleTaskGroupClick(this.props.taskGroupId)}
                            >
                                {this.props.taskGroupName}
                            </span>
                        )
                }

                <GroupFilterActions
                    isEditMode={this.state.isEditMode}
                    taskGroupId={this.props.taskGroupId}
                    setEditMode={this.setEditMode}
                    handleDelete={this.props.handleDeleteTaskGroupClick}
                />
            </div>
        );
    }
}

GroupFilterHeader.propTypes = {
    taskGroupId: PropTypes.number.isRequired,
    taskGroupName: PropTypes.string.isRequired,

    handleTaskGroupClick: PropTypes.func.isRequired,
    handleDeleteTaskGroupClick: PropTypes.func.isRequired,
    handleTaskGroupSave: PropTypes.func.isRequired
};

export default GroupFilterHeader;
