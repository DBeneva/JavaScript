export const isAuth = (Component) => {
    const WrapperComponent = (props) => {

        return <Component {...props} />;
    };

    return WrapperComponent;
};