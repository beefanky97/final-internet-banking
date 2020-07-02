export const tellerActionTypes = {
    All_CUSTOMERS: "All_CUSTOMERS",
    All_CUSTOMERS_REQUEST: "All_CUSTOMERS_REQUEST",
    ADD_CUSTOMER: "ADD_CUSTOMER",
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
