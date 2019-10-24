function Circle(props = {}) {
    const state = {
        color: props.color || '#000'
    };

    const renderContainer = () => {
        const container = document.createElement('div');
        container.className = "circle";
        return container;
    };
    return renderContainer();
}