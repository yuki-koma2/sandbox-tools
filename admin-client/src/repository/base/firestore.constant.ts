export const WHERE_FILTER_OPERATOR = {
    LESS_THAN: '<',
    LESS_THAN_OR_EQUAL: '<=',
    EQUAL: '==',
    GREATER_THAN: '>',
    GREATER_THAN_OR_EQUAL: '>=',
    ARRAY_CONTAINS: 'array-contains',
    IN: 'in',
    ARRAY_CONTAINS_ANY: 'array-contains-any'
} as const;

export const ORDER_BY_DIRECTION = {
    ASC: 'asc',
    DESC: 'desc'
} as const;