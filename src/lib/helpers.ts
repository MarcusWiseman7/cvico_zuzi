export const getPointFromEvent = ($event): { x: number, y: number } => {
    let point;
    if ($event.targetTouches && $event.targetTouches[0]) {
        point = { x: $event.targetTouches[0].clientX, y: $event.targetTouches[0].clientY };
    } else if ($event.changedTouches && $event.changedTouches[0]) {
        point = { x: $event.changedTouches[0].clientX, y: $event.changedTouches[0].clientY };
    } else {
        point = { x: $event.clientX, y: $event.clientY };
    }
    return point;
};

export const formatPhone = (phone: number|string): string => {
    return phone.toString().replace(/\s/g, '').replace(/(.{3})/g,'$1 ');
};