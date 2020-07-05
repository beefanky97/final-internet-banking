export const tellerActionTypes = {
    All_CUSTOMERS: "All_CUSTOMERS",
    All_CUSTOMERS_REQUEST: "All_CUSTOMERS_REQUEST",
    ADD_CUSTOMER: "ADD_CUSTOMER",
    DETAIL_CUSTOMER_REQUEST: "DETAIL_CUSTOMER_REQUEST",
    DETAIL_CUSTOMER: "DETAIL_CUSTOMER",
    INFO_CARDS_REQUEST: "INFO_CARDS_REQUEST",
    INFO_CARDS: "INFO_CARDS",
}

export const actShowAllCustomersRequest = () => ({
    type: tellerActionTypes.All_CUSTOMERS_REQUEST,
})

export const actShowAllCustomers = (customers: []) => ({
    type: tellerActionTypes.All_CUSTOMERS,
    customers
})

export const actAddCustomer = (entity: object) => ({
    type: tellerActionTypes.ADD_CUSTOMER,
    entity,
})

export const actShowDetailCustomerRequest = (id: string) => ({
    type: tellerActionTypes.DETAIL_CUSTOMER_REQUEST,
    id
})

export const actShowDetailCustomer = (customer: object) => ({
    type: tellerActionTypes.DETAIL_CUSTOMER,
    customer
})

export const actShowInfoCardsRequest = (id: string) => ({
    type: tellerActionTypes.INFO_CARDS_REQUEST,
    id
})

export const actShowInfoCards = (cards: []) => ({
    type: tellerActionTypes.INFO_CARDS,
    cards
})