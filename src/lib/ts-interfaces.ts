export interface PopupObj {
    title: string;
    subtitle?: string;
    text?: string;
    email?: boolean;
};

export interface ZEvent {
    title: string;
    description?: string;
    dates: {
        startDate: Date|string;
        endDate?: Date|string;
    };
};

export interface InfoBlock {
    title: string;
    text?: string;
    content?: [];
};
