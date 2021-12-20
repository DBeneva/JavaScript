const ConfirmDialog = ({
    show,
    onClose,
    onSave,
    name
}) => {
    if (show) {
        return (
            <div className="login">
                <form>
                    <fieldset>
                        <legend>
                            Want to delete {name}?
                        </legend>
                        <div>
                            <button className="button" onClick={onClose}>Cancel</button>
                            <button className="button" onClick={onSave}>Delete</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    } else { return <></>; }
};

export default ConfirmDialog;