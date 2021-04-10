function extensibleObject() {
    const inst = {};

    inst.extend = function (templateObj) {
        Object.entries(templateObj).forEach(([key, value]) => {
            if (typeof value == 'function') {
                Object.getPrototypeOf(inst)[key] = value;
            } else {
                inst[key] = value;
            }
        });
    }

    return inst;
}