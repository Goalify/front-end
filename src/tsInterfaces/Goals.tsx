import * as React from 'react';

export interface Goal {
    state: string,
    name: string,
    dateCreated: string;
};

export interface Goals {
    list: Goal[];
};

