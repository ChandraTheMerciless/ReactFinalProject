var TemplateLayout = React.createClass({
    render: function() {
        return (<div>
            <span>Header:</span>
        <Link to="/">Home</Link> |
            <Link to="/red-flags">Red Flags</Link> |
        <Link to="/how-to-help">How to Help</Link> |
        <hr/>
        <div>
        {this.props.children}
    </div>
    <div><hr/>footer</div>
    </div>);
}
});

export default TemplateLayout