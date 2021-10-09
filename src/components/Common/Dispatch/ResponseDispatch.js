const ResponseDispatch = (type, isLoading, data, errorMessage) => {
    return {
        type: type,
        payload: {
            loading: isLoading,
            data: data,
            errorMessage: errorMessage,
        }
    }
}

export default ResponseDispatch