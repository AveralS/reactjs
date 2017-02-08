import React from 'react'

export default (Component) => class AccordionComponent extends React.Component {
    state = {
        openItemId: null
    };


    toggleOpen = openItemId => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            openItemId: openItemId != this.state.openItemId ? openItemId : null
        })
    };

    render() {
        return <Component {...this.props} {...this.state} toggleOpen={this.toggleOpen} openItemId={this.state.openItemId}/>
    };
}