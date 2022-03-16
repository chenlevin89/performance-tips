export default function VisibilityObserver({element, callback}) {
    const mutationCallback = (mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const node = mutation.addedNodes[0];

                const intersectionCallback = (entries) => {
                    if (entries[0].isIntersecting) {
                        observer.disconnect();
                        callback();
                    }
                }

                const options = {threshold: 1};
                const observer = new IntersectionObserver(intersectionCallback, options);
                observer.observe(node);
            }
        }
    }

    const mutationObserver = new MutationObserver(mutationCallback);
    mutationObserver.observe(element, {childList: true});
    return mutationObserver;
}